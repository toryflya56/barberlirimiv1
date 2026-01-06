import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className={`fixed top-24 right-4 md:right-8 z-50 transform transition-all duration-500 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}>
      <div className="glass-high border-l-4 border-cyber p-4 rounded-xl shadow-[0_0_30px_rgba(0,224,255,0.15)] flex items-center gap-4 min-w-[320px] backdrop-blur-2xl bg-deep-900/90">
        <div className="bg-cyber/10 p-2 rounded-full text-cyber shadow-[0_0_10px_rgba(0,224,255,0.2)]">
          <CheckCircle size={20} />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-bold text-sm tracking-wide">CONFIRMED</h4>
          <p className="text-gray-400 text-xs mt-0.5">{message}</p>
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;