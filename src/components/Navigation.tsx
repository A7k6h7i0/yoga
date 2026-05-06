import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4 flex justify-between items-center"
    >
      <div className="flex items-center space-x-2">
        <a href="/" className="flex items-center text-2xl font-bold tracking-widest text-white">
          YOGA
        </a>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#" className="hidden md:block uppercase tracking-widest text-xs font-semibold hover:text-white/70 transition-colors">
          begin practice
        </a>
        <button className="flex flex-col gap-1.5 p-2">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-4 h-0.5 bg-white ml-auto"></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
