import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Activity, Zap, Shield, Sun, Wind, Flower2 } from 'lucide-react';

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
      accent: 'sky'
    },
    {
      name: 'Svadhisthana',
      translation: 'Sacral Center',
      focus: 'Creativity & Flow',
      desc: 'Igniting creative potential and emotional intelligence to foster innovative problem-solving and adaptable team dynamics.',
      icon: Sparkles,
      color: 'text-sky-800 bg-sky-100',
      accent: 'sky'
    },
    {
      name: 'Manipura',
      translation: 'Solar Plexus',
      focus: 'Power & Vitality',
      desc: 'Harnessing the collective willpower and digestive fire (Agni) of the organization to drive purposeful action.',
      icon: Zap,
      color: 'text-sky-700 bg-sky-100',
      accent: 'sky'
    },
    {
      name: 'Anahata',
      translation: 'Heart Center',
      focus: 'Compassion & Unity',
      desc: 'Opening the channels of empathy and horizontal leadership. Cultivating a culture of radical inclusion and kindness.',
      icon: Activity,
      color: 'text-sky-600 bg-sky-100',
      accent: 'sky'
    },
    {
      name: 'Vishuddha',
      translation: 'Throat Center',
      focus: 'Truthful Expression',
      desc: 'Mastering the art of conscious communication. Ensuring every voice is heard with clarity and authentic integrity.',
      icon: Wind,
      color: 'text-sky-500 bg-sky-100',
      accent: 'sky'
    },
    {
      name: 'Ajna',
      translation: 'Third Eye',
      focus: 'Insight & Strategy',
      desc: 'Developing corporate intuition and visionary leadership. Aligning tactical decisions with long-term spiritual purpose.',
      icon: Sun,
      color: 'text-sky-400 bg-sky-100',
      accent: 'sky'
    },
    {
      name: 'Sahasrara',
      translation: 'Crown Center',
      focus: 'Infinite Connection',
      desc: 'Total integration of corporate consciousness. Connecting the organization to its highest contribution to the world.',
      icon: Flower2,
      color: 'text-sky-300 bg-sky-100',
      accent: 'sky'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                Corporate Consciousness
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic text-sky-950 tracking-tight mb-8 leading-tight">
                Aligning the <br /> <span className="text-sky-500">Corporate Energy</span>
              </h2>
              <p className="text-sky-800 leading-relaxed font-medium mb-10 text-sm">
                Just as the human body has energy centers, a healthy organization flows through distinct levels of consciousness. Map your team's path to enlightenment.
              </p>
              
              <div className="space-y-2">
                {chakras.map((chakra, idx) => (
                  <button
                    key={chakra.name}
                    onClick={() => setActiveChakra(idx)}
                    className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all text-left group ${
                      activeChakra === idx 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'hover:bg-sky-50 text-sky-900'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeChakra === idx ? 'bg-white/20' : 'bg-sky-50 group-hover:bg-white'
                    }`}>
                      <chakra.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide">{chakra.name}</h4>
                      <p className={`text-[10px] font-medium opacity-70 ${activeChakra === idx ? 'text-sky-50' : 'text-sky-400'}`}>
                        {chakra.focus}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChakra}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full bg-sky-50/50 rounded-[3rem] p-10 md:p-16 border border-sky-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    {(() => {
                      const Icon = chakras[activeChakra].icon;
                      return <Icon className="w-48 h-48" />;
                    })()}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      {(() => {
                        const Icon = chakras[activeChakra].icon;
                        return (
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${chakras[activeChakra].color} shadow-lg`}>
                            <Icon className="w-8 h-8" />
                          </div>
                        );
                      })()}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-serif italic text-sky-950 mb-1">{chakras[activeChakra].name}</h3>
                        <p className="text-sky-500 font-bold text-xs uppercase tracking-[0.2em]">{chakras[activeChakra].translation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3">Organizational Focus</h4>
                        <p className="text-2xl font-bold text-sky-900 leading-tight">
                          {chakras[activeChakra].focus}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3">Evolutionary Path</h4>
                        <p className="text-lg text-sky-800 leading-relaxed font-medium">
                          {chakras[activeChakra].desc}
                        </p>
                      </div>
                      
                      <button className="px-8 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-100/50 text-sm uppercase tracking-widest">
                        Activate this Center
                      </button>
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
