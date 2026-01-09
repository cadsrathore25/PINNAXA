
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Globe, Handshake, Truck, Target, Award, Eye } from 'lucide-react';
import { IMAGES } from '../constants';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { 
      name: "Premium Rice", 
      img: IMAGES.rice1121, 
      desc: "World-renowned Basmati and non-Basmati varieties from India's most fertile belts.",
      count: "12+ Varieties"
    },
    { 
      name: "Grains & Pulses", 
      img: IMAGES.wheat, 
      desc: "High-protein wheat, corn, and lentils sourced directly from verified farming clusters.",
      count: "8+ Varieties"
    },
    { 
      name: "Exotic Spices", 
      img: IMAGES.spices, 
      desc: "Authentic, high-grade Indian spices processed to retain natural aroma and oils.",
      count: "15+ Varieties"
    },
  ];

  const usps = [
    { 
      title: "Direct From Origin", 
      desc: "We eliminate unnecessary layers, connecting global buyers directly to the source of harvest.",
      icon: <Handshake className="w-10 h-10 text-primary" />
    },
    { 
      title: "Quality Benchmarking", 
      desc: "Multi-stage quality checks in ultra-hygienic facilities ensure international food safety compliance.",
      icon: <Award className="w-10 h-10 text-primary" />
    },
    { 
      title: "Ethical Ecosystem", 
      desc: "Supporting sustainable farming practices and fair-trade principles across our supply chain.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />
    },
    { 
      title: "Precision Logistics", 
      desc: "Real-time tracking and optimized shipping routes ensure freshness from warehouse to port.",
      icon: <Truck className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Premium Rice" className="w-full h-full object-cover scale-105 animate-[pulse_15s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white max-w-5xl pt-10 pb-20 md:pt-0 md:pb-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/30 backdrop-blur-md rounded-full text-primary-light text-xs md:text-sm font-bold mb-6 md:mb-8 border border-primary/40">
            <Leaf className="w-4 h-4" />
            <span className="tracking-widest uppercase">Global Agro Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-[1.1] mb-6 md:mb-8">
            Empowering <br/>
            <span className="text-primary-light italic">Global Tables</span><br/>
            with Indian Harvest
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 md:mb-12 max-w-2xl leading-relaxed font-light">
            Pinnaxa Industries is a premier sourcing partner delivering transparency, purity, and excellence in agro-exports since inception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button 
              onClick={() => navigate('/products')}
              className="bg-primary hover:bg-primary-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-bold transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              Explore Portfolios
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-bold transition-all"
            >
              Our Journey
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Intro - Optimized Layout without Intro Image */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4 text-center">
               <h2 className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">General Information</h2>
               <h3 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">Authenticity in Every Grain</h3>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light text-center">
              Pinnaxa Industries Pvt. Ltd. stands at the intersection of India's rich agricultural tradition and modern global supply chain standards. We specialize in identifying the highest-grade harvests and ensuring they reach international markets in their most pristine form.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                 <div className="bg-primary/10 p-3 md:p-4 rounded-xl md:rounded-2xl h-fit">
                    <Handshake className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg md:text-xl mb-1">Direct Networking</h4>
                    <p className="text-gray-500 text-sm md:text-base">Vast network of over 500+ small and large-scale farming clusters across India.</p>
                 </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                 <div className="bg-primary/10 p-3 md:p-4 rounded-xl md:rounded-2xl h-fit">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg md:text-xl mb-1">Total Compliance</h4>
                    <p className="text-gray-500 text-sm md:text-base">Adherence to FSSAI, ISO, and rigorous international export quality protocols.</p>
                 </div>
              </div>
            </div>
            <div className="text-center pt-8">
              <Link to="/about" className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:translate-x-2 transition-transform">
                Learn more about our heritage <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-20 hidden lg:block" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <div className="bg-white/10 backdrop-blur-lg p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/20 hover:bg-white/15 transition-all">
              <Eye className="w-10 h-10 md:w-12 md:h-12 text-primary-light mb-6 md:mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Vision</h2>
              <p className="text-lg md:text-xl text-green-50/80 leading-relaxed font-light">
                To be the most trusted global bridge for Indian agricultural excellence, recognized for transforming lives through ethical trade and uncompromising quality benchmarks.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/20 hover:bg-white/15 transition-all">
              <Target className="w-10 h-10 md:w-12 md:h-12 text-primary-light mb-6 md:mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl text-green-50/80 leading-relaxed font-light">
                To empower our farming partners with global exposure while delivering the authentic taste of India to every corner of the world through a transparent, high-efficiency supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20 md:py-32 bg-eggshell">
        <div className="container mx-auto px-4 text-center mb-12 md:mb-20">
          <h2 className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6">Our Portfolios</h2>
          <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Specialized Sourcing</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            We focus on core agricultural categories where Indian quality is unmatched on the global stage.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-700">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white w-full">
                  <span className="text-primary-light font-bold text-xs md:text-sm tracking-widest mb-2 md:mb-4 block uppercase">{cat.count}</span>
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{cat.name}</h4>
                  <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light">
                    {cat.desc}
                  </p>
                  <button 
                    onClick={() => navigate('/products')}
                    className="flex items-center gap-2 text-white font-bold group-hover:text-primary-light transition-colors text-sm md:text-base"
                  >
                    View Category <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-10 mb-12 md:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6">Why Pinnaxa</h2>
              <h3 className="text-3xl md:text-6xl font-bold">Unmatched Competitive Edge</h3>
            </div>
            <button 
              onClick={() => navigate('/why-pinnaxa')}
              className="px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl bg-eggshell text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm w-full lg:w-auto"
            >
              Learn Our Advantage
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {usps.map((usp, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all">
                <div className="mb-6 md:mb-8 p-4 md:p-5 bg-white shadow-xl rounded-[1rem] md:rounded-[1.5rem] w-fit">
                  {/* Fixed className error in cloneElement */}
                  {React.cloneElement(usp.icon as any, { className: 'w-8 h-8 md:w-10 md:h-10 text-primary' })}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{usp.title}</h4>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Teaser */}
      <section className="py-20 md:py-32 bg-eggshell">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48 blur-3xl" />
             <div className="w-full lg:w-1/2 text-white space-y-6 md:space-y-8 relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold leading-tight">Serving 5 Continents from 6 Global Hubs</h2>
                <p className="text-lg md:text-xl text-green-50/80 font-light">
                  From India to Dubai, Benin to France, we maintain a physical presence to ensure quality at every milestone.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {['India', 'UAE', 'Benin', 'Indonesia', 'South Africa', 'France'].map(c => (
                    <span key={c} className="px-4 md:px-6 py-1.5 md:py-2 bg-white/10 rounded-full text-xs md:text-sm font-bold border border-white/20">{c}</span>
                  ))}
                </div>
             </div>
             <div className="w-full lg:w-1/3">
                <button 
                  onClick={() => navigate('/presence')}
                  className="w-full bg-white text-primary py-6 md:py-8 rounded-2xl md:rounded-[2rem] text-xl md:text-2xl font-bold shadow-2xl hover:bg-green-50 transition-colors flex items-center justify-center gap-3 md:gap-4"
                >
                  <Globe className="w-6 h-6 md:w-8 md:h-8" />
                  Global Reach
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h2 className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-6 md:mb-10">Inquiry</h2>
        <h3 className="text-3xl md:text-7xl font-bold mb-8 md:mb-12 max-w-4xl mx-auto leading-tight text-gray-900">
          Ready to Partner with India's Best?
        </h3>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-primary text-white px-10 md:px-16 py-5 md:py-7 rounded-2xl md:rounded-[2rem] text-xl md:text-2xl font-bold hover:bg-primary-dark transition-all shadow-2xl hover:scale-105 w-full md:w-auto"
        >
          Start a Conversation
        </button>
      </section>
    </div>
  );
};

export default Home;