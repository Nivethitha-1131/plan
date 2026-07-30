import React, { useState } from 'react';
import { SIGNATURE_MASTERWORKS } from '../data/brandContent';
import { motion } from 'motion/react';
import { Sparkles, Eye, Clock, Calendar } from 'lucide-react';

export const CuratedMasterworks = ({
  onSelectSaree,
  onOpenAppointment,
}) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { label: 'ALL MASTERWORKS', value: 'ALL' },
    { label: 'KANCHIPURAM BRIDAL', value: 'Bridal Kanchipuram Heritage' },
    { label: 'ROYAL TISSUE GOLD', value: 'Royal Heirloom Tissue Silk' },
    { label: 'CLASSIC KORVAI', value: 'Classic Kanchipuram Korvai' },
    { label: 'CONTEMPORARY LUXURY', value: 'Contemporary Luxury Silk' },
  ];

  const filteredSarees = activeCategory === 'ALL'
    ? SIGNATURE_MASTERWORKS
    : SIGNATURE_MASTERWORKS.filter((s) => s.lineage.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="masterworks" className="py-24 lg:py-36 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4 py-1.5 rounded-full bg-[#F3EAD8] border border-[#D4AF37]/35 shadow-xs">
            CURATED ARCHIVAL GALLERY
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#3D1E22] leading-tight">
            The Sovereign Masterworks
          </h2>
          <p className="font-cormorant text-xl text-[#5C4A42] font-light italic leading-relaxed">
            Each drape is a singular masterpiece of Kanchipuram handloom, reserved for connoisseurs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-cinzel font-bold tracking-wider uppercase transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-[#3D1E22] text-[#F3E5AB] border border-[#D4AF37] shadow-luxury'
                    : 'bg-[#F3EAD8]/50 text-[#5C4A42] hover:bg-[#F3EAD8] border border-[#E5D7B8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masterworks Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredSarees.map((saree) => (
            <motion.div
              key={saree.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-luxury hover:shadow-2xl transition-all duration-700 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-3/4 overflow-hidden bg-[#E8DCC4] cursor-pointer" onClick={() => onSelectSaree(saree)}>
                  <img
                    src={saree.image}
                    alt={saree.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Top Lineage Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-cinzel font-bold tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/85 backdrop-blur-xs px-3.5 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs">
                      {saree.lineage}
                    </span>
                  </div>

                  {/* Quick Inspect Floating Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-5 py-2.5 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md text-[#3D1E22] font-semibold text-xs tracking-widest uppercase shadow-2xl border border-[#D4AF37] flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-[#A83232]" />
                      <span>INSPECT SPECIFICATIONS</span>
                    </span>
                  </div>

                  {/* Weaving Hours Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs">
                    <span className="flex items-center space-x-1 text-[#F3E5AB] font-medium text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{saree.weavingHours} Hours Weaving</span>
                    </span>
                    <span className="text-[11px] text-[#E5D7B8] italic">Silk Mark Certified</span>
                  </div>
                </div>

                <div className="p-7 space-y-3.5">
                  <h3 className="font-cinzel text-lg font-bold text-[#3D1E22] group-hover:text-[#A83232] transition-colors leading-snug">
                    {saree.name}
                  </h3>
                  <div className="pt-3 border-t border-[#E5D7B8] grid grid-cols-2 gap-2 text-[11px] text-[#6B5A52]">
                    <div>
                      <span className="font-light text-[#8A756C] block">Zari:</span>
                      <span className="font-medium text-[#3D1E22]">{saree.zariPurity}</span>
                    </div>
                    <div>
                      <span className="font-light text-[#8A756C] block">Palette:</span>
                      <span className="font-medium text-[#3D1E22]">{saree.colorPalette}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-7 pt-0 flex items-center gap-2.5">
                <button
                  onClick={() => onSelectSaree(saree)}
                  className="flex-1 py-2.5 rounded-full bg-[#F3EAD8]/70 hover:bg-[#E8DCC4] text-[#3D1E22] text-xs font-semibold tracking-wider uppercase transition-colors text-center border border-[#D4AF37]/35 cursor-pointer"
                >
                  VIEW SPECS
                </button>
                <button
                  onClick={() => onOpenAppointment(saree.name)}
                  className="px-5 py-2.5 rounded-full bg-[#3D1E22] hover:bg-[#582B30] text-[#F3E5AB] text-xs font-semibold tracking-wider uppercase transition-colors border border-[#D4AF37]/35 cursor-pointer flex items-center space-x-1.5 shadow-xs"
                  title="Reserve private viewing"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>RESERVE</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-18 text-center max-w-2xl mx-auto p-7 rounded-3xl bg-[#F3EAD8]/50 border border-[#D4AF37]/35 shadow-sm">
          <div className="flex items-center justify-center space-x-2 text-xs font-cinzel font-bold text-[#8C6D38] uppercase">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>BESPOKE WEAVE COMMISSIONS AVAILABLE UPON REQUEST</span>
          </div>
        </div>

      </div>
    </section>
  );
};
