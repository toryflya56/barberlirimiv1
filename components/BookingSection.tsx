import React, { useState } from 'react';
import { User, Scissors, Check, Calendar, Clock, ChevronRight } from 'lucide-react';

interface BookingSectionProps {
  onShowToast: (message: string) => void;
}

const services = [
  { id: 'cut', name: 'Executive Cut', price: '$55', duration: '45m' },
  { id: 'shave', name: 'Royal Shave', price: '$45', duration: '30m' },
  { id: 'full', name: 'Full Package', price: '$90', duration: '75m' },
];

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:30', '15:30', '16:30', '17:30'
];

const BookingSection: React.FC<BookingSectionProps> = ({ onShowToast }) => {
  const [selectedService, setSelectedService] = useState<string>('cut');
  const [selectedDate, setSelectedDate] = useState<number>(0); 
  const [selectedTime, setSelectedTime] = useState<string>('12:00');
  const [formData, setFormData] = useState({ name: '', phone: '' });

  // Generate next 6 days
  const dates = Array.from({ length: 6 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
      fullDate: d
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const serviceName = services.find(s => s.id === selectedService)?.name;
    onShowToast(`Booked: ${serviceName}, ${dates[selectedDate].day} @ ${selectedTime}`);
    setFormData({ name: '', phone: '' });
  };

  return (
    <section id="booking" className="py-12 md:py-20 container mx-auto px-4 flex justify-center items-center">
      <div className="glass-high w-full max-w-5xl rounded-2xl p-[1px] bg-gradient-to-br from-cyber/30 to-transparent shadow-[0_0_40px_rgba(0,224,255,0.05)]">
        <div className="bg-deep-900/95 rounded-[15px] overflow-hidden backdrop-blur-xl flex flex-col md:flex-row">
          
          {/* LEFT: Service Selection (Compact List) */}
          <div className="w-full md:w-[35%] bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-cyber">
              <Scissors size={16} />
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Select Service</h3>
            </div>
            
            <div className="space-y-2 flex-1">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all relative group flex justify-between items-center ${
                    selectedService === service.id 
                      ? 'border-cyber/50 bg-cyber/10' 
                      : 'border-white/5 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`font-bold text-sm ${selectedService === service.id ? 'text-white' : 'text-gray-300'}`}>
                      {service.name}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{service.duration}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-cyber font-bold text-sm">{service.price}</span>
                    {selectedService === service.id && <Check size={12} className="text-cyber mt-1" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
               <span className="text-gray-500 text-[10px] uppercase tracking-wider">Estimated Total</span>
               <span className="text-xl font-serif text-white">{services.find(s => s.id === selectedService)?.price}</span>
            </div>
          </div>

          {/* RIGHT: Schedule & Form (Dense Grid) */}
          <div className="w-full md:w-[65%] p-5 flex flex-col gap-5">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Date Strip */}
              <div>
                 <div className="flex items-center gap-2 mb-3 text-cyber">
                    <Calendar size={16} />
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Date</h3>
                 </div>
                 <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
                    {dates.map((d, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(index)}
                        className={`flex-shrink-0 w-14 h-16 rounded-lg border flex flex-col items-center justify-center transition-all ${
                          selectedDate === index
                            ? 'border-cyber bg-cyber text-black shadow-[0_0_10px_rgba(0,224,255,0.3)]'
                            : 'border-white/10 bg-deep-950/40 text-gray-400 hover:border-cyber/30 hover:text-white'
                        }`}
                      >
                        <span className="text-[9px] font-bold uppercase">{d.day}</span>
                        <span className="text-lg font-bold leading-none mt-0.5">{d.date}</span>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Time Grid */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-cyber">
                    <Clock size={16} />
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Time</h3>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 text-center rounded text-[11px] font-medium border transition-all ${
                        selectedTime === time
                          ? 'border-cyber bg-cyber/10 text-cyber font-bold'
                          : 'border-white/10 bg-deep-950/40 text-gray-400 hover:bg-white/5 hover:border-white/30'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5 w-full"></div>

            {/* Compact Form */}
            <div>
               <div className="flex items-center gap-2 mb-3 text-cyber">
                  <User size={16} />
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Confirm</h3>
               </div>
               <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="flex-1 bg-deep-950/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-cyber transition-all placeholder-gray-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="flex-1 bg-deep-950/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-cyber transition-all placeholder-gray-600"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 bg-cyber text-black font-bold text-sm py-3 px-6 rounded-lg shadow-[0_0_15px_rgba(0,224,255,0.3)] hover:bg-cyber-hover hover:shadow-[0_0_25px_rgba(0,224,255,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    Book Now <ChevronRight size={16} />
                  </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;