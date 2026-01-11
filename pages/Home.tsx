import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Globe, ShieldCheck, ChevronRight, CheckCircle } from 'lucide-react';
import { IMAGES, BRAND_NAME } from '../constants';

const Home = () => {
  const navigate = useNavigate();

  const portfolios = [
    { 
      name: "Organic Basmati Rice", 
      img: IMAGES.rice1121, 
      tag: "FLAGSHIP PRODUCT",
      desc: "Purity-guaranteed long-grain rice, grown in traditional Himalayan-fed belts with zero chemical intervention."
    },
    { 
      name: "Nutri-Cereals (Mota Anaj)", 
      img: IMAGES.millet, 
      tag: "ANCIENT SUPERFOODS",
      desc: "Bajra, Jowar & Ragi. Grains with the world's lowest agrochemical usage, sourced from traditional Indian drylands."
    },
    { 
      name: "Premium Pulses", 
      img: IMAGES.pulses, 
      tag: "ORGANIC CERTIFIED",
      desc: "Export-grade pulses processed with zero synthetic fertilizers for maximum nutritional purity."
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Compact and Impactful */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60">
          <img src={IMAGES.hero} alt="Organic Farming" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl space-y-3 md:space-y-6">
            <div className="flex items-center gap-3 text-primary-light font-black tracking-[0.4em] text-[9px]">
              <span className="w-10 h-[2px] bg-primary-light"></span>
              CERTIFIED ORGANIC EXCELLENCE
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter drop-shadow-2xl">
              Purity from <br className="hidden md:block" />
              <span className="text-primary italic">Traditional Roots.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-200 max-w-2xl font-light leading-snug">
              Pinnaxa brings you India's finest crops. Naturally grown with <span className="text-white font-bold underline decoration-primary underline-offset-4">lowest-to-zero agrochemical use.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={() => navigate('/products')}
                className="bg-primary text-white px-7 py-3.5 md:py-4 rounded-lg font-black tracking-widest text-[10px] hover:bg-primary-dark transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 uppercase"
              >
                VIEW CATALOG <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-7 py-3.5 md:py-4 rounded-lg font-black tracking-widest text-[10px] hover:bg-white/20 transition-all uppercase"
              >
                OUR LEGACY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Tightened */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase border-b-2 border-primary pb-1 inline-block">The Health Promise</h2>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
                Authentic Wellness.
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-snug font-light">
                India's agricultural heartland preserves ancient soil wisdom. Our crops are grown in clusters with <span className="font-bold text-gray-900">minimal agrochemical load</span>, delivering true nutrient density.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                     <div className="bg-primary/10 p-2 rounded-lg"><ShieldCheck className="w-4 h-4 text-primary" /></div>
                     <h4 className="font-black text-base text-gray-900 uppercase tracking-tight">Certified</h4>
                   </div>
                   <p className="text-gray-500 font-medium text-xs leading-relaxed">Strict monitoring ensures zero residue and compliance with international bio-safety standards.</p>
                </div>
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                     <div className="bg-primary/10 p-2 rounded-lg"><Heart className="w-4 h-4 text-primary" /></div>
                     <h4 className="font-black text-base text-gray-900 uppercase tracking-tight">Bio-Active</h4>
                   </div>
                   <p className="text-gray-500 font-medium text-xs leading-relaxed">Traditional cultivation results in higher mineral density than commercial hybrids.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Realistic Photos Applied */}
      <section className="bg-eggshell py-12 md:py-16">
        <div className="container mx-auto px-6 mb-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4">
            <div className="space-y-1">
              <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">The Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">Pure Harvests.</h3>
            </div>
            <button onClick={() => navigate('/products')} className="group flex items-center gap-2 text-[9px] font-black tracking-[0.2em] text-primary border-2 border-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all uppercase">
              EXPLORE FULL RANGE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolios.map((p, idx) => (
            <div key={idx} className="group cursor-pointer bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 flex flex-col border border-gray-100">
              <div className="h-56 md:h-72 overflow-hidden relative shrink-0">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-lg shadow border border-gray-100">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-2 flex-grow">
                <span className="text-[7px] font-black text-primary tracking-[0.3em] uppercase bg-primary/5 px-2 py-1 rounded-full">{p.tag}</span>
                <h4 className="text-xl font-bold text-gray-900 leading-tight tracking-tight">{p.name}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-[13px]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Superfood Focus - Mota Anaj */}
      <section className="py-12 md:py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-12 relative overflow-hidden text-white shadow-xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                 <div className="space-y-3 md:space-y-6">
                    <h2 className="text-primary-light font-black tracking-[0.4em] text-[8px] uppercase">The Revival</h2>
                    <h1 className="text-3xl md:text-6xl font-black leading-none tracking-tighter">Mota Anaj.</h1>
                    <p className="text-base md:text-xl text-gray-400 font-light leading-snug">
                      Our Nutri-Cereal collection is grown with <span className="text-white font-bold italic">zero synthetic inputs</span>. Ancient resilience for modern diets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                       <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-light" />
                          <span className="text-[10px] font-black tracking-widest uppercase">Pesticide Free</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-light" />
                          <span className="text-[10px] font-black tracking-widest uppercase">Heirloom Quality</span>
                       </div>
                    </div>
                 </div>
                 <div className="relative">
                    <img 
                      src={IMAGES.millet} 
                      alt="Nutri-Cereals Variety" 
                      className="relative rounded-xl shadow-2xl object-cover aspect-square w-full max-w-sm mx-auto" 
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="bg-primary py-12 md:py-20 text-white text-center">
        <div className="container mx-auto px-6 space-y-4">
           <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none">Purity Defined.</h2>
           <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto font-light">
             Import India's cleanest and most nutritious crops directly through our global network.
           </p>
           <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-primary px-8 py-3.5 rounded-lg font-black tracking-[0.3em] text-[9px] hover:scale-105 transition-all shadow-lg uppercase"
           >
             Inquire for Bulk Order
           </button>
        </div>
      </section>
    </div>
  );
};

export default Home;