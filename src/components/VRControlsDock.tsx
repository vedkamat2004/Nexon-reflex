import React, { useState } from 'react';
import { Zap, Hand, Shield, Sparkles, Target, Settings, Eye, HelpCircle, Activity } from 'lucide-react';

export const VRControlsDock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'targets' | 'gestures' | 'hardware'>('targets');

  return (
    <div
      id="vr-controls-dock-root"
      className="bg-white/45 border border-white/90 rounded-2xl p-5 shadow-[0_8px_32px_rgba(139,92,246,0.04)] backdrop-blur-2xl flex flex-col space-y-4 ring-1 ring-white/30"
    >
      {/* Dock Header */}
      <div className="flex items-center justify-between border-b border-slate-200/50 pb-2.5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-violet-600 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800">
            VR Controls & Action Center
          </span>
        </div>
        <span className="px-2 py-0.5 bg-violet-100 text-[8px] font-mono text-violet-700 rounded-md font-semibold tracking-wider uppercase">
          INTEGRATED v2.5
        </span>
      </div>

      {/* Interactive Tabs Row */}
      <div className="flex gap-1.5 p-1 bg-slate-900/5 rounded-xl border border-white/50">
        <button
          onClick={() => setActiveTab('targets')}
          className={`flex-1 py-1.5 px-1 text-center rounded-lg text-[9px] uppercase tracking-wider font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'targets'
              ? 'bg-white text-violet-700 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-violet-100'
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/30'
          }`}
        >
          <Target className="w-3 h-3" />
          Gameplay
        </button>

        <button
          onClick={() => setActiveTab('gestures')}
          className={`flex-1 py-1.5 px-1 text-center rounded-lg text-[9px] uppercase tracking-wider font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'gestures'
              ? 'bg-white text-violet-700 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-violet-100'
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/30'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          Gestures
        </button>

        <button
          onClick={() => setActiveTab('hardware')}
          className={`flex-1 py-1.5 px-1 text-center rounded-lg text-[9px] uppercase tracking-wider font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'hardware'
              ? 'bg-white text-violet-700 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-violet-100'
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/30'
          }`}
        >
          <Settings className="w-3 h-3" />
          Setup
        </button>
      </div>

      {/* Tab Area Content */}
      <div className="min-h-[175px] flex flex-col justify-between">
        {activeTab === 'targets' && (
          <div className="space-y-2.5 animate-fadeIn">
            {/* Red Punch target */}
            <div className="flex items-start gap-2.5 p-2 bg-rose-50/50 border border-rose-100/70 rounded-xl">
              <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">RED TARGET → PUNCH (FIST)</h4>
                <p className="text-[10px] text-slate-600 font-light mt-0.5 leading-relaxed">
                  Strike the energetic target with an explicit fist speed exceeding <span className="font-semibold text-rose-600">1.2 m/s</span>. Soft touches generate vital damage!
                </p>
              </div>
            </div>

            {/* Blue Grab target */}
            <div className="flex items-start gap-2.5 p-2 bg-blue-50/50 border border-blue-100/70 rounded-xl">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.4)]">
                <Hand className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">BLUE TARGET → GRAB & SQUEEZE</h4>
                <p className="text-[10px] text-slate-600 font-light mt-0.5 leading-relaxed">
                  Touch the target space and hold down the controller <span className="font-semibold text-blue-600">Grip / Trigger</span>, or maintain a tight hand-tracking pinch gesture.
                </p>
              </div>
            </div>

            {/* Green Dodge obstacle */}
            <div className="flex items-start gap-2.5 p-2 bg-emerald-50/50 border border-emerald-100/70 rounded-xl">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">GREEN OBSTACLE → PHYSICAL DODGE</h4>
                <p className="text-[10px] text-slate-600 font-light mt-0.5 leading-relaxed">
                  Avoid touching the upcoming massive prism! Shift your <span className="font-semibold text-emerald-600">physical weight & headset laterally</span> to the side lane.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gestures' && (
          <div className="space-y-3.5 animate-fadeIn text-[10px] text-slate-600 font-light leading-relaxed">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-violet-50/50 border border-violet-100/60 rounded-xl">
                <span className="font-bold text-violet-700 uppercase tracking-widest block mb-0.5 text-[8px] font-mono">LASER GUIDANCE</span>
                In VR menus, laser rays project continuously from either hand's wrist center or controller tip.
              </div>
              <div className="p-2 bg-purple-50/50 border border-purple-100/60 rounded-xl">
                <span className="font-bold text-purple-700 uppercase tracking-widest block mb-0.5 text-[8px] font-mono">DANCE RADAR</span>
                Scores and multipliers sit directly floating of you, optimized matching standard desktop HUD.
              </div>
            </div>

            <div className="p-2 bg-pink-50/50 border border-pink-100/70 rounded-xl flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500 shrink-0" />
              <div>
                <span className="font-bold text-pink-700 uppercase text-[8px] tracking-wider block">QUICK SYSTEM BACKUP SHORTCUTS</span>
                <span>Pinch/squeeze the <strong className="text-pink-600">Left hand</strong> to instantly Play Again, and the <strong className="text-indigo-600">Right hand</strong> to Back to Menu!</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hardware' && (
          <div className="space-y-3 animate-fadeIn text-[10px] text-slate-600 font-light leading-relaxed">
            <div className="flex gap-2.5 items-start">
              <div className="p-1 px-1.5 bg-slate-100 text-[8px] font-mono tracking-wider font-extrabold rounded">STEP 1</div>
              <p>Launch your Quest, Vision Pro, or Windows Mixed Reality browser (Chromium based).</p>
            </div>
            <div className="flex gap-2.5 items-start">
              <div className="p-1 px-1.5 bg-slate-100 text-[8px] font-mono tracking-wider font-extrabold rounded">STEP 2</div>
              <p>Navigate to this secure HTTPS App URL, tap <strong className="text-violet-600">BEGIN CHALLENGE</strong>, then select <strong className="text-violet-600">Enter VR Arcade Map</strong>.</p>
            </div>
            <div className="flex gap-2.5 items-start border-t border-slate-200/50 pt-2 flex-col">
              <div className="flex items-center gap-1.5">
                <p className="text-[8px] uppercase tracking-wider text-amber-600 font-extrabold font-mono bg-amber-50 px-1 border border-amber-200 rounded">
                  SUPPORTED DEVICES
                </p>
              </div>
              <p className="text-[9px] text-[#7d7b97]">
                Meta Quest 2/3/Pro (with hand tracking & controllers), Apple Vision Pro, Valve Index, HTC Vive, Pico 4.
              </p>
            </div>
          </div>
        )}

        {/* Informative Help Note */}
        <div className="border-t border-slate-200/45 pt-2.5 mt-2 flex items-center justify-between text-[8px] text-slate-400 font-mono select-none">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-slate-400" />
            LIVE COGNITIVE SYNCHRONIZATION
          </span>
          <span>120Hz LATENCY TARGET</span>
        </div>
      </div>
    </div>
  );
};
