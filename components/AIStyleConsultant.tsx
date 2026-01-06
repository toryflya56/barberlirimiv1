import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStyleConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your AI Grooming Specialist. Tell me about your face shape or hair type, and I will recommend a style.' }
  ]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const advice = await getStyleAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setLoading(false);
  };

  return (
    <section id="consultation" className="py-20 container mx-auto px-4">
      <div className="glass-high rounded-3xl p-[1px] bg-gradient-to-br from-cyber/40 to-transparent max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,224,255,0.05)]">
        <div className="bg-deep-900/90 rounded-[23px] p-6 md:p-8 overflow-hidden relative backdrop-blur-xl">
           {/* Decorative bg elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyber/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyber/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyber/10 border border-cyber/30 rounded-xl text-cyber shadow-[0_0_15px_rgba(0,224,255,0.2)]">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-2xl font-serif text-white">AI Style Architect</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Not sure what cut suits you? Our Gemini-powered AI analyzes your description to suggest the perfect look for your bone structure and lifestyle.
              </p>
              <div className="glass p-4 rounded-xl border-l-4 border-cyber bg-cyber/5">
                <p className="text-xs text-gray-300 italic">"Try asking: I have a square face and thick wavy hair. What beard and haircut combo works best?"</p>
              </div>
            </div>

            <div className="flex flex-col h-[300px]">
              <div className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2 custom-scrollbar">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-cyber text-black font-medium rounded-tr-none shadow-[0_0_15px_rgba(0,224,255,0.2)]' 
                        : 'bg-white/5 text-gray-100 rounded-tl-none border border-white/10'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                   <div className="flex justify-start">
                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-2 border border-white/10">
                      <Loader2 size={14} className="animate-spin text-cyber" />
                      <span className="text-[10px] text-cyber">Consulting the neural network...</span>
                    </div>
                   </div>
                )}
              </div>

              <form onSubmit={handleAsk} className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe your features..."
                  className="w-full bg-deep-950/50 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyber/50 transition-colors shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-2 p-1.5 bg-cyber text-black rounded-lg hover:bg-cyber-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStyleConsultant;