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
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-brand-white">
      {/* Cinematic Background */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero.png" 
          alt="Yoga Background" 
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white via-transparent to-brand-white" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl text-left">
          <h1 className="text-6xl md:text-[10rem] font-serif italic text-sky-950 mb-10 tracking-tight leading-[0.8] md:leading-[0.75]">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="inline-block"
            >
              Master
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-orange-500 inline-block"
            >
              Your Flow
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-3xl text-orange-900/80 mb-16 max-w-3xl font-medium leading-relaxed"
          >
            Elevate your corporate vitality through ancient wisdom, <br className="hidden md:block" /> 
            scientific precision, and collective harmony.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 md:px-12 py-4 md:py-5 bg-orange-600 text-white rounded-full font-bold text-base md:text-lg shadow-xl transition-all group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                Begin The Path <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-0" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 md:px-12 py-4 md:py-5 bg-white text-orange-900 border border-orange-100 rounded-full font-bold text-sm md:text-base transition-all flex items-center gap-3"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Experience
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
