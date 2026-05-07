import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Sparkles, Heart, Sun } from 'lucide-react';

const Philosophy = () => {
  const pillars = [
    {
      title: 'Dharma',
      subtitle: 'Purposeful Work',
      desc: 'Aligning corporate goals with individual purpose to foster a sense of meaningful contribution.',
      icon: Sun,
      color: 'text-sky-600 bg-sky-50'
    },
    {
      title: 'Sangha',
      subtitle: 'Conscious Community',
      desc: 'Building deep connections and mutual support networks within the professional environment.',
      icon: Heart,
      color: 'text-sky-600 bg-sky-50'
    },
    {
      title: 'Metta',
      subtitle: 'Loving Kindness',
      desc: 'Cultivating compassion for self and others to reduce workplace friction and enhance empathy.',
      icon: Sparkles,
      color: 'text-sky-600 bg-sky-50'
    },
    {
      title: 'Satya',
      subtitle: 'Truthful Action',
      desc: 'Promoting transparency and integrity as the foundation for high-trust team dynamics.',
      icon: Flower2,
      color: 'text-sky-600 bg-sky-50'
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            The Four Pillars of LiveFit
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-sky-950 tracking-tight">
            Rooted in <span className="text-sky-500">Ancient Wisdom</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-sky-50/50 border border-sky-100 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${pillar.color}`}>
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif italic text-sky-900 mb-1">{pillar.title}</h3>
              <p className="text-sky-500 font-bold text-[10px] uppercase tracking-widest mb-4">{pillar.subtitle}</p>
              <p className="text-sky-800 text-sm leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
