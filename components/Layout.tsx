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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm h-14 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1 rounded-lg text-white shadow-sm transition-transform group-hover:scale-105">
            <Leaf className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-black tracking-tighter text-gray-900 leading-none">{BRAND_NAME.toUpperCase()}</span>
            <span className="text-[7px] uppercase tracking-[0.2em] text-primary font-extrabold">Industries Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-[9px] uppercase tracking-[0.2em] font-black transition-all pb-1 border-b-2 ${location.pathname === link.path ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/contact')}
            className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-primary transition-all text-[9px] font-black tracking-[0.2em]"
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-1 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" 
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[200] bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-2'}`}>
        <div className="flex flex-col h-full">
          <div className="h-14 px-6 flex items-center justify-between border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2">
               <Leaf className="w-5 h-5 text-primary" />
               <span className="text-lg font-black tracking-tighter text-gray-900">{BRAND_NAME.toUpperCase()}</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-gray-900"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto px-8 py-10 flex flex-col justify-between">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="flex items-center justify-between text-xl font-black text-gray-900"
                >
                  <span>{link.name.toUpperCase()}</span>
                  <ChevronRight className="w-5 h-5 text-primary" />
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-5">
              <Link to="/admin/login" className="flex items-center gap-3 text-gray-900 font-black tracking-widest text-[10px] hover:text-primary transition-colors uppercase">
                <LogIn className="w-4 h-4 text-primary" /> STAFF LOGIN
              </Link>
              
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-primary text-white py-4 rounded-lg text-sm font-black tracking-[0.1em] shadow-lg active:scale-95 transition-all"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-10 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-lg font-black tracking-tighter">{BRAND_NAME.toUpperCase()}</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-[13px] font-light">
            Sourcing India's finest agro-products across the world's most complex supply chains with purity and reliability.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-2">
          <h4 className="text-[8px] uppercase tracking-[0.3em] font-black text-primary">Explore</h4>
          <ul className="space-y-1.5 text-gray-400 font-bold text-[9px] tracking-widest uppercase">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/presence" className="hover:text-white transition-colors">Global Network</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-2">
          <h4 className="text-[8px] uppercase tracking-[0.3em] font-black text-primary">Global HQ</h4>
          <ul className="space-y-1.5 text-gray-400 font-medium">
            <li className="flex items-start gap-2 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-primary mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
          <h4 className="text-[8px] uppercase tracking-[0.3em] font-black text-primary">Partner With Us</h4>
          <Link to="/contact" className="block w-full bg-primary text-center py-2 rounded-md text-[9px] font-black tracking-widest uppercase transition-all">
            Contact Sales
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[8px] uppercase tracking-[0.2em] font-black">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}.</p>
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
        className="fixed bottom-4 right-4 z-[150] bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </div>
  );
};