import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-deep-950 pt-20 pb-12 border-t border-cyber/10">
      <div className="container mx-auto px-4">
        {/* Constrain footer content to max-w-4xl to match the cards above */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8 tracking-[0.2em]">
              LIRIMI
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
              <a href="#" className="p-3 glass rounded-full text-gray-400 hover:text-cyber hover:bg-cyber/10 hover:border-cyber/50 transition-all duration-300">
                  <Instagram size={20} />
              </a>
              <a href="#" className="p-3 glass rounded-full text-gray-400 hover:text-cyber hover:bg-cyber/10 hover:border-cyber/50 transition-all duration-300">
                  <Twitter size={20} />
              </a>
              <a href="#" className="p-3 glass rounded-full text-gray-400 hover:text-cyber hover:bg-cyber/10 hover:border-cyber/50 transition-all duration-300">
                  <Facebook size={20} />
              </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 w-full mb-12 border-b border-white/5 pb-12 text-center">
              <div className="flex flex-col items-center">
                  <h4 className="text-white font-semibold mb-4 text-lg">About</h4>
                  <ul className="space-y-2">
                      <li><a href="#" className="hover:text-cyber transition-colors">Our Story</a></li>
                      <li><a href="#" className="hover:text-cyber transition-colors">Barbers</a></li>
                      <li><a href="#" className="hover:text-cyber transition-colors">Careers</a></li>
                  </ul>
              </div>
              <div className="flex flex-col items-center">
                  <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
                  <ul className="space-y-2">
                      <li><a href="#" className="hover:text-cyber transition-colors">Haircuts</a></li>
                      <li><a href="#" className="hover:text-cyber transition-colors">Shaving</a></li>
                      <li><a href="#" className="hover:text-cyber transition-colors">Styling</a></li>
                  </ul>
              </div>
              <div className="flex flex-col items-center">
                  <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
                  <ul className="space-y-2">
                      <li><a href="#" className="hover:text-cyber transition-colors">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-cyber transition-colors">Terms of Service</a></li>
                      <li><a href="#" className="hover:text-cyber transition-colors">Cookie Policy</a></li>
                  </ul>
              </div>
          </div>

          <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Lirimi Barber Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;