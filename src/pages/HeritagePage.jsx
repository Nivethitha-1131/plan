import React from 'react';
import { Footer } from '../components/Footer';
import { BrandStory } from '../components/BrandStory';
import { HeritageLegacy } from '../components/HeritageLegacy';
import { CraftsmanshipSection } from '../components/CraftsmanshipSection';
import { ArchitecturalGallery } from '../components/ArchitecturalGallery';
import { Sparkles } from 'lucide-react';

export function HeritagePage() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Page Hero */}
      <section className="pt-40 pb-16 bg-[#FDFBF7] ambient-sunlight relative overflow-hidden">
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5 relative z-10">
          <span className="inline-flex items-center space-x-2.5 text-[11px] tracking-[0.32em] text-[#8C6D38] font-semibold uppercase px-5 py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>SINCE 1978 • KANCHIPURAM</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#3D1E22] leading-tight tracking-wide">
            Our Heritage
          </h1>
          <p className="font-cormorant text-xl sm:text-2xl text-[#5C4A42] font-light italic leading-relaxed">
            Four decades of devotion, craftsmanship, and an unbroken lineage of pure silk mastery.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* Heritage Milestones */}
      <HeritageLegacy />

      {/* Full Craftsmanship Journey */}
      <CraftsmanshipSection />

      {/* Architectural Gallery */}
      <ArchitecturalGallery />

      {/* Closing Brand Message */}
      <section className="py-20 lg:py-28 bg-[#3D1E22] relative overflow-hidden">
        <div className="absolute inset-0 jaali-pattern opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 relative z-10">
          <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FDFBF7] leading-tight">
            A Legacy That Lives in Every Thread
          </h2>
          <p className="font-cormorant text-xl sm:text-2xl text-[#E5D7B8] font-light italic leading-relaxed">
            "Centuries of devotion, geometric poetry, and timeless Indian grandeur — in every thread."
          </p>
          <span className="font-cinzel text-xs tracking-widest uppercase font-bold text-[#8C6D38]">
            — Master Weavers Council • Kanchipuram
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
