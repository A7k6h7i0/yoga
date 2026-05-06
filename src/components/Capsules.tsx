import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Capsules = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const titleX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const capsules = [
    {
      name: "dhyana",
      latin: "path // meditation",
      desc: "stillness",
      target: "awareness",
      impact: "inner peace",
      image: "/images/yoga_class_1_1777978522870.png",
      bg: "bg-[#0A0B10]"
    },
    {
      name: "asana",
      latin: "path // posture",
      desc: "flow",
      target: "alignment",
      impact: "flexibility",
      impactLabel: "physical state:",
      image: "/images/yoga_class_2_1777978648328.png",
      bg: "bg-[#110D0A]"
    },
    {
      name: "pranayama",
      latin: "path // breath",
      desc: "energy",
      target: "vitality",
      impact: "prana flow",
      impactLabel: "life force:",
      image: "/images/yoga_class_3_1777978663348.png",
      bg: "bg-[#0A110D]"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#EBEBEB] text-black py-32 rounded-t-[3rem] -mt-10 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Passiflora Intro */}
        <div className="mb-32">
          <div className="overflow-hidden mb-12">
            <motion.h2 
              style={{ x: titleX }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-light italic tracking-tighter whitespace-nowrap text-black/90"
            >
              sacred practices
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-px bg-black/20 mb-12 origin-left"
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl font-medium uppercase tracking-widest">Yoga Paths //</p>
            </div>
            <div className="flex flex-col gap-6 text-lg md:text-xl text-black/70 font-light leading-relaxed">
              <p>we embrace the eight limbs of yoga. from the ethical precepts to the physical postures, and ultimately, the states of profound meditative absorption.</p>
              <p>each path is designed to cultivate a harmonious connection between your mind, body, and the universe. the practices adapt to your unique spiritual needs.</p>
              <p>our master yogis guide you through sequences that unlock your physical potential while simultaneously grounding your mental state.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-light italic tracking-tighter border-black">explore the limbs</h2>
          <p className="max-w-md text-black/70 mt-6 md:mt-0 font-light">discover the foundational pillars of our practice. designed for practitioners at every stage of their spiritual and physical journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capsules.map((capsule, idx) => (
            <motion.article 
              key={capsule.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: idx * 0.2, type: "spring", bounce: 0.4 }}
              className={`relative rounded-3xl p-8 h-[600px] flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${capsule.bg}`}></div>
              
              <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                <h3 className="text-4xl font-medium tracking-tight capitalize mb-4">{capsule.name}</h3>
                <div className="text-sm opacity-60 flex flex-col gap-1">
                  <p>{capsule.latin}</p>
                  <p>{capsule.desc}</p>
                </div>
              </div>
              
              <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none transform group-hover:scale-105 transition-transform duration-700">
                <img 
                  src={capsule.image} 
                  alt={`${capsule.name} Capsule`} 
                  className="h-[80%] w-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              <div className="relative z-10 flex flex-col gap-2 text-sm text-black group-hover:text-white transition-colors duration-500 mt-auto">
                <div className="flex justify-between items-end border-b border-black/10 group-hover:border-white/20 pb-4">
                  <div>
                    <p className="opacity-60 mb-1">target state: <span className="font-semibold opacity-100">{capsule.target}</span></p>
                    <p className="opacity-60">{capsule.impactLabel || 'impact:'} <span className="font-semibold opacity-100">{capsule.impact}</span></p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/20 group-hover:border-white/20 flex items-center justify-center transform group-hover:bg-white group-hover:text-black transition-all">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.75342 1.03516L14.4736 6.75537C15.1613 7.44303 15.1613 8.55795 14.4736 9.24561L8.75342 14.9658" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capsules;
