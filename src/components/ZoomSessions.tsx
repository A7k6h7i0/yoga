import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const ZoomSessions = () => {
  return (
    <section className="py-24 bg-white text-black text-center">
      <div className="w-full px-4 md:px-8 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-bold text-sm mb-6">
            <Video className="w-4 h-4 text-orange-500" />
            Live over Zoom
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamlessly Integrated <br className="hidden md:block"/> with your workflow</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No commute. No hassle. Unroll your mat and connect with your teacher in high-definition video, right from your living room.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100"
        >
          {/* Faux Zoom UI Header */}
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium">LiveFit Session</div>
            <div className="text-sm px-2 py-1 bg-red-500 rounded text-xs font-bold">REC</div>
          </div>
          <div className="aspect-video relative bg-slate-900">
            <img 
              src="/groupyoga.png" 
              alt="Zoom Session" 
              className="w-full h-full object-cover"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZoomSessions;
