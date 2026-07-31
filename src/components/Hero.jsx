
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES, BRAND_DETAILS } from '../data/brandContent';
import { ChevronRight, ChevronLeft, ShieldCheck, Compass, Calendar, Sparkles } from 'lucide-react';

export const Hero = ({ onOpenAppointment }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-20 lg:pb-28 overflow-hidden bg-[#FDFBF7] ambient-sunlight">
      {/* Background Architectural Jaali Pattern */}
      <div className="absolute inset-0 jaali-pattern pointer-events-none opacity-30 sm:opacity-40" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Top badge */}
        <div className="text-center mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 text-[9px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.32em] text-[#8C7356] font-semibold uppercase px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] shrink-0" />
            <span>EST. {BRAND_DETAILS.established} • KANCHIPURAM SILK</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] shrink-0" />
          </span>
        </div>

        {/* Hero Title & Subtitle - Cleanly placed above frame */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3 px-2">
          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider leading-tight text-[#3D1E22]">
            TIMELESS HERITAGE, REIMAGINED FOR ETERNITY
          </h1>
          <p className="font-cormorant text-base sm:text-xl lg:text-2xl text-[#8C6D38] italic font-light">
            Pure handwoven Kanchipuram silk • 24K Tested Gold Zari • Silk Mark India Certified
          </p>
        </div>

        {/* Hero Framed Canvas */}
        <div className="relative mx-auto max-w-5xl">
          {/* Arch Frame */}
          <div className="relative p-1.5 sm:p-3 lg:p-4 rounded-t-[100px] sm:rounded-t-[160px] lg:rounded-t-[230px] rounded-b-2xl sm:rounded-b-3xl bg-[#F5F2ED] shadow-luxury border border-[#D4AF37]/35 ring-1 ring-[#D4AF37]/20">
            {/* Slide canvas */}
            <div className="relative h-85 sm:h-125 lg:h-150 rounded-t-[90px] sm:rounded-t-[150px] lg:rounded-t-[220px] rounded-b-xl sm:rounded-b-2xl overflow-hidden shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={HERO_SLIDES[currentSlide].id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={HERO_SLIDES[currentSlide].image}
                    alt={HERO_SLIDES[currentSlide].title}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Subtle edge vignette for depth */}
                  <div className="absolute inset-0 bg-linear-to-b from-[#1A1A1A]/10 via-transparent to-[#1A1A1A]/30 pointer-events-none" />

                  {/* Clean Slide Badge at Bottom Right */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                    <span className="text-[9px] sm:text-xs tracking-[0.2em] text-[#F3E5AB] uppercase font-cinzel font-semibold bg-[#3D1E22]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-md">
                      {HERO_SLIDES[currentSlide].architecturalCaption}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] hover:scale-105 transition-all border border-[#D4AF37]/40 shadow-lg z-20 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#3D1E22]" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] hover:scale-105 transition-all border border-[#D4AF37]/40 shadow-lg z-20 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#3D1E22]" />
              </button>
            </div>
          </div>

          {/* CTAs and Dots Section */}
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
              <Link
                to="/collections"
                className="flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all shadow-lg border border-[#D4AF37]/50 min-h-12 w-full sm:w-auto"
              >
                <Compass className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>EXPLORE MASTERWORKS</span>
              </Link>
              <button
                onClick={onOpenAppointment}
                className="flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full bg-[#FAF7F2] text-[#3D1E22] hover:bg-[#F3EAD8] border border-[#D4AF37]/60 font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all cursor-pointer shadow-md min-h-12 w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-[#8C6D38] shrink-0" />
                <span>BOOK CONSULTATION</span>
              </button>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center justify-center gap-2.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    currentSlide === idx ? 'w-8 sm:w-9 bg-[#3D1E22] shadow-xs' : 'w-2 bg-[#8C6D38]/40 hover:bg-[#8C6D38]/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Heritage Assurance Badges */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-7 max-w-5xl mx-auto">
          {[
            { icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />, label: 'SILK MARK CERTIFIED' },
            { icon: <span className="font-cinzel font-bold text-sm text-[#D4AF37]">24K</span>, label: 'PURE GOLD TESTED ZARI' },
            { icon: <span className="font-cinzel font-bold text-sm text-[#D4AF37]">180h</span>, label: 'HEREDITARY HANDLOOM' },
          ].map(({ icon, label }) => (
            <div key={label} className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/30 shadow-luxury flex items-center gap-4">
              <div className="p-3 sm:p-3.5 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/40 shrink-0 shadow-xs flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12">
                {icon}
              </div>
              <h4 className="font-cinzel text-[10px] sm:text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
                {label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
