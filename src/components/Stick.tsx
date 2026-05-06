import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Stick = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Main text translations
  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  
  // Title horizontal slide
  const titleX = useTransform(scrollYProgress, [0.2, 0.5], ["-50%", "0%"]);
  
  // Parallax for the stick image
  const stickY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const features = [
    {
      title: "pure presence",
      desc: "minimize distractions and cultivate a serene atmosphere that allows you to focus entirely on the present moment and the rhythm of your breath",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.42464V23.3327C0 25.5418 1.79086 27.3327 4 27.3327H14.6667C16.8758 27.3327 18.6667 25.5418 18.6667 23.3327V7.42464C18.6667 5.2155 16.8758 3.42464 14.6667 3.42464L13.0667 3.42464V2.66602C13.0667 1.56145 12.1712 0.666016 11.0667 0.666016H7.6C6.49543 0.666016 5.6 1.56145 5.6 2.66602V3.42464H4C1.79086 3.42464 0 5.2155 0 7.42464ZM3.00391 22.2337C3.00391 23.3383 3.89934 24.2337 5.00391 24.2337H13.6628C14.7673 24.2337 15.6628 23.3383 15.6628 22.2337V15.9993C15.6628 14.8948 14.7673 13.9993 13.6628 13.9993H5.00391C3.89934 13.9993 3.00391 14.8948 3.00391 15.9993V22.2337Z" fill="#F7F7F7"/>
        </svg>
      )
    },
    {
      title: "personal + portable",
      desc: "simple, minimal, pocket-sized, and discrete, with 'lock' technology to prevent accidental sprays, an easy companion anywhere you go",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.951587 19.6223L0.342389 20.3617C-0.18441 21.001 -0.0931674 21.9464 0.546186 22.4732L5.76313 26.7717C6.40248 27.2985 7.34779 27.2073 7.87459 26.568L7.93233 26.4979C8.75983 25.4936 9.67573 25.4052 11.6686 24.2371C13.6615 23.0689 15.392 21.3098 16.689 19.8493C17.9861 18.3889 19.0618 16.8726 18.8336 15.996C18.6412 15.2569 17.9701 14.7903 17.3593 14.9764C17.865 14.3626 18.4138 13.3851 17.7081 12.4785C17.0025 11.572 16.1804 12.0388 15.7864 12.2138C16.3489 11.5311 16.8799 10.5228 16.2117 9.64023C15.5434 8.75769 14.789 9.15579 14.4958 9.34521C14.8839 8.85288 15.6861 7.8576 16.159 7.23642C17.2985 5.73979 18.2423 4.54903 19.6017 2.67179C20.4962 1.4366 18.8572 0.278546 17.8721 1.2467C16.887 2.21485 14.7625 4.67962 13.0517 6.64225C11.3409 8.60488 8.99946 12.015 7.54881 10.8197C6.09815 9.62447 7.07692 7.52708 7.7339 5.82024C8.39087 4.1134 7.83961 3.19082 7.18972 2.84268C6.66981 2.56418 6.22681 2.79867 6.07029 2.95073C6.08994 3.15426 6.07272 3.72085 5.84671 4.35895C5.56419 5.15658 4.80899 5.84576 4.25065 6.97815C3.6923 8.11055 3.88246 9.01662 2.48011 11.5144C1.07776 14.0122 1.29071 15.6864 1.46437 16.9536C1.63803 18.2208 1.64117 18.7854 0.951587 19.6223Z" fill="#F7F7F7"/>
        </svg>
      )
    },
    {
      title: "natural harmony",
      desc: "incorporate elements of nature. natural light, plants, and earthy textures ground your physical body while your spirit elevates.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 5V22.9999C0 25.209 1.79086 26.9999 4 26.9999L22 27C24.2091 27 26 25.2091 26 23V5.00014C26 2.791 24.2091 1.00014 22 1.00014L4 1C1.79086 1 0 2.79086 0 5ZM11.45 4.5709C11.7948 4.40373 12.2048 4.44825 12.5056 4.68554L18.5819 9.47813C18.8385 9.68045 18.98 9.99533 18.961 10.3215C18.942 10.6476 18.7648 10.9439 18.4865 11.1151L13.7952 14.0004L18.4865 16.8857C18.7648 17.0568 18.942 17.3531 18.961 17.6793C18.98 18.0054 18.8385 18.3203 18.5819 18.5226L12.5056 23.3152C12.2048 23.5525 11.7948 23.597 11.45 23.4298C11.1053 23.2627 10.8863 22.9132 10.8863 22.53V16.402L8.73963 18.5328C8.34766 18.9218 7.7145 18.9195 7.32543 18.5275C6.93636 18.1355 6.93871 17.5024 7.33068 17.1133L10.4668 14.0004L7.33068 10.8874C6.93871 10.4984 6.93636 9.86521 7.32543 9.47324C7.7145 9.08126 8.34766 9.07891 8.73963 9.46798L10.8863 11.5988V5.4707C10.8863 5.08754 11.1053 4.73807 11.45 4.5709ZM12.8863 15.7894V20.4677L16.219 17.8391L12.8863 15.7894ZM12.8863 12.2114V7.53305L16.219 10.1617L12.8863 12.2114Z" fill="#F7F7F7"/>
        </svg>
      )
    },
    {
      title: "intentional design",
      desc: "every object in your space should serve a purpose. choose tools that resonate with your personal journey and spiritual goals.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13 27C20.1797 27 26 21.1797 26 14C26 6.8203 20.1797 1 13 1C5.8203 1 0 6.8203 0 14C0 21.1797 5.8203 27 13 27ZM20.0703 21.0708C16.6462 24.495 11.3567 24.9168 7.47298 22.3364C6.55297 21.7251 6.56134 20.4377 7.34239 19.6566L18.6561 8.34292C19.4371 7.56188 20.7246 7.5535 21.3359 8.47352C23.9163 12.3573 23.4944 17.6467 20.0703 21.0708Z" fill="#F7F7F7"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="bg-black py-32 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div style={{ y }} className="mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-3xl text-white/70 max-w-3xl mb-16 leading-relaxed"
          >
            creating an environment that honors your practice is the first step towards deep spiritual connection. your space is an extension of your inner world.
          </motion.p>
          
          <div className="flex flex-col overflow-hidden">
            <motion.h2 
              style={{ x: titleX }}
              className="text-5xl md:text-8xl font-medium tracking-tighter text-white whitespace-nowrap"
            >
              it all starts with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">sacred space</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl text-white/70 max-w-3xl mt-16 leading-relaxed ml-auto text-right"
          >
            when you step onto your mat in a dedicated sanctuary, your mind instantly recognizes that it is time to turn inward and let go of external chaos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative">
          
          {/* Animated Image */}
          <motion.div 
            style={{ y: stickY, scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]) }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-64 hidden md:block z-0 opacity-30 mix-blend-screen pointer-events-none"
          >
             <img src="/images/yoga_hero_1777977865538.png" alt="Sacred Space" className="h-full w-full object-cover rounded-[3rem]" />
          </motion.div>

          {features.map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, skewX: 10 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <div className="p-4 bg-white/5 w-fit rounded-full border border-white/10">
                {feature.icon}
              </div>
              
              {/* Animated divider */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-white/30 to-transparent w-full origin-left"
              ></motion.div>
              
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight">{feature.title}</h3>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stick;
