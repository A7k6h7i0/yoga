import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap, Shield, Sparkles } from 'lucide-react';

const Breathwork = () => {
  const techniques = [
    {
      title: 'Box Breathing',
      desc: 'The Navy SEAL technique for instant calm and nervous system regulation during high-pressure moments.',
      duration: '4-4-4-4',
      icon: Wind
    },
    {
      title: 'Kapalabhati',
      desc: 'The "Skull Shining" breath for instant mental clarity and a natural boost of vital energy.',
      duration: '2 minutes',
      icon: Zap
    },
    {
      title: 'Nadi Shodhana',
      desc: 'Alternate nostril breathing to balance the left and right hemispheres of the brain for holistic focus.',
      duration: '5 minutes',
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-sky-50/30 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-sky-200" />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                Pranayama Masterclass
              </div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-sky-950 tracking-tight mb-8">
                The Power of <span className="text-sky-500">Prana</span>
              </h2>
              <p className="text-lg text-sky-800 leading-relaxed font-medium mb-10 max-w-xl">
                Breath is the bridge between the body and mind. Our guided pranayama sessions empower your team to master their internal state in seconds.
              </p>
              
              <div className="space-y-4">
                {techniques.map((tech, idx) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-sky-100 flex items-start gap-4 hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform shrink-0">
                      <tech.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-bold text-sky-900">{tech.title}</h4>
                        <span className="text-[9px] font-bold text-sky-400 uppercase tracking-widest bg-sky-50 px-2 py-0.5 rounded-full">{tech.duration}</span>
                      </div>
                      <p className="text-sky-600 text-xs leading-relaxed font-medium">
                        {tech.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80" 
                alt="Breathwork" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent" />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-sky-300" />
                  <span className="font-bold text-xs uppercase tracking-widest">Collective Resonance</span>
                </div>
                <p className="text-xs font-medium text-sky-50">
                  92% of practitioners report instant focus improvement after a 5-minute session.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-sky-400/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breathwork;
