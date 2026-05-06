import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Instructors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const instructors = [
    {
      name: "Maya Lin",
      role: "Lead Vinyasa Instructor",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "David Chen",
      role: "Meditation Guide",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Sarah Jenkins",
      role: "Flexibility Coach",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section ref={containerRef} className="bg-black py-32 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter mb-6">guided by experts</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Our world-class instructors are here to help you find your flow, build strength, and achieve mental clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, idx) => (
            <motion.div 
              key={instructor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-medium mb-2">{instructor.name}</h3>
                <p className="text-white/70">{instructor.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
