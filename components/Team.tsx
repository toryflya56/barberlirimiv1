import React from 'react';
import { Instagram } from 'lucide-react';

const team = [
  {
    name: "Alex 'Blade' Rivera",
    role: "Master Barber",
    image: "https://picsum.photos/300/300?random=20",
    specialty: "Precision Fades"
  },
  {
    name: "Sarah Jenkins",
    role: "Style Director",
    image: "https://picsum.photos/300/300?random=21",
    specialty: "Scissor Cuts"
  },
  {
    name: "Marcus Thorne",
    role: "Beard Specialist",
    image: "https://picsum.photos/300/300?random=22",
    specialty: "Hot Towel Shaves"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 relative bg-deep-900">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber/20 via-deep-950 to-deep-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-white mb-4">The Team</h3>
          <p className="text-gray-400">Meet the artisans behind the chair.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="glass p-6 rounded-3xl text-center group border border-white/5 hover:border-cyber/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-cyber/50 to-transparent">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-deep-900"
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-cyber text-sm tracking-wide mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm mb-6 italic">"{member.specialty}"</p>
              
              <button className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-cyber hover:border-cyber/50 transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;