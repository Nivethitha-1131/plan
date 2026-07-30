import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, Shield, Gem, Users } from 'lucide-react';

export const BridalAtelier = ({ onOpenAppointment }) => {
  return (
    <section id="bridal" className="py-24 lg:py-36 bg-[#FAF7F2] golden-hour-glow relative overflow-hidden">
      {/* Background Architectural Jaali Overlay */}
      <div className="absolute inset-0 jaali-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center space-x-2.5 text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase bg-[#F3EAD8] px-4.5 py-1.5 rounded-full border border-[#D4AF37]/35 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE BESPOKE BRIDAL SANCTUARY</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold leading-tight text-[#3D1E22]">
              The Sacred Samunthrikaa Bridal Trousseau
            </h2>

            <p className="font-cormorant text-xl sm:text-2xl text-[#5C4A42] font-light italic leading-relaxed">
              "Royal heritage. Pure 24K gold zari. A drape cherished across generations."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5D7B8]">
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <Users className="w-5 h-5 text-[#A83232] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase">
                    DEDICATED BRIDAL STYLIST
                  </h4>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <Gem className="w-5 h-5 text-[#A83232] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase">
                    BESPOKE COLOR MATCHING
                  </h4>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <Shield className="w-5 h-5 text-[#A83232] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase">
                    HEIRLOOM ZARI GUARANTEE
                  </h4>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F3EAD8]/50 border border-[#D4AF37]/30 shadow-xs">
                <Heart className="w-5 h-5 text-[#A83232] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase">
                    HERITAGE HOSPITALITY
                  </h4>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <button
                onClick={() => onOpenAppointment('Bridal Trousseau')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-luxury flex items-center justify-center space-x-2.5 border border-[#D4AF37]/40 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>RESERVE PRIVATE BRIDAL SUITE CONSULTATION</span>
              </button>
            </div>

          </div>

          {/* Architectural Image Frame Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="heritage-arch-top overflow-hidden border-2 border-[#D4AF37]/45 shadow-luxury bg-[#2C1810]">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
                  alt="Bridal Silk Saree Consultation"
                  referrerPolicy="no-referrer"
                  className="w-full h-135 object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-7 -left-4 sm:-left-8 p-6 rounded-2xl bg-[#FAF7F2] text-[#3D1E22] border-2 border-[#D4AF37] shadow-luxury max-w-xs hidden sm:block">
                <p className="font-cinzel text-xs font-bold tracking-wider uppercase text-[#8C6D38]">
                  HERITAGE BRIDAL ARCHIVE
                </p>
                <p className="font-cormorant text-base italic text-[#5C4A42] mt-1">
                  "Over 15,000 royal brides dressed in pure Kanchipuram silk since 1978."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
