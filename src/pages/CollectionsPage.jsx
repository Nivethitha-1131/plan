import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '../components/Footer';
import {
  Sparkles,
  Search,
  Filter,
  SlidersHorizontal,
  Grid,
  List,
  Heart,
  Eye,
  ShoppingBag,
  Clock,
  ShieldCheck,
  Star,
  ArrowUpDown,
  RotateCcw
} from 'lucide-react';
import { SAREE_CATALOG, SAREE_CATEGORIES } from '../data/sareeData';
import { useCart } from '../context/CartContext';
import { SareeDetailModal } from '../components/SareeDetailModal';

export function CollectionsPage({ onOpenAppointment }) {
  const { addToCart, toggleWishlist, isInWishlist, setIsCheckoutOpen } = useCart();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedSareeModal, setSelectedSareeModal] = useState(null);

  // Filter & Sort Logic
  const filteredSarees = useMemo(() => {
    return SAREE_CATALOG.filter((saree) => {
      const matchesCategory =
        activeCategory === 'all' || saree.category === activeCategory;
      const matchesSearch =
        saree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.lineage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        saree.colorPalette.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'weaving') return b.weavingHours - a.weavingHours;
      return 0; // featured default
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleBuyNow = (saree) => {
    addToCart(saree, 1);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen flex flex-col justify-between">
      {/* Top Banner Hero */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-14 bg-[#FDFBF7] relative overflow-hidden border-b border-[#D4AF37]/25">
        <div className="absolute inset-0 jaali-pattern opacity-15 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5 relative z-10">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] text-[#8C6D38] font-semibold uppercase px-4 sm:px-5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0" />
            <span>LUXURY E-COMMERCE STORE</span>
            <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0" />
          </span>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-[#3D1E22] leading-tight tracking-wide">
            The Saree Collection
          </h1>

          <p className="font-cormorant text-lg sm:text-xl lg:text-2xl text-[#5C4A42] font-light italic leading-relaxed max-w-3xl mx-auto">
            Discover 100% pure Kanchipuram mulberry silks, Banarasi brocades, and archival masterworks — woven with 24K tested zari and certified by Silk Mark India.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs text-[#8C6D38] font-medium">
            <span className="flex items-center gap-1.5 bg-[#F3EAD8]/70 px-3.5 py-1.5 rounded-full border border-[#E5D7B8]">
              <ShieldCheck className="w-4 h-4 text-[#A83232]" />
              Silk Mark India Authenticated
            </span>
            <span className="flex items-center gap-1.5 bg-[#F3EAD8]/70 px-3.5 py-1.5 rounded-full border border-[#E5D7B8]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              24K Gold Zari Tested
            </span>
            <span className="flex items-center gap-1.5 bg-[#F3EAD8]/70 px-3.5 py-1.5 rounded-full border border-[#E5D7B8]">
              <Clock className="w-4 h-4 text-[#3D1E22]" />
              Complimentary Worldwide Shipping
            </span>
          </div>
        </div>
      </section>

      {/* Main E-Commerce Section */}
      <section className="py-8 sm:py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar: Search + Category Pills + Sort + View */}
          <div className="space-y-5 bg-[#FDFBF7] p-5 sm:p-6 rounded-3xl border border-[#D4AF37]/35 shadow-luxury">
            
            {/* Search + Sort + View Toggle Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#8C6D38] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search sarees, colors, motifs (e.g. Crimson, Lotus, Banarasi)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#E5D7B8] rounded-2xl text-xs text-[#3D1E22] outline-none focus:ring-1 focus:ring-[#D4AF37] placeholder:opacity-70"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A756C] hover:text-[#3D1E22]"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sort & View Controls */}
              <div className="flex items-center gap-3 justify-between sm:justify-end">
                
                {/* Sort Dropdown */}
                <div className="flex items-center space-x-2 bg-[#FAF7F2] px-3.5 py-2 rounded-2xl border border-[#E5D7B8] text-xs">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#8C6D38]" />
                  <span className="text-[#8A756C] font-medium hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-[#3D1E22] font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value="featured">Featured Weaves</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="weaving">Most Devotional Hours</option>
                  </select>
                </div>

                {/* View Toggle Buttons */}
                <div className="flex items-center bg-[#FAF7F2] p-1 rounded-2xl border border-[#E5D7B8]">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-xl transition-colors cursor-pointer ${
                      viewMode === 'grid' ? 'bg-[#3D1E22] text-[#F3E5AB]' : 'text-[#8C6D38] hover:bg-[#F3EAD8]'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-xl transition-colors cursor-pointer ${
                      viewMode === 'list' ? 'bg-[#3D1E22] text-[#F3E5AB]' : 'text-[#8C6D38] hover:bg-[#F3EAD8]'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Category Pills Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar scroll-smooth">
              {SAREE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? SAREE_CATALOG.length
                    : SAREE_CATALOG.filter((s) => s.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-cinzel font-bold tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                      isActive
                        ? 'bg-[#3D1E22] text-[#F3E5AB] border border-[#D4AF37] shadow-sm'
                        : 'bg-[#FAF7F2] text-[#5C4A42] hover:bg-[#F3EAD8] border border-[#E5D7B8]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-[#D4AF37]/30 text-[#F3E5AB]' : 'bg-[#E5D7B8] text-[#3D1E22]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Catalog Results Header */}
          <div className="flex items-center justify-between text-xs text-[#8C6D38] px-1 font-medium">
            <span>
              Showing <strong className="text-[#3D1E22] font-bold">{filteredSarees.length}</strong> of{' '}
              {SAREE_CATALOG.length} Handloom Masterworks
            </span>
            {activeCategory !== 'all' || searchQuery ? (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="flex items-center space-x-1 text-[#A83232] hover:underline font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            ) : null}
          </div>

          {/* Saree Catalog Display */}
          {filteredSarees.length === 0 ? (
            <div className="py-16 text-center space-y-4 bg-[#FDFBF7] rounded-3xl border border-[#E5D7B8]">
              <Search className="w-12 h-12 text-[#8C6D38]/50 mx-auto" />
              <h3 className="font-cinzel text-xl font-bold text-[#3D1E22]">No Sarees Found</h3>
              <p className="text-xs text-[#5C4A42] max-w-sm mx-auto font-cormorant italic">
                We couldn't find any sarees matching your search criteria. Try adjusting your filter or search terms.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#3D1E22] text-[#F3E5AB] text-xs font-cinzel font-bold tracking-widest uppercase hover:bg-[#582B30] transition-colors"
              >
                VIEW ALL SAREES
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid Layout */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredSarees.map((saree) => {
                const inWishlist = isInWishlist(saree.id);

                return (
                  <motion.div
                    key={saree.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-luxury flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300"
                  >
                    {/* Image Header with Badge & Hover Controls */}
                    <div className="relative aspect-3/4 overflow-hidden bg-[#E8DCC4]">
                      <img
                        src={saree.image}
                        alt={saree.name}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Badge */}
                      {saree.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="text-[9px] font-cinzel font-bold tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-xs">
                            {saree.badge}
                          </span>
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(saree)}
                        className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          inWishlist
                            ? 'bg-[#3D1E22] text-[#E53935] border border-[#D4AF37]'
                            : 'bg-[#FDFBF7]/80 text-[#3D1E22] hover:bg-[#FDFBF7] border border-[#D4AF37]/30'
                        }`}
                        title="Add to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                      </button>

                      {/* Quick View Button on Hover */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => setSelectedSareeModal(saree)}
                          className="w-full py-2.5 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md text-[#3D1E22] text-xs font-cinzel font-bold tracking-widest uppercase hover:bg-[#3D1E22] hover:text-[#F3E5AB] transition-colors border border-[#D4AF37]/50 flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                        >
                          <Eye className="w-4 h-4 text-[#8C6D38]" />
                          <span>QUICK VIEW SPECIFICATION</span>
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Rating & Lineage */}
                        <div className="flex items-center justify-between text-[10px] font-cinzel font-bold text-[#8C6D38] uppercase tracking-wider mb-1">
                          <span>{saree.lineage}</span>
                          <span className="flex items-center gap-1 text-[#D4AF37] bg-[#F3EAD8] px-2 py-0.5 rounded-full">
                            <Star className="w-3 h-3 fill-current text-[#D4AF37]" />
                            <span className="text-[#3D1E22] font-semibold">{saree.rating}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => setSelectedSareeModal(saree)}
                          className="font-cinzel text-base sm:text-lg font-bold text-[#3D1E22] hover:text-[#8C6D38] transition-colors cursor-pointer leading-snug line-clamp-2"
                        >
                          {saree.name}
                        </h3>

                        {/* Palette & Weaving Time */}
                        <div className="flex items-center justify-between text-xs text-[#5C4A42] pt-2">
                          <span className="italic text-[#8A756C] font-cormorant text-sm truncate">
                            {saree.colorPalette}
                          </span>
                          <span className="flex items-center space-x-1 text-[10px] text-[#8C6D38] bg-[#F3EAD8]/60 px-2 py-0.5 rounded-md shrink-0">
                            <Clock className="w-3 h-3" />
                            <span>{saree.weavingHours}h Woven</span>
                          </span>
                        </div>
                      </div>

                      {/* Price & E-Commerce Buttons */}
                      <div className="pt-3 border-t border-[#E5D7B8] space-y-3">
                        <div className="flex items-baseline space-x-2">
                          <span className="font-cinzel text-xl font-bold text-[#3D1E22]">
                            ₹{saree.price.toLocaleString('en-IN')}
                          </span>
                          {saree.originalPrice && (
                            <span className="text-xs text-[#8A756C] line-through">
                              ₹{saree.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => addToCart(saree, 1)}
                            className="py-2.5 px-3 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-[10px] font-cinzel font-bold tracking-widest uppercase transition-colors border border-[#D4AF37]/40 flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>ADD TO CART</span>
                          </button>

                          <button
                            onClick={() => handleBuyNow(saree)}
                            className="py-2.5 px-3 rounded-full bg-[#D4AF37] text-[#2C1810] hover:bg-[#E6CA65] text-[10px] font-cinzel font-bold tracking-widest uppercase transition-colors border border-[#D4AF37]/60 flex items-center justify-center space-x-1 cursor-pointer shadow-xs"
                          >
                            <span>BUY NOW</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* List View Layout */
            <div className="space-y-6">
              {filteredSarees.map((saree) => {
                const inWishlist = isInWishlist(saree.id);

                return (
                  <motion.div
                    key={saree.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-luxury grid grid-cols-1 md:grid-cols-12 hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <div className="md:col-span-4 relative aspect-4/3 md:aspect-auto">
                      <img
                        src={saree.image}
                        alt={saree.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {saree.badge && (
                        <span className="absolute top-4 left-4 text-[9px] font-cinzel font-bold tracking-widest text-[#F3E5AB] uppercase bg-[#3D1E22]/90 px-3 py-1 rounded-full border border-[#D4AF37]/40">
                          {saree.badge}
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-cinzel font-bold text-[#8C6D38] uppercase tracking-wider">
                            {saree.lineage}
                          </span>
                          <button
                            onClick={() => toggleWishlist(saree)}
                            className="text-[#3D1E22] hover:text-[#A83232]"
                          >
                            <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current text-[#A83232]' : ''}`} />
                          </button>
                        </div>

                        <h3
                          onClick={() => setSelectedSareeModal(saree)}
                          className="font-cinzel text-xl sm:text-2xl font-bold text-[#3D1E22] hover:text-[#8C6D38] transition-colors cursor-pointer mt-1"
                        >
                          {saree.name}
                        </h3>

                        <p className="font-cormorant text-base text-[#5C4A42] italic mt-2 line-clamp-2">
                          "{saree.description}"
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5D7B8]">
                        <div>
                          <span className="text-[10px] text-[#8C6D38] uppercase font-cinzel block">PRICE</span>
                          <span className="font-cinzel text-2xl font-bold text-[#3D1E22]">
                            ₹{saree.price.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setSelectedSareeModal(saree)}
                            className="p-3 rounded-full bg-[#F3EAD8] text-[#3D1E22] hover:bg-[#E5D7B8] transition-colors border border-[#E5D7B8]"
                            title="Quick View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => addToCart(saree, 1)}
                            className="px-5 py-3 rounded-full bg-[#3D1E22] text-[#F3E5AB] hover:bg-[#582B30] text-xs font-cinzel font-bold tracking-widest uppercase transition-colors border border-[#D4AF37]/40 flex items-center space-x-2"
                          >
                            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                            <span>ADD TO CART</span>
                          </button>

                          <button
                            onClick={() => handleBuyNow(saree)}
                            className="px-5 py-3 rounded-full bg-[#D4AF37] text-[#2C1810] hover:bg-[#E6CA65] text-xs font-cinzel font-bold tracking-widest uppercase transition-colors border border-[#D4AF37]/60"
                          >
                            BUY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Saree Detail Modal Popup */}
      {selectedSareeModal && (
        <SareeDetailModal
          saree={selectedSareeModal}
          onClose={() => setSelectedSareeModal(null)}
          onRequestViewing={onOpenAppointment}
          onAddToCart={(saree) => addToCart(saree, 1)}
          onBuyNow={(saree) => handleBuyNow(saree)}
        />
      )}

      <Footer />
    </div>
  );
}
