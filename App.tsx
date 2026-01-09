import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from './components/Layout';
import { AdminLayout } from './components/AdminLayout';
import Home from './pages/Home';
import ProductsListing from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Leadership from './pages/Leadership';
import Presence from './pages/Presence';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminAISummarizer from './pages/AdminAISummarizer';
import AdminPromoters from './pages/AdminPromoters';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = localStorage.getItem('pin_auth') === 'true';
  return isAuth ? <>{children}</> : <Navigate to="/admin/login" />;
};

const About = () => (
  /* Fix: Wrapped About page content correctly to satisfy children requirement */
  <PublicLayout>
    <div className="py-24 container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center lg:text-left">About Our Journey</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center lg:text-left">
          <p>Founded with a passion for excellence, Pinnaxa Industries Pvt. Ltd. has emerged as a powerhouse in Indian agro-product sourcing.</p>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Our Mission</h3>
            <p className="text-gray-900 font-medium text-xl italic">"To deliver premium, ethically sourced agro-products to global tables."</p>
          </div>
        </div>
        <div><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px]" alt="Corporate" /></div>
      </div>
    </div>
  </PublicLayout>
);

const App = () => (
  <Router>
    <Routes>
      {/* Fix: Explicitly passing Home as children to PublicLayout to resolve Property 'children' is missing error */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<About />} />
      {/* Fix: Explicitly passing ProductsListing as children to PublicLayout */}
      <Route path="/products" element={<PublicLayout><ProductsListing /></PublicLayout>} />
      {/* Fix: Explicitly passing ProductDetail as children to PublicLayout */}
      <Route path="/products/:slug" element={<PublicLayout><ProductDetail /></PublicLayout>} />
      {/* Fix: Explicitly passing Leadership as children to PublicLayout */}
      <Route path="/leadership" element={<PublicLayout><Leadership /></PublicLayout>} />
      {/* Fix: Explicitly passing Presence as children to PublicLayout */}
      <Route path="/presence" element={<PublicLayout><Presence /></PublicLayout>} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route 
        path="/admin/dashboard" 
        element={
          /* Fix: Explicitly passing components as children to PrivateRoute and AdminLayout */
          <PrivateRoute>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin/ai-summarizer" 
        element={
          /* Fix: Explicitly passing components as children to PrivateRoute and AdminLayout */
          <PrivateRoute>
            <AdminLayout>
              <AdminAISummarizer />
            </AdminLayout>
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin/promoters" 
        element={
          /* Fix: Explicitly passing components as children to PrivateRoute and AdminLayout */
          <PrivateRoute>
            <AdminLayout>
              <AdminPromoters />
            </AdminLayout>
          </PrivateRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;