import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Flower2, ArrowRight, CheckCircle2, Users, Video, Clock } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1.1, 1]);
  
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/globall.png',
      badge: 'LIVE ONLINE CLASSES 24X7',
      title: ['Wellness From', 'the Comfort of', 'Your Home'],
      orangeTitleIndex: 2,
      description: 'Experience live online yoga, meditation, pranayama and fitness sessions with expert instructors — anytime, anywhere.',
      features: [
        { icon: Users, text: 'Expert Instructors' },
        { icon: Video, text: 'Live on Zoom' },
        { icon: Clock, text: 'Classes 24x7' }
      ],
      primaryButtonText: 'Join Live Classes'
    },
    {
      image: '/hero.png',
      title: ['Healthier Teams.', 'Happier Workplaces.'],
      subtitle: 'WorkFit brings wellness to your office and remote teams.',
      bullets: [
        'Reduce stress & burnout',
        'Improve posture & focus',
        'Increase productivity & morale'
      ],
      primaryButtonText: 'Explore WorkFit',
      buttonStyle: 'outline'
    },
    {
      image: '/yoga_children.png',
      title: ['Yoga for', 'Every Age'],
      subtitle: 'For Kids. For Adults. For seniors. For everyone.',
      description: 'Fun, engaging sessions that build confidence, flexibility, focus and healthy habits.',
      primaryButtonText: 'Explore Classes'
    },
    {
      image: '/breathing_woman.png',
      title: ['Breathe Better.', 'Live Better.'],
      subtitle: 'Pranayama for a calmer and healthier you.',
      bullets: [
        'Reduce stress quickly',
        'Improves mental clarity',
        'Boosts energy levels',
        'Supports better sleep'
      ],
      primaryButtonText: 'Explore Pranayama',
      buttonStyle: 'outline'
    },
    
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#F5F5F3]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full object-cover object-[center_top] md:object-center"
            alt="Yoga Background"
          />
        </AnimatePresence>
        
        {/* Refined Gradient Mask: Clearer image, solid text area */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#F5F5F3] via-[#F5F5F3]/90 to-transparent hidden lg:block z-10" />
        {/* Mobile Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F3] via-[#F5F5F3]/50 to-transparent lg:hidden z-10" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              {slides[currentSlide].badge && (
                <div className="inline-block px-4 py-1.5 border border-orange-200 rounded-full bg-orange-50 text-orange-600 font-bold text-[10px] md:text-xs tracking-[0.1em] mb-6 shadow-sm">
                  {slides[currentSlide].badge}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-sky-950 mb-4 leading-[1.1] font-bold tracking-tight">
                {slides[currentSlide].title.map((line, idx) => (
                  <span key={idx} className={`block ${slides[currentSlide].orangeTitleIndex === idx ? 'text-orange-500' : ''}`}>
                    {line}
                  </span>
                ))}
              </h1>

              {/* Subtitle / Description */}
              {slides[currentSlide].subtitle && (
                <p className="text-xl md:text-2xl font-serif italic text-orange-500 mb-6 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
              )}

              {slides[currentSlide].description && (
                <p className="text-base md:text-lg text-sky-900/80 mb-8 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              )}

              {/* Bullets (Checklist) */}
              {slides[currentSlide].bullets && (
                <div className="space-y-3 mb-10">
                  {slides[currentSlide].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-orange-200 flex items-center justify-center bg-orange-50/50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span className="text-sky-950/90 font-medium md:text-lg">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Features row for slide 1 */}
              {slides[currentSlide].features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {slides[currentSlide].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm">
                        <feature.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-sky-950 whitespace-nowrap">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative overflow-hidden px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 ${
                    slides[currentSlide].buttonStyle === 'outline' 
                    ? 'border-2 border-orange-500 text-orange-600 bg-white hover:bg-orange-50'
                    : 'bg-orange-500 text-white shadow-xl shadow-orange-200'
                  }`}
                >
                  {slides[currentSlide].primaryButtonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Hero;
