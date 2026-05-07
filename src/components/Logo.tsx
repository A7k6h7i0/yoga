import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      <div className="relative">
        {/* Hyper-Premium Infinite Lotus Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
        >
          {/* Glassmorphic Background */}
          <div className="absolute inset-0 bg-sky-500/10 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl group-hover:rotate-12 transition-transform duration-700" />
          
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 relative z-10 filter drop-shadow-lg">
            {/* Custom Infinite Lotus Path */}
            <motion.path
              d="M50 20 C60 35 80 40 80 60 C80 80 65 90 50 90 C35 90 20 80 20 60 C20 40 40 35 50 20"
              fill="url(#lotus-gradient)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <circle cx="50" cy="55" r="8" fill="white" className="opacity-40 animate-pulse" />
            <defs>
              <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Kinetic Sparkles */}
          <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1 right-1 w-2 h-2 bg-sky-300 rounded-full blur-[1px]"
          />
        </motion.div>
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-1000 scale-150" />
      </div>

      {/* Signature Typography Block */}
      <div className="flex items-center">
        <div className="h-10 w-px bg-sky-100 mr-4 md:mr-5 group-hover:h-12 transition-all duration-500" />
        <div className="flex flex-col">
          <div className="flex items-baseline leading-none">
            <span className="text-2xl md:text-3xl font-serif italic font-bold text-sky-950 tracking-[-0.05em]">Live</span>
            <span className="text-2xl md:text-3xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 tracking-tighter ml-1">Fit</span>
          </div>
          <div className="text-[9px] md:text-[11px] font-black text-sky-900/40 uppercase tracking-[0.4em] leading-none mt-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Corporate Sanctuary
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
