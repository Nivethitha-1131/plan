import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { CinematicEntry } from './components/CinematicEntry';
import { SareeDetailModal } from './components/SareeDetailModal';
import { AppointmentModal } from './components/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { HeritagePage } from './pages/HeritagePage';
import { ShowroomPage } from './pages/ShowroomPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentCity, setAppointmentCity] = useState(undefined);
  const [appointmentSaree, setAppointmentSaree] = useState(undefined);
  // Show entry only when user opens first (once per session, won't replay on refresh)
  const [showEntry, setShowEntry] = useState(
    () => !sessionStorage.getItem('sss_entered')
  );

  const handleEntryComplete = () => {
    sessionStorage.setItem('sss_entered', '1');
    setShowEntry(false);
  };

  const handleOpenAppointment = (city, sareeName) => {
    setAppointmentCity(city);
    setAppointmentSaree(sareeName);
    setAppointmentModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] flex flex-col font-sans selection:bg-[#D4AF37]/20 selection:text-[#3D1E22]">
        {/* Cinematic entry — shown on first session open only */}
        <AnimatePresence>
          {showEntry && <CinematicEntry key="entry" onComplete={handleEntryComplete} />}
        </AnimatePresence>

        <ScrollToTop />
        <Header onOpenAppointment={handleOpenAppointment} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/collections" element={<CollectionsPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/heritage" element={<HeritagePage />} />
            <Route path="/showroom" element={<ShowroomPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
          </Routes>
        </main>

        {/* Global Modals */}
        <SareeDetailModal
          saree={selectedSaree}
          onClose={() => setSelectedSaree(null)}
          onRequestViewing={(sareeName) => {
            setSelectedSaree(null);
            handleOpenAppointment(undefined, sareeName);
          }}
        />

        <AppointmentModal
          isOpen={appointmentModalOpen}
          onClose={() => setAppointmentModalOpen(false)}
          preselectedCity={appointmentCity}
          preselectedSaree={appointmentSaree}
        />
      </div>
    </BrowserRouter>
  );
}
