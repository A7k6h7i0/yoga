import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Text masking effect - as we scroll, the mask expands to reveal the text completely
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={containerRef} className="bg-black py-48 text-white relative">
      <div className="container mx-auto px-6 max-w-5xl text-center relative">
        {/* Background faded text */}
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-tight opacity-20 absolute top-0 left-0 w-full px-6">
          yoga is not about touching your toes. it is what you learn on the way down.
        </h2>
        
        {/* Foreground revealed text */}
        <motion.h2 
          style={{ clipPath }}
          className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-tight text-white relative z-10"
        >
          yoga is not about touching your toes. it is what you learn on the way down.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white/90">Mindfulness</h3>
            <p className="text-white/60 leading-relaxed">Bringing complete awareness to the present moment, dissolving anxiety and connecting with your truest self.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white/90">Alignment</h3>
            <p className="text-white/60 leading-relaxed">Finding the perfect balance between effort and ease in every posture, respecting your body's natural boundaries.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white/90">Spirituality</h3>
            <p className="text-white/60 leading-relaxed">Transcending the physical practice to explore inner peace, cultivating a deep sense of universal connection.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
