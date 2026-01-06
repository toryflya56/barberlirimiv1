import React from 'react';

const brands = [
  "REUZEL", "UPPERCUT", "LAYRITE", "SUAVECITO", "BAXTER", "AMERICAN CREW", "WAHL", "ANDIS"
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 border-y border-cyber/10 bg-deep-900/50 relative overflow-hidden">
      <div className="absolute inset-0 glass z-0 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Trusted Products & Partners</p>
        
        <div className="w-full overflow-hidden flex">
          <div className="flex animate-slide-left gap-16 whitespace-nowrap min-w-full items-center">
            {/* Duplicate list to ensure smooth infinite scroll */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div 
                key={index} 
                className="text-2xl md:text-4xl font-serif font-bold text-white/30 hover:text-cyber transition-colors cursor-default duration-300 hover:drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;