export enum ObjectType {
  Punch = 'punch', // Red
  Grab = 'grab',   // Blue
  Dodge = 'dodge'  // Green
}

export interface GameTarget {
  id: string;
  type: ObjectType;
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  speed: number;
  size: number;
  spawnTime: number;
  duration: number; // time to reach player
  isHit: boolean;
  isMissed: boolean;
  angle: number; // random rotation angle for visual polish
  color: string;
}

export interface PlayerStats {
  score: number;
  combo: number;
  maxCombo: number;
  health: number; // 0 to 5 orbs
  hasDodged: boolean;
}

export enum GameState {
  Menu = 'menu',
  Playing = 'playing',
  GameOver = 'game_over'
}
