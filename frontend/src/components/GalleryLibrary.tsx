import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, MoveRight, Play, Image as ImageIcon, FileText, Accessibility } from 'lucide-react';

const YOUTUBE_PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLu2ojSmcKZTcXjLu7hsSC12A9nyv-y7EE';

const openLiveFitResource = () => {
  const membership = JSON.parse(localStorage.getItem('livefitMembership') || 'null');

  if (!membership?.email) {
    const shouldViewPlans = window.confirm('This LiveFit resource is for members. Would you like to view the membership plans first?');
    if (shouldViewPlans) {
      window.location.href = '/pricing';
    }
    return;
  }

  window.open(YOUTUBE_PLAYLIST_URL, '_blank', 'noopener,noreferrer');
};

const sectionReveal = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const cardReveal = (delay = 0, x = 0) => ({
  hidden: { opacity: 0, y: 40, x, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      delay,
      ease: [0.23, 1, 0.32, 1],
    },
  },
});

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
    <motion.div
      className="bg-white rounded-[2rem] overflow-hidden border border-sky-100 flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 group"
      variants={cardReveal(0, 0)}
      whileHover={{ y: -8, transition: { duration: 0.22 } }}
    >
      <div className="relative h-64 overflow-hidden">
        {isGallery ? (
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5 bg-gray-100">
            {image.map((img, i) => (
              <img key={i} src={img} alt="" className="w-full h-full object-cover" />
            ))}
          </div>
        ) : (
          <img
            src={image as string}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        )}
        
        <div className={`absolute -bottom-1 left-2 w-14 h-14 ${iconBg} rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white`}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
      </div>

      <div className="p-8 pt-12 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-sky-950 mb-4 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-sky-900/60 mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        
        <button 
          onClick={openLiveFitResource}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-2 ${buttonColor} font-bold text-sm tracking-widest group/btn transition-all duration-300 hover:shadow-lg`}
        >
          {buttonText}
          <MoveRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const GalleryLibrary: React.FC = () => {
  const resources = [
    {
      image: "/Gal1.png",
      icon: Flower2,
      iconBg: "bg-[#9d68d4]", // Soft Purple
      title: "Meditation Library",
      description: "Guided meditations, breathwork sessions, sleep stories, soothing music, and mindful practices to calm your mind and uplift your spirit.",
      buttonText: "EXPLORE LIBRARY",
      buttonColor: "border-[#9d68d4] text-[#9d68d4] hover:bg-[#9d68d4]/5"
    },
    {
      image: "/Gal2.png",
      icon: Accessibility,
      iconBg: "bg-[#ff7f00]", // Brand Primary Orange
      title: "Poses Library",
      description: "Step-by-step pose guides with photos, alignment tips, benefits, and modifications for all levels â€” from beginners to advanced practitioners.",
      buttonText: "EXPLORE POSES",
      buttonColor: "border-[#ff7f00] text-[#ff7f00] hover:bg-[#ff7f00]/5"
    },
    {
      image: "/Gal3.png",
      icon: Play,
      iconBg: "bg-[#4ade80]", // Vibrant Green
      title: "Quick Videos for Quick Solutions",
      description: "Short, effective videos to address common issues like back pain, neck stiffness, bloating, poor posture, stress relief, and more â€” with simple, practical solutions.",
      buttonText: "SEE VIDEOS",
      buttonColor: "border-[#4ade80] text-[#166534] hover:bg-[#4ade80]/5"
    },
    {
      image: "/Gal4.png",
      icon: ImageIcon,
      iconBg: "bg-[#3b82f6]", // Bright Blue
      title: "Picture Gallery",
      description: "Beautiful moments, inspiring postures, nature, wellness lifestyle, and behind-the-scenes from our community and sessions.",
      buttonText: "VIEW GALLERY",
      buttonColor: "border-[#3b82f6] text-[#1d4ed8] hover:bg-[#3b82f6]/5"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full px-4 md:px-10 lg:px-16">
        <motion.div
          className="text-center mb-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-sky-950 mb-8 tracking-tight"
            variants={sectionReveal}
          >
            Gallery & <span className="text-brand-primary">Library</span>
          </motion.h2>
          <motion.p
            className="text-xl text-sky-900/60 max-w-2xl mx-auto leading-relaxed"
            variants={sectionReveal}
          >
            Explore a rich collection of resources designed to inspire, educate, and support your wellness journey anytime, anywhere.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {resources.map((res, idx) => (
            <motion.div
              key={res.title}
              variants={cardReveal(0.08 * idx, idx % 2 === 0 ? -70 : 70)}
            >
              <ResourceCard {...res} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner - Smaller & More Compact */}
        <motion.div
          className="bg-[#fff9f5] rounded-[2.5rem] py-5 px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 border border-orange-100 shadow-sm"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#ff7f00] shadow-lg shadow-orange-100/50 border border-orange-50 flex-shrink-0">
              <FileText size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-sky-950 mb-1 font-serif tracking-tight">Your Wellness. Your Pace. Your Space.</h4>
              <p className="text-base text-sky-900/60 max-w-xl">Dive into our library and gallery to learn, relax, and stay inspired every day.</p>
            </div>
          </div>
          <button
            onClick={openLiveFitResource}
            className="bg-[#ff7f00] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-sky-900 transition-all duration-300 shadow-lg shadow-orange-200 flex-shrink-0 active:scale-95 group/main-btn overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE ALL RESOURCES
              <MoveRight className="group-hover/main-btn:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryLibrary;
