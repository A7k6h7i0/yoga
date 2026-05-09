import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 md:gap-8 group cursor-pointer ${className}`}>
      {/* Flower Logo Icon - Circular with Ring */}
      <div className="relative shrink-0">
        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#ff7f00]/40 to-transparent blur-[2px]" />
        <img 
          src="/flowerlogo.png" 
          alt="LiveFit Flower" 
          className="h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 object-cover rounded-full shadow-2xl border-2 border-[#ff7f00]/30 relative z-10"
        />
      </div>
      
      {/* Elegant Separator */}
      <div className="h-8 md:h-10 lg:h-12 w-[1px] bg-gradient-to-b from-transparent via-[#ff7f00]/30 to-transparent" />

      {/* Advanced Brushed Copper Typography */}
      <div className="flex flex-col justify-center">
        <div className="relative">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-sans font-[900] leading-none text-[#ff7f00] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
            livef<span className="relative inline-block mx-0.5 md:mx-1">
              <span className="invisible">i</span>
              <span className="absolute inset-0 flex flex-col items-center justify-end">
                <svg viewBox="0 0 24 24" className="w-[0.52em] h-[0.52em] mb-[-0.12em] fill-[#ff7f00]">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="w-[0.22em] h-[0.68em] bg-[#ff7f00] rounded-sm"></span>
              </span>
            </span>t
          </h2>
        </div>
        <div className="text-[8px] md:text-[10px] font-serif italic text-[#ff7f00]/80 uppercase tracking-[0.5em] leading-none mt-2 md:mt-3 pl-1">
          The art of living well
        </div>
      </div>
    </div>
  );
};

export default Logo;
