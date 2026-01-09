
import React, { useState, useRef } from 'react';
import { Edit3, Trash2, Camera, Save, X, PlusCircle, User, Briefcase, FileText } from 'lucide-react';
import { IMAGES } from '../constants';
import { Promoter } from '../types';

const INITIAL_PROMOTERS: Promoter[] = [
  { id: '1', name: 'Amit Sharma', designation: 'Managing Director', bio: 'With 15+ years in agro-exports, Amit leads the vision of Pinnaxa with a focus on global expansion.', image: IMAGES.promoter },
  { id: '2', name: 'Sanjay Jain', designation: 'Director of Operations', bio: 'Sanjay oversees our supply chain and quality assurance protocols, ensuring farm-to-port excellence.', image: IMAGES.promoter },
  { id: '3', name: 'Priya Mehra', designation: 'Chief Marketing Officer', bio: 'Priya builds our international brand presence and manages relationships with global distributors.', image: IMAGES.promoter },
];

const AdminPromoters = () => {
  const [promoters, setPromoters] = useState<Promoter[]>(INITIAL_PROMOTERS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Promoter | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startEdit = (p: Promoter) => {
    setEditingId(p.id);
    setFormData({ ...p });
  };

  const handleSave = () => {
    if (formData) {
      if (editingId === 'new') {
        setPromoters([...promoters, { ...formData, id: Date.now().toString() }]);
      } else {
        setPromoters(promoters.map(p => p.id === formData.id ? formData : p));
      }
      setEditingId(null);
      setFormData(null);
      alert('Promoter profile updated successfully!');
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this promoter?')) {
      setPromoters(promoters.filter(p => p.id !== id));
    }
  };

  const handleAddNew = () => {
    const newP: Promoter = {
      id: 'new',
      name: '',
      designation: '',
      bio: '',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop'
    };
    setEditingId('new');
    setFormData(newP);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && formData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Key People Management</h1>
          <p className="text-gray-500">Update profiles, biographies, and photos of company leadership.</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-primary-dark transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          Add Leader
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {editingId === 'new' && formData && (
          <div className="bg-primary/5 rounded-[2.5rem] p-8 border-2 border-dashed border-primary/20 animate-in fade-in slide-in-from-top-4 duration-300">
            <h2 className="text-xl font-bold mb-6 text-primary">New Leader Profile</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="space-y-4">
                <div className="w-48 h-48 rounded-3xl bg-gray-100 overflow-hidden relative group border-4 border-white shadow-xl">
                   <img src={formData.image} alt="New" className="w-full h-full object-cover" />
                   <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                   >
                     <Camera className="text-white w-8 h-8" />
                   </button>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                <p className="text-xs text-gray-400 text-center">Click image to upload photo</p>
              </div>
              <div className="flex-grow space-y-4">
                 <input 
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:ring-2 ring-primary outline-none"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                 />
                 <input 
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:ring-2 ring-primary outline-none"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={e => setFormData({ ...formData, designation: e.target.value })}
                 />
                 <textarea 
                  className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:ring-2 ring-primary outline-none h-32"
                  placeholder="Short Biography"
                  value={formData.bio}
                  onChange={e => setFormData({ ...formData, bio: e.target.value })}
                 />
                 <div className="flex gap-4">
                    <button onClick={handleSave} className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Save className="w-5 h-5" /> Save Profile</button>
                    <button onClick={() => setEditingId(null)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold">Cancel</button>
                 </div>
              </div>
            </div>
          </div>
        )}

        {promoters.map((p) => (
          <div key={p.id} className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {editingId === p.id && formData ? (
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col items-center gap-4 shrink-0">
                  <div className="w-48 h-48 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white relative group">
                    <img src={formData.image} alt={p.name} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Camera className="text-white w-8 h-8" />
                    </button>
                  </div>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                  <p className="text-xs text-primary font-bold">Update Profile Photo</p>
                </div>
                <div className="flex-grow space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                        <input 
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-primary outline-none font-bold"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase ml-1">Designation</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                        <input 
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-primary outline-none font-bold"
                          value={formData.designation}
                          onChange={e => setFormData({ ...formData, designation: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Bio Description</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
                      <textarea 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 ring-primary outline-none h-32 leading-relaxed"
                        value={formData.bio}
                        onChange={e => setFormData({ ...formData, bio: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={handleSave}
                      className="flex-1 bg-primary text-white py-5 rounded-2xl font-bold shadow-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-3"
                    >
                      <Save className="w-6 h-6" />
                      Save Changes
                    </button>
                    <button 
                      onClick={() => setEditingId(null)}
                      className="px-8 bg-gray-100 text-gray-500 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-lg shrink-0 border-4 border-white">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow space-y-3">
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                      <p className="text-primary font-bold text-sm tracking-widest uppercase">{p.designation}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => startEdit(p)}
                        className="p-3 bg-gray-50 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
                        title="Edit Profile"
                      >
                        <Edit3 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(p.id)}
                        className="p-3 bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        title="Delete Profile"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-6 py-2">
                    "{p.bio}"
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPromoters;
