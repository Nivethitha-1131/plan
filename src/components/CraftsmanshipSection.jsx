import React, { useState } from 'react';
import { CRAFT_STAGES } from '../data/brandContent';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, Droplet, Sparkles, Grid, Hammer, Award, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Feather: <Feather className="w-5 h-5" />,
  Droplet: <Droplet className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Grid: <Grid className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

export const CraftsmanshipSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStage = CRAFT_STAGES[activeStep];

  return (
    <section id="craft" className="py-24 lg:py-36 bg-[#F3EAD8]/30 relative overflow-hidden sandstone-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-xs">
            THE 6 SACRED STAGES OF HANDLOOM
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#3D1E22] leading-tight">
            Anatomy of a Heritage Masterpiece
          </h2>
          <p className="font-cormorant text-xl text-[#5C4A42] font-light italic leading-relaxed">
            Six stages. One masterpiece.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-14">
          {CRAFT_STAGES.map((stage, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-500 border cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#3D1E22] text-[#FAF7F2] border-[#D4AF37] shadow-luxury scale-102'
                    : 'bg-[#FAF7F2] text-[#5C4A42] border-[#E5D7B8] hover:border-[#D4AF37]/50 hover:bg-[#F3EAD8]/60 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-cinzel font-bold px-2.5 py-0.5 rounded-full ${
                      isActive ? 'bg-[#D4AF37] text-[#3D1E22]' : 'bg-[#E5D7B8] text-[#3D1E22]'
                    }`}
                  >
                    0{stage.step}
                  </span>
                  <span className={isActive ? 'text-[#D4AF37]' : 'text-[#8C6D38]'}>
                    {iconMap[stage.iconName]}
                  </span>
                </div>
                <div>
                  <h4
                    className={`font-cinzel text-xs font-bold leading-snug line-clamp-2 ${
                      isActive ? 'text-[#F3E5AB]' : 'text-[#3D1E22]'
                    }`}
                  >
                    {stage.title}
                  </h4>
                  <p
                    className={`text-[10px] mt-1 font-light ${
                      isActive ? 'text-[#E5D7B8]' : 'text-[#8A756C]'
                    }`}
                  >
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Active Highlight Card */}
        <div className="bg-[#FAF7F2] rounded-3xl p-7 sm:p-12 border border-[#D4AF37]/40 shadow-luxury relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Image Frame */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-luxury aspect-4/3 relative group bg-[#E8DCC4]">
                  <img
                    src={currentStage.image}
                    alt={currentStage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <span className="text-xs font-cinzel tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/85 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 shadow-xs">
                      STAGE 0{currentStage.step} OF 06
                    </span>
                    <span className="text-xs text-[#E5D7B8] font-light">Kanchipuram Atelier</span>
                  </div>
                </div>
              </div>

              {/* Stage Copy Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs tracking-[0.25em] font-bold text-[#8C6D38] uppercase">
                    {currentStage.subtitle}
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3D1E22] mt-1.5 leading-snug">
                    {currentStage.title}
                  </h3>
                </div>

                <p className="font-cormorant text-xl text-[#5C4A42] leading-relaxed font-normal italic">
                  "{currentStage.description}"
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F3EAD8]/60 border border-[#D4AF37]/35 flex items-start space-x-3.5 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#A83232] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5C4A42] font-light leading-relaxed">
                    {currentStage.technique}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E5D7B8]">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-5 py-2.5 rounded-full border border-[#D4AF37]/40 text-xs font-semibold text-[#3D1E22] hover:bg-[#F3EAD8] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← PREVIOUS STAGE
                  </button>
                  <span className="text-xs font-cinzel font-bold text-[#8C6D38]">
                    0{currentStage.step} / 06
                  </span>
                  <button
                    disabled={activeStep === CRAFT_STAGES.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(CRAFT_STAGES.length - 1, prev + 1))}
                    className="px-5 py-2.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] text-xs font-semibold hover:bg-[#582B30] disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-[#D4AF37]/35 shadow-xs"
                  >
                    NEXT STAGE →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
