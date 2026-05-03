import React, { useState } from 'react';
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  Menu,
  X,
  Truck,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Star,
  ChevronRight,
  Zap,
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const categories = [
    { name: 'Electronics', icon: '⚡', count: '124 Products' },
    { name: 'Fashion', icon: '👗', count: '89 Products' },
    { name: 'Home & Kitchen', icon: '🛋️', count: '56 Products' },
    { name: 'Beauty', icon: '💄', count: '42 Products' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '$299.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Minimalist Smart Watch',
      price: '$199.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Leather Everyday Backpack',
      price: '$79.50',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      name: 'Organic Glow Face Serum',
      price: '$45.00',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                S-Cart
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors duration-200">Features</a>
              <a href="#shop" className="hover:text-indigo-600 transition-colors duration-200">Shop</a>
              <a href="#categories" className="hover:text-indigo-600 transition-colors duration-200">Categories</a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-5">
              <button className="text-slate-500 hover:text-indigo-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-slate-500 hover:text-indigo-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <div className="relative cursor-pointer text-slate-500 hover:text-indigo-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition shadow-sm shadow-indigo-100 flex items-center gap-1.5">
                <User className="w-4 h-4" /> Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3 shadow-lg">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#shop"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#categories"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <div className="flex flex-col gap-2 px-3 py-2 border-t border-slate-100">
              <button className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700">
                <User className="w-4 h-4" /> Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-indigo-50/70 via-white to-violet-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-indigo-100">
              <Zap className="w-4 h-4 text-indigo-600" /> New Generation E-Commerce
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build your online store with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                S-Cart
              </span>
            </h1>
            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              Launch a blazing-fast, modern, and high-converting e-commerce website with Tailwind CSS and premium UI/UX foundations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl text-sm font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-2xl text-sm font-semibold hover:bg-slate-50 transition shadow-sm shadow-slate-100/50">
                Explore Features
              </button>
            </div>
            <div className="pt-3 flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-800">4.9/5</span>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs text-slate-400 font-medium">Based on 2,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Showcase Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-3xl opacity-10 transform rotate-6"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 p-6 shadow-2xl shadow-slate-200/40">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-slate-800">Trending Deals</span>
                <span className="text-xs text-indigo-600 font-semibold cursor-pointer flex items-center gap-1 group">
                  See All <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {products.slice(0, 2).map((product) => (
                  <div
                    key={product.id}
                    className="group bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/50 hover:border-indigo-300 transition hover:shadow-md hover:shadow-indigo-50/60"
                  >
                    <div className="relative w-full h-36 bg-white rounded-xl mb-3 overflow-hidden shadow-sm">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xs font-semibold text-slate-800 truncate">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-bold text-indigo-600 leading-none">
                        {product.price}
                      </span>
                      <span className="text-[10px] text-amber-600 font-medium bg-amber-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        ★ {product.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-bold text-xs tracking-wider uppercase bg-indigo-50/60 px-3 py-1 rounded-full border border-indigo-100">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-4">
              Everything you need for a modern shop
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              S-Cart provides an excellent user experience, robust architecture, and tools to accelerate your e-commerce conversion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/40 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300">
              <div className="bg-indigo-600 text-white p-3.5 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 shadow-md shadow-indigo-100">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Lightning Fast Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Optimized performance across all devices with instant loading assets, ensuring zero lag for your customers.
              </p>
            </div>

            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/40 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300">
              <div className="bg-indigo-600 text-white p-3.5 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 shadow-md shadow-indigo-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Secure Payments</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrated with the industry's most reliable and secure gateways to protect user data and transactions.
              </p>
            </div>

            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/40 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300">
              <div className="bg-indigo-600 text-white p-3.5 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 shadow-md shadow-indigo-100">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">24/7 Premium Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dedicated assistance anytime you need, ensuring your store is always up to date and functional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-indigo-600 font-bold text-[11px] tracking-wider uppercase">
                Discover
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
                Featured Products
              </h2>
            </div>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group">
              View All{' '}
              <span className="group-hover:translate-x-0.5 transition duration-200">
                →
              </span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-4 border border-slate-200/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-56 bg-slate-50 rounded-2xl overflow-hidden mb-5 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md cursor-pointer hover:text-indigo-600 text-slate-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-sm text-slate-800 truncate group-hover:text-indigo-600 transition">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-lg font-extrabold text-indigo-600">
                        {product.price}
                      </span>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100/50 flex items-center gap-0.5">
                        ★ {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-2xl text-xs font-semibold hover:bg-indigo-600 transition flex items-center justify-center gap-2 shadow-sm">
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Explore Popular Categories
            </h2>
            <p className="text-sm text-slate-500">
              Find exactly what you are looking for across our diverse, high-quality inventory.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200/60 bg-slate-50/20 flex flex-col items-center justify-center text-center hover:border-indigo-500/50 hover:bg-indigo-50/20 cursor-pointer transition-all group"
              >
                <div className="text-3xl mb-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-105 transition duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-400 mt-1 font-medium">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-indigo-600 p-2 rounded-xl">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight">S-Cart</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs text-slate-600">
              Accelerating e-commerce development with clean design and a modular structure.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#shop" className="hover:text-indigo-400 transition">Products</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-indigo-400 transition">Categories</a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition">Discounts</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">Contact Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">Terms & Privacy</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">
              Newsletter
            </h4>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Get updates on new products and features directly in your inbox.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-indigo-500 text-white placeholder-slate-600"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/40 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 gap-4">
          <p>© 2026 S-Cart. All rights reserved.</p>
          <p>Designed with modular UI principles.</p>
        </div>
      </footer>
    </div>
  );
}