import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Award, ShieldCheck, Sparkles, Calendar, Heart, ShoppingBag } from 'lucide-react';

export const SareeDetailModal = ({
  saree,
  onClose,
  onRequestViewing,
  onAddToCart,
  onBuyNow,
}) => {
  if (!saree) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2C1810]/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Top Bar with Close Button */}
          <div className="px-6 py-4.5 border-b border-[#E5D7B8] flex items-center justify-between bg-[#F3EAD8]/60 shrink-0">
            <div className="flex items-center space-x-2.5 text-xs font-cinzel font-bold text-[#8C6D38] tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>MASTERWORK ARCHIVE SPECIFICATION</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E5D7B8] text-[#3D1E22] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="p-6 sm:p-9 overflow-y-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Image Frame */}
              <div className="md:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/45 shadow-luxury bg-[#E8DCC4] aspect-3/4">
                  <img
                    src={saree.image}
                    alt={saree.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-3.5 p-3.5 rounded-2xl bg-[#3D1E22] text-[#F3E5AB] text-center border border-[#D4AF37]/35 shadow-xs">
                  <p className="text-[10px] uppercase font-cinzel tracking-widest font-bold">
                    HANDLOOM WEAVING TIME
                  </p>
                  <p className="text-sm font-semibold flex items-center justify-center space-x-1.5 mt-0.5 text-[#D4AF37]">
                    <Clock className="w-4 h-4" />
                    <span>{saree.weavingHours} Devotional Hours</span>
                  </p>
                </div>
              </div>

              {/* Specification Details */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-cinzel font-bold tracking-[0.2em] text-[#8C6D38] uppercase bg-[#F3EAD8] px-3.5 py-1 rounded-full border border-[#D4AF37]/35">
                    {saree.lineage}
                  </span>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3D1E22] mt-3 leading-tight">
                    {saree.name}
                  </h2>
                </div>

                <p className="font-cormorant text-lg text-[#5C4A42] leading-relaxed font-normal italic">
                  "{saree.description}"
                </p>

                {/* Price Display */}
                {saree.price && (
                  <div className="flex items-baseline space-x-3 bg-[#F3EAD8]/80 p-4 rounded-2xl border border-[#D4AF37]/35">
                    <span className="font-cinzel text-2xl font-bold text-[#8C6D38]">
                      ₹{saree.price.toLocaleString('en-IN')}
                    </span>
                    {saree.originalPrice && (
                      <span className="text-xs text-[#8A756C] line-through font-medium">
                        ₹{saree.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full uppercase ml-auto">
                      IN STOCK
                    </span>
                  </div>
                )}

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3.5 text-xs bg-[#F3EAD8]/60 p-4.5 rounded-2xl border border-[#E5D7B8]">
                  <div>
                    <span className="text-[#8A756C] font-light block">Color Palette:</span>
                    <strong className="text-[#3D1E22] font-semibold">{saree.colorPalette}</strong>
                  </div>
                  <div>
                    <span className="text-[#8A756C] font-light block">Zari Purity:</span>
                    <strong className="text-[#3D1E22] font-semibold">{saree.zariPurity}</strong>
                  </div>
                  <div>
                    <span className="text-[#8A756C] font-light block">Artisan Origin:</span>
                    <strong className="text-[#3D1E22] font-semibold">{saree.details?.artisanOrigin}</strong>
                  </div>
                  <div>
                    <span className="text-[#8A756C] font-light block">Drape Feel:</span>
                    <strong className="text-[#3D1E22] font-semibold">{saree.details?.drapeFeel}</strong>
                  </div>
                </div>

                {/* Motif & Warp Story */}
                <div className="space-y-3">
                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider">
                    ARCHITECTURAL MOTIF STORY
                  </h4>
                  <p className="text-xs text-[#6B5A52] leading-relaxed bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E5D7B8]">
                    {saree.details?.motifStory}
                  </p>

                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider pt-2">
                    WARP &amp; WEFT SPECIFICATION
                  </h4>
                  <p className="text-xs text-[#6B5A52] leading-relaxed bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E5D7B8]">
                    {saree.details?.warpWeft}
                  </p>
                </div>

                {/* Guarantee Seal */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/45 flex items-center space-x-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#A83232] shrink-0" />
                  <span className="text-xs text-[#3D1E22] font-medium leading-relaxed">
                    Accompanied by Silk Mark India Hallmark &amp; Holographic Certification Certificate.
                  </span>
                </div>

                {/* E-Commerce CTAs */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        if (onAddToCart) onAddToCart(saree);
                        onClose();
                      }}
                      className="py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-cinzel font-bold tracking-widest uppercase transition-colors shadow-luxury border border-[#D4AF37]/40 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                      <span>ADD TO CART</span>
                    </button>

                    <button
                      onClick={() => {
                        if (onBuyNow) onBuyNow(saree);
                        onClose();
                      }}
                      className="py-3.5 rounded-full bg-[#D4AF37] text-[#2C1810] hover:bg-[#E6CA65] text-xs font-cinzel font-bold tracking-widest uppercase transition-colors shadow-luxury border border-[#D4AF37]/60 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>BUY NOW</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onRequestViewing(saree.name);
                    }}
                    className="w-full py-3 rounded-full bg-[#F3EAD8] text-[#8C6D38] hover:bg-[#E5D7B8] text-xs font-semibold tracking-wider uppercase transition-colors border border-[#E5D7B8] flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#8C6D38]" />
                    <span>RESERVE PRIVATE SHOWROOM VIEWING</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
