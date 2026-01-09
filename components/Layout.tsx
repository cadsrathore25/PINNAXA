import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import { BRAND_NAME, CONTACT_INFO, COMPANY_NAME } from '../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Presence', path: '/presence' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary-dark">{BRAND_NAME}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="text-gray-600 hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/admin/login" className="text-gray-400 hover:text-primary transition-colors text-sm border-l pl-8 border-gray-100">Login</Link>
          <button 
            onClick={() => navigate('/presence')}
            className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-all font-semibold shadow-md"
          >
            Global Network
          </button>
        </nav>

        <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <div className={`fixed inset-0 z-[60] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-8 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-primary">{BRAND_NAME}</span>
            <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-primary">
                {link.name}
              </Link>
            ))}
            <Link to="/admin/login" onClick={() => setIsMenuOpen(false)} className="text-gray-500 pt-4 border-t border-gray-100">Staff Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        <div className="space-y-6">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="bg-primary p-1.5 rounded-lg">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{BRAND_NAME}</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
            Pinnaxa Industries Pvt. Ltd. is India's leading agro-product sourcing partner, delivering excellence from farm to table.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-primary-light">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/presence" className="hover:text-white">Presence</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-primary-light">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-primary-light shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="w-5 h-5 text-primary-light" />
              <span>{CONTACT_INFO.emails[0]}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-primary-light">Global Footprint</h4>
          <p className="text-gray-400 mb-4 text-sm">Serving 50+ countries from our hubs in India, Dubai, Benin, Indonesia, South Africa, and France.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <a 
        href={CONTACT_INFO.whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};