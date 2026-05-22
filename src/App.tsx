import { useState, useEffect } from 'react';
import { GameState, PlayerStats } from './types';
import { NeonReflexGame } from './components/NeonReflexGame';
import { VRControlsDock } from './components/VRControlsDock';
import { Trophy, Play, RotateCcw, RefreshCw } from 'lucide-react';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.Menu);
  const [stats, setStats] = useState<PlayerStats>({
    score: 0,
    combo: 0,
    maxCombo: 0,
    health: 3,
    hasDodged: false,
  });
  const [highScore, setHighScore] = useState<number>(0);

  // Load high score on launch
  useEffect(() => {
    const saved = localStorage.getItem('neon_reflex_high_score');
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  const handleStatsUpdate = (newStats: PlayerStats) => {
    setStats(newStats);
  };

  const handleGameOver = (finalScore: number) => {
    setGameState(GameState.GameOver);
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('neon_reflex_high_score', finalScore.toString());
    }
  };

  const handleStartGame = () => {
    setGameState(GameState.Playing);
  };

  const handleRestart = () => {
    setGameState(GameState.Playing);
  };

  const handleBackToMenu = () => {
    setGameState(GameState.Menu);
  };

  const handleResetHighScore = () => {
    localStorage.removeItem('neon_reflex_high_score');
    setHighScore(0);
  };

  return (
    <main className="relative w-full h-full min-h-screen overflow-hidden font-sans bg-gradient-to-b from-[#a78bfa] via-[#decbfa] to-[#fedbec]">
      
      {/* Real-time WebGL interactive 3D particle and ring field in the background */}
      <NeonReflexGame
        gameState={gameState}
        onStatsUpdate={handleStatsUpdate}
        onGameOver={handleGameOver}
        onRestart={handleRestart}
        onBackToMenu={handleBackToMenu}
      />

      {/* Floating vector concentric circular rings & soft spatial glow atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Faint concentric circular rings radiating from Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vh] h-[150vh] rounded-full border border-violet-200/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vh] h-[110vh] rounded-full border border-violet-200/20 animate-pulse-slow opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vh] h-[75vh] rounded-full border border-blue-200/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vh] h-[40vh] rounded-full border border-blue-200/20 animate-pulse opacity-40" />
        
        {/* Ambient Dreamwave blurred background glow orbs - enhanced with rich magenta, cyan, and violet values matching the image */}
        <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[115px] bg-purple-300/40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[750px] h-[750px] rounded-full blur-[135px] bg-pink-300/30" />
        <div className="absolute top-[25%] left-[20%] w-[500px] h-[500px] rounded-full blur-[95px] bg-cyan-300/25" />
      </div>

      {/* MAIN MENU / OVERLAY HUD */}
      {gameState === GameState.Menu && (
        <div className="absolute z-30 inset-0 flex items-center justify-center p-4 bg-slate-950/10 backdrop-blur-md">
          <div className="bg-white/65 backdrop-blur-3xl border border-white/90 shadow-[0_32px_80px_-20px_rgba(167,139,250,0.25),_0_0_60px_rgba(255,255,255,0.45)] rounded-[26px] max-w-3xl w-full p-6 md:p-8 relative animate-fadeIn flex flex-col ring-1 ring-white/30">
            
            {/* Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* LEFT Column: Title, High Score, and CTA */}
              <div className="flex flex-col space-y-5 text-center md:text-left">
                <div>
                  <h1 className="text-3.5xl font-extralight tracking-[0.25em] text-slate-900 uppercase font-sans leading-none">
                    NEON REFLEX
                  </h1>
                  <span className="text-[9px] uppercase tracking-[0.22em] font-mono font-medium text-violet-500 mt-2 block">
                    SPATIAL REACTION MECHANICS
                  </span>
                </div>

                {/* Personal record banner (horizontal sleek inline block) */}
                <div className="py-2.5 px-4 bg-white/70 backdrop-blur-md rounded-xl border border-white/60 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">PERSONAL RECORD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-light text-slate-800 font-sans tracking-tight">
                      {highScore.toLocaleString()}
                    </span>
                    {highScore > 0 && (
                      <button
                        onClick={handleResetHighScore}
                        title="Reset record to 0"
                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-100/40 hover:border-rose-200 transition-all rounded-lg cursor-pointer flex items-center justify-center border border-transparent"
                        aria-label="Reset record"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed font-light font-sans">
                  Coordinate speed and precision to slice, punch, grab, or dodge high-speed energetic matrices propagating through space.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleStartGame}
                    className="w-full px-6 py-4 bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs tracking-[0.2em] uppercase rounded-xl shadow-[0_4px_24px_rgba(139,92,246,0.38)] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    BEGIN CHALLENGE
                  </button>
                </div>

                <div className="text-[8px] font-mono text-slate-400 tracking-[0.12em] uppercase">
                  ACTIVE IN WEBXR & COGNITIVE CONTROLLER DECK
                </div>
              </div>

              {/* RIGHT Column: Pristine HUD Controls checklist (Replaces standard full-page Rules tab) */}
              <VRControlsDock />

            </div>

            {/* Subtle aesthetic footer */}
            <div className="text-center pt-4 border-t border-slate-200/40 mt-6 flex justify-between items-center">
              <span className="text-[8px] text-[#9392ab] tracking-[0.15em] font-mono font-medium">ARCADE SIMULATION UNIT v2.5</span>
              <span className="text-[8px] text-[#9392ab] tracking-[0.1em] font-mono">LATENCY COMPENSATED REGION</span>
            </div>
          </div>
        </div>
      )}

      {/* GAME PLAY HUD OVERLAY */}
      {gameState === GameState.Playing && (
        <div className="absolute inset-0 pointer-events-none select-none z-20 flex flex-col justify-between p-6">
          
          {/* Top Panel matched strictly to the sleek capsule header in the image */}
          <header className="relative z-20 pt-6 flex justify-center w-full">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] py-4 px-12 shadow-[0_16px_40px_-6px_rgba(139,92,246,0.18),_inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-between w-full max-w-xl text-center">
              
              {/* SCORE SECTION */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold font-sans">
                  SCORE
                </span>
                <span className="text-2xl md:text-3xl font-light text-white tracking-wide mt-1.5 font-sans leading-none">
                  {stats.score.toLocaleString()}
                </span>
              </div>

              {/* Thin frosted divider */}
              <div className="h-9 w-[1px] bg-white/15"></div>

              {/* COMBO SECTION */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold font-sans">
                  COMBO
                </span>
                <span className="text-2xl md:text-3xl font-light text-white tracking-wide mt-1.5 font-sans leading-none">
                  {stats.combo}
                </span>
              </div>

              {/* Thin frosted divider */}
              <div className="h-9 w-[1px] bg-white/15"></div>

              {/* LIVES SECTION with glowing pink hearts */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold font-sans">
                  LIVES
                </span>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      className={`w-[18px] h-[18px] sm:w-5 sm:h-5 transition-all duration-300 ${
                        i < stats.health
                          ? 'text-pink-400 fill-pink-500/20 drop-shadow-[0_0_8px_rgba(244,114,182,0.9)] stroke-[2]'
                          : 'text-white/20 fill-transparent stroke-[1.5]'
                      }`}
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

            </div>
          </header>

          {/* Bottom Panel: Beautiful central Streak indicators matching the image exactly */}
          <div className="w-full flex justify-between items-end pb-4 relative">
            
            {/* Desktop backup notice / active tag */}
            <div className="absolute bottom-2 left-2 z-25 hidden sm:block pointer-events-none">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.18em]">
                WebXR Active  |  Precision Hand Sync
              </span>
            </div>

            {/* STREAK Center indicators capsule */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-full px-7 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.15),_inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center space-x-5">
                <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] text-white font-bold uppercase">
                  STREAK <span className="text-pink-400 font-extrabold ml-1.5 font-sans text-xs underline decoration-pink-500/30 underline-offset-2">{stats.combo}</span>
                </span>
                <div className="flex gap-2 items-center">
                  {(() => {
                    const activeDots = stats.combo > 0 ? (stats.combo % 8 === 0 ? 8 : stats.combo % 8) : 0;
                    const dotColors = [
                      'bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.9)] border border-pink-300/30 animate-pulse',
                      'bg-pink-300 shadow-[0_0_8px_rgba(244,114,182,0.9)] border border-pink-200/30',
                      'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)] border border-purple-300/30',
                      'bg-purple-300 shadow-[0_0_8px_rgba(192,132,252,0.9)] border border-purple-200/30',
                      'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)] border border-indigo-300/30',
                      'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)] border border-blue-300/30',
                      'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] border border-cyan-300/30',
                      'bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)] border border-cyan-200/30',
                    ];
                    return Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                          i < activeDots
                            ? dotColors[i % dotColors.length]
                            : 'bg-white/10 border border-white/5'
                        }`}
                      />
                    ));
                  })()}
                </div>
              </div>
            </div>

            {/* Quick exit option */}
            <div className="absolute bottom-2 right-2 z-25 pointer-events-auto">
              <button
                onClick={handleBackToMenu}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-slate-700/40 text-[9px] uppercase tracking-[0.2em] font-extrabold text-white rounded-full transition-all duration-305 shadow-md cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
              >
                Back to Menu
              </button>
            </div>

          </div>
        </div>
      )}

      {/* GAME OVER SCREEN */}
      {gameState === GameState.GameOver && (
        <div className="absolute z-35 inset-0 flex items-center justify-center p-4 bg-slate-950/15 backdrop-blur-md animate-fadeIn">
          <div className="bg-white/65 backdrop-blur-3xl border border-white/90 shadow-[0_32px_80px_-20px_rgba(167,139,250,0.25),_0_0_60px_rgba(255,255,255,0.45)] rounded-[26px] max-w-md w-full p-6 md:p-8 relative animate-fadeIn flex flex-col ring-1 ring-white/30 text-center">
            
            {/* Soft glowing concentric ring emblem matching the main page theme */}
            <div className="mx-auto w-12 h-12 rounded-full bg-white/70 border border-pink-200/90 shadow-[0_0_15px_rgba(236,72,153,0.12)] flex items-center justify-center text-pink-500 mb-5 relative">
              <div className="absolute inset-0.5 rounded-full border border-pink-300/30 animate-pulse" />
              <RotateCcw className="w-5 h-5 text-pink-500" />
            </div>

            <h2 className="text-3xl font-extralight tracking-[0.2em] text-slate-900 uppercase font-sans leading-none">
              SURVIVAL COMPLETE
            </h2>
            <span className="text-[9px] uppercase tracking-[0.22em] font-mono font-medium text-pink-500 mt-2.5 block">
              ARCADE RECORD PROTOCOL
            </span>

            {/* Summary statistics */}
            <div className="my-6 grid grid-cols-2 gap-4">
              <div className="bg-white/65 border border-white/80 p-4 rounded-xl shadow-[0_8px_24px_rgba(139,92,246,0.03)] backdrop-blur-xl flex flex-col justify-center items-center">
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.18em] uppercase font-mono">FINAL SCORE</span>
                <span className="text-3xl font-light text-slate-900 tracking-tight mt-1">{stats.score.toLocaleString()}</span>
              </div>
              <div className="bg-white/65 border border-white/80 p-4 rounded-xl shadow-[0_8px_24px_rgba(139,92,246,0.03)] backdrop-blur-xl flex flex-col justify-center items-center">
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.18em] uppercase font-mono">MAX STREAK</span>
                <span className="text-3xl font-light text-slate-900 tracking-tight mt-1">{stats.maxCombo}</span>
              </div>
            </div>

            {/* High score congratulations banner */}
            {stats.score >= highScore && stats.score > 0 && (
              <div className="mb-6 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-800 text-[9px] uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 shadow-sm animate-pulse">
                <Trophy className="w-4 h-4 text-emerald-500" />
                NEW PERSONAL BEST RECORD!
              </div>
            )}

            {/* Controls panel - High contrast highly visible styled buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleRestart}
                className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs tracking-[0.18em] uppercase rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.25)] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                PLAY SURVIVAL AGAIN
              </button>
              <button
                onClick={handleBackToMenu}
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs tracking-[0.18em] uppercase rounded-xl transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                BACK TO MAIN MENU
              </button>
            </div>

            {/* Subtle aesthetic footer */}
            <div className="text-center pt-4 border-t border-slate-200/40 mt-6 flex justify-between items-center text-[8px] text-[#9392ab] tracking-[0.15em] font-mono select-none pointer-events-none">
              <span>ARCADE UNIT v2.5</span>
              <span>TERMINAL DISCONNECT</span>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
