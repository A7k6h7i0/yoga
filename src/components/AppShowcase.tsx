import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AppShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track the scroll progress of this entire section
  // to power the horizontal sliding of the screens
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The screens container will translate horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // Scale and opacity for the intro text with a unique 3D rotation
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const textRotateX = useTransform(scrollYProgress, [0, 0.2], [0, 45]);

  return (
    <section ref={containerRef} className="bg-black text-white relative h-[300vh]">
      {/* Sticky container that stays in place while scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">
        
        {/* Intro Text */}
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, rotateX: textRotateX }}
          className="absolute top-1/4 left-0 right-0 z-20 text-center px-6"
        >
          <h2 className="text-4xl md:text-7xl font-light tracking-widest uppercase leading-tight max-w-4xl mx-auto">
            a digital sanctuary for your practice
          </h2>
          <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            we've created an experience that transcends the screen, guiding you towards profound inner stillness and absolute awareness...
          </p>
        </motion.div>

        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#7A98FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Horizontal Scrolling Screens */}
        <motion.div 
          style={{ x }}
          className="relative z-10 flex items-center gap-32 mt-32 px-[50vw]"
        >
          {/* Screen 1 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img 
              src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" 
              alt="iPhone Mockup" 
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-[#161928] group-hover:scale-105 transition-transform duration-700">
              <img 
                src="/images/yoga_app_1777977964088.png" 
                alt="Yoga App Screen" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Screen 2 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img 
              src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" 
              alt="iPhone Mockup" 
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-[#080B17] flex flex-col justify-between p-6 group-hover:scale-105 transition-transform duration-700">
               <div className="text-center mt-12">
                 <img src="/images/yoga_class_2_1777978648328.png" alt="Yoga Flow" className="w-48 mx-auto rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)]" />
                 <h3 className="text-2xl mt-8 font-light italic text-white/90">asana mastery</h3>
                 <p className="text-[#848DAE] mt-4 font-light text-sm uppercase tracking-widest">flexibility unlocked</p>
               </div>
            </div>
          </div>
          
          {/* Screen 3 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img 
              src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" 
              alt="iPhone Mockup" 
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-gradient-to-b from-[#161928] to-[#080B17] flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700">
              <h3 className="text-3xl font-light italic text-center px-4">your spiritual journey</h3>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
