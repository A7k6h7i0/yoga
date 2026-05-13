import React from 'react';
import { Flower2, MoveRight, Play, Image as ImageIcon, FileText, Accessibility } from 'lucide-react';

interface CardProps {
  image: string | string[];
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
}

const ResourceCard: React.FC<CardProps> = ({ image, icon: Icon, iconBg, title, description, buttonText, buttonColor }) => {
  const isGallery = Array.isArray(image);

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-sky-100 flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 group">
      <div className="relative h-64 overflow-hidden">
        {isGallery ? (
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5 bg-gray-100">
            {image.map((img, i) => (
              <img key={i} src={img} alt="" className="w-full h-full object-cover" />
            ))}
          </div>
        ) : (
          <img src={image as string} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
        )}
        
        <div className={`absolute -bottom-6 left-8 w-14 h-14 ${iconBg} rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white`}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
      </div>

      <div className="p-8 pt-12 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-sky-950 mb-4 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-sky-900/60 mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        
        <button className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 ${buttonColor} font-bold text-sm tracking-widest group/btn transition-all duration-300 hover:shadow-lg`}>
          {buttonText}
          <MoveRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const GalleryLibrary: React.FC = () => {
  const resources = [
    {
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      icon: Flower2,
      iconBg: "bg-[#9d68d4]", // Soft Purple
      title: "Meditation Library",
      description: "Guided meditations, breathwork sessions, sleep stories, soothing music, and mindful practices to calm your mind and uplift your spirit.",
      buttonText: "EXPLORE LIBRARY",
      buttonColor: "border-[#9d68d4] text-[#9d68d4] hover:bg-[#9d68d4]/5"
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      icon: Accessibility,
      iconBg: "bg-[#ff7f00]", // Brand Primary Orange
      title: "Poses Library",
      description: "Step-by-step pose guides with photos, alignment tips, benefits, and modifications for all levels — from beginners to advanced practitioners.",
      buttonText: "EXPLORE POSES",
      buttonColor: "border-[#ff7f00] text-[#ff7f00] hover:bg-[#ff7f00]/5"
    },
    {
      image: "https://images.unsplash.com/photo-1510511459019-5dee9954889c?auto=format&fit=crop&q=80&w=800",
      icon: Play,
      iconBg: "bg-[#4ade80]", // Vibrant Green
      title: "Quick Videos for Quick Solutions",
      description: "Short, effective videos to address common issues like back pain, neck stiffness, bloating, poor posture, stress relief, and more — with simple, practical solutions.",
      buttonText: "SEE VIDEOS",
      buttonColor: "border-[#4ade80] text-[#166534] hover:bg-[#4ade80]/5"
    },
    {
      image: [
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1473081556163-2a17281fe7df?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
      ],
      icon: ImageIcon,
      iconBg: "bg-[#3b82f6]", // Bright Blue
      title: "Picture Gallery",
      description: "Beautiful moments, inspiring postures, nature, wellness lifestyle, and behind-the-scenes from our community and sessions.",
      buttonText: "VIEW GALLERY",
      buttonColor: "border-[#3b82f6] text-[#1d4ed8] hover:bg-[#3b82f6]/5"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-sky-950 mb-8 tracking-tight">
            Gallery & <span className="text-brand-primary">Library</span>
          </h2>
          <p className="text-xl text-sky-900/60 max-w-2xl mx-auto leading-relaxed">
            Explore a rich collection of resources designed to inspire, educate, and support your wellness journey—anytime, anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resources.map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#fff9f5] rounded-[2.5rem] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-orange-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#ff7f00] shadow-xl shadow-orange-100/50 border border-orange-50 flex-shrink-0">
              <FileText size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-sky-950 mb-2 font-serif tracking-tight">Your Wellness. Your Pace. Your Space.</h4>
              <p className="text-lg text-sky-900/60 max-w-xl">Dive into our library and gallery to learn, relax, and stay inspired every day.</p>
            </div>
          </div>
          <button className="bg-[#ff7f00] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-sky-900 transition-all duration-300 shadow-xl shadow-orange-200 flex-shrink-0 active:scale-95 group/main-btn overflow-hidden relative">
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE ALL RESOURCES
              <MoveRight className="group-hover/main-btn:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryLibrary;
