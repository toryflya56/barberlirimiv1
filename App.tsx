import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import { SidebarType } from './types';
import { X, ChevronRight } from 'lucide-react';

const AppContent: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState<SidebarType>(SidebarType.NONE);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const showToast = (message: string) => {
    setToast({ visible: true, message });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const toggleSidebar = (type: SidebarType) => {
    setActiveSidebar(activeSidebar === type ? SidebarType.NONE : type);
  };

  const closeSidebar = () => setActiveSidebar(SidebarType.NONE);

  const handleNavClick = (path: string, sectionId?: string) => {
    closeSidebar();
    
    if (path === '/booking') {
      navigate('/booking');
      return;
    }

    // Handle Home/Section navigation
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scroll to allow navigation to complete
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Already on home
      if (sectionId) {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: 'Home', path: '/', sectionId: '' },
    { name: 'Services', path: '/', sectionId: 'services' },
    { name: 'Appointments', path: '/booking' },
    { name: 'Contact', path: '/', sectionId: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-deep-950 text-white selection:bg-cyber selection:text-black font-sans">
      <Header toggleSidebar={toggleSidebar} />
      
      {/* Toast Notification Layer */}
      <Toast 
        message={toast.message} 
        isVisible={toast.visible} 
        onClose={closeToast} 
      />

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<Home onShowToast={showToast} />} />
        <Route path="/booking" element={<BookingPage onShowToast={showToast} />} />
      </Routes>

      <Footer />

      {/* Overlay for Sidebars */}
      {activeSidebar !== SidebarType.NONE && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Left Sidebar (Navigation) */}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-deep-900 border-r border-cyber/20 shadow-[0_0_50px_rgba(0,224,255,0.1)] z-50 transform transition-transform duration-300 ease-in-out ${activeSidebar === SidebarType.LEFT ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-cyber/10">
            <span className="text-xl font-serif text-white tracking-wider">MENU</span>
            <button onClick={closeSidebar} className="text-gray-400 hover:text-cyber transition-colors"><X size={24} /></button>
        </div>
        <nav className="p-6 space-y-6">
            {navItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNavClick(item.path, item.sectionId)}
                  className="w-full flex items-center justify-between group text-lg text-gray-300 hover:text-cyber transition-colors text-left"
                >
                    {item.name}
                    <ChevronRight size={16} className="text-cyber opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
            ))}
        </nav>
      </aside>

      {/* Right Sidebar (Cart/User) */}
      <aside className={`fixed top-0 right-0 h-full w-80 bg-deep-900 border-l border-cyber/20 shadow-[0_0_50px_rgba(0,224,255,0.1)] z-50 transform transition-transform duration-300 ease-in-out ${activeSidebar === SidebarType.RIGHT ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-cyber/10">
            <span className="text-xl font-serif text-white tracking-wider">YOUR CART</span>
            <button onClick={closeSidebar} className="text-gray-400 hover:text-cyber transition-colors"><X size={24} /></button>
        </div>
        <div className="p-6 flex flex-col h-[calc(100%-80px)]">
            <div className="flex-1 flex items-center justify-center text-gray-500 flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-cyber/10 border border-cyber/20 flex items-center justify-center">
                    <span className="text-2xl text-cyber">0</span>
                </div>
                <p>No services selected yet.</p>
            </div>
            <div className="space-y-4">
                <Link 
                  to="/booking"
                  onClick={closeSidebar}
                  className="w-full block text-center py-3 bg-cyber text-black font-bold rounded-lg hover:bg-cyber-hover transition-colors shadow-[0_0_15px_rgba(0,224,255,0.3)]"
                >
                    Book Now
                </Link>
                <button className="w-full py-3 border border-cyber/30 text-cyber rounded-lg hover:bg-cyber/10 transition-colors">
                    Login / Sign Up
                </button>
            </div>
        </div>
      </aside>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;