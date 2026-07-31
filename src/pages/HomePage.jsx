import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Sparkles, ShieldCheck, Clock, Gem, Star, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { BRAND_DETAILS } from '../data/brandContent';

const COLLECTION_PREVIEWS = [
  { title: 'Bridal Collection', sub: 'Royal heritage. Pure 24K zari.', img: '/sarees/saree_1.png' },
  { title: 'Kanchipuram Silk', sub: 'The sovereign handloom tradition.', img: '/sarees/saree_2.png' },
  { title: 'Festive Collection', sub: 'Woven brilliance for every occasion.', img: '/sarees/saree_12.png' },
  { title: 'Limited Edition', sub: 'Rare archival masterworks.', img: '/sarees/saree_11.png' },
];

const TESTIMONIALS = [
  { name: 'Meenakshi R.', location: 'Chennai', text: 'The bridal saree was beyond words — every thread spoke of devotion. Generations will cherish it.', stars: 5 },
  { name: 'Priya S.', location: 'Bengaluru', text: 'From the consultation to the final drape, the experience was extraordinarily personal and refined.', stars: 5 },
  { name: 'Kavitha N.', location: 'Singapore', text: 'I ordered remotely via their virtual concierge. The quality and craftsmanship exceeded every expectation.', stars: 5 },
];

const WHY_CHOOSE = [
  { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />, title: 'SILK MARK CERTIFIED', desc: 'Government of India verified 100% pure mulberry silk.' },
  { icon: <span className="font-cinzel font-bold text-sm text-[#D4AF37]">24K</span>, title: 'TESTED GOLD ZARI', desc: 'Pure silver core gilded with authenticated 24-karat gold.' },
  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />, title: '180+ HOURS PER SAREE', desc: 'Hereditary master weavers on traditional Korvai pit looms.' },
  { icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />, title: 'HEIRLOOM QUALITY', desc: 'Each drape crafted to be passed through generations.' },
];

export function HomePage({ onOpenAppointment }) {
  return (
    <div>
      {/* Hero */}
      <Hero onOpenAppointment={onOpenAppointment} />

      {/* Brand Introduction */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] text-[#8C6D38] font-semibold uppercase px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] shrink-0" />
            <span>EST. {BRAND_DETAILS.established} • KANCHIPURAM SILK HOUSE</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] shrink-0" />
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#3D1E22] leading-tight">
            Where Architecture Meets<br className="hidden sm:block" /> the Sacred Art of Silk
          </h2>
          <p className="font-cormorant text-lg sm:text-xl lg:text-2xl text-[#5C4A42] font-light italic leading-relaxed max-w-3xl mx-auto">
            A saree is not merely a garment — it is living architecture woven from pure mulberry silk, silver, and 24K gold zari.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3">
            <span className="w-10 sm:w-12 h-px bg-[#D4AF37]" />
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="w-10 sm:w-12 h-px bg-[#D4AF37]" />
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-3">
            <span className="inline-block text-[10px] sm:text-xs tracking-[0.24em] sm:tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-3 sm:px-4 py-1.5 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/35 shadow-xs">
              CURATED COLLECTIONS
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1E22]">Explore Our Silk World</h2>
          </div>

          {/* Cards: 1-col mobile → 2-col tablet → 4-col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {COLLECTION_PREVIEWS.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to="/collections" className="group block relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-luxury">
                  {/* Aspect ratio: portrait on mobile (3/4), slightly shorter on desktop */}
                  <div className="relative aspect-3/4">
                    <img
                      src={col.img}
                      alt={col.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/85 via-[#2C1810]/20 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                      <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#FDFBF7] leading-tight">{col.title}</h3>
                      <p className="font-cormorant text-sm italic text-[#E5D7B8] mt-1">{col.sub}</p>
                      <span className="mt-2.5 inline-flex items-center text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors">
                        Explore <ChevronRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full border-2 border-[#3D1E22] text-[#3D1E22] hover:bg-[#3D1E22] hover:text-[#F3E5AB] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest uppercase transition-all duration-500 min-h-12"
            >
              <span>VIEW ALL COLLECTIONS</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F3EAD8]/30 sandstone-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-3">
            <span className="inline-block text-[10px] sm:text-xs tracking-[0.24em] text-[#8C6D38] font-bold uppercase px-3 sm:px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-xs">
              OUR PROMISE
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1E22]">Why Discerning Patrons Choose Us</h2>
          </div>
          {/* 1-col mobile → 2-col tablet → 4-col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-luxury text-center space-y-3 hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3D1E22] flex items-center justify-center mx-auto border border-[#D4AF37]/50">
                  {item.icon}
                </div>
                <h4 className="font-cinzel text-[10px] sm:text-xs font-bold text-[#3D1E22] tracking-wider uppercase">{item.title}</h4>
                <p className="text-xs text-[#6B5A52] font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Preview */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#FAF7F2] marble-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stack on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="heritage-arch-top overflow-hidden border-2 border-[#D4AF37]/40 shadow-luxury bg-[#E8DCC4] order-1 lg:order-0">
              <img
                src="/sarees/saree_7.png"
                alt="Handloom Weaving"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-70 sm:h-95 lg:h-120 object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase">
                <span className="w-7 h-px bg-[#D4AF37]" />
                <span>THE CRAFT</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1E22] leading-tight">
                Six Sacred Stages of a Heritage Masterpiece
              </h2>
              <p className="font-cormorant text-lg sm:text-xl text-[#5C4A42] font-light italic leading-relaxed">
                From mulberry cocoon to Silk Mark seal — each drape carries 180+ hours of pure devotion by 5th-generation master weavers.
              </p>
              {/* Stage Chips */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                {['Silk Reeling', 'Zari Drawing', 'Korvai Weave'].map((s, i) => (
                  <div key={s} className="p-3 sm:p-3.5 rounded-xl bg-[#F3EAD8]/70 border border-[#D4AF37]/30 text-center">
                    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold text-[#3D1E22] uppercase tracking-wider block">0{i + 1}</span>
                    <span className="text-[10px] sm:text-xs text-[#6B5A52] font-light mt-1 block">{s}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/heritage"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury border border-[#D4AF37]/40 min-h-12"
              >
                <span>DISCOVER THE FULL JOURNEY</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F3EAD8]/25 sandstone-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-3">
            <span className="inline-block text-[10px] sm:text-xs tracking-[0.24em] text-[#8C6D38] font-bold uppercase px-3 sm:px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-xs">
              PATRON VOICES
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1E22]">Words from Our Patrons</h2>
          </div>
          {/* 1-col mobile → 3-col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#FDFBF7] border border-[#D4AF37]/35 shadow-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="font-cormorant text-base sm:text-lg italic text-[#5C4A42] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#E5D7B8]">
                  <span className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider block">{t.name}</span>
                  <span className="text-xs text-[#8C6D38] font-light mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 inline shrink-0" /> {t.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Showroom CTA */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#3D1E22] relative overflow-hidden">
        <div className="absolute inset-0 jaali-pattern opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37] mx-auto" />
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBF7] leading-tight">
            Experience the Sanctuary in Person
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-[#E5D7B8] font-light italic leading-relaxed">
            Three flagship mansions in Kanchipuram, Chennai &amp; Bengaluru await your visit.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-1 max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/showroom"
              className="flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-full bg-[#D4AF37] text-[#2C1810] hover:bg-[#E6CA65] text-[10px] sm:text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury min-h-13"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>VISIT OUR SHOWROOM</span>
            </Link>
            <button
              onClick={onOpenAppointment}
              className="flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-full bg-transparent text-[#F3E5AB] hover:bg-[#FAF7F2]/10 text-[10px] sm:text-xs font-cinzel font-bold tracking-widest uppercase transition-all border-2 border-[#D4AF37]/50 cursor-pointer min-h-13"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>BOOK PRIVATE VIEWING</span>
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 space-y-2">
            <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-[#3D1E22]">Follow Our Atelier</h2>
            <p className="font-cormorant text-base sm:text-lg italic text-[#8C6D38]">@shreesarees.kanchipuram</p>
          </div>
          {/* 2-col mobile → 3-col tablet → 6-col desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {[
              '/sarees/saree_1.png',
              '/sarees/saree_2.png',
              '/sarees/saree_3.png',
              '/sarees/saree_4.png',
              '/sarees/saree_5.png',
              '/sarees/saree_6.png',
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-[#D4AF37]/25 shadow-sm group cursor-pointer">
                <img
                  src={src}
                  alt="Atelier moment"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
