
import React, { useEffect, useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { IMAGES } from '../constants';
import { Promoter } from '../types';

const DEFAULT_PROMOTERS: Promoter[] = [
  { 
    id: '1',
    name: 'Devi Singh Rathore', 
    designation: 'Finance Director & Head of Strategic Operations', 
    bio: 'An Indian Chartered Accountant with over a decade of deep-rooted experience in finance and business partnering. His diverse career spans from high-growth startups to blue-chip listed companies, and from core R&D to large-scale manufacturing units.', 
    image: IMAGES.deviSingh 
  },
  { 
    id: '2',
    name: 'Amit Sharma', 
    designation: 'Managing Director', 
    bio: 'With 15+ years in agro-exports, Amit leads the global vision of Pinnaxa with a focus on sustainable supply chains and organic cluster development.', 
    image: IMAGES.promoter1 
  },
  { 
    id: '3',
    name: 'Sanjay Jain', 
    designation: 'Director of Operations', 
    bio: 'Sanjay oversees our complex supply chain and quality assurance protocols, ensuring farm-to-port excellence for every global shipment.', 
    image: IMAGES.promoter2 
  },
];

const Leadership = () => {
  const [promoters, setPromoters] = useState<Promoter[]>(DEFAULT_PROMOTERS);

  useEffect(() => {
    const saved = localStorage.getItem('pinnaxa_promoters');
    if (saved) {
      try {
        setPromoters(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load custom promoters", e);
      }
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-eggshell py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">Our People</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Expert Leadership.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Guided by financial integrity and industrial wisdom to deliver India's finest organic harvest to the world.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {promoters.map((person, i) => (
            <div key={person.id} className="group">
              <div className="relative mb-8 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100 border border-gray-100">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="flex gap-4">
                    <button className="bg-white text-primary p-4 rounded-2xl hover:bg-primary hover:text-white transition-colors shadow-xl"><Linkedin className="w-6 h-6" /></button>
                    <button className="bg-white text-primary p-4 rounded-2xl hover:bg-primary hover:text-white transition-colors shadow-xl"><Mail className="w-6 h-6" /></button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black mb-1 text-gray-900 tracking-tight">{person.name}</h3>
                <p className="text-primary font-black uppercase tracking-widest text-xs">{person.designation}</p>
                <p className="text-gray-500 leading-relaxed text-lg pt-2">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
