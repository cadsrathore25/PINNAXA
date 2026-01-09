
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { IMAGES } from '../constants';

const PROMOTERS = [
  { name: 'Amit Sharma', role: 'Managing Director', bio: 'With 15+ years in agro-exports, Amit leads the vision of Pinnaxa with a focus on global expansion.', img: IMAGES.promoter },
  { name: 'Sanjay Jain', role: 'Director of Operations', bio: 'Sanjay oversees our supply chain and quality assurance protocols, ensuring farm-to-port excellence.', img: IMAGES.promoter },
  { name: 'Priya Mehra', role: 'Chief Marketing Officer', bio: 'Priya builds our international brand presence and manages relationships with global distributors.', img: IMAGES.promoter },
  { name: 'Vikram Singh', role: 'Sourcing Head', bio: 'Deeply connected with the farming community, Vikram ensures we get the highest quality harvests.', img: IMAGES.promoter },
  { name: 'Rohan Gupta', role: 'Logistics Strategist', bio: 'Rohan masters the complexity of international shipping to ensure timely delivery across 5 continents.', img: IMAGES.promoter },
];

const Leadership = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-eggshell py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Leadership</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A team of dedicated professionals committed to transparency, quality, and revolutionizing Indian agro-exports.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROMOTERS.map((person, i) => (
            <div key={i} className="group">
              <div className="relative mb-6 rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="bg-white text-primary p-3 rounded-xl hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                    <button className="bg-white text-primary p-3 rounded-xl hover:bg-primary hover:text-white transition-colors"><Mail className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-gray-900">{person.name}</h3>
              <p className="text-primary font-bold mb-4">{person.role}</p>
              <p className="text-gray-600 leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
