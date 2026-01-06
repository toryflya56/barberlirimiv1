import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'The Executive Cut',
    description: 'Precision scissor cut tailored to your head shape, finished with a hot towel styling.',
    price: '$55',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    title: 'Royal Shave',
    description: 'Traditional straight razor shave with pre-shave oil, hot foam, and cold towel finish.',
    price: '$45',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    title: 'Beard Sculpting',
    description: 'Detailed beard trimming and shaping, including line-up and conditioning treatment.',
    price: '$35',
    image: 'https://picsum.photos/400/300?random=3'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative bg-deep-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-serif text-white mb-4">Our Expertise</h3>
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full shadow-[0_0_10px_rgba(0,224,255,0.5)]"></div>
        </div>

        {/* Constrained to max-w-6xl to balance with the narrower 4xl sections below */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass p-4 rounded-3xl group hover:bg-deep-900 transition-all duration-300 flex flex-col justify-between border border-white/5 hover:border-cyber/30 hover:shadow-[0_0_20px_rgba(0,224,255,0.1)]"
            >
              {/* Top: Title and Price */}
              <div className="px-4 py-4 mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-2xl font-bold text-white group-hover:text-cyber transition-colors">
                    {service.title}
                  </h4>
                  <span className="text-xl font-serif text-cyber drop-shadow-[0_0_5px_rgba(0,224,255,0.5)]">{service.price}</span>
                </div>
              </div>
              
              {/* Bottom: Picture and Description */}
              <div className="relative overflow-hidden rounded-2xl h-64 group-hover:h-72 transition-all duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Description Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-950 via-deep-950/90 to-transparent p-6 pt-12 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-cyber pl-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;