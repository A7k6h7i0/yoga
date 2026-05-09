import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="w-full px-4 md:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story: <br /> <span className="text-orange-500">Rooted in Authenticity</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                LiveFit was born from a simple realization: the modern world is disconnected, and the ancient practice of yoga has been commercialized into mere physical exercise.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We set out to bridge the gap between busy modern lifestyles and authentic Indian lineages. By bringing world-class teachers directly into your living room, we aim to make true, holistic wellness accessible to everyone, everywhere.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
             >
                <img 
                  src="https://images.unsplash.com/photo-1758599879090-afdd08ef9974?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
