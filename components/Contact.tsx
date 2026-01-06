import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  onShowToast: (message: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onShowToast("Welcome to the club. Check your inbox.");
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-4">
      {/* Wrapper matching AIStyleConsultant for consistent alignment and visual weight */}
      <div className="glass-high rounded-3xl p-[1px] bg-gradient-to-br from-cyber/40 to-transparent max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,224,255,0.05)]">
        <div className="bg-deep-900/90 rounded-[23px] overflow-hidden relative backdrop-blur-xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-deep-900 to-deep-950 relative border-b md:border-b-0 md:border-r border-white/5">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Visit the Studio</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 glass rounded-lg text-cyber border border-cyber/20 group-hover:bg-cyber group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-cyber transition-colors">Address</h4>
                  <p className="text-gray-400">1284 Glass Street, Soho<br/>New York, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 glass rounded-lg text-cyber border border-cyber/20 group-hover:bg-cyber group-hover:text-black transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-cyber transition-colors">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 glass rounded-lg text-cyber border border-cyber/20 group-hover:bg-cyber group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-cyber transition-colors">Email</h4>
                  <p className="text-gray-400">bookings@lirimi.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-semibold mb-4 text-cyber tracking-widest text-sm">OPENING HOURS</h4>
              <div className="text-gray-400 grid grid-cols-2 gap-2 text-sm border-t border-white/5 pt-4">
                <span>Mon - Fri</span>
                <span className="text-right text-white">10:00 AM - 8:00 PM</span>
                <span>Saturday</span>
                <span className="text-right text-white">9:00 AM - 6:00 PM</span>
                <span>Sunday</span>
                <span className="text-right text-cyber">Closed</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2 p-8 bg-deep-950/50">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Join the Club</h3>
            <p className="text-gray-400 mb-8 text-sm">Subscribe for exclusive offers and priority booking slots.</p>

            <form className="space-y-6" onSubmit={handleSubscribe}>
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-deep-900 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyber transition-colors placeholder-gray-600"
                />
                <Mail className="absolute right-5 top-4 text-gray-500 group-focus-within:text-cyber transition-colors" size={20} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  className="w-full py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors font-medium"
                >
                  Support
                </button>
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-cyber text-black hover:bg-cyber-hover transition-colors font-bold shadow-[0_0_20px_rgba(0,224,255,0.3)] hover:shadow-[0_0_30px_rgba(0,224,255,0.5)]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;