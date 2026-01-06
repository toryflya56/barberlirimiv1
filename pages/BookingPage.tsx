import React, { useState } from 'react';
import { Scissors, Check, Calendar, Clock, ChevronLeft, CreditCard, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookingPageProps {
  onShowToast: (message: string) => void;
}

const services = [
  { id: 'cut', name: 'Executive Cut', price: '$55', duration: '45m' },
  { id: 'shave', name: 'Royal Shave', price: '$45', duration: '30m' },
  { id: 'full', name: 'The Signature', price: '$90', duration: '75m' },
];

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:30', '15:30', '16:30', '17:30'
];

const BookingPage: React.FC<BookingPageProps> = ({ onShowToast }) => {
  const [selectedService, setSelectedService] = useState<string>('cut');
  
  // Initialize with today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  const [dateValue, setDateValue] = useState<string>(today);
  const [selectedTime, setSelectedTime] = useState<string>('12:00');
  
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = services.find(s => s.id === selectedService)?.name;
    
    // Simple date formatting ensuring no timezone offset issues for display
    const [y, m, d] = dateValue.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    onShowToast(`Booked: ${serviceName} for ${dateStr} @ ${selectedTime}`);
  };

  const currentService = services.find(s => s.id === selectedService);

  // Helper to format date for display in summary
  const getDisplayDate = () => {
    if (!dateValue) return 'Select Date';
    const [y, m, d] = dateValue.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-deep-950 text-white pt-20 pb-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        
        {/* Header - Compact */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-serif font-bold text-white tracking-wide">Select Appointment</h1>
        </div>

        {/* Main Compact Card */}
        <div className="glass-high rounded-2xl p-[1px] bg-gradient-to-b from-cyber/20 to-transparent shadow-2xl">
          <div className="bg-deep-900/95 rounded-[15px] overflow-hidden backdrop-blur-xl flex flex-col md:flex-row min-h-[450px]">
            
            {/* LEFT COLUMN: Selections */}
            <div className="w-full md:w-1/2 p-5 border-b md:border-b-0 md:border-r border-white/5 flex flex-col gap-6">
              
              {/* 1. Services */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-cyber/80">
                  <Scissors size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Service</span>
                </div>
                <div className="space-y-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${
                        selectedService === s.id 
                          ? 'bg-cyber/10 border-cyber/50' 
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className={`text-sm font-semibold ${selectedService === s.id ? 'text-white' : 'text-gray-300'}`}>{s.name}</span>
                        <span className="text-[10px] text-gray-500 font-medium">{s.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-cyber">{s.price}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedService === s.id ? 'border-cyber bg-cyber text-black' : 'border-gray-600'
                        }`}>
                          {selectedService === s.id && <Check size={10} strokeWidth={4} />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Date & Time - COMPACT SINGLE LINE */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-cyber/80">
                  <Calendar size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Date & Time</span>
                </div>
                
                <div className="flex gap-3">
                    {/* Native Date Input */}
                    <div className="relative flex-1">
                        <input 
                            type="date" 
                            value={dateValue}
                            min={today}
                            onChange={(e) => setDateValue(e.target.value)}
                            className="w-full bg-deep-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyber/50 transition-all placeholder-gray-600 appearance-none shadow-inner"
                            style={{ colorScheme: 'dark' }} 
                        />
                    </div>

                    {/* Time Select Dropdown */}
                    <div className="relative flex-1">
                        <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full bg-deep-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyber/50 transition-all appearance-none cursor-pointer shadow-inner"
                        >
                            {timeSlots.map(t => (
                                <option key={t} value={t} className="bg-deep-900 text-white">{t}</option>
                            ))}
                        </select>
                        <Clock size={14} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                    </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Summary & Form */}
            <div className="w-full md:w-1/2 bg-deep-950/30 p-5 flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-cyber/80">
                <CreditCard size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Complete</span>
              </div>

              {/* Summary Card */}
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-xl p-4 mb-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                   <Sparkles size={40} />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-bold text-base">{currentService?.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {getDisplayDate()} @ {selectedTime}
                    </p>
                  </div>
                  <span className="text-xl font-serif text-cyber">{currentService?.price}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-deep-950/50 border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyber/50 transition-all placeholder-gray-600"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-deep-950/50 border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyber/50 transition-all placeholder-gray-600"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-deep-950/50 border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyber/50 transition-all placeholder-gray-600"
                />

                <div className="mt-auto pt-2">
                  <button
                    type="submit"
                    className="w-full bg-cyber text-black font-bold text-sm py-3 rounded-xl hover:bg-cyber-hover shadow-[0_0_15px_rgba(0,224,255,0.3)] transition-all uppercase tracking-wide"
                  >
                    Confirm Booking
                  </button>
                  <p className="text-[10px] text-center text-gray-500 mt-3">
                    No payment required today. Pay at the studio.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;