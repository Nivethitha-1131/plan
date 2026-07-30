import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

/* Intricate Heritage Golden Mandala SVG */
const MandalaArt = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="200" r="194" stroke="#D4AF37" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.85" />
    <circle cx="200" cy="200" r="182" stroke="#D4AF37" strokeWidth="2.2" opacity="0.95" />
    <circle cx="200" cy="200" r="165" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />

    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180;
      const x1 = 200 + 180 * Math.cos(angle);
      const y1 = 200 + 180 * Math.sin(angle);
      const cx1 = 200 + 120 * Math.cos(angle - 0.25);
      const cy1 = 200 + 120 * Math.sin(angle - 0.25);
      const cx2 = 200 + 120 * Math.cos(angle + 0.25);
      const cy2 = 200 + 120 * Math.sin(angle + 0.25);
      return (
        <path
          key={i}
          d={`M 200 200 Q ${cx1} ${cy1} ${x1} ${y1} Q ${cx2} ${cy2} 200 200`}
          stroke="#D4AF37"
          strokeWidth="1.8"
          fill="rgba(212,175,55,0.06)"
          opacity="0.9"
        />
      );
    })}

    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x = 200 + 135 * Math.cos(angle);
      const y = 200 + 135 * Math.sin(angle);
      return (
        <g key={i}>
          <circle cx={x} cy={y} r="18" stroke="#D4AF37" strokeWidth="1.6" fill="rgba(212,175,55,0.05)" opacity="0.85" />
          <circle cx={x} cy={y} r="3.5" fill="#D4AF37" opacity="1" />
        </g>
      );
    })}

    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={200 + 50 * Math.cos(angle)}
          y1={200 + 50 * Math.sin(angle)}
          x2={200 + 160 * Math.cos(angle)}
          y2={200 + 160 * Math.sin(angle)}
          stroke="#D4AF37"
          strokeWidth="1.2"
          opacity="0.75"
        />
      );
    })}
    <circle cx="200" cy="200" r="50" stroke="#D4AF37" strokeWidth="2.2" opacity="0.95" />
  </svg>
);

export function CinematicEntry({ onComplete }) {
  const [phase, setPhase] = useState('sealed');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 1800);
    const t2 = setTimeout(() => onComplete(), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="grand-entry"
          className="fixed inset-0 z-9999 overflow-hidden flex items-center justify-center select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT DOOR */}
          <motion.div
            className="absolute inset-y-0 left-0 w-[50.05%] z-30 bg-[#FAF7F2] marble-subtle overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: phase === 'opening' ? '-100%' : '0%' }}
            transition={{ duration: 2.4, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
          </motion.div>

          {/* RIGHT DOOR */}
          <motion.div
            className="absolute inset-y-0 right-0 w-[50.05%] z-30 bg-[#FAF7F2] marble-subtle overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: phase === 'opening' ? '100%' : '0%' }}
            transition={{ duration: 2.4, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
          </motion.div>

          {/* MANDALA — responsive size using vmin */}
          <motion.div
            className="fixed inset-0 z-35 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: phase === 'opening' ? 0 : 1,
              scale: phase === 'opening' ? 1.15 : 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              className="shrink-0"
              style={{ width: 'min(80vmin, 520px)', height: 'min(80vmin, 520px)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <MandalaArt className="w-full h-full text-[#D4AF37]" />
            </motion.div>
          </motion.div>

          {/* CENTER LOGO */}
          <motion.div
            className="relative z-40 flex flex-col items-center text-center px-4 pointer-events-none"
            animate={{
              opacity: phase === 'opening' ? 0 : 1,
              scale: phase === 'opening' ? 1.12 : 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none z-0"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,175,55,0.55) 0%, rgba(243,234,216,0.3) 60%, transparent 80%)',
              }}
            />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20"
            >
              <img
                src="/logo-burgundy-translucent.png"
                alt="Shree Samunthrikaa Silks & Sarees"
                className="rounded-[20px] sm:rounded-[28px] border-2 sm:border-3 border-[#D4AF37]/80 shadow-2xl object-contain backdrop-blur-xs"
                style={{
                  width: 'min(52vw, 220px)',
                  height: 'auto',
                  filter:
                    'drop-shadow(0 16px 36px rgba(139,90,43,0.35)) drop-shadow(0 0 25px rgba(212,175,55,0.4))',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
