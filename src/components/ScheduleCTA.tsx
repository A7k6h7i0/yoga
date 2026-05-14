import React from 'react';
import { MoveRight } from 'lucide-react';

const ScheduleCTA: React.FC = () => {
  return (
    <div className="relative z-[100] bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <p className="text-4xl md:text-6xl font-bold text-white text-center font-serif italic tracking-tight">
          No Excuses! It’s your move
        </p>
        
        <button className="px-16 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-xl shadow-2xl shadow-pink-500/20 transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center gap-3 group">
          Start your 3-day free trial
          <MoveRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ScheduleCTA;
