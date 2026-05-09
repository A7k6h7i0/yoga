import React from 'react';
import { motion } from 'framer-motion';

const UniqueNeeds = () => {
  const needs = [
    { 
      title: 'Yoga for Flexibility & Strength', 
      desc: 'Build lean muscle and improve mobility with targeted sequences', 
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Yoga for Pain Relief', 
      desc: 'Ease back pain, neck tension, and joint stiffness naturally', 
      image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Yoga for Stress, Anxiety & Meditation', 
      desc: 'Find calm through guided meditation, breathwork, and mindful movement', 
      image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Prenatal, Fertility & Postnatal Yoga', 
      desc: 'Safe, nurturing practice for expecting mothers and postpartum recovery', 
      image: 'https://images.unsplash.com/photo-1515023677547-593d7638cbd6?auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Yoga for Weight Loss', 
      desc: 'Support weight loss with mindful movement, stress relief, and improved metabolism', 
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Yoga for Seniors', 
      desc: 'Maintain mobility, balance, and vitality safely from home with guided online sessions', 
      image: 'https://images.unsplash.com/photo-1658314755561-389d5660ee54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      title: 'Yoga for Kids', 
      desc: 'Boost focus and emotional regulation with fun, interactive online routines for children', 
      image: 'https://plus.unsplash.com/premium_photo-1672039297374-c6a39de94346?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      title: 'Group Yoga Classes', 
      desc: 'Feel the vibrant energy of community classes through high-quality live video streams', 
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Individual 1-on-1 Yoga', 
      desc: 'Get focused, personalized feedback with a dedicated teacher right on your screen', 
      image: 'https://plus.unsplash.com/premium_photo-1664301976351-948e58380780?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="w-full px-4 md:px-8 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Yoga for your <span className="text-orange-500">unique needs</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whatever your goal, our expert instructors tailor the practice specifically for your body and mind.
          </p>
        </div>
        
        {/* Changed to 3 columns on large screens for bigger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {needs.map((need, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-2 transition-transform duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Increased image container height from h-48 to h-64 */}
              <div className="h-64 overflow-hidden relative">
                <img src={need.image} alt={need.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{need.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{need.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueNeeds;
