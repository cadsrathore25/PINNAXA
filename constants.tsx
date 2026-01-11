import React from 'react';
import { ShieldCheck, Globe, Handshake, Truck, Leaf, Heart } from 'lucide-react';

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
  intro: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
  aboutCorporate: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop",
  contactBanner: "https://images.unsplash.com/photo-1509475826633-fed5bb1930e7?q=80&w=1200&auto=format&fit=crop",
  
  // Authentic Photography
  rice1121: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop",
  
  // Pulses: Specific URL provided by user
  pulses: "https://media.istockphoto.com/id/637856490/photo/various-legumes.jpg?s=612x612&w=0&k=20&c=Zk7TiC0eMeNc9C2kfjBz9mMxt_qWppqITELmkaQ4Mrg=", 
  
  // Nutri-Cereals (Mota Anaj): Specific URL provided by user
  millet: "https://www.kisaantrade.com/public/uploads/all/KcIRql6YvUT1yqaqu2CS1e57jOK8N2IeIk0h0P8r.png",
  
  // Specialty Grains pattern
  mixedGrains: "https://images.unsplash.com/photo-1511690078903-71dad5a49fae?q=80&w=1000&auto=format&fit=crop",
  
  promoter: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  india: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  benin: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=800&auto=format&fit=crop",
  indonesia: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
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
  Organic: <Leaf className="w-8 h-8 text-primary" />,
  Health: <Heart className="w-8 h-8 text-primary" />,
  Global: <Globe className="w-8 h-8 text-primary" />,
  Quality: <ShieldCheck className="w-8 h-8 text-primary" />
};

export const LOCATIONS = [
  { id: '1', country: 'India', city: 'Udaipur', flag: '🇮🇳', image: IMAGES.india, description: 'Core sourcing hub for Organic Basmati, Nutri-Cereals, and residue-free Pulses.' },
  { id: '2', country: 'UAE', city: 'Dubai', flag: '🇦🇪', image: IMAGES.dubai, description: 'Global distribution gateway for premium Indian organic grains to the GCC.' },
  { id: '3', country: 'Benin', city: 'Cotonou', flag: '🇧🇯', image: IMAGES.benin, description: 'West African sourcing for raw cocoa and specialty cashews.' },
  { id: '4', country: 'Indonesia', city: 'Jakarta', flag: '🇮🇩', image: IMAGES.indonesia, description: 'Sourcing hub for Southeast Asian healthy oils and organic spices.' },
  { id: '5', country: 'South Africa', city: 'Cape Town', flag: '🇿🇦', image: IMAGES.southafrica, description: 'Managing distribution of Indian pulses across Southern Africa.' },
  { id: '6', country: 'France', city: 'Paris', flag: '🇫🇷', image: IMAGES.france, description: 'Quality compliance office for European organic and bio-grade standards.' },
];