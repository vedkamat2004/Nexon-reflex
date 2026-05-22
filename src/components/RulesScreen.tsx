import React from 'react';
import { Shield, Sparkles, Zap, Hand, MoveLeft, Eye } from 'lucide-react';

export const RulesScreen: React.FC = () => {
  const actions = [
    {
      color: 'bg-rose-100 border-rose-300 text-rose-600',
      glow: 'shadow-rose-100/50',
      label: 'Punch',
      target: 'Red Object',
      symbol: 'Wireframe Fist',
      vr: 'Strike target with high velocity (hand movement > 1.2 m/s)',
      desktop: 'Click directly on the incoming red target',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      color: 'bg-blue-100 border-blue-300 text-blue-600',
      glow: 'shadow-blue-100/50',
      label: 'Grab',
      target: 'Blue Object',
      symbol: 'Inner Torus Ring',
      vr: 'Hold down the grab trigger / squeeze grip when touching target',
      desktop: 'Hold down click or click active blue target in strike zone',
      icon: <Hand className="w-5 h-5" />,
    },
    {
      color: 'bg-emerald-100 border-emerald-300 text-emerald-600',
      glow: 'shadow-emerald-100/50',
      label: 'Dodge',
      target: 'Green Prism',
      symbol: 'Direction Arrows',
      vr: 'Physical body shift - lean left or right to avoid the prism',
      desktop: 'Press A / D keys (or Left / Right Arrow keys) to slide camera',
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  return (
    <div id="rules-screen-container" className="flex flex-col gap-5 text-slate-800 animate-fadeIn select-none pb-6">
      {/* Visual Header / Quote panel */}
      <div className="p-4 bg-violet-200/40 border-2 border-white/80 rounded-2xl text-center shadow-[0_8px_24px_rgba(139,92,246,0.04)] backdrop-blur-xl">
        <p className="text-xs font-semibold tracking-wider text-violet-600 uppercase flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-violet-500" />
          Color + Symbol = Reaction Code
        </p>
        <p className="text-sm mt-1 text-slate-650 font-light">
          Correct reactions increase your score and build combo multipliers. Mistakes, incorrect triggers, or missed targets cause vitality damage.
        </p>
      </div>

      {/* Grid of Action Rules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action, idx) => (
          <div
            id={`action-${action.label.toLowerCase()}`}
            key={idx}
            className={`p-5 rounded-2xl border-2 border-white/80 bg-white/60 backdrop-blur-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              {/* Header block info */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-lg border flex items-center gap-1 ${action.color}`}>
                  {action.icon}
                  {action.label}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {action.target}
                </span>
              </div>

              {/* Symbol Description */}
              <div className="mb-4">
                <p className="text-xs text-slate-500">
                  Indicators: <span className="text-slate-800 font-semibold">{action.symbol}</span>
                </p>
              </div>

              {/* Action mappings */}
              <div className="space-y-3 mt-3 pt-3 border-t border-slate-200/50">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-indigo-500 font-semibold block mb-0.5">Desktop Controls</span>
                  <p className="text-xs text-slate-650 leading-relaxed font-light">{action.desktop}</p>
                </div>
                <div className="h-px bg-slate-200/40" />
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-purple-500 font-semibold block mb-0.5">VR Hands & Controllers</span>
                  <p className="text-xs text-[#525166] leading-relaxed font-light">{action.vr}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VR Immersive Notice */}
      <div className="p-4 bg-sky-200/40 border-2 border-white/80 rounded-2xl flex gap-3 shadow-[0_8px_24px_rgba(56,189,248,0.04)] backdrop-blur-xl">
        <div className="p-2 bg-sky-500/15 text-sky-600 rounded-xl h-fit">
          <Eye className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-sky-600 uppercase">PRO VR EXPERIENCE</h4>
          <p className="text-xs mt-0.5 text-slate-600 leading-relaxed font-light">
            WebXR VR mode is integrated. Simply load Neon Reflex on any VR-capable web browser (like Oculus Quest browser) and click <strong>&quot;Enter VR Arcade Map&quot;</strong>. Physical camera/headset location coordinates are synchronized with green dodging meshes!
          </p>
        </div>
      </div>
    </div>
  );
};
