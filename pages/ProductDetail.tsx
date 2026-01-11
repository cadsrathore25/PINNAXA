
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Package, MapPin, ClipboardList, Send, Leaf } from 'lucide-react';
import { IMAGES } from '../constants';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Expanded mock logic for organic focus
  const product = {
    name: slug?.replace('-', ' ').toUpperCase() || 'Product Name',
    category: 'Organic Certified',
    image: IMAGES.rice1121,
    description: `Our ${slug} is sourced directly from certified organic clusters and traditional farming belts in India. Grown with zero-to-minimal agrochemical use, this crop retains its natural minerals and authentic flavor profile, providing superior health benefits compared to mass-market alternatives.`,
    specifications: [
      'Residue Level: NDT (Non-Detectable)',
      'Organic Certification: NPOP / USDA Equivalent',
      'Purity: 99% Min',
      'Processing: Natural / Chemical-Free',
      'Nutritional Content: High Mineral Retention'
    ],
    packaging: 'Eco-friendly PP/Jute bags available in 1kg to 50kg variants.',
    origin: 'Traditional Organic Belts of India (Rajasthan / MP / Himalayan Foothills)'
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-primary font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Catalog
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                 <Leaf className="w-6 h-6 text-primary" />
                 <span className="font-bold text-sm text-gray-900">RESIDUE-FREE</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{product.name}</h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary font-bold">
                  <ClipboardList className="w-6 h-6" />
                  <h3>Organic Standards</h3>
                </div>
                <ul className="space-y-2">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <Package className="w-6 h-6" />
                    <h3>Packaging</h3>
                  </div>
                  <p className="text-gray-600">{product.packaging}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <MapPin className="w-6 h-6" />
                    <h3>Origin</h3>
                  </div>
                  <p className="text-gray-600">{product.origin}</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:bg-primary-dark shadow-xl transition-all flex items-center justify-center gap-3"
              >
                Inquire for Organic Export
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
