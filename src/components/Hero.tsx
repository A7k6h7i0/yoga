import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flower2, ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-[100vh] flex items-center pt-48 md:pt-64 lg:pt-80 overflow-hidden bg-white">
      {/* Cinematic Background with subtle parallax */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero.png" 
          alt="Yoga Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6"
          >
            Experience the Evolution of Wellness
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-serif italic text-sky-950 mb-8 tracking-tight leading-[1.1] md:leading-[1.05]">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block"
            >
              Master Your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-orange-500 block"
            >
              Inner Flow
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-sky-900/70 mb-12 max-w-2xl font-medium leading-relaxed"
          >
            Join a global community of practitioners. Elevate your corporate vitality through ancient wisdom, scientific precision, and collective harmony.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-orange-600 text-white rounded-full font-bold text-sm md:text-base shadow-2xl shadow-orange-100 transition-all"
            >
              Start Free Trial
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-white text-sky-950 border border-sky-100 rounded-full font-bold text-sm md:text-base shadow-sm hover:bg-sky-50 transition-all flex items-center gap-3"
            >
              Explore Classes
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Kinetic Elements */}
      <motion.div 
        style={{ y: smoothY1 }}
        className="absolute bottom-20 left-10 md:left-20 opacity-20 pointer-events-none hidden md:block"
      >
        <Flower2 className="w-40 h-40 text-sky-200 animate-spin-slow" />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 right-10 md:right-20 opacity-10 pointer-events-none hidden md:block"
      >
        <Flower2 className="w-64 h-64 text-sky-400 rotate-45" />
      </motion.div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-orange-50/50 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default Hero;
