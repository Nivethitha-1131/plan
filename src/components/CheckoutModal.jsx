import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, ShieldCheck, Lock, Sparkles, CheckCircle2, Truck, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal = () => {
  const {
    cart,
    cartTotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    setLastOrderDetails,
    setIsSuccessOpen,
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `SSS-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderDetails = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        customer: formData,
        items: [...cart],
        totalAmount: cartTotal,
      };

      setLastOrderDetails(orderDetails);
      clearCart();
      setIsProcessing(false);
      setIsCheckoutOpen(false);
      setIsSuccessOpen(true);
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCheckoutOpen(false)}
          className="fixed inset-0 bg-[#2C1810]/75 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-[#3D1E22] text-[#F3E5AB] border-b border-[#D4AF37]/30 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-cinzel text-lg font-bold tracking-wider">Royal Order Checkout</h2>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#582B30] text-[#F3E5AB] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Shipping Details */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-cinzel text-sm font-bold text-[#3D1E22] uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C6D38]" />
                  <span>Delivery Address</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[#5C4A42] font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Priyadarshini Sundaram"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#5C4A42] font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="priya@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5C4A42] font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#5C4A42] font-medium mb-1">Street Address</label>
                    <textarea
                      name="address"
                      required
                      rows="2"
                      placeholder="House/Flat No., Street Name, Landmark"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[#5C4A42] font-medium mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="Chennai"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5C4A42] font-medium mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        required
                        placeholder="Tamil Nadu"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5C4A42] font-medium mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        placeholder="600001"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#E5D7B8] rounded-xl text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection */}
                <h3 className="font-cinzel text-sm font-bold text-[#3D1E22] uppercase tracking-wider flex items-center gap-2 pt-2">
                  <CreditCard className="w-4 h-4 text-[#8C6D38]" />
                  <span>Payment Option</span>
                </h3>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'card', label: 'Credit / Debit Card' },
                    { id: 'upi', label: 'UPI / GPay / PhonePe' },
                    { id: 'netbanking', label: 'Net Banking' },
                    { id: 'cod', label: 'Cash on Delivery' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`p-3 rounded-xl border flex items-center space-x-2 cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? 'border-[#D4AF37] bg-[#F3EAD8] text-[#3D1E22] font-bold shadow-xs'
                          : 'border-[#E5D7B8] bg-[#FDFBF7] text-[#5C4A42]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleChange}
                        className="accent-[#3D1E22]"
                      />
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Order Summary Column */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-4 bg-[#F3EAD8]/70 rounded-2xl border border-[#E5D7B8] space-y-3">
                  <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] uppercase tracking-wider border-b border-[#E5D7B8] pb-2">
                    Order Summary ({cart.length} Sarees)
                  </h4>

                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    {cart.map(({ saree, quantity }) => (
                      <div key={saree.id} className="flex justify-between items-center text-xs">
                        <div className="truncate pr-2">
                          <p className="font-medium text-[#3D1E22] truncate">{saree.name}</p>
                          <span className="text-[10px] text-[#8C6D38]">Qty: {quantity}</span>
                        </div>
                        <span className="font-semibold text-[#3D1E22] shrink-0">
                          ₹{(saree.price * quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#E5D7B8] space-y-1 text-xs">
                    <div className="flex justify-between text-[#5C4A42]">
                      <span>Insured Express Courier</span>
                      <span className="text-[#2E7D32] font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between text-[#5C4A42]">
                      <span>Silk Mark Authentication</span>
                      <span className="text-[#2E7D32] font-semibold">INCLUDED</span>
                    </div>
                    <div className="flex justify-between font-cinzel text-sm font-bold text-[#3D1E22] pt-2 border-t border-[#E5D7B8]">
                      <span>Total Payable</span>
                      <span className="text-[#8C6D38]">₹{cartTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#D4AF37]/35 flex items-center space-x-2.5 text-[11px] text-[#5C4A42]">
                  <Lock className="w-4 h-4 text-[#8C6D38] shrink-0" />
                  <span>256-Bit SSL Encryption • 100% Genuine Silk Mark Guarantee</span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury border border-[#D4AF37]/40 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin text-[#D4AF37]" />
                      <span>PROCESSING ORDER...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>CONFIRM &amp; PLACE ORDER</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
