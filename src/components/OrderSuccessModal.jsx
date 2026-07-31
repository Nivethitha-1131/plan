import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Sparkles, ShieldCheck, Truck, X, Award, FileText } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrderSuccessModal = () => {
  const { isSuccessOpen, setIsSuccessOpen, lastOrderDetails } = useCart();

  if (!isSuccessOpen || !lastOrderDetails) return null;

  const { orderId, date, customer, items, totalAmount } = lastOrderDetails;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSuccessOpen(false)}
          className="fixed inset-0 bg-[#2C1810]/75 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#D4AF37]/60 overflow-hidden z-10 my-auto text-center"
        >
          {/* Top Banner */}
          <div className="bg-[#3D1E22] text-[#F3E5AB] py-8 px-6 space-y-3 relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] mx-auto flex items-center justify-center">
              <CheckCircle className="w-9 h-9 text-[#D4AF37]" />
            </div>
            <span className="text-[10px] font-cinzel tracking-[0.24em] font-bold text-[#D4AF37] uppercase block">
              RESERVATIONS &amp; SHIPMENT CONFIRMED
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wide text-[#FAF7F2]">
              Thank You for Your Order
            </h2>
            <p className="text-xs text-[#E5D7B8] font-cormorant italic max-w-md mx-auto">
              Your handloom masterworks are being carefully inspected, silk-mark authenticated, and packed in luxury velvet containers.
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 text-left max-h-[60vh] overflow-y-auto">
            {/* Order Reference Box */}
            <div className="p-4 bg-[#F3EAD8] rounded-2xl border border-[#E5D7B8] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[#8C6D38] font-light block">Order Reference Number</span>
                <strong className="font-cinzel text-sm text-[#3D1E22] font-bold">#{orderId}</strong>
              </div>
              <div>
                <span className="text-[#8C6D38] font-light block">Date of Order</span>
                <strong className="text-[#3D1E22] font-semibold">{date}</strong>
              </div>
              <div>
                <span className="text-[#8C6D38] font-light block">Delivery Estimate</span>
                <strong className="text-[#2E7D32] font-semibold">3-5 Business Days</strong>
              </div>
            </div>

            {/* Delivery Destination */}
            <div className="space-y-1.5 text-xs text-[#5C4A42]">
              <h4 className="font-cinzel font-bold text-[#3D1E22] uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#8C6D38]" />
                <span>Shipping Destination</span>
              </h4>
              <p className="font-semibold text-[#3D1E22]">{customer.fullName}</p>
              <p>{customer.address}, {customer.city}, {customer.state} - {customer.pincode}</p>
              <p className="text-[#8C6D38]">Phone: {customer.phone} • Email: {customer.email}</p>
            </div>

            {/* Ordered Items */}
            <div className="space-y-3">
              <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider">
                Purchased Masterworks ({items.length})
              </h4>
              <div className="space-y-2">
                {items.map(({ saree, quantity }) => (
                  <div key={saree.id} className="p-3 bg-[#FDFBF7] rounded-xl border border-[#E5D7B8] flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <img
                        src={saree.image}
                        alt={saree.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-14 object-cover rounded-lg border border-[#D4AF37]/30"
                      />
                      <div>
                        <p className="font-cinzel font-bold text-[#3D1E22]">{saree.name}</p>
                        <span className="text-[10px] text-[#8C6D38]">Qty: {quantity} • {saree.lineage}</span>
                      </div>
                    </div>
                    <span className="font-semibold text-[#3D1E22]">
                      ₹{(saree.price * quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Paid */}
            <div className="pt-3 border-t border-[#E5D7B8] flex justify-between items-center text-sm font-cinzel font-bold">
              <span className="text-[#3D1E22]">Total Paid</span>
              <span className="text-base text-[#8C6D38]">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>

            {/* Silk Mark Guarantee Note */}
            <div className="p-3.5 bg-[#F3EAD8]/60 rounded-2xl border border-[#D4AF37]/35 flex items-center space-x-3 text-xs text-[#5C4A42]">
              <Award className="w-5 h-5 text-[#8C6D38] shrink-0" />
              <span>Includes Holographic Silk Mark Tag, Zari Purity Certificate, and Care Guide.</span>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setIsSuccessOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-cinzel font-bold tracking-widest uppercase transition-colors shadow-luxury border border-[#D4AF37]/40 cursor-pointer"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
