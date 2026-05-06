import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 5]);

  const words = [
    { text: "find", className: "text-white font-light" },
    { text: "balance", className: "text-white/60 ml-4 font-serif italic" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl">
        <motion.div style={{ y: textY }} className="flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter flex mb-8">
            {words.map((word, i) => (
              <span key={word.text} className={word.className}>
                {word.text.split('').map((char, j) => (
                  <motion.span
                    key={`${word.text}-${j}`}
                    initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.2 + j * 0.08
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="max-w-xl text-lg md:text-2xl text-white/70 leading-relaxed font-light mt-8"
          >
            yoga is an ancient discipline that unites the body, mind, and spirit. embark on a transformative journey into deep mindfulness and physical mastery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <a href="#" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300">
              begin practice
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: imageY, rotate: imageRotate }}
        className="absolute right-0 bottom-0 md:-right-10 md:-bottom-10 w-4/5 md:w-1/2 max-w-3xl z-0 pointer-events-none opacity-80 mix-blend-screen"
      >
        <motion.img 
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: [0, -2, 0] }}
          transition={{ 
            scale: { duration: 2, ease: "easeOut" },
            opacity: { duration: 2 },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          src="/images/yoga_hero_1777977865538.png" 
          alt="Premium Yoga Mat" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
