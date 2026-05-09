import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const OneOnOne = () => {
  return (
    <section className="py-24 bg-slate-50 text-black overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">1-on-1</span> Yoga Sessions
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Experience the transformative power of personalized guidance. Our expert instructors dedicate 100% of their attention to your alignment, goals, and progression.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Personalized sequencing for your body type',
                  'Real-time posture correction and adjustments',
                  'Flexible scheduling that fits your lifestyle',
                  'Direct access to world-class Indian teachers'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-lg">
                Book a Free Trial Session
              </button>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src="/zoom.png" 
                alt="1-on-1 Yoga Session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneOnOne;
