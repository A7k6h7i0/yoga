import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer ${className}`}>
      <img 
        src="/logo.png" 
        alt="LiveFit Logo" 
        className="w-auto h-8 sm:h-12 md:h-14 lg:h-16 object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Logo;
