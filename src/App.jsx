import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { CinematicEntry } from './components/CinematicEntry';
import { SareeDetailModal } from './components/SareeDetailModal';
import { AppointmentModal } from './components/AppointmentModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { CartProvider, useCart } from './context/CartContext';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { HeritagePage } from './pages/HeritagePage';
import { ShowroomPage } from './pages/ShowroomPage';
import { ContactPage } from './pages/ContactPage';
import { Sparkles } from 'lucide-react';

function ToastContainer() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#3D1E22] text-[#F3E5AB] border-2 border-[#D4AF37]/60 px-5 py-3 rounded-2xl shadow-luxury flex items-center space-x-3 text-xs font-cinzel font-bold tracking-wider"
      >
        <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse shrink-0" />
        <span>{toastMessage}</span>
      </motion.div>
    </AnimatePresence>
  );
}

function MainLayout() {
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentCity, setAppointmentCity] = useState(undefined);
  const [appointmentSaree, setAppointmentSaree] = useState(undefined);
  // Show entry only when user opens first (once per session, won't replay on refresh)
  const [showEntry, setShowEntry] = useState(
    () => !sessionStorage.getItem('sss_entered')
  );

  const { addToCart, setIsCheckoutOpen } = useCart();

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

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <CheckoutModal />
      <OrderSuccessModal />
      <ToastContainer />

      <SareeDetailModal
        saree={selectedSaree}
        onClose={() => setSelectedSaree(null)}
        onRequestViewing={(sareeName) => {
          setSelectedSaree(null);
          handleOpenAppointment(undefined, sareeName);
        }}
        onAddToCart={(saree) => addToCart(saree, 1)}
        onBuyNow={(saree) => {
          addToCart(saree, 1);
          setIsCheckoutOpen(true);
        }}
      />

      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preselectedCity={appointmentCity}
        preselectedSaree={appointmentSaree}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </CartProvider>
  );
}
