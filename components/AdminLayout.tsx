
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Users, MessageSquare, Edit3, Sparkles, LogOut, Leaf, Menu, X } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('pin_auth');
    if (!isAuth) navigate('/admin/login');
  }, [navigate]);

  useEffect(() => {
    // Close sidebar on route change for mobile
    setIsSidebarOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('pin_auth');
    navigate('/');
  };

  const menuItems = [
    { icon: <LayoutDashboard />, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: <Package />, label: 'Products', path: '/admin/products' },
    { icon: <Users />, label: 'Promoters', path: '/admin/promoters' },
    { icon: <MessageSquare />, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: <Edit3 />, label: 'Site Content', path: '/admin/content' },
    { icon: <Sparkles className="text-primary" />, label: 'AI Summarizer', path: '/admin/ai-summarizer' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Admin Header */}
      <div className="lg:hidden bg-gray-900 text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1 rounded-md">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">{BRAND_NAME}</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-400 hover:text-white"
        >
          {isSidebarOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-gray-900 text-white flex flex-col p-8 z-50 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="hidden lg:flex items-center gap-2 mb-12">
          <div className="bg-primary p-1.5 rounded-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">{BRAND_NAME}</span>
        </div>

        <nav className="flex-grow space-y-2 mt-4 lg:mt-0">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                location.pathname === item.path 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {/* Fixed className error in cloneElement */}
              {React.cloneElement(item.icon as any, { className: 'w-5 h-5' })}
              {item.label}
            </Link>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-400 hover:bg-red-500/10 transition-all mt-8"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};