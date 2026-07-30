import React from 'react';
import { HERITAGE_MILESTONES } from '../data/brandContent';
import { Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeritageLegacy = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#F3EAD8]/25 relative overflow-hidden sandstone-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-xs">
            HERITAGE CHRONICLE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#3D1E22] leading-tight">
            Milestones of Trust & Devotion
          </h2>
          <p className="font-cormorant text-xl text-[#5C4A42] font-light italic leading-relaxed">
            Four decades of unwavering commitment to pure silk and artisan dignity.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative">
          {HERITAGE_MILESTONES.map((milestone, idx) => (
            <div
              key={milestone.year}
              className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-luxury hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-3xl font-bold text-[#A83232] group-hover:text-[#D4AF37] transition-colors">
                    {milestone.year}
                  </span>
                  <span className="text-[11px] font-cinzel font-bold text-[#8C6D38] px-3 py-1 rounded-full bg-[#F3EAD8]/70 border border-[#D4AF37]/25">
                    MILESTONE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-[#3D1E22] mb-2 leading-snug">
                  {milestone.title}
                </h3>

                <p className="text-xs text-[#6B5A52] font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5D7B8] flex items-center space-x-2 text-[11px] text-[#3D1E22] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#A83232] shrink-0" />
                <span>{milestone.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="mt-18 p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#D4AF37]/45 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-full bg-[#3D1E22] text-[#F3E5AB] flex items-center justify-center shrink-0 border border-[#D4AF37] shadow-md">
              <Award className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-cinzel text-base font-bold text-[#3D1E22] uppercase tracking-wide">
                SILK MARK INDIA ACCREDITED
              </h4>
              <p className="text-xs text-[#6B5A52] font-light mt-0.5 leading-relaxed">
                100% pure natural mulberry silk warp & weft, Government of India certified.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-full bg-[#3D1E22] text-[#F3E5AB] flex items-center justify-center shrink-0 border border-[#D4AF37] shadow-md">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-cinzel text-base font-bold text-[#3D1E22] uppercase tracking-wide">
                METALLURGIC ZARI CERTIFIED
              </h4>
              <p className="text-xs text-[#6B5A52] font-light mt-0.5 leading-relaxed">
                Authentic silver ribbon gilded with pure 24K gold — in every zari strand.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
