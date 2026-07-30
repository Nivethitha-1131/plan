import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Our Story', to: '/heritage' },
  { label: 'Visit Showroom', to: '/showroom' },
  { label: 'Contact', to: '/contact' },
];

export const Header = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner — hidden on very small screens */}
      <div className="hidden sm:flex bg-[#1A1A1A] text-[#F5F2ED] text-[9px] sm:text-[10px] py-1.5 px-4 tracking-[0.16em] font-light items-center justify-center gap-2 border-b border-[#D4AF37]/30">
        <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] shrink-0" />
        <span className="text-center leading-tight">SILK MARK INDIA CERTIFIED • 100% PURE KANCHIPURAM MULBERRY SILK &amp; 24K TESTED ZARI</span>
        <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] shrink-0" />
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#FDFBF7]/97 backdrop-blur-md border-[#D4AF37]/25 shadow-sm'
            : 'bg-[#FDFBF7]/92 backdrop-blur-sm border-[#D4AF37]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 gap-4">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/logo-burgundy-translucent.png"
              alt="Shree Samunthrikaa Silks & Sarees"
              className="h-10 sm:h-12 w-auto rounded-xl sm:rounded-2xl border border-[#D4AF37]/50 shadow-sm object-contain"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(180,140,50,0.25))' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <span className="h-7 w-px bg-[#D4AF37]/30 mr-3 shrink-0" />
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 xl:px-3.5 py-2 rounded-lg text-[10px] xl:text-[11px] tracking-[0.18em] font-medium uppercase transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-[#8C6D38] bg-[#F3EAD8]/70'
                      : 'text-[#1A1A1A]/70 hover:text-[#8C6D38] hover:bg-[#F3EAD8]/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Book button — desktop only */}
            <button
              onClick={() => onOpenAppointment()}
              className="hidden lg:flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-[#1A1A1A] text-[#FDFBF7] hover:bg-[#3D1E22] transition-all text-[10px] tracking-[0.16em] font-semibold border border-[#D4AF37]/40 hover:border-[#D4AF37] cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>BOOK VIEWING</span>
            </button>

            {/* Mobile book button — compact */}
            <button
              onClick={() => onOpenAppointment()}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#1A1A1A] text-[#FDFBF7] text-[9px] tracking-widest font-semibold border border-[#D4AF37]/40 cursor-pointer"
            >
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden sm:inline">BOOK</span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-11 min-h-11 flex items-center justify-center rounded-xl text-[#1A1A1A] hover:bg-[#F3EAD8]/60 transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden fixed inset-0 top-14.25 sm:top-24.25 bg-[#FDFBF7] z-40 overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-5 py-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-5 py-4 rounded-2xl text-sm tracking-[0.16em] font-medium uppercase transition-all min-h-14 ${
                        isActive
                          ? 'text-[#8C6D38] bg-[#F3EAD8]/80 border border-[#D4AF37]/40'
                          : 'text-[#1A1A1A]/80 hover:text-[#8C6D38] hover:bg-[#F3EAD8]/50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-[#1A1A1A] text-[#FDFBF7] text-xs tracking-widest font-semibold border border-[#D4AF37]/40 cursor-pointer min-h-14"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>BOOK PRIVATE VIEWING</span>
                </button>
              </div>

              {/* Store info in mobile menu */}
              <div className="mt-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/25">
                <p className="text-[10px] tracking-widest text-[#8C6D38] uppercase font-bold mb-2">Flagship Locations</p>
                <p className="text-xs text-[#5C4A42] leading-relaxed font-light">Kanchipuram · Chennai · Bengaluru</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
