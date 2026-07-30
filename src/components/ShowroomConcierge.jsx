import React from 'react';
import { FLAGSHIP_LOCATIONS } from '../data/brandContent';
import { MapPin, Phone, Clock, Calendar, Video, CheckCircle2, Sparkles } from 'lucide-react';

export const ShowroomConcierge = ({ onOpenAppointment }) => {
  return (
    <section id="flagships" className="py-24 lg:py-36 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4.5 py-1.5 rounded-full bg-[#F3EAD8] border border-[#D4AF37]/35 shadow-xs">
            OUR FLAGSHIP MANSIONS
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#3D1E22] leading-tight">
            Destinations of Warm Hospitality
          </h2>
          <p className="font-cormorant text-xl text-[#5C4A42] font-light italic leading-relaxed">
            Kanchipuram, Chennai, Bengaluru — or a private video consultation from anywhere.
          </p>
        </div>

        {/* Flagships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {FLAGSHIP_LOCATIONS.map((flagship) => (
            <div
              key={flagship.city}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-luxury hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-64 overflow-hidden bg-[#E8DCC4]">
                  <img
                    src={flagship.image}
                    alt={flagship.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-cinzel font-bold tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/85 px-3.5 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs">
                      FLAGSHIP DESTINATION
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2] mt-1.5">
                      {flagship.city}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-7 space-y-4">
                  <div className="space-y-2.5 text-xs text-[#5C4A42]">
                    <div className="flex items-start space-x-2.5">
                      <MapPin className="w-4 h-4 text-[#A83232] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{flagship.address}</span>
                    </div>

                    <div className="flex items-center space-x-2.5 pt-1">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <a href={`tel:${flagship.phone}`} className="font-semibold text-[#3D1E22] hover:text-[#A83232] transition-colors">
                        {flagship.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-2.5 pt-1">
                      <Clock className="w-4 h-4 text-[#8C6D38] shrink-0" />
                      <span className="font-light">{flagship.hours}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-[#E5D7B8]">
                    <h5 className="font-cinzel text-[11px] font-bold text-[#3D1E22] uppercase tracking-wider mb-2.5">
                      MANSION AMENITIES
                    </h5>
                    <div className="grid grid-cols-2 gap-2.5 text-[11px] text-[#6B5A52]">
                      {flagship.features.map((feat) => (
                        <div key={feat} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A83232] shrink-0" />
                          <span className="font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => onOpenAppointment(flagship.city)}
                  className="w-full py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-semibold tracking-widest uppercase transition-all shadow-sm border border-[#D4AF37]/35 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>BOOK MANSION VISIT</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Virtual Concierge Banner - Lightened Warm Ivory Sanctuary Card */}
        <div className="mt-18 p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border-2 border-[#D4AF37]/45 shadow-luxury relative overflow-hidden">
          <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <span className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold text-[#8C6D38] tracking-widest uppercase bg-[#F3EAD8] px-3.5 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs">
                <Video className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>GLOBAL VIRTUAL SILK CONCIERGE</span>
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3D1E22]">
                Residing Overseas? Experience a Private 1-on-1 Video Walkthrough
              </h3>
            </div>

            <div className="lg:col-span-4 text-right">
              <button
                onClick={() => onOpenAppointment('Virtual Video Consultation')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-semibold tracking-widest uppercase transition-all shadow-luxury border border-[#D4AF37]/40 cursor-pointer"
              >
                SCHEDULE VIRTUAL VIEWING
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
