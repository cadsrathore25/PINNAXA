
import React from 'react';
import { Leaf, ShieldCheck, Globe, Handshake, Truck } from 'lucide-react';

export const IMAGES = {
  // High-quality professional hero and category images
  hero: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2000&auto=format&fit=crop", // Paddy fields at sunrise
  intro: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
  aboutCorporate: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  contactBanner: "https://images.unsplash.com/photo-1516383748238-6ac088320b4c?q=80&w=1200&auto=format&fit=crop",
  
  // Finest quality Indian Rice photographs
  rice1121: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop", // Long grain uncooked basmati
  ricePusa: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop", // Rice in traditional bowl
  riceTraditional: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1000&auto=format&fit=crop", // Premium golden harvest
  riceSugandha: "https://images.unsplash.com/photo-1614950549455-23f2a1b871ed?q=80&w=1000&auto=format&fit=crop", // Grains close up
  
  // Other Agro Products
  wheat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop",
  spices: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
  
  // Leadership & Lifestyle
  promoter: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
  
  // Presence Images
  benin: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=800&auto=format&fit=crop",
  indonesia: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  india: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
  southafrica: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
  france: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop"
};

export const CONTACT_INFO = {
  address: "13, Maan , RK Puram, Teetardi, Udaipur, Rajasthan-313001",
  emails: ["exports@pinnaxa.in", "contact@pinnaxa.in"],
  whatsapp: "+91 95583 45730",
  whatsappUrl: "https://wa.me/919558345730"
};

export const COMPANY_NAME = "Pinnaxa Industries Pvt. Ltd.";
export const BRAND_NAME = "Pinnaxa";

export const FEATURE_ICONS = {
  Quality: <ShieldCheck className="w-8 h-8 text-primary" />,
  Global: <Globe className="w-8 h-8 text-primary" />,
  Sourcing: <Handshake className="w-8 h-8 text-primary" />,
  Logistics: <Truck className="w-8 h-8 text-primary" />
};

export const LOCATIONS = [
  { id: '1', country: 'India', city: 'Udaipur', flag: '🇮🇳', image: IMAGES.india, description: 'Our headquarters and primary sourcing hub for premium Basmati and grains.' },
  { id: '2', country: 'United Arab Emirates', city: 'Dubai', flag: '🇦🇪', image: IMAGES.dubai, description: 'Strategic distribution center serving the Middle East and GCC markets.' },
  { id: '3', country: 'Benin', city: 'Cotonou', flag: '🇧🇯', image: IMAGES.benin, description: 'West African hub specializing in rice imports and local agro-distribution.' },
  { id: '4', country: 'Indonesia', city: 'Jakarta', flag: '🇮🇩', image: IMAGES.indonesia, description: 'Key sourcing and sales office for Southeast Asian spice and rice trades.' },
  { id: '5', country: 'South Africa', city: 'Cape Town', flag: '🇿🇦', image: IMAGES.southafrica, description: 'Sourcing premium lentils and coordinating Southern African logistics.' },
  { id: '6', country: 'France', city: 'Paris', flag: '🇫🇷', image: IMAGES.france, description: 'European office managing quality standards and boutique grain exports.' },
];
