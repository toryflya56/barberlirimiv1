import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - Optimized for Performance */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Barber Shop Interior" 
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-950/80 via-deep-900/60 to-deep-950"></div>
        {/* Cyber Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber/5 rounded-full blur-[128px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="glass-high max-w-3xl mx-auto p-8 md:p-10 rounded-3xl shadow-2xl animate-fade-in relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber to-transparent opacity-50"></div>
           
          <span className="inline-block py-1 px-3 rounded-full bg-cyber/10 border border-cyber/30 text-cyber text-xs font-bold mb-4 tracking-[0.2em] uppercase shadow-[0_0_10px_rgba(0,224,255,0.2)]">
            Est. 2024
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Mastery in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber">Every Cut</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg mx-auto font-light leading-relaxed">
            Experience the fusion of classic barbering and modern aesthetics. 
            We don't just cut hair; we sculpt your confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking"
              className="group relative px-8 py-3 bg-cyber hover:bg-cyber-hover text-deep-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,224,255,0.4)] hover:shadow-[0_0_30px_rgba(0,224,255,0.6)] flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book Appointment
            </Link>
            <button 
              onClick={scrollToServices}
              className="group px-8 py-3 glass hover:bg-cyber/10 text-white font-semibold rounded-xl transition-all border border-cyber/30 hover:border-cyber/60 flex items-center justify-center gap-2"
            >
              View Services
              <ArrowRight size={20} className="text-cyber group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;