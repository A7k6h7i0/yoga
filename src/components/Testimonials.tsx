import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'HR Manager',
      company: 'TechFlow',
      text: 'LiveFit has completely changed our team dynamic. The asana streaks are a hit!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'David Miller',
      role: 'CEO',
      company: 'Nova Interactive',
      text: 'The best investment we made for employee well-being this year.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-sky-50/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Sangha</div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-sky-950">Voices of <span className="text-sky-500">Practice</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white border border-sky-100 shadow-xl shadow-sky-100/30 group"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-sky-50 mb-4" />
              <p className="text-xl text-sky-900 font-serif italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-100">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-950 text-sm">{t.name}</h4>
                  <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">{t.role} @ {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
