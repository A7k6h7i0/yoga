import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer ${className}`}>
      <img 
        src="/logo.png" 
        alt="LiveFit Logo" 
        className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] h-12 sm:h-20 md:h-24 lg:h-28 object-fill mix-blend-multiply contrast-125 transition-transform duration-300 hover:scale-105 max-w-[65vw]"
      />
    </div>
  );
};

export default Logo;
