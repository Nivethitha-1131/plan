import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, MapPin, Sparkles, User, Mail, Phone, Heart } from 'lucide-react';

export const AppointmentModal = ({
  isOpen,
  onClose,
  preselectedCity,
  preselectedSaree,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredCity: preselectedCity || 'Chennai Flagship Mansion',
    visitDate: '',
    timeSlot: 'Morning (10:30 AM – 1:00 PM)',
    interests: preselectedSaree ? [preselectedSaree] : ['Bridal Trousseau'],
    specialRequests: preselectedSaree ? `Interested in viewing: ${preselectedSaree}` : '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'SSS-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(code);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#2C1810]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="px-6 py-4.5 border-b border-[#E5D7B8] flex items-center justify-between bg-[#F3EAD8]/60">
            <div className="flex items-center space-x-2 text-xs font-cinzel font-bold text-[#3D1E22] tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>PRIVATE SHOWROOM CONCIERGE RESERVATION</span>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 rounded-full hover:bg-[#E5D7B8] text-[#3D1E22] transition-colors cursor-pointer"
              aria-label="Close appointment modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-9">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5.5">
                <div className="text-center max-w-md mx-auto mb-4">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#3D1E22]">
                    Reserve Your Private Viewing
                  </h3>
                  <p className="font-cormorant text-base text-[#5C4A42] italic mt-1 leading-relaxed">
                    A dedicated silk stylist will prepare your preferred drapes and welcome your family into our private lounge.
                  </p>
                </div>

                {/* City Location Select */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-1.5">
                    PREFERRED DESTINATION
                  </label>
                  <select
                    value={formData.preferredCity}
                    onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs font-medium text-[#3D1E22] focus:outline-hidden focus:ring-1 focus:ring-[#A83232] shadow-xs"
                  >
                    <option value="Chennai Flagship Mansion">Chennai Flagship Mansion (Nungambakkam)</option>
                    <option value="Kanchipuram Flagship Atelier">Kanchipuram Flagship Atelier (West Car St)</option>
                    <option value="Bengaluru Heritage Gallery">Bengaluru Heritage Gallery (Indiranagar)</option>
                    <option value="Virtual Video Consultation">Virtual Video Consultation (HD Live Stream)</option>
                  </select>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-1">
                      FULL NAME *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8C6D38] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Smt. / Sri. Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs text-[#3D1E22] focus:outline-hidden focus:ring-1 focus:ring-[#A83232] shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-1">
                      PHONE NUMBER *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8C6D38] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs text-[#3D1E22] focus:outline-hidden focus:ring-1 focus:ring-[#A83232] shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8C6D38] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs text-[#3D1E22] focus:outline-hidden focus:ring-1 focus:ring-[#A83232] shadow-xs"
                    />
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-1">
                      PREFERRED DATE *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs text-[#3D1E22] focus:outline-hidden focus:ring-1 focus:ring-[#A83232] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-1">
                      TIME SLOT *
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs text-[#3D1E22] focus:outline-hidden focus:ring-1 focus:ring-[#A83232] shadow-xs"
                    >
                      <option value="Morning (10:30 AM – 1:00 PM)">Morning (10:30 AM – 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM – 4:30 PM)">Afternoon (2:00 PM – 4:30 PM)</option>
                      <option value="Evening (5:30 PM – 8:00 PM)">Evening (5:30 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Interests Pills */}
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase mb-2">
                    AREAS OF SILK INTEREST
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Bridal Trousseau',
                      'Kanchipuram Pure Zari',
                      'Tissue Gold Brocades',
                      'Korvai Classics',
                      'Custom Weave Commission',
                    ].map((interest) => {
                      const selected = formData.interests.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-3.5 py-2 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                            selected
                              ? 'bg-[#3D1E22] text-[#F3E5AB] border-[#D4AF37] shadow-xs'
                              : 'bg-[#F3EAD8]/60 text-[#5C4A42] border-[#E5D7B8] hover:border-[#D4AF37]'
                          }`}
                        >
                          {selected ? '✓ ' : '+ '}{interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-semibold tracking-widest uppercase transition-colors shadow-luxury border border-[#D4AF37]/40 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>CONFIRM CONCIERGE RESERVATION</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#3D1E22] text-[#D4AF37] mx-auto flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <div>
                  <span className="text-xs font-cinzel font-bold tracking-[0.2em] text-[#8C6D38] uppercase">
                    RESERVATION CONFIRMED
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#3D1E22] mt-1">
                    Welcome to Shree Samunthrikaa
                  </h3>
                  <p className="font-cormorant text-lg text-[#5C4A42] font-normal italic mt-1 max-w-md mx-auto">
                    We look forward to welcoming you and your family to our sanctuary.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F3EAD8] border border-[#D4AF37]/45 text-left space-y-2 text-xs text-[#3D1E22] max-w-md mx-auto shadow-xs">
                  <div className="flex justify-between border-b border-[#E5D7B8] pb-2">
                    <span className="text-[#8A756C] font-light">Reference Code:</span>
                    <strong className="font-cinzel font-bold text-[#A83232]">{referenceCode}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#E5D7B8] pb-2">
                    <span className="text-[#8A756C] font-light">Guest:</span>
                    <span className="font-semibold">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5D7B8] pb-2">
                    <span className="text-[#8A756C] font-light">Destination:</span>
                    <span className="font-semibold">{formData.preferredCity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A756C] font-light">Date & Slot:</span>
                    <span className="font-semibold">{formData.visitDate} ({formData.timeSlot})</span>
                  </div>
                </div>

                <p className="text-xs text-[#6B5A52] font-light italic leading-relaxed">
                  * A confirmation message has been dispatched to {formData.email}. Our senior concierge will call {formData.phone} shortly to confirm any special tea preferences or specific drape pulls.
                </p>

                <div className="pt-2">
                  <button
                    onClick={resetAndClose}
                    className="px-8 py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] text-xs font-semibold tracking-widest uppercase transition-colors border border-[#D4AF37]/40 cursor-pointer shadow-luxury"
                  >
                    RETURN TO DIGITAL FLAGSHIP
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
