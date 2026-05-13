import React from 'react';
import { useLocation } from 'react-router-dom';

const Logo = ({ className = "" }: { className?: string }) => {
  const location = useLocation();
  const isWorkfit = location.pathname.startsWith('/workfit') || location.pathname.startsWith('/solutions');

  return (
    <div className={`flex items-center cursor-pointer ${className}`}>
      <img 
        src={isWorkfit ? "/workfitlogo.png" : "/logo.png"} 
        alt={isWorkfit ? "WorkFit Logo" : "LiveFit Logo"} 
        className="w-auto h-8 sm:h-12 md:h-14 lg:h-16 object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Logo;
