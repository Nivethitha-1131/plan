import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const BrandStory = () => {
  return (
    <section id="story" className="py-24 lg:py-36 bg-[#FAF7F2] marble-subtle relative overflow-hidden">
      {/* Decorative Subtle Jaali Divider Line */}
      <div className="gold-divider absolute inset-x-0 top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          
          {/* Architectural Image Collage Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Architectural Arch Image */}
              <div className="heritage-arch-top overflow-hidden border-2 border-[#D4AF37]/40 shadow-luxury bg-[#E8DCC4]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
                  alt="Heritage Indian Mansion Courtyard"
                  referrerPolicy="no-referrer"
                  className="w-full h-120 sm:h-135 object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Accent Craft Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-10 -right-4 sm:-right-8 w-48 sm:w-60 rounded-2xl overflow-hidden border-4 border-[#FAF7F2] shadow-2xl bg-[#3D1E22] hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Pure Silk Zari Handloom Weaving"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3.5 text-center bg-[#3D1E22] text-[#F3E5AB]">
                  <p className="font-cinzel text-[10px] tracking-[0.2em] uppercase font-semibold">
                    KANCHIPURAM PIT LOOM
                  </p>
                  <p className="font-cormorant text-xs italic text-[#D4AF37]">Pure Korvai Interlock</p>
                </div>
              </motion.div>

              {/* Archival Seal Tag */}
              <div className="absolute top-6 left-6 p-4 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#D4AF37]/45 shadow-luxury text-center hidden sm:block">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto text-[#3D1E22] font-cinzel font-bold text-xs">
                  1978
                </div>
                <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#8C6D38] block mt-1.5">
                  HERITAGE LEGACY
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="inline-flex items-center space-x-2.5 text-xs tracking-[0.28em] text-[#8C6D38] font-semibold uppercase">
              <span className="w-7 h-px bg-[#D4AF37]" />
              <span>THE BRAND PHILOSOPHY</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-[#3D1E22] font-bold leading-tight tracking-wide">
              Where Architecture Meets the Supreme Sacred Art of Silk
            </h2>

            <p className="font-cormorant text-xl sm:text-2xl text-[#5C4A42] leading-relaxed font-normal">
              At <strong className="font-semibold text-[#3D1E22]">SHREE SAMUNTHRIKAA SILKS & SAREES</strong>, a saree is living architecture — woven from pure mulberry silk, silver, and 24K gold zari.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5D7B8]">
              <div className="p-5 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] tracking-wider uppercase">
                  UNCOMPROMISED PURITY
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] tracking-wider uppercase">
                  KORVAI MASTERY
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] tracking-wider uppercase">
                  WARM HOSPITALITY
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] tracking-wider uppercase">
                  HEIRLOOM VALUE
                </h4>
              </div>
            </div>

            {/* Founder Quote - Lightened Warm Ivory Elevated Card */}
            <blockquote className="p-6 rounded-2xl bg-[#FDFBF7] text-[#3D1E22] border-2 border-[#D4AF37]/40 shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                <Sparkles className="w-16 h-16 text-[#D4AF37]" />
              </div>
              <p className="font-cormorant text-lg sm:text-xl italic font-normal text-[#5C4A42] leading-relaxed">
                "Centuries of devotion, geometric poetry, and timeless Indian grandeur — in every thread."
              </p>
              <footer className="mt-3 text-right">
                <span className="font-cinzel text-xs tracking-widest uppercase font-bold text-[#8C6D38]">
                  — Master Weavers Council • Kanchipuram
                </span>
              </footer>
            </blockquote>

          </div>

        </div>
      </div>
    </section>
  );
};
