import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Flower2, Zap, Heart, Wind } from 'lucide-react';

const Stick = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    {
      title: "Mindful Workspace",
      subtitle: "The Sanctuary of Focus",
      desc: "Transform your physical and digital environment into a shala of productivity. Align your surroundings with your inner state.",
      icon: Wind,
      color: "bg-sky-50 text-sky-600",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
    },
    {
      title: "Collective Flow",
      subtitle: "The Harmony of Teams",
      desc: "Experience synchronized sessions where the boundaries between self and team dissolve. Cultivate collective intelligence through shared movement.",
      icon: Heart,
      color: "bg-sky-50 text-sky-600",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
    },
    {
      title: "Zen Rewards",
      subtitle: "The Path of Appreciation",
      desc: "Consistency is sacred. Earn Zen Coins for every mindful minute and unlock rewards that nourish your personal and professional path.",
      icon: Zap,
      color: "bg-sky-50 text-sky-600",
      image: "https://images.unsplash.com/photo-1524673317493-2340aa41256b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Sticky Content */}
          <div className="lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-sky-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
            >
              The Experience
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif italic text-sky-950 mb-8 leading-tight tracking-tight">
              A New Way to <br /> <span className="text-sky-500">Practice</span>
            </h2>
            <p className="text-lg text-sky-800 leading-relaxed font-medium mb-10 max-w-md">
              LiveFit is more than a platform; it's a living ecosystem designed to support your highest potential at every stage of your workday.
            </p>
            
            <div className="space-y-4">
              {sections.map((section, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${section.color} group-hover:scale-110 shadow-sm`}>
                    <section.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-sky-900 group-hover:text-sky-600 transition-colors uppercase tracking-widest">{section.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scrolling Visuals */}
          <div className="space-y-20 lg:py-20">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%" }}
                className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] group"
              >
                <img src={section.image} alt={section.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-sky-900/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="text-sky-200 font-bold uppercase tracking-widest text-[10px] mb-2">{section.subtitle}</div>
                  <h3 className="text-3xl font-serif italic text-white mb-4">{section.title}</h3>
                  <p className="text-sky-50/80 text-sm leading-relaxed font-medium max-w-xs">
                    {section.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stick;
