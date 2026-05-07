import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Sparkles, Wind } from 'lucide-react';

const Hero = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-white">
      {/* Dynamic Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-50 rounded-full blur-[120px] opacity-60" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-bold uppercase tracking-widest mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Evolution of Corporate Flow</span>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-sky-950 mb-6 tracking-tight leading-[0.85] text-balance"
          >
            Cultivating <br /> <span className="text-sky-500">LiveFit</span> Potential
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-sky-800 max-w-xl mx-auto mb-10 font-medium leading-relaxed"
          >
            The premium mindfulness ecosystem designed for high-performance teams. Experience the future of corporate well-being with LiveFit.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-10 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 flex items-center gap-2 group">
              Begin the Journey
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-white text-sky-900 border border-sky-100 rounded-full font-bold hover:bg-sky-50 transition-all">
              Request Custom Plan
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
      >
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Discover More</span>
        <div className="w-px h-12 bg-gradient-to-b from-sky-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
