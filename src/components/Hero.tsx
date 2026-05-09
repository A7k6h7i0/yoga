import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Flower2, ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/hero.png',
      eyebrow: 'Experience the Evolution of Wellness',
      title1: 'Master Your',
      title2: 'Inner Flow',
      description: 'Join a global community of practitioners. Elevate your corporate vitality through ancient wisdom, scientific precision, and collective harmony.'
    },
    {
      image: '/hero1.png',
      eyebrow: 'Corporate Wellness Reimagined',
      title1: 'Empower Your',
      title2: 'Remote Teams',
      description: 'Bring balance and focus to your workforce with guided virtual sessions designed specifically for modern professionals.'
    },
    {
      image: '/globall.png',
      eyebrow: 'Connect Without Borders',
      title1: 'A Global',
      title2: 'Yoga Shala',
      description: 'Practice with world-class instructors from anywhere on the planet. Seamless, interactive, and truly transformative.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[100vh] flex items-center pt-48 md:pt-64 lg:pt-80 overflow-hidden bg-white">
      {/* Cinematic Background with subtle parallax */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 bg-white"
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Yoga Background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent z-10" />
      </motion.div>

      <div className="w-full px-4 md:px-8 relative z-10">
        <div className="max-w-4xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6">
                {slides[currentSlide].eyebrow}
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-serif italic text-sky-950 mb-8 tracking-tight leading-[1.1] md:leading-[1.05]">
                <span className="block">{slides[currentSlide].title1}</span>
                <span className="text-orange-500 block">{slides[currentSlide].title2}</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-sky-900/70 mb-12 max-w-2xl font-medium leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

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
