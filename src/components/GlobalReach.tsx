import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Users, Heart, Sparkles } from 'lucide-react';

const GlobalReach = () => {
  const network = [
    { top: '25%', left: '25%', label: 'San Francisco' },
    { top: '45%', left: '32%', label: 'New York' },
    { top: '30%', left: '48%', label: 'London' },
    { top: '55%', left: '60%', label: 'Dubai' },
    { top: '40%', left: '72%', label: 'Singapore' },
    { top: '65%', left: '88%', label: 'Sydney' },
  ];

  return (
    <section className="py-24 md:py-48 bg-sky-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sky-300 text-[10px] md:text-xs font-black mb-8 tracking-[0.4em] uppercase border border-white/20"
          >
            <Globe className="w-4 h-4 animate-spin-slow" />
            <span>The Global Network</span>
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-serif italic mb-10 tracking-tight leading-none">
            Our Global <br /> <span className="text-sky-400">Footprint</span>
          </h2>
          <p className="text-lg md:text-2xl text-sky-100/60 max-w-3xl mx-auto font-medium leading-relaxed">
            From Silicon Valley to the heart of Singapore, LiveFit connects visionary corporate cultures into a single, synchronized shala.
          </p>
        </div>

        <div className="relative aspect-[21/9] md:aspect-[16/7] w-full max-w-6xl mx-auto mb-24 md:mb-32">
          {/* HIGH-VISIBILITY World Map Overlay */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-sky-400/30 stroke-sky-400/50 stroke-[0.5]">
              {/* Abstract World Map Paths for Clarity */}
              <path d="M150,150 Q200,100 250,150 T350,250 T450,150 T550,150 T650,200 T800,250" fill="none" strokeDasharray="5 5" />
              <image 
                href="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
                width="1000" 
                height="500" 
                className="opacity-40 invert grayscale brightness-200"
              />
            </svg>
          </div>

          {/* Connection Lines between Pins */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none">
             <motion.path 
               d="M250,125 Q400,225 480,150 T720,200 T880,325" 
               fill="none" 
               stroke="#38bdf8" 
               strokeWidth="1.5" 
               strokeDasharray="4 4"
               initial={{ pathLength: 0, opacity: 0 }}
               whileInView={{ pathLength: 1, opacity: 0.8 }}
               transition={{ duration: 4, ease: "easeInOut" }}
             />
          </svg>

          {/* Network Map Pins */}
          {network.map((node, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: node.top, left: node.left }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            >
              <div className="relative group cursor-pointer">
                {/* Visual Pulse */}
                <motion.div
                  animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 bg-sky-400/30 rounded-full blur-md"
                />
                
                {/* High-Contrast Map Icon */}
                <div className="relative z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="p-2 bg-white rounded-full shadow-[0_0_20px_rgba(56,189,248,0.8)] border border-sky-100 group-hover:scale-125 transition-transform">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sky-600" />
                  </div>
                </div>

                {/* City Label */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-4 py-2 bg-white text-sky-950 text-[10px] md:text-xs font-black rounded-xl whitespace-nowrap shadow-2xl border border-sky-50"
                >
                  {node.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto border-t border-white/20 pt-16 md:pt-24">
          {[
            { label: 'Active Cities', value: '142', icon: MapPin },
            { label: 'Daily Practitioners', value: '85k+', icon: Users },
            { label: 'Total Calm Minutes', value: '1.2M', icon: Heart },
            { label: 'Corporate Partners', value: '450+', icon: Sparkles },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-600/20 transition-colors">
                <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-sky-400" />
              </div>
              <div className="text-4xl md:text-6xl font-serif italic font-bold mb-3 tracking-tight">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-sky-300/40 font-black uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-sky-500/10 rounded-full blur-[180px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-sky-400/10 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default GlobalReach;
