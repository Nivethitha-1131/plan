import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 'bridal',
    title: 'Bridal Collection',
    lineage: 'Heritage Kanchipuram Bridal',
    desc: 'For the bride whose day demands nothing less than pure 24K gold zari and centuries of devotion.',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop',
    accent: 'Royal Crimson · Champak Gold',
  },
  {
    id: 'wedding',
    title: 'Wedding Collection',
    lineage: 'Classic Kanchipuram Korvai',
    desc: 'Elegant drapes woven for the celebration — timeless, vibrant, and crafted for joyful occasions.',
    img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop',
    accent: 'Emerald · Warm Sandalwood',
  },
  {
    id: 'kanchipuram',
    title: 'Kanchipuram Silk',
    lineage: 'Pure Mulberry Silk Heritage',
    desc: 'The sovereign handloom tradition — 2,000 years of weaving mastery in every thread.',
    img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1600&auto=format&fit=crop',
    accent: 'Tissue Gold · Warm Ivory',
  },
  {
    id: 'banarasi',
    title: 'Banarasi Silk',
    lineage: 'North Indian Weaving Legacy',
    desc: 'Exquisite Banarasi brocade with intricate floral motifs and lustrous silk — a heritage of the Ganga plains.',
    img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
    accent: 'Royal Amethyst · Rose Gold',
  },
  {
    id: 'soft-silk',
    title: 'Soft Silk',
    lineage: 'Minimalist Heritage Silk',
    desc: 'Refined, feather-light silk in understated hues — quiet sophistication for the discerning wearer.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop',
    accent: 'Pearl Ivory · Brushed Brass',
  },
  {
    id: 'festive',
    title: 'Festive Collection',
    lineage: 'Seasonal Heritage Weaves',
    desc: "Vibrant silk expressions inspired by India's most beloved festivals — woven to celebrate life.",
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1600&auto=format&fit=crop',
    accent: 'Midnight Indigo · Copper',
  },
  {
    id: 'limited',
    title: 'Limited Edition',
    lineage: 'Rare Archival Masterworks',
    desc: 'One-of-a-kind heirloom pieces commissioned by master weavers — available exclusively by appointment.',
    img: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1600&auto=format&fit=crop',
    accent: 'Hand-Selected Palette',
  },
];

export function CollectionsPage({ onOpenAppointment }) {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Page Hero */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-10 sm:pb-16 bg-[#FDFBF7] ambient-sunlight relative overflow-hidden">
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5 relative z-10">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] text-[#8C6D38] font-semibold uppercase px-4 sm:px-5 py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] shrink-0" />
            <span>CURATED SILK COLLECTIONS</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] shrink-0" />
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-[#3D1E22] leading-tight tracking-wide">
            The Collections
          </h1>
          <p className="font-cormorant text-lg sm:text-xl lg:text-2xl text-[#5C4A42] font-light italic leading-relaxed max-w-2xl mx-auto">
            Seven worlds of pure silk, each a universe of heritage, colour, and devotion.
          </p>
        </div>
      </section>

      {/* Collection Tiles */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          {COLLECTIONS.map((col, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group grid grid-cols-1 lg:grid-cols-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-luxury"
              >
                {/* Image — always on top on mobile, alternating on desktop */}
                <div className={`lg:col-span-7 relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                  {/* Aspect: taller on mobile for drama, auto on desktop */}
                  <div className="relative aspect-4/3 sm:aspect-video lg:aspect-auto lg:h-full min-h-60 sm:min-h-75 lg:min-h-105">
                    <img
                      src={col.img}
                      alt={col.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-[#2C1810]/30 to-transparent" />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <span className="text-[9px] sm:text-[10px] font-cinzel font-bold tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/85 backdrop-blur-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#D4AF37]/40 shadow-sm">
                        {col.lineage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 bg-[#FDFBF7] p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-4 sm:space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-[10px] sm:text-xs tracking-[0.24em] sm:tracking-[0.28em] text-[#8C6D38] font-bold uppercase block mb-1.5 sm:mb-2">{col.accent}</span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1E22] leading-tight">{col.title}</h2>
                  </div>
                  <p className="font-cormorant text-base sm:text-xl text-[#5C4A42] font-light italic leading-relaxed">{col.desc}</p>
                  <div className="h-px bg-[#D4AF37]/30 w-16 sm:w-20" />
                  {/* CTAs — stacked on mobile */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={() => onOpenAppointment(col.title)}
                      className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury border border-[#D4AF37]/40 cursor-pointer min-h-12"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>RESERVE VIEWING</span>
                    </button>
                    <Link
                      to="/showroom"
                      className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-cinzel font-bold text-[#8C6D38] tracking-widest uppercase hover:text-[#3D1E22] transition-colors min-h-12"
                    >
                      <span>VISIT SHOWROOM</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20 bg-[#3D1E22] relative overflow-hidden">
        <div className="absolute inset-0 jaali-pattern opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5 relative z-10">
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FDFBF7]">Discover Your Drape</h2>
          <p className="font-cormorant text-lg sm:text-xl text-[#E5D7B8] italic font-light">Every saree is a private conversation. Let us find yours.</p>
          <button
            onClick={() => onOpenAppointment()}
            className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 rounded-full bg-[#D4AF37] text-[#2C1810] hover:bg-[#E6CA65] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury cursor-pointer min-h-13"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>BOOK PRIVATE CONSULTATION</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
