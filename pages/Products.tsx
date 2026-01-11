
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, ShieldCheck, Leaf } from 'lucide-react';
import { IMAGES } from '../constants';

const PRODUCTS = [
  { id: '1', name: 'Organic 1121 Basmati', category: 'Rice', slug: '1121-basmati', img: IMAGES.rice1121, desc: 'Supreme extra-long grain rice, aged naturally for peak aroma and zero chemical residue.' },
  { id: '2', name: 'Pearl Millet (Bajra)', category: 'Mota Anaj', slug: 'pearl-millet', img: "https://images.unsplash.com/photo-1508013861974-9f6347163835?q=80&w=1000&auto=format&fit=crop", desc: 'Iron-rich ancient superfood, harvested from pesticide-free traditional drylands.' },
  { id: '3', name: 'Kabuli Chickpeas', category: 'Pulses', slug: 'kabuli-chickpeas', img: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1000&auto=format&fit=crop", desc: 'Export-grade large chickpeas with high protein retention and zero synthetic polish.' },
  { id: '4', name: 'Healthy Mixed Grains', category: 'Superfoods', slug: 'mixed-grains', img: "https://images.unsplash.com/photo-1511690078903-71dad5a49fae?q=80&w=1000&auto=format&fit=crop", desc: 'A curated blend of nutrient-dense ancient grains for modern heart-healthy diets.' },
  { id: '5', name: 'White Sorghum (Jowar)', category: 'Mota Anaj', slug: 'sorghum-jowar', img: "https://images.unsplash.com/photo-1474440692490-2e83af13a4ca?q=80&w=1000&auto=format&fit=crop", desc: 'Naturally gluten-free grain with high fiber content, grown in traditional organic clusters.' },
  { id: '6', name: 'Split Red Lentils', category: 'Pulses', slug: 'red-lentils', img: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1000&auto=format&fit=crop", desc: 'Highly digestible split pulses sourced from regions with minimal agrochemical footprint.' },
  { id: '7', name: 'Finger Millet (Ragi)', category: 'Mota Anaj', slug: 'finger-millet', img: "https://images.unsplash.com/photo-1508013861974-9f6347163835?q=80&w=1000&auto=format&fit=crop", desc: 'Calcium powerhouse superfood. Sustainably sourced and processed without heat-damage.' },
  { id: '8', name: 'Whole Green Moong', category: 'Pulses', slug: 'green-moong', img: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1000&auto=format&fit=crop", desc: 'Nutrient-rich small beans harvested from healthy soils with zero residue traces.' },
];

const ProductsListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Rice', 'Pulses', 'Mota Anaj', 'Superfoods'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Banner - Extreme Contrast */}
      <section className="bg-[#0f172a] py-32 md:py-64 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-10">
            <div className="inline-block bg-primary px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase">Export Portfolio</div>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">Certified <br/><span className="text-primary italic">Origins.</span></h1>
            <p className="text-2xl md:text-4xl text-gray-400 font-light leading-relaxed max-w-3xl">
              India’s finest residue-free superfoods, harvested with traditional wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Filters - Modern & Sticky */}
      <div className="sticky top-20 md:top-24 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl">
        <div className="container mx-auto px-6 py-8 md:py-12 flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="flex items-center gap-8 md:gap-16 overflow-x-auto pb-6 md:pb-0 w-full lg:w-auto scrollbar-hide">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`whitespace-nowrap text-[12px] font-black tracking-[0.4em] uppercase transition-all pb-4 border-b-4 ${activeCategory === cat ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-900'}`}
               >
                 {cat}
               </button>
             ))}
          </div>
          <div className="relative w-full lg:w-[500px]">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-300 w-6 h-6" />
            <input 
              type="text" 
              placeholder="SEARCH CATALOG..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-16 py-6 md:py-7 text-sm font-black tracking-[0.3em] outline-none focus:ring-4 ring-primary/10 uppercase"
            />
          </div>
        </div>
      </div>

      {/* Grid - High Contrast Card Layout */}
      <section className="py-24 md:py-48 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {filteredProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/products/${product.slug}`}
                className="group block space-y-10"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-gray-100 relative shadow-xl hover:shadow-3xl transition-all duration-700 border border-gray-50">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-8 right-8">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-gray-100">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-primary text-white px-8 py-3 rounded-2xl text-[11px] font-black tracking-widest uppercase shadow-2xl">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-6 px-4">
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-[0.95] tracking-tight flex items-center justify-between">
                    {product.name}
                    <ChevronRight className="w-10 h-10 text-primary translate-x-[-20px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-xl md:text-2xl line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="pt-6 flex items-center gap-6 text-[12px] font-black tracking-[0.4em] text-primary uppercase">
                    <span className="w-16 h-[2.5px] bg-primary"></span>
                    Bulk Grade A
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-64">
               <Leaf className="w-24 h-24 text-gray-100 mx-auto mb-10" />
               <p className="text-gray-400 text-4xl font-light italic">No results found for your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsListing;
