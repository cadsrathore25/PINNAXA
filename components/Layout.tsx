
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin, MessageSquare, Globe, LogIn, Leaf, ChevronRight } from 'lucide-react';
import { BRAND_NAME, CONTACT_INFO, COMPANY_NAME } from '../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Presence', path: '/presence' },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm h-16 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg text-white shadow-sm transition-transform group-hover:scale-105">
            <Leaf className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-black tracking-tighter text-gray-900 leading-none">{BRAND_NAME.toUpperCase()}</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-primary font-extrabold">Industries Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all pb-1 border-b-2 ${location.pathname === link.path ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/contact')}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-primary transition-all text-[10px] font-black tracking-[0.2em]"
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors z-[1000]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[900] bg-white flex flex-col lg:hidden">
          {/* Menu Content */}
          <div className="flex-grow flex flex-col px-8 pt-24 pb-12 overflow-y-auto">
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-4xl font-black tracking-tighter flex items-center justify-between ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name.toUpperCase()}
                  <ChevronRight className="w-8 h-8 opacity-20" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 space-y-8">
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
                  className="w-full bg-primary text-white py-5 rounded-2xl text-sm font-black tracking-[0.2em] shadow-xl transition-all uppercase"
                >
                  GET IN TOUCH
                </button>
                <Link 
                  to="/admin/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full border-2 border-gray-100 text-gray-400 py-5 rounded-2xl text-xs font-black tracking-[0.2em] transition-all uppercase hover:bg-gray-50 hover:text-primary"
                >
                  <LogIn className="w-5 h-5" /> STAFF LOGIN
                </Link>
              </div>
              
              <div className="flex flex-col gap-4 text-gray-400 text-[10px] font-black tracking-widest uppercase text-center">
                 <p className="flex items-center justify-center gap-2"><MapPin className="w-3 h-3" /> UDAIPUR, RAJASTHAN, INDIA</p>
                 <p className="flex items-center justify-center gap-2"><Mail className="w-3 h-3" /> {CONTACT_INFO.emails[0]}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-black tracking-tighter">{BRAND_NAME.toUpperCase()}</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm font-light">
            Sourcing India's finest agro-products across the world's most complex supply chains with purity and reliability.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Explore</h4>
          <ul className="space-y-2 text-gray-400 font-bold text-[11px] tracking-widest uppercase">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/presence" className="hover:text-white transition-colors">Global Network</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Global HQ</h4>
          <ul className="space-y-2 text-gray-400 font-medium">
            <li className="flex items-start gap-3 text-xs">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Partner With Us</h4>
          <Link to="/contact" className="block w-full bg-primary text-center py-3 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all hover:bg-primary-dark">
            Contact Sales
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <a 
        href={CONTACT_INFO.whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[150] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};
