import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Best fade in Soho. The attention to detail is unmatched. Finally found a barber who understands head shape.",
    author: "Michael R.",
    status: "Member since 2023",
    rating: 5
  },
  {
    id: 2,
    text: "The AI consultation actually worked. Suggested a textured crop I never would have picked, and I've never looked better.",
    author: "David K.",
    status: "Frequent Flyer",
    rating: 5
  },
  {
    id: 3,
    text: "Premium service from start to finish. The hot towel shave is a must-have experience. Worth every penny.",
    author: "James L.",
    status: "VIP Client",
    rating: 5
  },
  {
    id: 4,
    text: "The vibe is unmatched. Proper music, good conversation, and a haircut that gets compliments for weeks.",
    author: "Marcus T.",
    status: "Regular",
    rating: 5
  },
  {
    id: 5,
    text: "Bought a gift card for my husband, he came back looking like a new man. Whatever magic you do, keep doing it.",
    author: "Sarah J.",
    status: "Gifting Client",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-deep-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Don't just take our word for it.
          </h3>
        </div>

        {/* 
          Horizontal Scroll Container 
          - Snap scrolling for the "slide with finger" feel
          - Hiding scrollbars
        */}
        <div 
            className="flex overflow-x-auto gap-4 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <div 
                key={item.id} 
                /* 
                   Update: Fixed width to 270px on mobile. 
                   This is significantly smaller than the viewport width, ensuring the 
                   next card is clearly visible on the right.
                */
                className="w-[270px] md:w-[350px] snap-center flex-shrink-0 flex flex-col"
            >
                <div className="bg-deep-900/60 border border-white/5 rounded-[1.5rem] p-5 md:p-6 h-full flex flex-col justify-between hover:border-cyber/20 transition-colors duration-300 relative group min-h-[260px]">
                    
                    <div className="flex gap-1 mb-5 text-cyber">
                        {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                        ))}
                    </div>

                    <blockquote className="text-lg font-serif text-white leading-relaxed mb-6">
                        “{item.text}”
                    </blockquote>

                    <div className="flex items-center gap-3 mt-auto">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden bg-white/10 p-[1px] flex-shrink-0">
                             <img 
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.author}`} 
                                alt={item.author} 
                                className="w-full h-full rounded-full bg-deep-950"
                             />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-white font-semibold text-sm truncate">{item.author}</span>
                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider truncate">{item.status}</span>
                        </div>
                    </div>
                </div>
            </div>
          ))}
          
          <div className="w-2 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;