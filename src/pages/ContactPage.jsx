import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, Instagram, ChevronDown, ChevronUp, Send } from 'lucide-react';

const FAQS = [
  { q: 'Do you ship outside India?', a: 'Yes. We ship globally with secure packaging. International patrons can schedule a private virtual consultation to view and select drapes from our vault.' },
  { q: 'Can I commission a custom saree?', a: 'Absolutely. Bespoke commissions are available by appointment. Our master weavers will work with you on color, motif, and zari specifications.' },
  { q: 'How long does a custom weave take?', a: 'A bespoke Kanchipuram saree typically takes 45–90 days depending on complexity of the Korvai work and zari patterns selected.' },
  { q: 'What is the Silk Mark certification?', a: 'Silk Mark India is a Government of India quality assurance program verifying 100% pure natural silk in a saree. Every piece we sell carries this mark.' },
  { q: 'Do you offer bridal trousseau consultations?', a: 'Yes. Our private bridal atelier offers dedicated consultations for the bride and family, complete with gourmet hospitality in a calm, elegant setting.' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2]">
      {/* Page Hero */}
      <section className="pt-40 pb-16 bg-[#FDFBF7] ambient-sunlight relative overflow-hidden">
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5 relative z-10">
          <span className="inline-flex items-center space-x-2.5 text-[11px] tracking-[0.32em] text-[#8C6D38] font-semibold uppercase px-5 py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>WE'D LOVE TO HEAR FROM YOU</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#3D1E22] leading-tight tracking-wide">
            Get in Touch
          </h1>
          <p className="font-cormorant text-xl sm:text-2xl text-[#5C4A42] font-light italic leading-relaxed">
            Every conversation is the beginning of a beautiful drape.
          </p>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#FDFBF7] border border-[#D4AF37]/35 shadow-luxury">
                <h2 className="font-cinzel text-2xl font-bold text-[#3D1E22] mb-8 tracking-wide">Send a Message</h2>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5D7B8] focus:border-[#D4AF37] focus:outline-none text-sm text-[#3D1E22] placeholder-[#A89B8E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5D7B8] focus:border-[#D4AF37] focus:outline-none text-sm text-[#3D1E22] placeholder-[#A89B8E] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5D7B8] focus:border-[#D4AF37] focus:outline-none text-sm text-[#3D1E22] placeholder-[#A89B8E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase tracking-wider mb-2">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5D7B8] focus:border-[#D4AF37] focus:outline-none text-sm text-[#3D1E22] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a topic</option>
                          <option>Bridal Consultation</option>
                          <option>Custom Commission</option>
                          <option>Collection Enquiry</option>
                          <option>Virtual Viewing</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-[#3D1E22] uppercase tracking-wider mb-2">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5D7B8] focus:border-[#D4AF37] focus:outline-none text-sm text-[#3D1E22] placeholder-[#A89B8E] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury border border-[#D4AF37]/40 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto" />
                    <h3 className="font-cinzel text-xl font-bold text-[#3D1E22]">Message Received</h3>
                    <p className="font-cormorant text-lg italic text-[#5C4A42]">We will be in touch within 24 hours. Thank you for reaching out.</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#D4AF37]/35 shadow-luxury space-y-5">
                <h3 className="font-cinzel text-lg font-bold text-[#3D1E22] tracking-wide">Contact Details</h3>

                <a href="tel:+914427228900" className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8] hover:border-[#D4AF37]/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#3D1E22] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] font-bold text-[#8C6D38] uppercase tracking-wider block">Phone</span>
                    <span className="text-sm font-semibold text-[#3D1E22] group-hover:text-[#A83232] transition-colors">+91 44 2722 8900</span>
                  </div>
                </a>

                <a href="mailto:heritage@shreesarees.in" className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8] hover:border-[#D4AF37]/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#3D1E22] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] font-bold text-[#8C6D38] uppercase tracking-wider block">Email</span>
                    <span className="text-sm font-semibold text-[#3D1E22] group-hover:text-[#A83232] transition-colors">heritage@shreesarees.in</span>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8]">
                  <div className="w-10 h-10 rounded-full bg-[#3D1E22] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] font-bold text-[#8C6D38] uppercase tracking-wider block">Flagship Address</span>
                    <span className="text-sm text-[#5C4A42] font-light leading-relaxed">No. 42, West Car Street, Kanchipuram, Tamil Nadu 631502</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5D7B8]">
                  <div className="w-10 h-10 rounded-full bg-[#3D1E22] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] font-bold text-[#8C6D38] uppercase tracking-wider block">Hours</span>
                    <span className="text-sm text-[#5C4A42] font-light">Open Daily: 10:00 AM – 8:30 PM</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/914427228900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full py-3.5 px-5 rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider hover:bg-[#1EB957] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#D4AF37]/35 shadow-luxury space-y-3">
                <h3 className="font-cinzel text-sm font-bold text-[#3D1E22] tracking-wide uppercase">Follow Us</h3>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-xs font-semibold text-[#3D1E22] hover:text-[#A83232] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span>@shreesarees.kanchipuram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-0">
        <div className="w-full h-72 border-t border-[#D4AF37]/20">
          <iframe
            src="https://maps.google.com/maps?q=Kanchipuram,Tamil+Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Flagship Location"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#F3EAD8]/25">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block text-xs tracking-[0.28em] text-[#8C6D38] font-bold uppercase px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 shadow-xs">
              FREQUENTLY ASKED
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-[#3D1E22]">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-[#FDFBF7] border border-[#D4AF37]/35 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="font-cinzel text-sm font-bold text-[#3D1E22] pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-[#D4AF37] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#8C6D38] shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-[#6B5A52] font-light leading-relaxed border-t border-[#E5D7B8] pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
