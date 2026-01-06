import React from 'react';
import { Menu, ShoppingBag, Scissors } from 'lucide-react';
import { SidebarType } from '../types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: (type: SidebarType) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl bg-deep-900/40">
          {/* Left Trigger */}
          <button 
            onClick={() => toggleSidebar(SidebarType.LEFT)}
            className="p-2 hover:bg-cyber/10 rounded-full transition-colors text-gray-300 hover:text-cyber"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>

          {/* Center Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Scissors className="text-cyber rotate-90 drop-shadow-[0_0_5px_rgba(0,224,255,0.8)] group-hover:text-white transition-colors" size={24} />
            <h1 className="text-2xl font-serif font-bold tracking-[0.2em] text-white group-hover:text-cyber transition-colors">
              LIRIMI
            </h1>
          </Link>

          {/* Right Trigger */}
          <button 
            onClick={() => toggleSidebar(SidebarType.RIGHT)}
            className="p-2 hover:bg-cyber/10 rounded-full transition-colors text-gray-300 hover:text-cyber"
            aria-label="Open Cart"
          >
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;