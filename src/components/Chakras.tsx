import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Activity, Zap, Shield, Sun, Wind, Flower2, ChevronRight, ChevronLeft } from 'lucide-react';

const Chakras = () => {
  const [activeChakra, setActiveChakra] = useState(0);

  const chakras = [
    {
      name: 'Muladhara',
      translation: 'Root Center',
      focus: 'Stability & Security',
      desc: 'Foundation for corporate resilience. Building a secure environment where teams feel grounded and supported.',
      icon: Shield,
      color: 'text-sky-950 bg-sky-100',
    },
    {
      name: 'Svadhisthana',
      translation: 'Sacral Center',
      focus: 'Creativity & Flow',
      desc: 'Igniting creative potential and emotional intelligence to foster innovative problem-solving and adaptable team dynamics.',
      icon: Sparkles,
      color: 'text-sky-800 bg-sky-100',
    },
    {
      name: 'Manipura',
      translation: 'Solar Plexus',
      focus: 'Power & Vitality',
      desc: 'Harnessing the collective willpower and digestive fire (Agni) of the organization to drive purposeful action.',
      icon: Zap,
      color: 'text-sky-700 bg-sky-100',
    },
    {
      name: 'Anahata',
      translation: 'Heart Center',
      focus: 'Compassion & Unity',
      desc: 'Opening the channels of empathy and horizontal leadership. Cultivating a culture of radical inclusion and kindness.',
      icon: Activity,
      color: 'text-sky-600 bg-sky-100',
    },
    {
      name: 'Vishuddha',
      translation: 'Throat Center',
      focus: 'Truthful Expression',
      desc: 'Mastering the art of conscious communication. Ensuring every voice is heard with clarity and authentic integrity.',
      icon: Wind,
      color: 'text-sky-500 bg-sky-100',
    },
    {
      name: 'Ajna',
      translation: 'Third Eye',
      focus: 'Insight & Strategy',
      desc: 'Developing corporate intuition and visionary leadership. Aligning tactical decisions with long-term spiritual purpose.',
      icon: Sun,
      color: 'text-sky-400 bg-sky-100',
    },
    {
      name: 'Sahasrara',
      translation: 'Crown Center',
      focus: 'Infinite Connection',
      desc: 'Total integration of corporate consciousness. Connecting the organization to its highest contribution to the world.',
      icon: Flower2,
      color: 'text-sky-300 bg-sky-100',
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-0"
            >
              <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-4 text-center lg:text-left">
                Corporate Consciousness
              </div>
              <h2 className="text-3xl md:text-5xl font-serif italic text-sky-950 tracking-tight mb-6 lg:mb-8 leading-tight text-center lg:text-left">
                Aligning <br className="hidden lg:block" /> <span className="text-sky-500">Corporate Energy</span>
              </h2>
              
              {/* Desktop List / Mobile Scroller */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar snap-x">
                {chakras.map((chakra, idx) => (
                  <button
                    key={chakra.name}
                    onClick={() => setActiveChakra(idx)}
                    className={`flex-none w-[180px] lg:w-full p-3 lg:p-4 rounded-2xl flex items-center gap-3 lg:gap-4 transition-all text-left group snap-center ${
                      activeChakra === idx 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'bg-sky-50/50 hover:bg-sky-50 text-sky-900'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                      activeChakra === idx ? 'bg-white/20' : 'bg-sky-100 group-hover:bg-white'
                    }`}>
                      <chakra.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs lg:text-sm tracking-wide truncate">{chakra.name}</h4>
                      <p className={`text-[9px] lg:text-[10px] font-medium opacity-70 truncate ${activeChakra === idx ? 'text-sky-50' : 'text-sky-400'}`}>
                        {chakra.focus}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="h-full flex items-center min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChakra}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full bg-sky-50/50 rounded-[2.5rem] p-8 md:p-16 border border-sky-100 relative overflow-hidden"
                >
                  {/* Decorative Background Icon */}
                  <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 pointer-events-none">
                    {(() => {
                      const Icon = chakras[activeChakra].icon;
                      return <Icon className="w-32 md:w-64 h-32 md:h-64" />;
                    })()}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8 lg:mb-12">
                      {(() => {
                        const Icon = chakras[activeChakra].icon;
                        return (
                          <div className={`w-12 h-12 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${chakras[activeChakra].color} shadow-lg shrink-0`}>
                            <Icon className="w-6 md:w-10 h-6 md:h-10" />
                          </div>
                        );
                      })()}
                      <div>
                        <h3 className="text-2xl md:text-5xl font-serif italic text-sky-950 mb-1 leading-none">{chakras[activeChakra].name}</h3>
                        <p className="text-sky-500 font-bold text-[9px] md:text-xs uppercase tracking-[0.2em]">{chakras[activeChakra].translation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 md:space-y-10">
                      <div>
                        <h4 className="text-[9px] md:text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-2">Organizational Focus</h4>
                        <p className="text-xl md:text-3xl font-bold text-sky-900 leading-tight">
                          {chakras[activeChakra].focus}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-[9px] md:text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-2">Evolutionary Path</h4>
                        <p className="text-sm md:text-lg text-sky-800 leading-relaxed font-medium">
                          {chakras[activeChakra].desc}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-3 md:py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-100/50 text-xs md:text-sm uppercase tracking-widest">
                          Activate Center
                        </button>
                        <div className="flex items-center justify-center gap-4 sm:hidden pt-4 border-t border-sky-100">
                          <button 
                            onClick={() => setActiveChakra(prev => (prev > 0 ? prev - 1 : chakras.length - 1))}
                            className="p-3 rounded-full bg-white border border-sky-100 text-sky-600"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <span className="text-[10px] font-bold text-sky-400">{activeChakra + 1} / {chakras.length}</span>
                          <button 
                            onClick={() => setActiveChakra(prev => (prev < chakras.length - 1 ? prev + 1 : 0))}
                            className="p-3 rounded-full bg-white border border-sky-100 text-sky-600"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chakras;
