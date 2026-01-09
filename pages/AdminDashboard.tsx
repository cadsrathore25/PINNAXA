
import React from 'react';
import { Package, Users, MessageCircle, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Products', value: '24', icon: <Package />, color: 'bg-blue-500' },
    { label: 'Team Members', value: '5', icon: <Users />, color: 'bg-purple-500' },
    { label: 'New Inquiries', value: '12', icon: <MessageCircle />, color: 'bg-green-500' },
    { label: 'Export Orders', value: '8', icon: <TrendingUp />, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back, Admin</h1>
        <p className="text-gray-500">Here's what's happening at Pinnaxa Industries today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className={`${stat.color} p-4 rounded-2xl text-white`}>
              {/* Fixed className error in cloneElement */}
              {React.cloneElement(stat.icon as any, { className: 'w-7 h-7' })}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-6">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-none">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900">New inquiry from Global Trade Co.</p>
                <p className="text-sm text-gray-500">2 hours ago • Product: 1121 Basmati</p>
              </div>
              <button className="text-primary font-bold text-sm">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;