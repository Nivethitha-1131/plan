import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const SoundscapePlayer = ({ isPlaying, onToggle }) => {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  useEffect(() => {
    if (isPlaying) {
      startSanctuarySoundscape();
    } else {
      stopSanctuarySoundscape();
    }

    return () => {
      stopSanctuarySoundscape();
    };
  }, [isPlaying]);

  const startSanctuarySoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain for ambient background volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Gentle Tanpura / Sanctuary Drone Frequencies (Root: 108Hz, 5th: 162Hz, Octave: 216Hz)
      const frequencies = [108, 162, 216, 432];
      oscillatorsRef.current = frequencies.map((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // LFO for subtle breathing acoustic pulsation
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);

        lfo.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(0.02, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        return osc;
      });
    } catch {
      // AudioContext fallback
    }
  };

  const stopSanctuarySoundscape = () => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    oscillatorsRef.current = [];

    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.suspend();
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <button
        onClick={onToggle}
        className={`p-3.5 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-2 border cursor-pointer ${
          isPlaying
            ? 'bg-[#3D1E22] text-[#F3E5AB] border-[#D4AF37] scale-105 shadow-[#D4AF37]/20'
            : 'bg-[#FAF7F2] text-[#3D1E22] border-[#D4AF37]/40 hover:border-[#D4AF37]'
        }`}
        title={isPlaying ? 'Mute Sanctuary Tanpura Soundscape' : 'Enable Sanctuary Ambient Soundscape'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            <span className="font-cinzel text-xs font-bold tracking-widest uppercase pr-1 text-[#F3E5AB]">
              SANCTUARY SOUNDSCAPE
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 text-[#8A756C]" />
            <span className="font-cinzel text-xs font-bold tracking-widest uppercase pr-1 text-[#5C4A42]">
              PLAY SOUNDSCAPE
            </span>
          </>
        )}
      </button>
    </div>
  );
};
