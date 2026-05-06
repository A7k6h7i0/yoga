import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: "Awakening", desc: "The journey begins with a single conscious breath. You become aware of the separation between ego and essence.", alignment: "left" },
    { title: "Purification", desc: "Through rigorous physical practice (Asana), you cleanse the body of stagnant energy and tension.", alignment: "right" },
    { title: "Concentration", desc: "Dharana teaches you to focus the mind on a single point, cutting through the noise of daily life.", alignment: "left" },
    { title: "Integration", desc: "Mind, body, and spirit align. You realize that the practice on the mat is a rehearsal for life off the mat.", alignment: "right" }
  ];

  return (
    <section ref={containerRef} className="bg-black py-40 text-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-center mb-32">the path of <span className="italic">transformation</span></h2>

        <div className="relative">
          {/* Central Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          {/* Animated Central Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-white via-white to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.5)] origin-top"
          ></motion.div>

          <div className="flex flex-col gap-24 py-10">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${step.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Glowing Dot on the line */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white md:-translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,1)] z-10"
                ></motion.div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${step.alignment === 'left' ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: step.alignment === 'left' ? -50 : 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
                  >
                    <div className="text-white/30 font-serif italic text-xl mb-4">Step 0{idx + 1}</div>
                    <h3 className="text-3xl font-medium mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
