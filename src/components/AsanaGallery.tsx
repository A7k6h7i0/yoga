import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AsanaGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const poses = [
    { name: "Warrior I", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
    { name: "Tree Pose", image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800" },
    { name: "Lotus", image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=800" },
    { name: "Downward Dog", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATD_51KOiBSInJTR1yE9NUN_EI7Rzska_Xw&s" },
    { name: "Cobra", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-12 uppercase text-white/90 z-10 mix-blend-difference">
          flow <span className="font-serif italic lowercase">in motion</span>
        </h2>
        
        <motion.div style={{ x }} className="flex gap-12 w-max px-12">
          {poses.map((pose, idx) => (
            <div 
              key={idx} 
              className="group relative w-[300px] md:w-[500px] h-[400px] md:h-[600px] overflow-hidden rounded-[2rem] shrink-0"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
              <img 
                src={pose.image} 
                alt={pose.name} 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-10 left-10 z-20 overflow-hidden">
                <motion.h3 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl text-white font-medium"
                >
                  {pose.name}
                </motion.h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AsanaGallery;
