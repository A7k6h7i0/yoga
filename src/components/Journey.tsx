import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Journey = () => {
  const steps = [
    { number: '01', title: 'Intent Setting', desc: 'Define your corporate wellness goals and personal intentions.' },
    { number: '02', title: 'Daily Flow', desc: 'Integrate micro-doses of yoga and breathwork into your workday.' },
    { number: '03', title: 'Collective Sync', desc: 'Join team challenges to foster unity and shared energy.' },
    { number: '04', title: 'Enlightened Growth', desc: 'Track your evolution through deep physiological insights.' }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Path</div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-sky-950">Your Journey to <span className="text-sky-500">Total Harmony</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-8 rounded-[2rem] bg-sky-50/30 border border-sky-100 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 transition-all"
            >
              <div className="text-6xl font-serif italic text-sky-200/50 absolute top-4 right-8 group-hover:text-sky-200 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10 pt-4">
                <Sparkles className="w-6 h-6 text-sky-500 mb-6" />
                <h3 className="text-xl font-bold text-sky-900 mb-3">{step.title}</h3>
                <p className="text-sky-700 text-sm leading-relaxed font-medium mb-6">
                  {step.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                  Explore Step <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
