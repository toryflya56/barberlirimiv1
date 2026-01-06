import React from 'react';

const galleryImages = [
  'https://picsum.photos/400/500?random=10',
  'https://picsum.photos/400/500?random=11',
  'https://picsum.photos/400/500?random=12',
  'https://picsum.photos/400/500?random=13',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 relative bg-deep-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-white mb-4">The Lookbook</h3>
          <p className="text-gray-400 max-w-xl mx-auto">Precision cuts and modern styling from our recent sessions.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl h-[400px] border border-white/5">
              <img 
                src={img} 
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-cyber border border-cyber px-4 py-2 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-cyber hover:text-black transition-colors cursor-pointer">
                    View Style
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;