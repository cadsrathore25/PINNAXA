
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';

const PRODUCTS = [
  { id: '1', name: '1121 Basmati Rice', category: 'Rice', slug: '1121-basmati', img: IMAGES.rice1121, desc: 'Extra long grain, premium aroma, non-sticky texture. Aged for 2 years for peak flavor.' },
  { id: '2', name: 'Pusa Basmati', category: 'Rice', slug: 'pusa-basmati', img: IMAGES.ricePusa, desc: 'Authentic Indian Pusa variety with great texture and high cooking yield.' },
  { id: '3', name: 'Sugandha Rice', category: 'Rice', slug: 'sugandha-rice', img: IMAGES.riceSugandha, desc: 'Cost-effective aromatic long grain rice suitable for high-volume catering.' },
  { id: '4', name: 'Indian Wheat', category: 'Grains', slug: 'indian-wheat', img: IMAGES.wheat, desc: 'High protein content, ideal for premium flour, pasta, and baked goods.' },
  { id: '5', name: 'Red Chili Powder', category: 'Spices', slug: 'red-chili', img: IMAGES.spices, desc: 'Finely ground, naturally dried premium chilies with vibrant color and heat.' },
  { id: '6', name: 'Traditional Basmati', category: 'Rice', slug: 'traditional-basmati', img: IMAGES.riceTraditional, desc: 'The king of aroma, original heirloom variety sourced from heritage farms.' },
  { id: '7', name: 'Yellow Maize (Corn)', category: 'Grains', slug: 'yellow-maize', img: IMAGES.field, desc: 'A-grade non-GMO maize for human consumption and premium animal feed.' },
  { id: '8', name: 'Turmeric Fingers', category: 'Spices', slug: 'turmeric', img: IMAGES.spices, desc: 'High curcumin content turmeric roots, cleaned and sun-dried for purity.' },
];

const ProductsListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Rice', 'Grains', 'Spices'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-eggshell min-h-screen pb-20 md:pb-32">
      {/* Header Banner */}
      <section className="bg-primary-dark text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary rounded-full blur-[100px] md:blur-[150px] opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8">Agro Portfolio</h1>
          <p className="text-lg md:text-2xl text-green-100/80 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
            Sustainably sourced and quality-assured agro-products curated for the international distribution landscape.
          </p>
        </div>
      </section>

      {/* Control Bar */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-10">
        <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-between border border-gray-100">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 lg:flex-none px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-xl scale-105' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 md:w-6 md:h-6" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl py-4 md:py-5 pl-14 md:pl-16 pr-6 focus:ring-2 ring-primary transition-all outline-none font-medium text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest text-center">
        <span>Showing {filteredProducts.length} Products</span>
        <div className="flex flex-wrap justify-center gap-4">
           <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Verified Origin</span>
           <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Export Grade</span>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
            <div className="h-64 md:h-80 overflow-hidden relative">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold text-primary shadow-lg uppercase tracking-tighter">
                {product.category}
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{product.name}</h3>
              <p className="text-gray-500 line-clamp-2 md:line-clamp-3 leading-relaxed font-light text-base md:text-lg">
                {product.desc}
              </p>
              <div className="pt-2 md:pt-4">
                <Link 
                  to={`/products/${product.slug}`} 
                  className="w-full bg-eggshell text-primary font-bold py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 hover:bg-primary hover:text-white transition-all group/btn shadow-sm text-sm md:text-base"
                >
                  Specifications
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="container mx-auto px-4 text-center py-20 md:py-40">
           <p className="text-gray-400 text-xl md:text-2xl font-light">No products found matching your search.</p>
           <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="text-primary font-bold mt-4 underline underline-offset-8">Clear all filters</button>
        </div>
      )}
    </div>
  );
};

export default ProductsListing;
