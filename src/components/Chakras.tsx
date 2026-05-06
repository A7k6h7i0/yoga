import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chakras = [
  { name: "Crown", sanskrit: "Sahasrara", color: "bg-purple-500", glow: "shadow-purple-500/50", desc: "Spiritual connection, enlightenment, and universal consciousness." },
  { name: "Third Eye", sanskrit: "Ajna", color: "bg-indigo-500", glow: "shadow-indigo-500/50", desc: "Intuition, imagination, and inner wisdom." },
  { name: "Throat", sanskrit: "Vishuddha", color: "bg-blue-500", glow: "shadow-blue-500/50", desc: "Communication, self-expression, and speaking your truth." },
  { name: "Heart", sanskrit: "Anahata", color: "bg-emerald-500", glow: "shadow-emerald-500/50", desc: "Love, compassion, and emotional balance." },
  { name: "Solar Plexus", sanskrit: "Manipura", color: "bg-yellow-400", glow: "shadow-yellow-400/50", desc: "Confidence, personal power, and self-esteem." },
  { name: "Sacral", sanskrit: "Svadhisthana", color: "bg-orange-500", glow: "shadow-orange-500/50", desc: "Creativity, passion, and emotional fluidity." },
  { name: "Root", sanskrit: "Muladhara", color: "bg-red-600", glow: "shadow-red-600/50", desc: "Grounding, security, and basic survival needs." },
];

const Chakras = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] py-40 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-light tracking-tighter"
          >
            the energy centers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-xl text-white/50 max-w-2xl mx-auto font-light"
          >
            Awaken the seven chakras within. Hover to explore the subtle energy that flows through your body.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
          
          {/* Visual Chakra Column */}
          <div className="flex flex-col items-center gap-6 relative">
            {/* Energy Line */}
            <div className="absolute top-0 bottom-0 w-px bg-white/10 left-1/2 -translate-x-1/2"></div>
            
            {chakras.map((chakra, idx) => (
              <motion.div
                key={chakra.name}
                onHoverStart={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative z-10 cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full ${chakra.color} flex items-center justify-center text-white font-serif text-sm transition-shadow duration-500`}
                  animate={{ 
                    scale: hoveredIdx === idx ? 1.4 : 1,
                    boxShadow: hoveredIdx === idx ? `0 0 40px var(--tw-shadow-color)` : `0 0 0px transparent` 
                  }}
                  className={`w-16 h-16 rounded-full ${chakra.color} ${chakra.glow} flex items-center justify-center transition-all duration-300`}
                >
                  <div className="w-full h-full rounded-full border border-white/20 absolute"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Information Display */}
          <div className="w-full md:w-1/2 h-[300px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {hoveredIdx !== null ? (
                <motion.div
                  key={hoveredIdx}
                  initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-sm tracking-[0.4em] uppercase text-white/50 mb-4">{chakras[hoveredIdx].sanskrit}</h3>
                  <h2 className="text-6xl font-medium tracking-tight mb-6" style={{ color: chakras[hoveredIdx].color.replace('bg-', '') }}>{chakras[hoveredIdx].name}</h2>
                  <p className="text-2xl font-light text-white/80 leading-relaxed max-w-md">{chakras[hoveredIdx].desc}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center md:text-left text-white/20 text-3xl font-light italic"
                >
                  Hover over a chakra to focus your intent...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Chakras;
