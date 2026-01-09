
import React from 'react';
import { Globe, MapPin, Navigation } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Presence = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex p-2.5 md:p-3 bg-white/10 rounded-xl md:rounded-2xl mb-4 md:mb-6 backdrop-blur-sm border border-white/20">
            <Globe className="w-8 h-8 md:w-10 md:h-10 text-primary-light" />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">Our Global Presence</h1>
          <p className="text-lg md:text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            Headquartered in India with a robust network of international offices and distribution hubs, 
            Pinnaxa ensures seamless agro-sourcing and delivery across five continents.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24 bg-eggshell">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                <div className="h-56 md:h-64 relative overflow-hidden">
                  <img 
                    src={loc.image} 
                    alt={loc.country} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2">
                    <span className="text-xl md:text-2xl">{loc.flag}</span>
                    <span className="font-bold text-gray-900 text-sm md:text-base">{loc.country}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 text-primary font-bold mb-3 md:mb-4 text-sm md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{loc.city} Regional Hub</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{loc.country} Operations</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                    {loc.description}
                  </p>
                  <div className="pt-4 md:pt-6 border-t border-gray-50 flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-400 font-medium">Strategic Distribution</span>
                    <Navigation className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Numbers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white">
            <div>
              <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">50+</p>
              <p className="text-primary-light font-bold uppercase tracking-widest text-[10px] md:text-xs">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">6</p>
              <p className="text-primary-light font-bold uppercase tracking-widest text-[10px] md:text-xs">Global Hubs</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">15+</p>
              <p className="text-primary-light font-bold uppercase tracking-widest text-[10px] md:text-xs">Agro Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">24/7</p>
              <p className="text-primary-light font-bold uppercase tracking-widest text-[10px] md:text-xs">Logistics Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presence;
