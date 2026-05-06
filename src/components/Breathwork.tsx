import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Breathwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique breathing animation: circle scales up and down based on scroll
  // We'll map the scroll progress to multiple sine wave cycles
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 2.5, 1, 2.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.3, 0.8, 0.3, 0.8, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-[#0A0A0A] text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        
        {/* Breathing Circle */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-transparent blur-3xl"
        />
        <motion.div 
          style={{ scale: useTransform(scale, s => s * 0.8), opacity }}
          className="absolute w-[200px] h-[200px] rounded-full border border-white/20"
        />

        <motion.div style={{ y: textY }} className="relative z-10 text-center px-6 mix-blend-difference">
          <h2 className="text-5xl md:text-8xl font-light tracking-widest uppercase mb-6">
            inhale <br/>
            <span className="text-white/40 italic lowercase font-serif">exhale</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/60 font-light leading-relaxed">
            the breath is the bridge which connects life to consciousness, which unites your body to your thoughts.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Breathwork;
