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
          className="h-10 w-10 md:h-16 md:w-16 object-cover rounded-full shadow-2xl border-2 border-[#ff7f00]/30 relative z-10"
        />
      </div>
      
      {/* Elegant Separator */}
      <div className="h-10 md:h-14 w-[1px] bg-gradient-to-b from-transparent via-[#ff7f00]/30 to-transparent" />

      {/* Advanced Brushed Copper Typography */}
      <div className="flex flex-col justify-center">
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-sans font-[900] tracking-[-0.08em] leading-none text-transparent bg-clip-text bg-[linear-gradient(135deg,#994d00_0%,#ff7f00_25%,#ffb366_50%,#ff7f00_75%,#994d00_100%)] drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] filter contrast-125">
            livef<span className="relative inline-block">i<span className="absolute -top-[0.15em] left-1/2 -translate-x-1/2 text-[0.45em] text-[#ff7f00] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">❤️</span></span>t
          </h2>
          {/* Subtle Emboss Overlay */}
          <h2 className="absolute inset-0 text-3xl md:text-5xl font-sans font-[900] tracking-[-0.08em] leading-none text-transparent bg-clip-text bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
            livef<span className="opacity-0">i</span>t
          </h2>
        </div>
        <div className="text-[8px] md:text-[10px] font-serif italic text-brand-primary/80 uppercase tracking-[0.5em] leading-none mt-2 md:mt-3 pl-1">
          The art of living well
        </div>
      </div>
    </div>
  );
};

export default Logo;
