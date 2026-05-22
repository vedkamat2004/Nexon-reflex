class AudioSynthesizer {
  private ctx: AudioContext | null = null;
  private droneOscs: { osc: OscillatorNode; gain: GainNode }[] = [];
  private mainGain: GainNode | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.mainGain = this.ctx.createGain();
        this.mainGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        this.mainGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPunch() {
    this.initCtx();
    if (!this.ctx || !this.mainGain) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const osc3 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Fundamental sparkling modern bell tuning (E6)
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1320, now);
    osc1.frequency.exponentialRampToValueAtTime(1180, now + 0.45);

    // High overtones for metallic "tingg" character (C7 harmonic)
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(2093, now);
    osc2.frequency.exponentialRampToValueAtTime(1950, now + 0.4);

    // Sharp attack transient (G7 brilliant pluck)
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(3136, now);
    osc3.frequency.exponentialRampToValueAtTime(2700, now + 0.15);

    // Exponential bell ring decaying decay envelope for a gorgeous chime ring-out
    gain.gain.setValueAtTime(0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(gain);
    gain.connect(this.mainGain);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + 0.58);
    osc2.stop(now + 0.58);
    osc3.stop(now + 0.58);
  }

  playSlice() {
    this.initCtx();
    if (!this.ctx || !this.mainGain) return;
    const now = this.ctx.currentTime;

    // Synthesize noise for slicing/swoosh
    const bufferSize = this.ctx.sampleRate * 0.15; // 0.15s
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = this.ctx.createBufferSource();
    noiseNode.buffer = buffer;

    // Filter to make it sound like a clean swing
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1000, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.12);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    noiseNode.connect(filter);
    filter.connect(gain);
    gain.connect(this.mainGain);

    noiseNode.start(now);
    noiseNode.stop(now + 0.16);
  }

  playGrab() {
    this.initCtx();
    if (!this.ctx || !this.mainGain) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.setValueAtTime(880, now + 0.05); // A5

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1174.66, now); // D6

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.mainGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.4);
    osc2.stop(now + 0.4);
  }

  playDodge() {
    this.initCtx();
    if (!this.ctx || !this.mainGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.1);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.linearRampToValueAtTime(0.8, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.mainGain);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  playError() {
    this.initCtx();
    if (!this.ctx || !this.mainGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.setValueAtTime(90, now + 0.1);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.mainGain);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  playCombo() {
    this.initCtx();
    if (!this.ctx || !this.mainGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(261.63, now); // C4
    osc.frequency.setValueAtTime(329.63, now + 0.06); // E4
    osc.frequency.setValueAtTime(392.00, now + 0.12); // G4
    osc.frequency.setValueAtTime(523.25, now + 0.18); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.24); // E5

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(this.mainGain);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  startDrone() {
    // Disabled to avoid annoying continuous synthesizer hum. Soft action tones are kept.
  }

  stopDrone() {
    // Disabled to avoid annoying continuous synthesizer hum.
  }
}

export const gameAudio = new AudioSynthesizer();
