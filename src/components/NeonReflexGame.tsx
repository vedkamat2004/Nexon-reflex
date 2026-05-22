import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GameState, GameTarget, ObjectType, PlayerStats } from '../types';
import { gameAudio } from '../utils/audio';

interface NeonReflexGameProps {
  gameState: GameState;
  onStatsUpdate: (stats: PlayerStats) => void;
  onGameOver: (finalScore: number) => void;
  onRestart?: () => void;
  onBackToMenu?: () => void;
}

export const NeonReflexGame: React.FC<NeonReflexGameProps> = ({
  gameState,
  onStatsUpdate,
  onGameOver,
  onRestart,
  onBackToMenu,
}) => {
  const gameStateRef = useRef(gameState);
  gameStateRef.current = gameState;

  const onStatsUpdateRef = useRef(onStatsUpdate);
  onStatsUpdateRef.current = onStatsUpdate;

  const onGameOverRef = useRef(onGameOver);
  onGameOverRef.current = onGameOver;

  const onRestartRef = useRef(onRestart);
  onRestartRef.current = onRestart;

  const onBackToMenuRef = useRef(onBackToMenu);
  onBackToMenuRef.current = onBackToMenu;

  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<PlayerStats>({
    score: 0,
    combo: 0,
    maxCombo: 0,
    health: 3,
    hasDodged: false,
  });

  const [xrSupported, setXrSupported] = useState<boolean>(false);
  const [inXrSession, setInXrSession] = useState<boolean>(false);
  const [popups, setPopups] = useState<{ id: string; text: string; x: number; y: number; color: string }[]>([]);
  const addPopupRef = useRef<(text: string, laneX: number, color: string) => void>(() => {});

  useEffect(() => {
    addPopupRef.current = (text: string, laneX: number, color: string) => {
      const id = `${Date.now()}-${Math.random()}`;
      const xBase = laneX < -0.5 ? 35 : laneX > 0.5 ? 65 : 50;
      const x = xBase + (Math.random() - 0.5) * 6;
      const y = 45 + (Math.random() - 0.5) * 10;
      setPopups((prev) => [...prev.slice(-15), { id, text, x, y, color }]);
      setTimeout(() => {
        setPopups((prev) => prev.filter((p) => p.id !== id));
      }, 850);
    };
  }, []);

  // References for Three.js objects to expose to active gameplay loops
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const targetsRef = useRef<GameTarget[]>([]);
  const targetMeshesRef = useRef<Map<string, THREE.Group | THREE.Mesh>>(new Map());

  // Player visual position (for dodge offset)
  const playerXOffset = useRef<number>(0);
  const targetXOffset = useRef<number>(0);
  const updateVRDashboardRef = useRef<() => void>(() => {});
  const gameOverTimeRef = useRef<number>(0);
  const hoverRestartRef = useRef<boolean>(false);
  const hoverBackRef = useRef<boolean>(false);
  const leftCursorRef = useRef<{ x: number; y: number } | null>(null);
  const rightCursorRef = useRef<{ x: number; y: number } | null>(null);
  const leftHoveredActionRef = useRef<string | null>(null);
  const rightHoveredActionRef = useRef<string | null>(null);
  const leftPinchLatch = useRef<boolean>(false);
  const rightPinchLatch = useRef<boolean>(false);
  const executeActionRef = useRef<(action: string) => void>(() => {});

  // Drag interaction trackers for Slice detection
  const isMouseDown = useRef<boolean>(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseVelocity = useRef<number>(0);
  const dragStartTime = useRef<number>(0);
  const activeGrabTargetId = useRef<string | null>(null);
  const speedBonusRef = useRef<number>(0);
  const playTimeRef = useRef<number>(0);

  // Check WebXR VR support
  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        setXrSupported(supported);
      });
    }
  }, []);

  // Sync stats when playing resets or health depletes
  const updateStats = (modifier: (current: PlayerStats) => PlayerStats) => {
    const next = modifier(statsRef.current);
    statsRef.current = next;
    onStatsUpdateRef.current({ ...next });

    // Instantly update the 3D VR Dashboard with latest state values
    updateVRDashboardRef.current();

    if (next.health <= 0 && gameStateRef.current === GameState.Playing) {
      gameAudio.playError();
      onGameOverRef.current(next.score);
    }
  };

  useEffect(() => {
    if (gameState === GameState.Playing) {
      // Start drone
      gameAudio.startDrone();
      // Reset stats
      statsRef.current = {
        score: 0,
        combo: 0,
        maxCombo: 0,
        health: 3,
        hasDodged: false,
      };
      speedBonusRef.current = 0;
      playTimeRef.current = 0;
      onStatsUpdate({ ...statsRef.current });
      targetsRef.current = [];
      targetMeshesRef.current.forEach((mesh) => {
        sceneRef.current?.remove(mesh);
      });
      targetMeshesRef.current.clear();
    } else {
      gameAudio.stopDrone();
    }
    if (gameState === GameState.GameOver) {
      gameOverTimeRef.current = Date.now();
    }
    // Update VR Dashboard when gameState transitions (e.g. Menu, Playing, GameOver)
    updateVRDashboardRef.current();
  }, [gameState]);

  // Centralized action executor to prevent parallel/rapid double triggering & handle clean XR exit transitions
  useEffect(() => {
    executeActionRef.current = (action: string) => {
      if (gameStateRef.current !== GameState.GameOver) return;

      const now = Date.now();
      // Ensure a modest elapsed period to prevent accidental trigger releases
      if (now - gameOverTimeRef.current < 900) return;

      if (action === 'restart') {
        gameStateRef.current = GameState.Playing;
        if (onRestartRef.current) {
          onRestartRef.current();
        }
      } else if (action === 'back') {
        gameStateRef.current = GameState.Menu;
        try {
          const session = rendererRef.current?.xr.getSession();
          if (session) {
            session.end().catch(() => {});
          }
        } catch (err) {
          console.warn('Could not end WebXR session:', err);
        }
        if (onBackToMenuRef.current) {
          onBackToMenuRef.current();
        }
      }
    };
  }, []);

  // Setup Threejs Context
  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Create Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Set explicit light pastel lavender background to match the global theme perfectly both on desktop and in WebXR immersion
    scene.background = new THREE.Color('#decbfa');
    scene.fog = new THREE.Fog('#decbfa', 18, 55); // Set foggy backdrop to gorgeous soft pastel lavender-violet to match the reference image

    // 2. Camera Setup - elevated eye-level slightly with gentle downward angle to perfectly frame grids and items
    const camera = new THREE.PerspectiveCamera(
      70,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.7, 3.2); // Elevate camera for standard rhythm track layout framing
    camera.lookAt(0, 1.1, -5.0); // Angle camera slightly downwards to fit the sky mountain, sun and floor nicely
    cameraRef.current = camera;

    // 3. Renderer Setup - Sits atop explicit color buffers for high depth accuracy
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.xr.enabled = true; // WebXR support built-in
    renderer.setClearColor('#decbfa', 1.0); // Explicit clear color prevents any buffer-clearing artifacts or visual flickering on VR headsets
    
    // Explicitly style the canvas DOM element to prevent element client size collapsing
    renderer.domElement.className = "w-full h-full absolute top-0 left-0 block container-canvas";
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights Setup - Bright, cheerful light-themed visual exposure
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.95);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight('#ffffff', 0.85);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // Beautiful glowing colorful accent lights
    const pinkLight = new THREE.PointLight('#ec4899', 11, 28);
    pinkLight.position.set(-4, 3, -4);
    scene.add(pinkLight);

    const blueLight = new THREE.PointLight('#3b82f6', 11, 24);
    blueLight.position.set(4, 2, -5);
    scene.add(blueLight);

    const purpleGlowLight = new THREE.PointLight('#a78bfa', 9, 32);
    purpleGlowLight.position.set(0, 4, -15);
    scene.add(purpleGlowLight);

    // 5. Environment Decoration
    // Floating soft ambient particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Spread ahead of the camera and around the player
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = Math.random() * 6;
      positions[i * 3 + 2] = (Math.random() - 0.6) * 25;

      // Pastel violet-blue-pink color mixing
      colors[i * 3] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.72 + Math.random() * 0.15;
      colors[i * 3 + 2] = 0.95 + Math.random() * 0.05;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Clean, solid light-themed sky bubble dome for WebXR VR immersion
    const skyGeo = new THREE.SphereGeometry(72, 32, 16);
    const skyMat = new THREE.MeshBasicMaterial({
      color: '#decbfa', // Match the global beautiful light pastel lavender theme exactly
      side: THREE.BackSide,
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyMesh);

    // Faint spatial concentric rings radiating into the depth
    const ringGroup = new THREE.Group();
    for (let i = 0; i < 7; i++) {
      const ringGeo = new THREE.RingGeometry(3.2, 3.215, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: '#dbeafe', // soft cloud blue
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.16 - i * 0.02,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(0, 1.6, -3 - i * 5.0);
      ringGroup.add(ringMesh);
    }
    scene.add(ringGroup);

    // ALL NEW: Symmetrical floating glass crystal prisms & overhead glowing arches beyond columns and lanes
    const active3DFloatingTexts: { sprite: THREE.Sprite; texture: THREE.CanvasTexture; material: THREE.SpriteMaterial; birth: number }[] = [];
    const createFloatingText3D = (text: string, x: number, y: number, z: number, color: string) => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, 128, 64);
          ctx.font = 'bold 36px monospace';
          ctx.shadowColor = color;
          ctx.shadowBlur = 12;
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, 64, 32);
        }
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          opacity: 1.0,
          depthWrite: false,
          depthTest: false
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(x, y + 0.6, z);
        sprite.scale.set(1.4, 0.7, 1.0);
        scene.add(sprite);

        active3DFloatingTexts.push({
          sprite,
          texture,
          material: spriteMaterial,
          birth: Date.now()
        });
      } catch (err) {
        console.error('Error creating 3D text floating mesh:', err);
      }
    };

    const floaterAnimationData: { mesh: THREE.Group; baseHeight: number; speed: number; offset: number }[] = [];
    const floatersGroup = new THREE.Group();
    const flGeoOuter = new THREE.OctahedronGeometry(0.38, 0); // Diamond geometry
    const flGeoInner = new THREE.OctahedronGeometry(0.15, 0);

    const floaterPositions = [
      { x: -5.5, y: 1.8, z: 2.0 },
      { x: 5.5, y: 1.8, z: 2.0 },
      { x: -5.5, y: 2.2, z: -15.0 },
      { x: 5.5, y: 2.2, z: -15.0 },
      { x: -5.5, y: 2.4, z: -32.0 },
      { x: 5.5, y: 2.4, z: -32.0 },
      { x: -5.5, y: 2.0, z: -48.0 },
      { x: 5.5, y: 2.0, z: -48.0 },
      { x: -5.5, y: 2.2, z: -64.0 },
      { x: 5.5, y: 2.2, z: -64.0 },
    ];

    floaterPositions.forEach((pos, idx) => {
      const crystalGroup = new THREE.Group();
      crystalGroup.position.set(pos.x, pos.y, pos.z);

      const color = idx % 2 === 0 ? '#c084fc' : '#60a5fa';

      // Outer glass shell
      const outerMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.02,
        metalness: 0.95,
        transparent: true,
        opacity: 0.95,
        emissive: color,
        emissiveIntensity: 1.25,
      });
      const outerMesh = new THREE.Mesh(flGeoOuter, outerMat);
      crystalGroup.add(outerMesh);

      // Glowing core
      const innerMat = new THREE.MeshBasicMaterial({
        color: '#ffffff',
      });
      const innerMesh = new THREE.Mesh(flGeoInner, innerMat);
      crystalGroup.add(innerMesh);

      // Elegant orbiting glass ring
      const ringGeo = new THREE.RingGeometry(0.55, 0.57, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.72,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      crystalGroup.add(ring);

      floatersGroup.add(crystalGroup);
      floaterAnimationData.push({
        mesh: crystalGroup,
        baseHeight: pos.y,
        speed: 0.7 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      });
    });
    scene.add(floatersGroup);

    // Gorgeous overhead half-circle double arches for neon light frames
    const archesGroup = new THREE.Group();
    const archZPositions = [-1.0, -18.0, -35.0, -52.0, -68.0];
    archZPositions.forEach((az, idx) => {
      const torusGeo = new THREE.TorusGeometry(4.2, 0.04, 8, 48, Math.PI);
      const color = idx % 2 === 0 ? '#c084fc' : '#60a5fa';
      const torusMatOuter = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.05,
        metalness: 0.85,
        transparent: true,
        opacity: 0.9,
        emissive: color,
        emissiveIntensity: 1.5,
      });
      const archOuter = new THREE.Mesh(torusGeo, torusMatOuter);
      archOuter.position.set(0, 0, az);
      archesGroup.add(archOuter);

      const coreTorusGeo = new THREE.TorusGeometry(4.2, 0.012, 6, 36, Math.PI);
      const coreTorusMat = new THREE.MeshBasicMaterial({
        color: '#ffffff',
      });
      const archInner = new THREE.Mesh(coreTorusGeo, coreTorusMat);
      archInner.position.set(0, 0, az);
      archesGroup.add(archInner);
    });
    scene.add(archesGroup);

    // All non-interactable spherical background orbs removed per visual clarity directive

    // Symmetrical columns on both sides of the gameplay platform creating an infinite vertical tunnel effect
    const columnGroup = new THREE.Group();
    const columnColors = ['#ec4899', '#c084fc', '#8b5cf6', '#a5f3fc']; // neon pink, soft violet, bright purple, ice-blue highlights
    const columnSpacingZ = 6.0;
    const tunnelLeftX = -2.3;
    const tunnelRightX = 2.3;

    // Majestic, substantial columns matching the thick glowing marble/neon columns in the reference image
    const columnGeo = new THREE.CylinderGeometry(0.18, 0.18, 5.5, 24);
    const coreGeo = new THREE.CylinderGeometry(0.05, 0.05, 5.5, 12);
    const capGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.08, 24);

    for (let z = 6.0; z >= -66.0; z -= columnSpacingZ) {
      const index = Math.abs(Math.floor(z / columnSpacingZ));
      const colHex = columnColors[index % columnColors.length];

      // Symmetrical Left and Right Column construction
      [tunnelLeftX, tunnelRightX].forEach((colX) => {
        const individualCol = new THREE.Group();

        // 1. Semi-translucent glass/matte outer cylinder body with bright color and intensive emissive glow
        const columnMat = new THREE.MeshStandardMaterial({
          color: colHex,
          roughness: 0.1,
          metalness: 0.3,
          transparent: true,
          opacity: 0.72,
          emissive: colHex,
          emissiveIntensity: 1.8,
        });
        const meshCol = new THREE.Mesh(columnGeo, columnMat);
        meshCol.position.y = 2.75;
        individualCol.add(meshCol);

        // 2. High-intensity inner core simulating a fluorescent tube
        const coreMat = new THREE.MeshBasicMaterial({
          color: '#ffffff',
          transparent: true,
          opacity: 0.98,
        });
        const meshCore = new THREE.Mesh(coreGeo, coreMat);
        meshCore.position.y = 2.75;
        individualCol.add(meshCore);

        // 3. Futuristic Luminous Caps at the top and bottom of each column
        const capMat = new THREE.MeshStandardMaterial({
          color: '#ffffff',
          roughness: 0.04,
          metalness: 0.8,
          transparent: true,
          opacity: 0.98,
          emissive: colHex,
          emissiveIntensity: 2.5,
        });

        const topCap = new THREE.Mesh(capGeo, capMat);
        topCap.position.y = 5.5;
        individualCol.add(topCap);

        const bottomCap = new THREE.Mesh(capGeo, capMat);
        bottomCap.position.y = 0.03;
        individualCol.add(bottomCap);

        // 4. Ambient glowing neon base ring wrapping around each column base (as shown in the reference image)
        const baseRingTorusGeo = new THREE.TorusGeometry(0.24, 0.025, 12, 24);
        const baseRingTorusMat = new THREE.MeshStandardMaterial({
          color: colHex,
          emissive: colHex,
          emissiveIntensity: 3.5,
          roughness: 0.1,
        });
        const baseNeonRing = new THREE.Mesh(baseRingTorusGeo, baseRingTorusMat);
        baseNeonRing.rotation.x = Math.PI / 2;
        baseNeonRing.position.y = 0.06;
        individualCol.add(baseNeonRing);

        // Position individual completed column structure along tunnel parameters
        individualCol.position.set(colX, -0.04, z);
        columnGroup.add(individualCol);
      });
    }
    scene.add(columnGroup);

    // Decorative panels - beyond the columns ONLY (stay outside the gameplay channel)
    const glassPanelGroup = new THREE.Group();
    const glassGeo = new THREE.BoxGeometry(0.02, 3.8, 9.5);
    const glassMat = new THREE.MeshStandardMaterial({
      color: '#e0f2fe',
      roughness: 0.05,
      metalness: 0.1,
      transparent: true,
      opacity: 0.38,
    });

    const panelZPositions = [-6.0, -22.0, -38.0, -54.0];
    panelZPositions.forEach((pz, idx) => {
      // Left border panel
      const panelL = new THREE.Mesh(glassGeo, glassMat);
      panelL.position.set(-4.5, 1.9, pz);
      glassPanelGroup.add(panelL);

      const borderGeo = new THREE.BoxGeometry(0.025, 3.85, 9.55);
      const borderMatL = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? '#c084fc' : '#60a5fa', // soft purple or blue halo
        transparent: true,
        opacity: 0.45,
        wireframe: true,
      });
      const borderL = new THREE.Mesh(borderGeo, borderMatL);
      panelL.add(borderL);

      // Right border panel
      const panelR = new THREE.Mesh(glassGeo, glassMat);
      panelR.position.set(4.5, 1.9, pz);
      glassPanelGroup.add(panelR);

      const borderMatR = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? '#60a5fa' : '#c084fc',
        transparent: true,
        opacity: 0.45,
        wireframe: true,
      });
      const borderR = new THREE.Mesh(borderGeo, borderMatR);
      panelR.add(borderR);
    });
    scene.add(glassPanelGroup);

    // Dynamic 3D Immersive VR Dashboard Canvas and Billboard setup
    const drawRoundedRect = (ctx: CanvasRenderingContext2D, dx: number, dy: number, dw: number, dh: number, dr: number, dfill: boolean, dstroke: boolean) => {
      ctx.beginPath();
      ctx.moveTo(dx + dr, dy);
      ctx.lineTo(dx + dw - dr, dy);
      ctx.quadraticCurveTo(dx + dw, dy, dx + dw, dy + dr);
      ctx.lineTo(dx + dw, dy + dh - dr);
      ctx.quadraticCurveTo(dx + dw, dy + dh, dx + dw - dr, dy + dh);
      ctx.lineTo(dx + dr, dy + dh);
      ctx.quadraticCurveTo(dx, dy + dh, dx, dy + dh - dr);
      ctx.lineTo(dx, dy + dr);
      ctx.quadraticCurveTo(dx, dy, dx + dr, dy);
      ctx.closePath();
      if (dfill) ctx.fill();
      if (dstroke) ctx.stroke();
    };

    const vrCanvas = document.createElement('canvas');
    vrCanvas.width = 1024;
    vrCanvas.height = 512;
    const vrCtx = vrCanvas.getContext('2d')!;

    const vrTexture = new THREE.CanvasTexture(vrCanvas);
    const vrMat = new THREE.MeshBasicMaterial({
      map: vrTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const vrGeo = new THREE.PlaneGeometry(2.4, 1.2);
    const vrDashboardMesh = new THREE.Mesh(vrGeo, vrMat);
    // Position it hovering elegant style: right in front of player, elevated slightly above lanes
    vrDashboardMesh.position.set(0, 3.1, -4.5);
    vrDashboardMesh.rotation.x = 0.22; // subtle angle towards camera at (0, 1.7, 3.2)
    scene.add(vrDashboardMesh);

    // Create elegant neon laser lines for navigation
    const createLaserMesh = (laserColor: string) => {
      const laserGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -4.5),
      ]);
      const laserMat = new THREE.LineBasicMaterial({
        color: laserColor,
        transparent: true,
        opacity: 0.85,
        linewidth: 4,
      });
      const laserObj = new THREE.Line(laserGeo, laserMat);
      laserObj.visible = false;
      return laserObj;
    };

    const leftLaser = createLaserMesh('#ec4899'); // vibrant pink laser
    const rightLaser = createLaserMesh('#3b82f6'); // vibrant blue laser
    scene.add(leftLaser);
    scene.add(rightLaser);

    const updateVRDashboardCanvas = () => {
      // Clear with crystal-clear alpha channel
      vrCtx.clearRect(0, 0, 1024, 512);

      // Card background: round rect with premium, light gradient matching the global app theme
      const bgGrad = vrCtx.createLinearGradient(0, 0, 0, 512);
      bgGrad.addColorStop(0, 'rgba(238, 233, 254, 0.95)'); // soft light lavender
      bgGrad.addColorStop(1, 'rgba(254, 230, 243, 0.95)'); // soft sweet rose
      vrCtx.fillStyle = bgGrad;

      // Draw rounded rect background
      const r = 32;
      const x = 10;
      const y = 10;
      const w = 1004;
      const h = 492;

      vrCtx.beginPath();
      vrCtx.moveTo(x + r, y);
      vrCtx.lineTo(x + w - r, y);
      vrCtx.quadraticCurveTo(x + w, y, x + w, y + r);
      vrCtx.lineTo(x + w, y + h - r);
      vrCtx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      vrCtx.lineTo(x + r, y + h);
      vrCtx.quadraticCurveTo(x, y + h, x, y + h - r);
      vrCtx.lineTo(x, y + r);
      vrCtx.quadraticCurveTo(x, y, x + r, y);
      vrCtx.closePath();
      vrCtx.fill();

      // Draw ambient neon glowing border
      vrCtx.lineWidth = 10;
      if (gameStateRef.current === GameState.GameOver) {
        vrCtx.strokeStyle = 'rgba(244, 63, 94, 0.91)'; // high-contrast pinkish-rose
      } else {
        vrCtx.strokeStyle = 'rgba(167, 139, 250, 0.91)'; // elegant pastel violet
      }
      vrCtx.stroke();

      // Header Text: "NEON REFLEX"
      vrCtx.textAlign = 'center';
      vrCtx.textBaseline = 'top';
      vrCtx.fillStyle = '#1e1b4b'; // deep navy/violet for maximum legibility on light background
      vrCtx.font = 'bold 36px sans-serif';
      vrCtx.fillText('NEON REFLEX', 512, 45);

      // Separator line
      vrCtx.strokeStyle = 'rgba(139, 92, 246, 0.16)';
      vrCtx.lineWidth = 2;
      vrCtx.beginPath();
      vrCtx.moveTo(100, 105);
      vrCtx.lineTo(924, 105);
      vrCtx.stroke();

      if (gameStateRef.current === GameState.GameOver) {
        // DRAW GAME OVER VR HUD
        vrCtx.fillStyle = '#e11d48'; // deep vibrant crimson
        vrCtx.font = 'bold 64px sans-serif';
        vrCtx.fillText('GAME OVER', 512, 130);

        // Final Score & Stats
        vrCtx.fillStyle = '#1e293b'; // slate-800
        vrCtx.font = 'bold 42px sans-serif';
        vrCtx.fillText(`FINAL SCORE: ${statsRef.current.score.toLocaleString()}`, 512, 212);

        vrCtx.fillStyle = '#6d28d9'; // deep violet
        vrCtx.font = 'bold 32px monospace';
        vrCtx.fillText(`MAX STREAK: ${statsRef.current.maxCombo}x`, 512, 275);

        // VR Action Instructions (Wide pill centered)
        const pillY = 360;

        // Centered Pill: PLAY AGAIN ↻
        if (hoverRestartRef.current) {
          vrCtx.fillStyle = '#ec4899'; // hover pinkish-rose
          vrCtx.strokeStyle = '#db2777';
        } else {
          vrCtx.fillStyle = 'rgba(139, 92, 246, 0.82)'; // vibrant violet background
          vrCtx.strokeStyle = '#a78bfa';
        }
        vrCtx.lineWidth = 4;
        drawRoundedRect(vrCtx, 212, pillY, 600, 100, 24, true, true);
        
        vrCtx.textAlign = 'center';
        vrCtx.font = 'bold 16px sans-serif';
        vrCtx.fillStyle = hoverRestartRef.current ? '#ffffff' : '#f3e8ff';
        vrCtx.fillText('POINT & CLICK OR PINCH TO RESTART PROTOCOL', 512, pillY + 22);

        vrCtx.font = 'bold 30px sans-serif';
        vrCtx.fillStyle = '#ffffff';
        vrCtx.fillText('PLAY AGAIN ↻', 512, pillY + 54);

      } else {
        // DRAW PLAYING VR HUD
        // 3 columns: LIVES, SCORE, COMBO
        const health = statsRef.current.health;

        // COLUMN 1: LIVES
        vrCtx.textAlign = 'left';
        vrCtx.fillStyle = '#475569'; // slate-600
        vrCtx.font = 'bold 24px sans-serif';
        vrCtx.fillText('LIVES', 120, 140);

        vrCtx.font = '64px sans-serif';
        let heartStr = '';
        for (let idx = 0; idx < 3; idx++) {
          heartStr += idx < health ? '❤️ ' : '🤍 ';
        }
        vrCtx.fillText(heartStr.trim(), 120, 185);

        // COLUMN 2: SCORE (Center)
        vrCtx.textAlign = 'center';
        vrCtx.fillStyle = '#475569'; // slate-600
        vrCtx.font = 'bold 24px sans-serif';
        vrCtx.fillText('SCORE', 512, 140);

        vrCtx.fillStyle = '#7c3aed'; // beautiful royal violet matching gameplay values
        vrCtx.font = 'bold 74px monospace';
        vrCtx.fillText(statsRef.current.score.toLocaleString(), 512, 175);

        // COLUMN 3: STREAK (Right)
        vrCtx.textAlign = 'right';
        vrCtx.fillStyle = '#475569'; // slate-600
        vrCtx.font = 'bold 24px sans-serif';
        vrCtx.fillText('STREAK MULTIPLIER', 904, 140);

        const combo = statsRef.current.combo;
        const multiplier = Math.min(Math.floor(combo / 10) + 1, 4);
        vrCtx.fillStyle = '#db2777'; // pink peak streak
        vrCtx.font = 'bold 64px monospace';
        vrCtx.fillText(`${combo}x`, 904, 185);

        vrCtx.fillStyle = '#6d28d9';
        vrCtx.font = 'bold 24px sans-serif';
        vrCtx.fillText(`MULTIPLIER: ${multiplier}X`, 904, 265);

        // Extra info on bottom
        vrCtx.textAlign = 'center';
        vrCtx.fillStyle = '#475569';
        vrCtx.font = 'bold 18px sans-serif';
        vrCtx.fillText('IMMERSIVE WebXR ACTIVE ○ OPTIMIZED TRACKING', 512, 420);
      }

      // Draw cursors if present on screen
      if (leftCursorRef.current) {
        vrCtx.beginPath();
        vrCtx.arc(leftCursorRef.current.x, leftCursorRef.current.y, 10, 0, Math.PI * 2);
        vrCtx.fillStyle = '#ec4899';
        vrCtx.fill();
        vrCtx.lineWidth = 3;
        vrCtx.strokeStyle = '#ffffff';
        vrCtx.stroke();
      }
      if (rightCursorRef.current) {
        vrCtx.beginPath();
        vrCtx.arc(rightCursorRef.current.x, rightCursorRef.current.y, 10, 0, Math.PI * 2);
        vrCtx.fillStyle = '#3b82f6';
        vrCtx.fill();
        vrCtx.lineWidth = 3;
        vrCtx.strokeStyle = '#ffffff';
        vrCtx.stroke();
      }

      vrTexture.needsUpdate = true;
    };

    updateVRDashboardRef.current = updateVRDashboardCanvas;
    updateVRDashboardCanvas();

    // Solid white ground plane spanning the entire floor
    const groundGeo = new THREE.PlaneGeometry(160, 160);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#ffffff', // Clean, solid white surface
      roughness: 0.5,
      metalness: 0.1,
      transparent: false,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.082, -30);
    scene.add(ground);

    // Dynamic glowing neon boundary edges marking the limits of the sleek gameplay lane (bright cyan cords in the image!)
    const laneDepth = 74.0;
    const edgeGlowGeo = new THREE.BoxGeometry(0.08, 0.04, laneDepth);
    const edgeMatL = new THREE.MeshStandardMaterial({
      color: '#06b6d4', // Brilliant Cyan neon
      transparent: true,
      opacity: 0.98,
      emissive: '#06b6d4',
      emissiveIntensity: 3.8,
    });
    const edgeMatR = new THREE.MeshStandardMaterial({
      color: '#06b6d4', // Brilliant Cyan neon
      transparent: true,
      opacity: 0.98,
      emissive: '#06b6d4',
      emissiveIntensity: 3.8,
    });

    const leftEdge = new THREE.Mesh(edgeGlowGeo, edgeMatL);
    leftEdge.position.set(-1.8, 0.02, -31.0);
    scene.add(leftEdge);

    const rightEdge = new THREE.Mesh(edgeGlowGeo, edgeMatR);
    rightEdge.position.set(1.8, 0.02, -31.0);
    scene.add(rightEdge);

    // Polished glassmorphic/matte frosted local player deck
    const platformGeo = new THREE.BoxGeometry(4, 0.08, 4);
    const platformMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.02,
      metalness: 0.3,
      transparent: true,
      opacity: 0.72,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(0, -0.04, 0);
    scene.add(platform);

    // Soft bounds indicator circle ring
    const boundGeo = new THREE.RingGeometry(1.6, 1.63, 64);
    const boundMat = new THREE.MeshBasicMaterial({
      color: '#93c5fd', // Soft dream blue
      transparent: true,
      opacity: 0.25,
    });
    const boundMesh = new THREE.Mesh(boundGeo, boundMat);
    boundMesh.rotation.x = Math.PI / 2;
    boundMesh.position.set(0, 0.02, 0);
    scene.add(boundMesh);

    // 6. Raycast mouse setup for Desktop controls
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Spawn management variable
    let lastSpawnTime = 0;
    let baseSpawnInterval = 1800; // ms between spawns

    // --- WebXR VR Hand/Controller Setup ---
    // Beautiful hand orbs to represent controller or virtual hands in VR
    const vrHands: { controller: THREE.XRTargetRaySpace; grip: THREE.XRGripSpace; helper: THREE.Mesh }[] = [];

    // Left controller
    const leftController = renderer.xr.getController(0);
    scene.add(leftController);
    // Right controller
    const rightController = renderer.xr.getController(1);
    scene.add(rightController);

    // Tracked Hands (Meta Quest 3 direct hand joint tracking)
    const leftHand = renderer.xr.getHand(0);
    scene.add(leftHand);
    const rightHand = renderer.xr.getHand(1);
    scene.add(rightHand);

    // Standard list of 25 standard WebXR joints
    const jointNames = [
      'wrist',
      'thumb-metacarpal', 'thumb-phalanx-proximal', 'thumb-phalanx-distal', 'thumb-tip',
      'index-finger-metacarpal', 'index-finger-phalanx-proximal', 'index-finger-phalanx-intermediate', 'index-finger-phalanx-distal', 'index-finger-tip',
      'middle-finger-metacarpal', 'middle-finger-phalanx-proximal', 'middle-finger-phalanx-intermediate', 'middle-finger-phalanx-distal', 'middle-finger-tip',
      'ring-finger-metacarpal', 'ring-finger-phalanx-proximal', 'ring-finger-phalanx-intermediate', 'ring-finger-phalanx-distal', 'ring-finger-tip',
      'pinky-finger-metacarpal', 'pinky-finger-phalanx-proximal', 'pinky-finger-phalanx-intermediate', 'pinky-finger-phalanx-distal', 'pinky-finger-tip'
    ];

    // Array to manage joint visual elements to toggle their visibility based on active track
    const handJointVisualsMap = new Map<string, THREE.Mesh[]>();

    const attachJointVisuals = (handObject: any, color: string, handKey: string) => {
      const jointGeo = new THREE.SphereGeometry(0.012, 8, 8);
      const jointMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.85,
        emissive: color,
        emissiveIntensity: 1.5,
      });

      const meshes: THREE.Mesh[] = [];
      jointNames.forEach((name) => {
        const jointSpace = handObject.joints ? handObject.joints[name] : null;
        if (jointSpace) {
          const mesh = new THREE.Mesh(jointGeo, jointMat);
          jointSpace.add(mesh);
          meshes.push(mesh);
        }
      });
      handJointVisualsMap.set(handKey, meshes);
    };

    attachJointVisuals(leftHand, '#3b82f6', 'left');
    attachJointVisuals(rightHand, '#ec4899', 'right');

    // Beautiful translucent crystal mesh representing tactile interaction points in VR
    const createVirtualHand = (color: string) => {
      const group = new THREE.Group();

      // Sleek metallic wrist guard / forearm armor cuff
      const cuffGeo = new THREE.CylinderGeometry(0.038, 0.045, 0.1, 16);
      cuffGeo.rotateX(Math.PI / 2); // Align forward/backward
      const cuffMat = new THREE.MeshStandardMaterial({
        color: '#111827', // Deep basalt black
        roughness: 0.15,
        metalness: 0.85,
      });
      const cuffMesh = new THREE.Mesh(cuffGeo, cuffMat);
      cuffMesh.position.set(0, 0, 0.07); // Slide slightly back
      group.add(cuffMesh);

      // Neon glowing battery / power energy ring on wrist
      const ringGeo = new THREE.TorusGeometry(0.046, 0.005, 8, 24);
      ringGeo.rotateX(Math.PI / 2);
      const glowMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 2.2,
      });
      const ringMesh = new THREE.Mesh(ringGeo, glowMat);
      ringMesh.position.set(0, 0, 0.07);
      group.add(ringMesh);

      // Central palm / Hand armor chest core
      const palmGeo = new THREE.BoxGeometry(0.07, 0.042, 0.09, 1, 1, 1);
      const palmMat = new THREE.MeshStandardMaterial({
        color: '#475569', // Metallic slate armor
        roughness: 0.25,
        metalness: 0.75,
      });
      const palmMesh = new THREE.Mesh(palmGeo, palmMat);
      palmMesh.position.set(0, 0, -0.015);
      group.add(palmMesh);

      // Knuckle boxing glove dome with pulsing neon edge
      const knuckleGeo = new THREE.SphereGeometry(0.038, 16, 16);
      knuckleGeo.scale(1.02, 0.72, 1.25); // Slightly flatten & elongate towards knuckles
      const knuckleMesh = new THREE.Mesh(knuckleGeo, glowMat);
      knuckleMesh.position.set(0, 0.018, -0.05); // Raised on top-forward
      group.add(knuckleMesh);

      // Dark futuristic segmented finger nodes
      const fingerMat = new THREE.MeshStandardMaterial({
        color: '#030712', // Obsidian carbon fiber
        roughness: 0.35,
        metalness: 0.95,
      });

      const addFingerSegment = (x: number, y: number, z: number, r: number, h: number) => {
        const cyl = new THREE.CylinderGeometry(r, r, h, 8);
        cyl.rotateX(Math.PI / 2);
        const fMesh = new THREE.Mesh(cyl, fingerMat);
        fMesh.position.set(x, y, z);
        group.add(fMesh);
      };

      // Individual fingers curled to form a stylized neon glove fist
      addFingerSegment(-0.026, -0.012, -0.068, 0.009, 0.048); // Pinky
      addFingerSegment(-0.009, -0.012, -0.076, 0.01, 0.058);  // Ring
      addFingerSegment(0.009, -0.012, -0.076, 0.01, 0.058);   // Middle
      addFingerSegment(0.026, -0.012, -0.068, 0.01, 0.048);   // Index

      // Cyber thumb
      const thumbGeo = new THREE.CylinderGeometry(0.011, 0.011, 0.04, 8);
      thumbGeo.rotateZ(Math.PI / 3);
      const thumbMesh = new THREE.Mesh(thumbGeo, fingerMat);
      thumbMesh.position.set(0.038, 0.008, -0.035);
      group.add(thumbMesh);

      return group;
    };

    const leftGrip = renderer.xr.getControllerGrip(0);
    const leftHandVisual = createVirtualHand('#3b82f6');
    leftGrip.add(leftHandVisual);
    scene.add(leftGrip);

    const rightGrip = renderer.xr.getControllerGrip(1);
    const rightHandVisual = createVirtualHand('#ec4899');
    rightGrip.add(rightHandVisual);
    scene.add(rightGrip);

    // Record controller velocities for punches and swings
    const controllerPositions = {
      left: { curr: new THREE.Vector3(), prev: new THREE.Vector3(), velocity: new THREE.Vector3() },
      right: { curr: new THREE.Vector3(), prev: new THREE.Vector3(), velocity: new THREE.Vector3() },
    };

    // Keep track of trigger squeezing
    let leftGripSqueezed = false;
    let rightGripSqueezed = false;

    leftController.addEventListener('selectstart', () => { 
      leftGripSqueezed = true; 
      if (gameStateRef.current === GameState.GameOver) {
        if (leftHoveredActionRef.current) {
          executeActionRef.current(leftHoveredActionRef.current);
        }
      }
    });
    leftController.addEventListener('selectend', () => { leftGripSqueezed = false; });
    
    rightController.addEventListener('selectstart', () => { 
      rightGripSqueezed = true; 
      if (gameStateRef.current === GameState.GameOver) {
        if (rightHoveredActionRef.current) {
          executeActionRef.current(rightHoveredActionRef.current);
        }
      }
    });
    rightController.addEventListener('selectend', () => { rightGripSqueezed = false; });

    // Handle session state dynamically
    const xrSessionStart = () => {
      setInXrSession(true);
    };
    const xrSessionEnd = () => {
      setInXrSession(false);
    };
    renderer.xr.addEventListener('sessionstart', xrSessionStart);
    renderer.xr.addEventListener('sessionend', xrSessionEnd);

    // Spawning targets programmatically
    const spawnTarget = () => {
      // Don't spawn if not actively playing
      if (statsRef.current.health <= 0) return;

      const types = [ObjectType.Punch, ObjectType.Grab, ObjectType.Dodge];
      // Weighted towards gameplay elements, but keeping equal chance for all 3 mechanics
      const type = types[Math.floor(Math.random() * types.length)];
      const id = `${Date.now()}-${Math.random()}`;

      // Pick spawning position columns (Left, Center, Right)
      const lanes = [-1.3, 0, 1.3];
      const selectedLane = lanes[Math.floor(Math.random() * lanes.length)];

      const height = 1.0 + Math.random() * 1.3; // Comfort zone
      const distance = -10; // Start closer distance

      // Color mapping following rules exactly
      let col = '#000';
      if (type === ObjectType.Punch) col = '#f43f5e'; // Red
      if (type === ObjectType.Grab) col = '#3b82f6';  // Blue
      if (type === ObjectType.Dodge) col = '#10b981'; // Green

      // Scales difficulty slightly as score increases with modern, comfortable speed curves
      const speed = 2.2 + Math.min(statsRef.current.score * 0.03, 3.2) + (speedBonusRef.current * 0.3);
      const size = type === ObjectType.Dodge ? 1.6 : 0.38;

      const newTarget: GameTarget = {
        id,
        type,
        position: { x: selectedLane, y: height, z: distance },
        velocity: { x: 0, y: 0, z: speed },
        speed,
        size,
        spawnTime: Date.now(),
        duration: Math.abs(distance) / speed,
        isHit: false,
        isMissed: false,
        angle: Math.random() * Math.PI * 2,
        color: col,
      };

      // 3D Object Mesh Design matching the reference and visual style guide
      let mesh: THREE.Group | THREE.Mesh;

      if (type === ObjectType.Dodge) {
        // Dodges are solid glass green prisms with powerful luminous illumination
        const geom = new THREE.BoxGeometry(1.4, 2.9, 0.25);
        const mat = new THREE.MeshStandardMaterial({
          color: col,
          roughness: 0.05,
          metalness: 0.45,
          transparent: true,
          opacity: 1.0,
          emissive: col,
          emissiveIntensity: 1.55,
        });
        mesh = new THREE.Mesh(geom, mat);

        // Minimalist white direction arrow markers
        const arrowGeo = new THREE.ConeGeometry(0.08, 0.18, 4);
        const arrowMat = new THREE.MeshStandardMaterial({
          color: '#ffffff',
          roughness: 0.05,
          metalness: 0.3,
          transparent: true,
          opacity: 1.0,
          emissive: '#ffffff',
          emissiveIntensity: 1.8,
        });
        const arrow1 = new THREE.Mesh(arrowGeo, arrowMat);
        arrow1.position.set(-0.25, 0.3, 0.14);
        arrow1.rotation.z = Math.PI / 2; // Point left
        const arrow2 = new THREE.Mesh(arrowGeo, arrowMat);
        arrow2.position.set(0.25, 0.3, 0.14);
        arrow2.rotation.z = -Math.PI / 2; // Point right
        mesh.add(arrow1);
        mesh.add(arrow2);

        mesh.position.set(selectedLane, 1.45, distance);
      } else {
        // Other targets are solid, gorgeous high-density glass-morphic energy spheres
        const group = new THREE.Group();
        const sphereGeo = new THREE.SphereGeometry(size, 32, 32);

        // Solid glass-morphic outer shell with premium metallic gloss and intense light response
        const outerMat = new THREE.MeshStandardMaterial({
          color: col,
          roughness: 0.03,
          metalness: 0.85,
          transparent: true,
          opacity: 1.0,
          emissive: col,
          emissiveIntensity: 1.6,
        });
        const outerSphere = new THREE.Mesh(sphereGeo, outerMat);
        group.add(outerSphere);

        // Soft, gorgeous inner core symbols for clean spatial readability
        if (type === ObjectType.Punch) {
          // Soft minimal glowing inner core sphere
          const symGeo = new THREE.SphereGeometry(0.08, 16, 16);
          const symMat = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            roughness: 0.05,
            metalness: 0.1,
            transparent: true,
            opacity: 1.0,
            emissive: '#ffffff',
            emissiveIntensity: 2.2,
          });
          const sym = new THREE.Mesh(symGeo, symMat);
          group.add(sym);
        } else if (type === ObjectType.Grab) {
          // Delicate inner white torus ring
          const symGeo = new THREE.TorusGeometry(0.1, 0.02, 16, 32);
          const symMat = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            roughness: 0.05,
            metalness: 0.1,
            transparent: true,
            opacity: 1.0,
            emissive: '#ffffff',
            emissiveIntensity: 2.2,
          });
          const sym = new THREE.Mesh(symGeo, symMat);
          sym.rotation.x = Math.PI / 3;
          group.add(sym);
        }

        group.position.set(selectedLane, height, distance);
        mesh = group;
      }

      scene.add(mesh);
      targetMeshesRef.current.set(id, mesh);
      targetsRef.current.push(newTarget);
    };

    // Handle responsive interaction on Desktop through mouse-clicks
    const onMouseDown = (e: MouseEvent) => {
      if (gameStateRef.current !== GameState.Playing) return;
      isMouseDown.current = true;
      dragStartTime.current = Date.now();

      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      lastMousePos.current = { x, y };

      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

      // Extract mesh targets
      const clickableTargets = targetsRef.current.filter((t) => !t.isHit && !t.isMissed);
      const meshesToIntersect: THREE.Object3D[] = [];
      const itemMap = new Map<THREE.Object3D, GameTarget>();

      clickableTargets.forEach((t) => {
        const m = targetMeshesRef.current.get(t.id);
        if (m) {
          meshesToIntersect.push(m);
          itemMap.set(m, t);
        }
      });

      const intersects = raycaster.intersectObjects(meshesToIntersect, true);

      if (intersects.length > 0) {
        // Find parent top-level mesh
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !itemMap.has(hitObj)) {
          hitObj = hitObj.parent;
        }

        if (hitObj) {
          const target = itemMap.get(hitObj)!;

          // Strike check: Red Punch on click inside Interaction Zone (Z > -10m is accessible, but best around -1 to -4m)
          if (target.type === ObjectType.Punch) {
            handleHit(target);
          } else if (target.type === ObjectType.Grab) {
            // Grab action: set as active grab
            activeGrabTargetId.current = target.id;
            // Play initial click feedback
            gameAudio.playGrab();
            handleHit(target);
          }
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (gameStateRef.current !== GameState.Playing) return;

      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (isMouseDown.current) {
        mouseVelocity.current = dist / ((Date.now() - dragStartTime.current) || 1);
      }

      lastMousePos.current = { x, y };
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
      activeGrabTargetId.current = null;
    };

    // Keyboard support: Dodge with A/D or Left/Right arrows, Fallback buttons for fast testing
    const onKeyDown = (e: KeyboardEvent) => {
      if (gameStateRef.current !== GameState.Playing) return;

      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        targetXOffset.current = -1.3; // Shift Left
      } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        targetXOffset.current = 1.3; // Shift Right
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown' || e.key === 'f' || e.key === 'F') {
        targetXOffset.current = 0; // Center reset
      }

      // Add backup key triggers for desktop fallback play (1: Punch hit near, 2: Grab near)
      const nearTargets = targetsRef.current.filter((t) => !t.isHit && !t.isMissed && t.position.z > 1.0 && t.position.z < 3.1);
      if (nearTargets.length > 0) {
        if (e.key === '1') {
          const t = nearTargets.find(it => it.type === ObjectType.Punch);
          if (t) handleHit(t);
        } else if (e.key === '2') {
          const t = nearTargets.find(it => it.type === ObjectType.Grab);
          if (t) handleHit(t);
        }
      }
    };

    const handleHit = (target: GameTarget) => {
      if (target.isHit || target.isMissed) return;

      target.isHit = true;
      const mesh = targetMeshesRef.current.get(target.id);

      // Dynamic blast particle burst on correct physical hit
      if (mesh) {
        // Flash mesh bright white briefly, then scale out
        if (mesh instanceof THREE.Group) {
          mesh.children.forEach((child) => {
            if (child instanceof THREE.Mesh && child.material) {
              const mat = child.material as any;
              if (mat.emissive && typeof mat.emissive.set === 'function') {
                mat.emissive.set('#ffffff');
              }
              if (mat.emissiveIntensity !== undefined) {
                mat.emissiveIntensity = 4;
              }
            }
          });
        }

        // Animate destruction
        const shrinkInterval = setInterval(() => {
          if (mesh.scale.x > 0.05) {
            mesh.scale.subScalar(0.1);
          } else {
            clearInterval(shrinkInterval);
            scene.remove(mesh);
            targetMeshesRef.current.delete(target.id);
          }
        }, 16);
      }

      // Action success updates
      if (target.type === ObjectType.Punch) gameAudio.playPunch();
      if (target.type === ObjectType.Grab) gameAudio.playGrab();

      updateStats((prev) => {
        const nextCombo = prev.combo + 1;
        const nextMaxCombo = Math.max(prev.maxCombo, nextCombo);
        const scoreGain = 10; // Flat +10 points

        // Success combo chime at milestones
        if (nextCombo > 0 && nextCombo % 10 === 0) {
          gameAudio.playCombo();
        }

        // Trigger visual floating point popup
        addPopupRef.current(`+${scoreGain}`, target.position.x, target.color);
        createFloatingText3D(`+${scoreGain}`, target.position.x, target.position.y, target.position.z, target.color || '#ec4899');

        return {
          ...prev,
          score: prev.score + scoreGain,
          combo: nextCombo,
          maxCombo: nextMaxCombo,
        };
      });
    };

    const handleMiss = (target: GameTarget) => {
      if (target.isMissed || target.isHit) return;
      target.isMissed = true;

      const mesh = targetMeshesRef.current.get(target.id);
      if (mesh) {
        // Red color flash on miss, fade out
        const flashColorObj = (children: THREE.Object3D[]) => {
          children.forEach((child) => {
            if (child instanceof THREE.Mesh && child.material) {
              const mat = child.material as any;
              if (mat.color && typeof mat.color.set === 'function') {
                mat.color.set('#ef4444');
              }
              if (mat.emissive && typeof mat.emissive.set === 'function') {
                mat.emissive.set('#ef4444');
              }
              mat.transparent = true;
            }
          });
        };

        if (mesh instanceof THREE.Group) {
          flashColorObj(mesh.children);
        } else if (mesh instanceof THREE.Mesh) {
          flashColorObj([mesh]);
        }

        // For dodge obstacles, do not drop out of the sky immediately; let them slide completely through and past the screen
        if (target.type !== ObjectType.Dodge) {
          // Drop out of the sky
          const dropInterval = setInterval(() => {
            if (mesh.position.y > -2) {
              mesh.position.y -= 0.15;
              mesh.position.z += 0.05;
            } else {
              clearInterval(dropInterval);
              scene.remove(mesh);
              targetMeshesRef.current.delete(target.id);
            }
          }, 16);
        }
      }

      // Damage on wrong / missed reactions or dodge collisions
      gameAudio.playError();
      updateStats((prev) => ({
        ...prev,
        combo: 0,
        health: Math.max(0, prev.health - 1),
      }));
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('keydown', onKeyDown);

    // --- Core 3D Interactive Animation Loop ---
    let lastTime = performance.now();

    const animate = () => {
      const currentTime = performance.now();
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1); // Cap delta to avoid large offsets under window focus tab-swaps
      lastTime = currentTime;
      const now = Date.now();

      const isPlaying = gameStateRef.current === GameState.Playing;

      if (isPlaying) {
        // Increment speed bonus gradually over time (adds ~0.1 to orb speed every 8 seconds)
        speedBonusRef.current += 0.04 * dt;
        playTimeRef.current += dt;
      }

      // Check procedural target spawning rate with generous buffers to prevent bombardment
      // Spawner interval scales down with both play time and score, down to a solid 1150ms limit to guarantee they never come simultaneously
      const timeReduction = playTimeRef.current * 20; 
      const scoreReduction = statsRef.current.score * 12;
      const currentSpawnInterval = Math.max(3400 - timeReduction - scoreReduction, 1150);
      if (isPlaying && now - lastSpawnTime > currentSpawnInterval) {
        spawnTarget();
        lastSpawnTime = now;
      }

      // Smooth camera transition on sidelong keyboard dodge actions
      playerXOffset.current += (targetXOffset.current - playerXOffset.current) * 12 * dt;
      camera.position.set(playerXOffset.current, 1.7, 3.2);
      camera.lookAt(playerXOffset.current, 1.1, -5.0);

      // Ensure VR headset positions are matched to camera boundaries if WebXR active
      if (renderer.xr.isPresenting) {
        const xrCamera = renderer.xr.getCamera();
        // Track the main position (index 0) of the viewport
        playerXOffset.current = xrCamera.position.x;
      }

      // Live update of VR Dashboard panel if present with ergonomic custom layouts depending on game states
      if (vrDashboardMesh) {
        if (renderer.xr.isPresenting) {
          vrDashboardMesh.visible = true;
          
          // Request current headset world position and direction to ensure it is ALWAYS centered in front of the player!
          const xrCamera = renderer.xr.getCamera();
          const rPos = new THREE.Vector3();
          xrCamera.getWorldPosition(rPos);
          
          const rDir = new THREE.Vector3();
          xrCamera.getWorldDirection(rDir);
          
          // Project forward on horizontal plane (Y=0) to keep the panel aligned stable
          const forwardH = rDir.clone().setY(0).normalize();
          
          if (gameStateRef.current === GameState.GameOver) {
            // Panel placed elevated significantly above eye level to ensure lanes are 100% unobstructed
            const targetPos = rPos.clone()
              .add(forwardH.clone().multiplyScalar(2.0)) // 2.0 meters forward
              .setY(rPos.y + 1.15); // Highly elevated above eye level so flying orbs don't block
            
            vrDashboardMesh.position.copy(targetPos);
            
            // Angle the board tilted elegant downwards towards their gaze
            vrDashboardMesh.lookAt(rPos);
          } else {
            // Classic HUD layout floating on top of the environment exactly like desktop overlay!
            // Positioned highly elevated relative to their headset position and looking direction
            const targetPos = rPos.clone()
              .add(forwardH.clone().multiplyScalar(2.5)) // 2.5 meters forward along track
              .setY(rPos.y + 1.35); // Elevated way up top completely out of target lanes
            
            vrDashboardMesh.position.copy(targetPos);
            
            // Angle the board tilted elegant downwards towards their gaze
            vrDashboardMesh.lookAt(rPos);
          }

          // Continuously update canvas visuals live so the scoreboard ticks perfectly synchronously with gameplay scoring events
          if (updateVRDashboardRef.current) {
            updateVRDashboardRef.current();
          }
        } else {
          vrDashboardMesh.visible = false;
        }
      }

      // Handle VR hand position updates and controllers tracking
      if (renderer.xr.isPresenting) {
        const session = renderer.xr.getSession();
        if (session) {
          // 1. Resolve Left Hand/Controller Position & Pinch
          const leftHandPos = new THREE.Vector3();
          let leftHandPinch = false;
          let leftHandTracked = false;

          const leftHandAny = leftHand as any;
          
          // Lazy attach hand tracking joint meshes if joints became available dynamically
          if (leftHandAny.joints && (!handJointVisualsMap.get('left') || handJointVisualsMap.get('left')!.length === 0)) {
            const jointGeo = new THREE.SphereGeometry(0.012, 8, 8);
            const jointMat = new THREE.MeshStandardMaterial({
              color: '#3b82f6',
              roughness: 0.15,
              metalness: 0.15,
              transparent: true,
              opacity: 0.85,
              emissive: '#3b82f6',
              emissiveIntensity: 1.5,
            });
            const meshes: THREE.Mesh[] = [];
            jointNames.forEach((name) => {
              const jointSpace = leftHandAny.joints[name];
              if (jointSpace) {
                const mesh = new THREE.Mesh(jointGeo, jointMat);
                jointSpace.add(mesh);
                meshes.push(mesh);
              }
            });
            handJointVisualsMap.set('left', meshes);
          }

          const leftWrist = leftHandAny.joints ? leftHandAny.joints['wrist'] : null;
          const leftIndex = leftHandAny.joints ? leftHandAny.joints['index-finger-tip'] : null;
          const leftThumb = leftHandAny.joints ? leftHandAny.joints['thumb-tip'] : null;

          if (leftWrist && leftIndex && leftThumb) {
            const wristPos = new THREE.Vector3().setFromMatrixPosition(leftWrist.matrixWorld);
            // If tracked by Quest 3 optical cameras, wrist position moves away from origin
            if (wristPos.lengthSq() > 0.001) {
              leftHandTracked = true;
              leftHandPos.copy(wristPos);

              const indexPos = new THREE.Vector3().setFromMatrixPosition(leftIndex.matrixWorld);
              const thumbPos = new THREE.Vector3().setFromMatrixPosition(leftThumb.matrixWorld);
              const distPinch = indexPos.distanceTo(thumbPos);
              
              // Quest 3 optical pinch trigger (index to thumb proximity < 3.2cm)
              leftHandPinch = distPinch < 0.032;
            }
          }

          // Toggle visibility of hand tracking joint meshes vs controller grip visual
          const leftJointVisuals = handJointVisualsMap.get('left');
          if (leftHandTracked) {
            leftHandVisual.visible = false; // Hide controller visual
            if (leftJointVisuals) {
              leftJointVisuals.forEach(m => { m.visible = true; });
            }
          } else {
            leftHandPos.copy(leftController.position);
            leftHandPinch = leftGripSqueezed;
            leftHandVisual.visible = true; // Show controller visual
            if (leftJointVisuals) {
              leftJointVisuals.forEach(m => { m.visible = false; });
            }
          }

          // 2. Resolve Right Hand/Controller Position & Pinch
          const rightHandPos = new THREE.Vector3();
          let rightHandPinch = false;
          let rightHandTracked = false;

          const rightHandAny = rightHand as any;
          
          // Lazy attach hand tracking joint meshes if joints became available dynamically
          if (rightHandAny.joints && (!handJointVisualsMap.get('right') || handJointVisualsMap.get('right')!.length === 0)) {
            const jointGeo = new THREE.SphereGeometry(0.012, 8, 8);
            const jointMat = new THREE.MeshStandardMaterial({
              color: '#ec4899',
              roughness: 0.15,
              metalness: 0.15,
              transparent: true,
              opacity: 0.85,
              emissive: '#ec4899',
              emissiveIntensity: 1.5,
            });
            const meshes: THREE.Mesh[] = [];
            jointNames.forEach((name) => {
              const jointSpace = rightHandAny.joints[name];
              if (jointSpace) {
                const mesh = new THREE.Mesh(jointGeo, jointMat);
                jointSpace.add(mesh);
                meshes.push(mesh);
              }
            });
            handJointVisualsMap.set('right', meshes);
          }

          const rightWrist = rightHandAny.joints ? rightHandAny.joints['wrist'] : null;
          const rightIndex = rightHandAny.joints ? rightHandAny.joints['index-finger-tip'] : null;
          const rightThumb = rightHandAny.joints ? rightHandAny.joints['thumb-tip'] : null;

          if (rightWrist && rightIndex && rightThumb) {
            const wristPos = new THREE.Vector3().setFromMatrixPosition(rightWrist.matrixWorld);
            if (wristPos.lengthSq() > 0.001) {
              rightHandTracked = true;
              rightHandPos.copy(wristPos);

              const indexPos = new THREE.Vector3().setFromMatrixPosition(rightIndex.matrixWorld);
              const thumbPos = new THREE.Vector3().setFromMatrixPosition(rightThumb.matrixWorld);
              const distPinch = indexPos.distanceTo(thumbPos);
              
              // Quest 3 optical pinch trigger
              rightHandPinch = distPinch < 0.032;
            }
          }

          const rightJointVisuals = handJointVisualsMap.get('right');
          if (rightHandTracked) {
            rightHandVisual.visible = false; // Hide controller visual
            if (rightJointVisuals) {
              rightJointVisuals.forEach(m => { m.visible = true; });
            }
          } else {
            rightHandPos.copy(rightController.position);
            rightHandPinch = rightGripSqueezed;
            rightHandVisual.visible = true; // Show controller visual
            if (rightJointVisuals) {
              rightJointVisuals.forEach(m => { m.visible = false; });
            }
          }

          // Track left / right hands/controllers velocity vector changes
          controllerPositions.left.prev.copy(controllerPositions.left.curr);
          controllerPositions.left.curr.copy(leftHandPos);
          controllerPositions.left.velocity.subVectors(controllerPositions.left.curr, controllerPositions.left.prev).divideScalar(dt || 0.016);

          controllerPositions.right.prev.copy(controllerPositions.right.curr);
          controllerPositions.right.curr.copy(rightHandPos);
          controllerPositions.right.velocity.subVectors(controllerPositions.right.curr, controllerPositions.right.prev).divideScalar(dt || 0.016);

          // Universal Select pinch gesture, laser pointing raycasts, and physical Poke/Touch Tap collision in Game Over state
          if (gameStateRef.current === GameState.GameOver) {
            // End of game, show pointing lasers!
            leftLaser.visible = true;
            rightLaser.visible = true;

            // Resolve origins and directions for pointing rays
            const leftOrigin = new THREE.Vector3();
            const leftDir = new THREE.Vector3();
            if (leftHandTracked && leftIndex && leftWrist) {
              const wristPos = new THREE.Vector3().setFromMatrixPosition(leftWrist.matrixWorld);
              const indexPos = new THREE.Vector3().setFromMatrixPosition(leftIndex.matrixWorld);
              leftOrigin.copy(wristPos);
              leftDir.subVectors(indexPos, wristPos).normalize();
            } else {
              leftOrigin.copy(leftController.position);
              leftDir.set(0, 0, -1).applyQuaternion(leftController.quaternion);
            }

            const rightOrigin = new THREE.Vector3();
            const rightDir = new THREE.Vector3();
            if (rightHandTracked && rightIndex && rightWrist) {
              const wristPos = new THREE.Vector3().setFromMatrixPosition(rightWrist.matrixWorld);
              const indexPos = new THREE.Vector3().setFromMatrixPosition(rightIndex.matrixWorld);
              rightOrigin.copy(wristPos);
              rightDir.subVectors(indexPos, wristPos).normalize();
            } else {
              rightOrigin.copy(rightController.position);
              rightDir.set(0, 0, -1).applyQuaternion(rightController.quaternion);
            }

            // Update physical lasers line alignments
            leftLaser.position.copy(leftOrigin);
            leftLaser.lookAt(leftOrigin.clone().add(leftDir.clone().multiplyScalar(4.5)));

            rightLaser.position.copy(rightOrigin);
            rightLaser.lookAt(rightOrigin.clone().add(rightDir.clone().multiplyScalar(4.5)));

            // Track edge-triggered pinch transitions to prevent rapid double-clicks inside fast frames
            const leftPinchStarted = leftHandPinch && !leftPinchLatch.current;
            leftPinchLatch.current = leftHandPinch;

            const rightPinchStarted = rightHandPinch && !rightPinchLatch.current;
            rightPinchLatch.current = rightHandPinch;

            // Reset hover states and cursor caches
            hoverRestartRef.current = false;
            hoverBackRef.current = false;
            leftCursorRef.current = null;
            rightCursorRef.current = null;
            leftHoveredActionRef.current = null;
            rightHoveredActionRef.current = null;

            // Intersect with VR dashboard to obtain precision hover states and click spots!
            if (vrDashboardMesh) {
              const raycaster = new THREE.Raycaster();
              
              // Ray 1: Left
              raycaster.set(leftOrigin, leftDir);
              const intersectsLeft = raycaster.intersectObject(vrDashboardMesh);
              if (intersectsLeft.length > 0) {
                const localPos = intersectsLeft[0].point.clone().applyMatrix4(vrDashboardMesh.matrixWorld.clone().invert());
                if (Math.abs(localPos.x) < 1.2 && Math.abs(localPos.y) < 0.6) {
                  const cx = 512 + (localPos.x / 1.2) * 512;
                  const cy = 256 - (localPos.y / 0.6) * 256;
                  leftCursorRef.current = { x: cx, y: cy };
                  
                  // Highlight corresponding wide pill & detect hover action
                  if (cx >= 212 && cx <= 812 && cy >= 360 && cy <= 460) {
                    hoverRestartRef.current = true;
                    leftHoveredActionRef.current = 'restart';
                  }
                }
              }

              // Ray 2: Right
              raycaster.set(rightOrigin, rightDir);
              const intersectsRight = raycaster.intersectObject(vrDashboardMesh);
              if (intersectsRight.length > 0) {
                const localPos = intersectsRight[0].point.clone().applyMatrix4(vrDashboardMesh.matrixWorld.clone().invert());
                if (Math.abs(localPos.x) < 1.2 && Math.abs(localPos.y) < 0.6) {
                  const cx = 512 + (localPos.x / 1.2) * 512;
                  const cy = 256 - (localPos.y / 0.6) * 256;
                  rightCursorRef.current = { x: cx, y: cy };
                  
                  // Highlight corresponding wide pill & detect hover action
                  if (cx >= 212 && cx <= 812 && cy >= 360 && cy <= 460) {
                    hoverRestartRef.current = true;
                    rightHoveredActionRef.current = 'restart';
                  }
                }
              }
            }

            // Check finger tips for tactile poke if using hand tracking
            const leftTip = leftIndex ? new THREE.Vector3().setFromMatrixPosition(leftIndex.matrixWorld) : leftHandPos;
            const rightTip = rightIndex ? new THREE.Vector3().setFromMatrixPosition(rightIndex.matrixWorld) : rightHandPos;

            const checkLocalTouch = (tipWorldPos: THREE.Vector3) => {
              if (!vrDashboardMesh) return null;
              const localPos = tipWorldPos.clone().applyMatrix4(vrDashboardMesh.matrixWorld.clone().invert());
              const hitZ = Math.abs(localPos.z) < 0.12;
              const hitX = Math.abs(localPos.x) < 1.2;
              const hitY = Math.abs(localPos.y) < 0.6;

              if (hitZ && hitX && hitY) {
                const cx = 512 + (localPos.x / 1.2) * 512;
                const cy = 256 - (localPos.y / 0.6) * 256;
                if (cx >= 212 && cx <= 812 && cy >= 360 && cy <= 460) {
                  return 'restart';
                }
              }
              return null;
            };

            const leftTouch = checkLocalTouch(leftTip);
            const rightTouch = checkLocalTouch(rightTip);
            const touchAction = leftTouch || rightTouch;

            // Decide active action trigger
            let action: string | null = null;

            // Trigger action on:
            // 1. Pointing ray select click/pinch (if pointing at button & pinch-started)
            if (leftPinchStarted && leftHoveredActionRef.current) {
              action = leftHoveredActionRef.current;
            } else if (rightPinchStarted && rightHoveredActionRef.current) {
              action = rightHoveredActionRef.current;
            }

            // 2. Direct physical finger poke touch collision
            if (!action) {
              action = touchAction;
            }

            // 3. Fallback direct pinch gesture shortcut (Left or Right Hand Pinch -> restart)
            if (!action && Date.now() - gameOverTimeRef.current > 1200) {
              if ((leftHandTracked && leftPinchStarted) || (rightHandTracked && rightPinchStarted)) {
                action = 'restart';
              }
            }

            if (action) {
              executeActionRef.current(action);
            }
          } else {
            // Active gameplay, hide visual pointers completely
            leftLaser.visible = false;
            rightLaser.visible = false;
            hoverRestartRef.current = false;
            hoverBackRef.current = false;
            leftCursorRef.current = null;
            rightCursorRef.current = null;
          }

          // Interaction detections for VR targets in proximity
          if (isPlaying) {
            targetsRef.current.forEach((target) => {
              if (target.isHit || target.isMissed) return;
              if (target.type === ObjectType.Dodge) return; // Unified crossing-evaluation logic in main animation loop

              const mesh = targetMeshesRef.current.get(target.id);
              if (!mesh) return;

              // Target 3D coordinate vector
              const targetPos = new THREE.Vector3().setFromMatrixPosition(mesh.matrixWorld);

              // Compute distance from hands
              const distLeft = targetPos.distanceTo(leftHandPos);
              const distRight = targetPos.distanceTo(rightHandPos);

              const hitThreshold = 0.45;

              // Action verification: Red (Punch), Blue (Grab)
              const hitByLeft = distLeft < hitThreshold;
              const hitByRight = distRight < hitThreshold;

              if (hitByLeft || hitByRight) {
                const vel = hitByLeft ? controllerPositions.left.velocity : controllerPositions.right.velocity;
                const isPinching = hitByLeft ? leftHandPinch : rightHandPinch;

                if (target.type === ObjectType.Punch) {
                  // Requires high striking speed vector
                  if (vel.length() > 1.2) {
                    handleHit(target);
                  }
                } else if (target.type === ObjectType.Grab) {
                  // Requires physical pinch gesture (or button squeeze on controllers)
                  if (isPinching) {
                    handleHit(target);
                  }
                }
              }
            });
          }
        }
      }

      // 7. Update objects positions
      if (isPlaying) {
        for (let i = targetsRef.current.length - 1; i >= 0; i--) {
          const target = targetsRef.current[i];
          const mesh = targetMeshesRef.current.get(target.id);

          if (!mesh) continue;

          // Move target forward on Z axis
          target.position.z += target.velocity.z * dt;
          mesh.position.z = target.position.z;

          // Rotate beautifully for floating dynamic effect
          target.angle += 1.8 * dt;
          mesh.rotation.y = target.angle * 0.45;
          if (target.type !== ObjectType.Dodge) {
            mesh.rotation.x = target.angle * 0.2;
          }

          // Dodge collision evaluation for both Desktop and VR (happens exactly when the obstacle reaches the player's plane around Z = 2.2)
          if (target.type === ObjectType.Dodge && !target.isHit && !target.isMissed) {
            const obstacleZ = target.position.z;
            if (obstacleZ >= 2.2) {
              const overlap = Math.abs(playerXOffset.current - target.position.x) < 0.9;
              if (overlap) {
                handleMiss(target);
              } else {
                target.isHit = true;
                gameAudio.playDodge();
                // Update score and combo
                updateStats((prev) => {
                  const nextCombo = prev.combo + 1;
                  const nextMaxCombo = Math.max(prev.maxCombo, nextCombo);
                  const scoreGain = 10; // Flat +10 points
                  addPopupRef.current(`+${scoreGain}`, target.position.x, target.color);
                  createFloatingText3D(`+${scoreGain}`, target.position.x, 1.4, 1.5, target.color || '#10b981');
                  return {
                    ...prev,
                    score: prev.score + scoreGain,
                    combo: nextCombo,
                    maxCombo: nextMaxCombo,
                  };
                });
              }
            }
          }

          // Dodge target cleanup after either successful dodging or collision hit (fully gone through the player)
          if (target.type === ObjectType.Dodge && (target.isHit || target.isMissed)) {
            if (target.position.z > 4.5) {
              scene.remove(mesh);
              targetMeshesRef.current.delete(target.id);
            }
          }

          // Target missed: passed below player boundary (only for punch/grab targets, since dodge is evaluated at z >= 0.0)
          if (target.type !== ObjectType.Dodge && target.position.z > 3.1 && !target.isHit && !target.isMissed) {
            handleMiss(target);
          }
        }
      }

      // Float and rotate decorative environmental crystals
      floaterAnimationData.forEach((f) => {
        // High-end luxury horizontal rotation & vertical wave bobbing
        f.mesh.position.y = f.baseHeight + Math.sin(now * 0.0016 * f.speed + f.offset) * 0.16;
        f.mesh.rotation.y += 0.7 * dt;
        f.mesh.rotation.z += 0.35 * dt;

        // Counter-rotate the orbiting neon rings for visual friction
        const orbitRing = f.mesh.children[2];
        if (orbitRing) {
          orbitRing.rotation.x += 1.1 * dt;
          orbitRing.rotation.y -= 0.55 * dt;
        }
      });

      // Animate general decoration particles floating
      const posArr = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Move towards user slightly
        posArr[i * 3 + 2] += 0.8 * dt;
        // Float subtle wave cycle on Y
        posArr[i * 3 + 1] += Math.sin(now * 0.001 + i) * 0.08 * dt;

        // Reset if passed user viewport
        if (posArr[i * 3 + 2] > 3) {
          posArr[i * 3 + 2] = -22;
          posArr[i * 3] = (Math.random() - 0.5) * 16;
          posArr[i * 3 + 1] = Math.random() * 6;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Update 3D floating texts frame-rate independently
      const popupNow = Date.now();
      for (let i = active3DFloatingTexts.length - 1; i >= 0; i--) {
        const item = active3DFloatingTexts[i];
        const elapsed = (popupNow - item.birth) / 1000;
        if (elapsed > 0.8) {
          scene.remove(item.sprite);
          item.texture.dispose();
          item.material.dispose();
          active3DFloatingTexts.splice(i, 1);
        } else {
          item.sprite.position.y += 1.4 * dt; // floats up nicely
          item.material.opacity = 1.0 - (elapsed / 0.8);
        }
      }

      // Render Scene
      renderer.render(scene, camera);
    };

    // Set interactive animation loop
    renderer.setAnimationLoop(animate);

    // Dynamic sizing configuration
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    // Use ResizeObserver for ultra fluid bounding adjustments
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(containerRef.current);

    // Add layout backup window event listener
    window.addEventListener('resize', handleResize);

    // Cleanup resources
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('keydown', onKeyDown);

      // Gracefully terminate any active WebXR immersive session to prevent headset freezing or shaking
      try {
        const session = renderer.xr.getSession();
        if (session) {
          session.end().catch(() => {});
        }
      } catch (e) {}

      renderer.setAnimationLoop(null);
      renderer.xr.removeEventListener('sessionstart', xrSessionStart);
      renderer.xr.removeEventListener('sessionend', xrSessionEnd);

      if (containerRef.current && renderer.domElement) {
        try {
          containerRef.current.removeChild(renderer.domElement);
        } catch (e) {}
      }

      // Dispose geometries & materials
      scene.children.forEach((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });

      gameAudio.stopDrone();
    };
  }, []);

  // Initiate dynamic VR Session with full immersive WebXR tracking bindings
  const handleEnterVR = async () => {
    if (!xrSupported || !rendererRef.current) return;

    try {
      const sessionInit = {
        requiredFeatures: ['local-floor'],
        optionalFeatures: ['hand-tracking', 'dom-overlay'],
        domOverlay: { root: document.getElementById('root') || document.body }
      };
      const session = await navigator.xr!.requestSession('immersive-vr', sessionInit);
      rendererRef.current.xr.setSession(session);
    } catch (err) {
      console.error('Failed to initiate WebXR VR session: ', err);
      // Give pleasant fallback reminder
      alert('Could not start VR session. Check your headset connection or WebXR browser permissions.');
    }
  };

  return (
    <div id="game-canvas-wrapper" className="fixed inset-0 w-screen h-screen z-10 overflow-hidden select-none pointer-events-none">
      {/* Custom keyframes for juicy scoring pops */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translate(-50%, -50%) scale(0.6) translateY(25px);
            opacity: 0;
          }
          15% {
            transform: translate(-50%, -50%) scale(1.25) translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.85) translateY(-75px);
            opacity: 0;
          }
        }
        .animate-score-popup {
          animation: floatUp 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
        }
      `}</style>

      {/* Floating dynamic scoring indicators */}
      {popups.map((p) => {
        let shadowColor = p.color;
        if (p.color === '#000' || p.color === '#000000') shadowColor = '#ec4899'; // Fallback
        return (
          <div
            key={p.id}
            className="absolute z-40 font-black animate-score-popup pointer-events-none select-none text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] font-mono tracking-wider"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              color: p.color === '#10b981' ? '#10b981' : p.color === '#3b82f6' ? '#3d82f6' : '#f43f5e',
              textShadow: `0 0 12px ${shadowColor}, 0 0 4px ${shadowColor}, 0 1px 1px #000`,
            }}
          >
            {p.text}
          </div>
        );
      })}

      {/* 3D Render viewport with pointer events enabled for raycasting */}
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-0 bg-transparent pointer-events-auto" />

      {/* Glassmorphic immersive WebXR entry overlay button helper in soft matte floating style */}
      {xrSupported && gameState === GameState.Playing && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2.5">
          <button
            onClick={handleEnterVR}
            className="px-6 py-3.5 bg-pink-600 hover:bg-pink-700 border border-pink-400/50 shadow-[0_4px_24px_rgba(236,72,153,0.48)] text-white font-extrabold text-xs tracking-[0.15em] rounded-full transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] pointer-events-auto flex items-center gap-2.5 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
            {inXrSession ? 'VR SESSION ACTIVE' : 'ENTER VR ARCADE MAP'}
          </button>
          {!inXrSession && (
            <span className="text-[9px] font-mono font-bold tracking-widest text-pink-300 bg-slate-950/80 px-3.5 py-1.5 rounded-full border border-pink-500/25 shadow-md">
              SUPPORTS OCULUS QUEST HAND-TRACKING
            </span>
          )}
        </div>
      )}

      {/* Dynamic play controls overlay representing Desktop dodging controls */}
      {gameState === GameState.Playing && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10 bg-white/30 backdrop-blur-md border border-white/40 px-4 py-2 rounded-2xl shadow-sm text-[11px] font-medium text-slate-705 flex items-center gap-5 select-none pointer-events-none">
          <div className="flex items-center gap-1.5">
            <span className="bg-white/80 px-2 py-0.5 rounded-md border border-white/20 shadow-xs text-xs font-semibold text-violet-600">A</span>
            <span className="bg-white/80 px-2 py-0.5 rounded-md border border-white/20 shadow-xs text-xs font-semibold text-violet-600">D</span>
            <span className="text-[#5b5a75]">Dodge Left / Right</span>
          </div>
          <div className="w-px h-3 bg-violet-200/40" />
          <div className="flex items-center gap-1.5">
            <span className="bg-white/80 px-2 py-0.5 rounded-md border border-white/20 shadow-xs text-xs font-semibold text-violet-600">Click</span>
            <span className="text-[#5b5a75]">Punch / Grab Targets</span>
          </div>
        </div>
      )}
    </div>
  );
};
