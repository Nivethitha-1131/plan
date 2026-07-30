import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_DETAILS } from '../data/brandContent';
import { Award, ShieldCheck, MapPin, Mail, Phone, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#2C1810] text-[#FAF7F2] pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 border-t-2 border-[#D4AF37]/45 relative overflow-hidden">
      <div className="absolute inset-0 jaali-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid — stacked on mobile, 2-col on tablet, 12-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-10 sm:pb-14 lg:pb-16 border-b border-[#D4AF37]/25">

          {/* Brand Statement */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#3D1E22] flex items-center justify-center border border-[#D4AF37] shadow-sm shrink-0">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="font-cinzel text-base sm:text-xl font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#F3E5AB]">
                SHREE SAMUNTHRIKAA
              </span>
            </div>

            <p className="font-cormorant text-lg sm:text-xl text-[#E5D7B8] font-light italic leading-relaxed">
              &ldquo;Preserving the sovereign art of Kanchipuram silk, 24K gold zari, and Indian textile legacy.&rdquo;
            </p>

            <div className="p-4 rounded-2xl bg-[#3D1E22]/85 border border-[#D4AF37]/35 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-[#F3E5AB]">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-semibold uppercase tracking-wider">SILK MARK INDIA CERTIFIED</span>
              </div>
              <p className="text-xs text-[#E5D7B8] font-light leading-relaxed">
                {BRAND_DETAILS.hallmark}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
              THE DIGITAL SANCTUARY
            </h4>
            <ul className="space-y-3 text-xs font-medium text-[#E5D7B8] uppercase tracking-wider">
              {[
                { to: '/heritage', label: 'Heritage Story' },
                { to: '/heritage', label: 'The 6 Handloom Stages' },
                { to: '/collections', label: 'Signature Masterworks' },
                { to: '/collections', label: 'The Bridal Trousseau Suite' },
                { to: '/showroom', label: 'Mansion Architecture' },
                { to: '/showroom', label: 'Flagship Locations' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="hover:text-[#F3E5AB] transition-colors py-0.5 min-h-9 flex items-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
              ARCHIVAL PREVIEWS &amp; JOURNAL
            </h4>
            <p className="text-xs text-[#E5D7B8] font-light leading-relaxed">
              Private invitations for unreleased masterwork drops, trunk shows, and archival previews.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-full bg-[#3D1E22] border border-[#D4AF37]/45 text-xs text-[#FAF7F2] placeholder:opacity-40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] shadow-inner min-h-12"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D4AF37] text-[#2C1810] hover:bg-[#E6CA65] text-xs font-semibold tracking-widest uppercase transition-all shadow-md border border-[#F3E5AB] cursor-pointer min-h-12"
                >
                  JOIN PRIVATE JOURNAL
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-[#3D1E22] border border-[#D4AF37] text-xs text-[#F3E5AB] font-medium text-center shadow-xs">
                ✓ Thank you. You are now subscribed to private archival dispatches.
              </div>
            )}
          </div>
        </div>

        {/* Flagship Locations */}
        <div className="py-8 sm:py-9 border-b border-[#D4AF37]/25 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-xs text-[#E5D7B8]">
          {[
            { city: 'KANCHIPURAM ATELIER', addr: 'West Car Street • Near Ekambaranathar Arch' },
            { city: 'CHENNAI MANSION', addr: 'Khader Nawaz Khan Rd • Nungambakkam' },
            { city: 'BENGALURU GALLERY', addr: '100 Feet Road • Indiranagar' },
          ].map(({ city, addr }) => (
            <div key={city} className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F3E5AB] block font-cinzel uppercase text-[10px] sm:text-xs tracking-wider mb-0.5">{city}</strong>
                <span className="font-light text-[11px] sm:text-xs">{addr}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legal */}
        <div className="pt-7 sm:pt-9 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-[#8A756C] gap-3 sm:gap-4">
          <p>
            © {new Date().getFullYear()} SHREE SAMUNTHRIKAA SILKS &amp; SAREES. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
            <span className="text-[#D4AF37]">Silk Mark India Certified</span>
            <span>•</span>
            <span>100% Pure Kanchipuram Mulberry Silk</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Tested 24K Gold Zari</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
