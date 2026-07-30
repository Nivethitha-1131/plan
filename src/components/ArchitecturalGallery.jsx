import React, { useState } from 'react';
import { SHOWROOM_ROOMS } from '../data/brandContent';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Building, ChevronLeft, ChevronRight } from 'lucide-react';

export const ArchitecturalGallery = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const room = SHOWROOM_ROOMS[activeRoomIndex];

  return (
    <section id="architecture" className="py-24 lg:py-36 bg-[#FAF7F2] marble-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4.5 py-1.5 rounded-full bg-[#F3EAD8] border border-[#D4AF37]/35 shadow-xs">
            HERITAGE MANSION ARCHITECTURE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#3D1E22] leading-tight">
            The Sanctuary of Light & Stone
          </h2>
          <p className="font-cormorant text-xl text-[#5C4A42] font-light italic leading-relaxed">
            Designed in harmony with South Indian palace architecture, where jaali screens, carved sandstone columns, and natural skylights frame every silk drape.
          </p>
        </div>

        {/* Room Showcase Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F3EAD8]/35 rounded-3xl p-7 sm:p-12 border border-[#D4AF37]/35 shadow-luxury">
          
          {/* Image Frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/45 shadow-luxury aspect-16/10 bg-[#E8DCC4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={room.id}
                  src={room.image}
                  alt={room.title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <span className="text-xs font-cinzel tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/85 px-3.5 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs">
                  MANSION ARCHITECTURE • ROOM 0{activeRoomIndex + 1}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveRoomIndex((prev) => (prev - 1 + SHOWROOM_ROOMS.length) % SHOWROOM_ROOMS.length)}
                    className="p-2 rounded-full bg-[#FAF7F2]/90 text-[#3D1E22] hover:bg-[#FAF7F2] transition-colors cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#8C6D38]" />
                  </button>
                  <button
                    onClick={() => setActiveRoomIndex((prev) => (prev + 1) % SHOWROOM_ROOMS.length)}
                    className="p-2 rounded-full bg-[#FAF7F2]/90 text-[#3D1E22] hover:bg-[#FAF7F2] transition-colors cursor-pointer shadow-md"
                  >
                    <ChevronRight className="w-4 h-4 text-[#8C6D38]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs tracking-[0.25em] font-bold text-[#8C6D38] uppercase">
                ARCHITECTURAL FEATURE 0{activeRoomIndex + 1}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3D1E22] mt-1.5">
                {room.title}
              </h3>
            </div>

            <div className="p-4.5 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8] shadow-xs">
              <h5 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider mb-1 flex items-center space-x-2">
                <Building className="w-4 h-4 text-[#A83232]" />
                <span>ARCHITECTURAL NOTE</span>
              </h5>
              <p className="text-xs text-[#5C4A42] font-light leading-relaxed">
                {room.architecturalNote}
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8] shadow-xs">
              <h5 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider mb-1 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>SANCTUARY AMBIANCE</span>
              </h5>
              <p className="text-xs text-[#5C4A42] font-light leading-relaxed">
                {room.ambianceDescription}
              </p>
            </div>

            {/* Room Selector Pills */}
            <div className="flex items-center space-x-2 pt-2">
              {SHOWROOM_ROOMS.map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRoomIndex(idx)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-[10px] font-cinzel font-bold tracking-wider uppercase transition-all duration-500 cursor-pointer ${
                    activeRoomIndex === idx
                      ? 'bg-[#3D1E22] text-[#F3E5AB] border border-[#D4AF37] shadow-md'
                      : 'bg-[#FAF7F2] text-[#5C4A42] hover:bg-[#F3EAD8] border border-[#E5D7B8]'
                  }`}
                >
                  {r.title.split(' ')[1] || r.title.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
