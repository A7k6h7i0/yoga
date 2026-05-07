import React from 'react';
import { motion } from 'framer-motion';

const AsanaGallery = () => {
  const asanas = [
    { name: 'Vrikshasana', translation: 'Tree Pose', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80' },
    { name: 'Trikonasana', translation: 'Triangle Pose', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80' },
    { name: 'Adho Mukha', translation: 'Downward Dog', image: 'https://images.unsplash.com/photo-1524673317493-2340aa41256b?auto=format&fit=crop&q=80' },
    { name: 'Virabhadrasana', translation: 'Warrior Pose', image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80' },
    { name: 'Savasana', translation: 'Corpse Pose', image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80' },
    { name: 'Bakasana', translation: 'Crow Pose', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Visual Wisdom</div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-sky-950">The Art of <span className="text-sky-500">Alignment</span></h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {asanas.map((asana, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img src={asana.image} alt={asana.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-sm">{asana.name}</h4>
                <p className="text-sky-200 text-[10px] font-medium">{asana.translation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsanaGallery;
