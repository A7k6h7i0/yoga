import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Sparkles, Wind, Brain, Target } from 'lucide-react';

const Capsules = () => {
  const [activeTab, setActiveTab] = useState('focus');

  const capsules = {
    focus: [
      { title: 'Morning Clarity', duration: '5 min', icon: Wind, color: 'sky' },
      { title: 'Deep Work Prep', duration: '10 min', icon: Brain, color: 'sky' },
      { title: 'Meeting Reset', duration: '3 min', icon: Target, color: 'sky' },
    ],
    rest: [
      { title: 'Screen Relief', duration: '5 min', icon: Sparkles, color: 'sky' },
      { title: 'Afternoon Slump', duration: '8 min', icon: Wind, color: 'sky' },
      { title: 'Sleep Hygiene', duration: '15 min', icon: Brain, color: 'sky' },
    ]
  };

  return (
    <section className="py-20 bg-sky-50/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Zen Capsules</div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-sky-950 mb-8 leading-tight">Micro-doses of <br /> <span className="text-sky-500">Mindfulness</span></h2>
            <p className="text-sky-800 font-medium mb-10 max-w-md">
              Perfect for the busy professional. High-impact yogic tools designed to be integrated into your existing workflow in 15 minutes or less.
            </p>
            
            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setActiveTab('focus')}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === 'focus' ? 'bg-sky-600 text-white shadow-lg' : 'bg-white text-sky-500 border border-sky-100 hover:bg-sky-50'
                }`}
              >
                Focus Paths
              </button>
              <button 
                onClick={() => setActiveTab('rest')}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === 'rest' ? 'bg-sky-600 text-white shadow-lg' : 'bg-white text-sky-500 border border-sky-100 hover:bg-sky-50'
                }`}
              >
                Rest Cycles
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-4">
              <AnimatePresence mode="wait">
                {capsules[activeTab as keyof typeof capsules].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-sky-100 flex items-center justify-between group hover:shadow-xl hover:shadow-sky-100/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sky-900">{item.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] text-sky-400 font-bold uppercase tracking-widest">
                          <Clock className="w-3 h-3" /> {item.duration}
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capsules;
