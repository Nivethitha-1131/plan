import React from 'react';
import { Footer } from '../components/Footer';
import { ShowroomConcierge } from '../components/ShowroomConcierge';
import { ArchitecturalGallery } from '../components/ArchitecturalGallery';
import { Sparkles, MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';

const LOCATIONS = [
  {
    city: 'Kanchipuram Flagship Atelier',
    address: 'No. 42, West Car Street, Near Ekambaranathar Temple, Kanchipuram, Tamil Nadu 631502',
    phone: '+91 44 2722 8900',
    hours: 'Open Daily: 10:00 AM – 8:30 PM',
    whatsapp: '914427228900',
    mapSrc: 'https://maps.google.com/maps?q=Kanchipuram,Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    city: 'Chennai Flagship Mansion',
    address: '18, Khader Nawaz Khan Road, Nungambakkam, Chennai, Tamil Nadu 600006',
    phone: '+91 44 4300 9988',
    hours: 'Open Daily: 10:30 AM – 9:00 PM',
    whatsapp: '914443009988',
    mapSrc: 'https://maps.google.com/maps?q=Nungambakkam,Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    city: 'Bengaluru Heritage Gallery',
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    phone: '+91 80 4120 5566',
    hours: 'Open Daily: 10:30 AM – 8:30 PM',
    whatsapp: '918041205566',
    mapSrc: 'https://maps.google.com/maps?q=Indiranagar,Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
];

export function ShowroomPage({ onOpenAppointment }) {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Full-bleed Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop"
          alt="Showroom Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-4 space-y-4">
          <span className="inline-flex items-center space-x-2.5 text-[11px] tracking-[0.32em] text-[#F3E5AB] font-semibold uppercase px-5 py-2 rounded-full bg-[#3D1E22]/70 border border-[#D4AF37]/40 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>FLAGSHIP MANSIONS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#FDFBF7] leading-tight drop-shadow-md">
            Visit Our Showroom
          </h1>
          <p className="font-cormorant text-xl text-[#E5D7B8] italic font-light max-w-2xl">
            Step into a heritage sanctuary — where every drape, every arch, and every courtyard invites you in.
          </p>
        </div>
      </section>

      {/* Interior Architecture Gallery */}
      <ArchitecturalGallery />

      {/* Flagship Cards + Virtual Concierge */}
      <ShowroomConcierge onOpenAppointment={onOpenAppointment} />

      {/* Location Details + Maps */}
      <section className="py-20 lg:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4 py-1.5 rounded-full bg-[#F3EAD8] border border-[#D4AF37]/35 shadow-xs">
              FIND US
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#3D1E22]">Locations & Directions</h2>
          </div>

          <div className="space-y-16">
            {LOCATIONS.map((loc, i) => (
              <div key={loc.city} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Map */}
                <div className={`rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-luxury aspect-video ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={loc.city}
                  />
                </div>

                {/* Details */}
                <div className={`space-y-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase">FLAGSHIP {String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-cinzel text-2xl font-bold text-[#3D1E22] mt-1">{loc.city}</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8]">
                      <MapPin className="w-4 h-4 text-[#A83232] shrink-0 mt-0.5" />
                      <span className="text-[#5C4A42] font-light leading-relaxed">{loc.address}</span>
                    </div>
                    <div className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8]">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <a href={`tel:${loc.phone}`} className="font-semibold text-[#3D1E22] hover:text-[#A83232] transition-colors">{loc.phone}</a>
                    </div>
                    <div className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8]">
                      <Clock className="w-4 h-4 text-[#8C6D38] shrink-0" />
                      <span className="text-[#5C4A42] font-light">{loc.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={`https://wa.me/${loc.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider hover:bg-[#1EB957] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border-2 border-[#3D1E22] text-[#3D1E22] text-xs font-semibold tracking-wider hover:bg-[#3D1E22] hover:text-[#F3E5AB] transition-all"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
