
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from './components/Layout';
import { AdminLayout } from './components/AdminLayout';
import Home from './pages/Home';
import AboutContent from './pages/AboutContent'; // Assume split or defined below
import ProductsListing from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Leadership from './pages/Leadership';
import Presence from './pages/Presence';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminAISummarizer from './pages/AdminAISummarizer';
import AdminPromoters from './pages/AdminPromoters';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = localStorage.getItem('pin_auth') === 'true';
  return isAuth ? <>{children}</> : <Navigate to="/admin/login" />;
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="bg-navy py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">Connect With Us.</h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">Global sourcing inquiries or partnership opportunities—our team is ready to assist.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 -mt-10 md:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase">Headquarters</h2>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <p className="text-gray-600 font-medium leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <p className="text-gray-600 font-medium">{CONTACT_INFO.whatsapp}</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div className="space-y-1">
                  {CONTACT_INFO.emails.map(email => (
                    <p key={email} className="text-gray-600 font-medium">{email}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                <h2 className="text-3xl font-black">Inquiry Received.</h2>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input required className="w-full bg-gray-50 border rounded-xl p-4" placeholder="Full Name" />
                <input required type="email" className="w-full bg-gray-50 border rounded-xl p-4" placeholder="Email Address" />
                <textarea required rows={5} className="w-full bg-gray-50 border rounded-xl p-4" placeholder="Message..." />
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-black">SEND INQUIRY</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="bg-white">
    <div className="bg-eggshell py-16 md:py-24 border-b border-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-4">Our Origin</h2>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">India's Natural Legacy.</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Sourcing the purest Basmati and Nutri-Cereals with traditional wisdom and modern quality standards.
        </p>
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      {/* Fix: Wrapped children components within Layout tags to satisfy TypeScript React.ReactNode requirements */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
      <Route path="/products" element={<PublicLayout><ProductsListing /></PublicLayout>} />
      <Route path="/products/:slug" element={<PublicLayout><ProductDetail /></PublicLayout>} />
      <Route path="/leadership" element={<PublicLayout><Leadership /></PublicLayout>} />
      <Route path="/presence" element={<PublicLayout><Presence /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
      
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<PrivateRoute><AdminLayout><AdminDashboard /></AdminLayout></PrivateRoute>} />
      <Route path="/admin/ai-summarizer" element={<PrivateRoute><AdminLayout><AdminAISummarizer /></AdminLayout></PrivateRoute>} />
      <Route path="/admin/promoters" element={<PrivateRoute><AdminLayout><AdminPromoters /></AdminLayout></PrivateRoute>} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
