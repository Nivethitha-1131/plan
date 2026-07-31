import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ShieldCheck, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    setIsCheckoutOpen,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (couponCode.trim().toUpperCase() === 'ROYAL10') {
      setDiscountPercent(10);
      setCouponApplied(true);
    } else if (couponCode.trim().toUpperCase() === 'SILK20') {
      setDiscountPercent(20);
      setCouponApplied(true);
    } else {
      setCouponError('Invalid coupon. Try "ROYAL10" for 10% off.');
    }
  };

  const discountAmount = Math.round((cartTotal * discountPercent) / 100);
  const finalTotal = cartTotal - discountAmount;

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-[#2C1810]/70 backdrop-blur-xs"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l-2 border-[#D4AF37]/40 flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 bg-[#3D1E22] text-[#F3E5AB] border-b border-[#D4AF37]/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="font-cinzel text-base sm:text-lg font-bold tracking-wider">Your Silk Sanctuary Cart</h2>
                  <span className="text-[10px] text-[#E5D7B8] tracking-widest uppercase block">
                    {cartCount} {cartCount === 1 ? 'Handloom Item' : 'Handloom Items'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#582B30] text-[#F3E5AB] transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping & Silk Mark Notification */}
            <div className="bg-[#F3EAD8] px-5 py-2.5 border-b border-[#E5D7B8] flex items-center space-x-2 text-xs text-[#8C6D38] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#A83232] shrink-0" />
              <span>Complimentary Insured Express Delivery &amp; Silk Mark Certificate Included.</span>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-[#F3EAD8] border border-[#D4AF37]/30 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-[#8C6D38]/60" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-[#3D1E22]">Your Cart is Empty</h3>
                  <p className="text-xs text-[#6B5A52] font-cormorant italic max-w-xs">
                    Explore our handloom heritage sarees and add timeless silk masterworks to your collection.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] text-xs font-cinzel font-bold tracking-widest uppercase hover:bg-[#582B30] transition-colors shadow-sm"
                  >
                    EXPLORE COLLECTIONS
                  </button>
                </div>
              ) : (
                cart.map(({ saree, quantity }) => (
                  <div
                    key={saree.id}
                    className="p-3.5 bg-[#FDFBF7] rounded-2xl border border-[#E5D7B8] shadow-xs flex space-x-3.5 items-center"
                  >
                    <img
                      src={saree.image}
                      alt={saree.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover rounded-xl border border-[#D4AF37]/30 shadow-xs shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[9px] font-cinzel font-bold text-[#8C6D38] uppercase tracking-wider block">
                        {saree.lineage}
                      </span>
                      <h4 className="font-cinzel text-xs font-bold text-[#3D1E22] truncate leading-tight">
                        {saree.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#8C6D38]">
                        ₹{saree.price.toLocaleString('en-IN')}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-2 bg-[#F3EAD8] rounded-lg p-1 border border-[#E5D7B8]">
                          <button
                            onClick={() => updateQuantity(saree.id, -1)}
                            className="p-1 rounded hover:bg-[#FAF7F2] text-[#3D1E22] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#3D1E22] px-1.5">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(saree.id, 1)}
                            className="p-1 rounded hover:bg-[#FAF7F2] text-[#3D1E22] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(saree.id)}
                          className="p-1.5 text-[#A83232] hover:bg-[#FCE8E8] rounded-lg transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer (Summary & Checkout) */}
            {cart.length > 0 && (
              <div className="p-5 bg-[#F3EAD8]/70 border-t border-[#E5D7B8] space-y-4">
                {/* Coupon Form */}
                <form onSubmit={handleApplyCoupon} className="flex space-x-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#8C6D38] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. ROYAL10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-[#FAF7F2] border border-[#E5D7B8] rounded-xl text-xs text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37] uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#3D1E22] text-[#F3E5AB] text-xs font-cinzel font-bold rounded-xl hover:bg-[#582B30] transition-colors cursor-pointer"
                  >
                    APPLY
                  </button>
                </form>
                {couponError && <p className="text-[10px] text-[#A83232]">{couponError}</p>}
                {couponApplied && (
                  <p className="text-[10px] text-[#2E7D32] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#2E7D32]" />
                    {discountPercent}% Royal Discount Applied!
                  </p>
                )}

                {/* Pricing Summary */}
                <div className="space-y-1.5 text-xs text-[#5C4A42]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#2E7D32] font-medium">
                      <span>Royal Coupon Discount ({discountPercent}%)</span>
                      <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#8C6D38]">
                    <span>Insured Express Shipping</span>
                    <span className="font-bold text-[#2E7D32]">FREE</span>
                  </div>
                  <div className="pt-2 border-t border-[#E5D7B8] flex justify-between font-cinzel text-sm font-bold text-[#3D1E22]">
                    <span>Total Amount</span>
                    <span className="text-[#8C6D38]">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-cinzel font-bold tracking-widest uppercase transition-all shadow-luxury border border-[#D4AF37]/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
