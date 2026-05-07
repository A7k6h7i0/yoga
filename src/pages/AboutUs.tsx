import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Heart, Shield, Sparkles, Flower2, Wind, Activity } from 'lucide-react';

const AboutUs = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const values = [
    { icon: Activity, title: 'Vitality', text: 'We believe that physical energy is the fuel for corporate innovation. Our programs are designed to keep teams vibrant and active.' },
    { icon: Users, title: 'Connection', text: 'In a remote-first world, we create digital and physical shalas where teams can truly synchronize and bond.' },
    { icon: Heart, title: 'Inclusion', text: 'Mindfulness for every body. LiveFit is built to be accessible to everyone, regardless of their fitness level or background.' },
    { icon: Shield, title: 'Integrity', text: 'We lead with transparency and respect for our users\' data and personal journeys. Your privacy is our priority.' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524673317493-2340aa41256b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80',
  ];

  return (
    <div ref={containerRef} className="pb-16 bg-brand-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-sky-50/30">
        <motion.div 
          style={{ scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.1]), opacity: useTransform(scrollYProgress, [0, 0.2], [0.15, 0]) }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1545201071-75f058cca503?auto=format&fit=crop&q=80" 
            alt="LiveFit Practice" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block px-3 py-1 bg-white/50 backdrop-blur-md rounded-full border border-sky-100 text-sky-900 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Our Mission
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-sky-950 mb-6 tracking-tight leading-[0.9]"
          >
            The Future of <br /> <span className="text-sky-500">Corporate Vitality</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-xl text-sky-800 max-w-xl mx-auto font-medium"
          >
            LiveFit is a premium health-tech ecosystem dedicated to transforming how the modern workforce experiences movement and mindfulness.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-serif italic text-sky-950 mb-4">Our Core Values</h2>
            <p className="text-lg text-sky-700 font-medium leading-relaxed">
              We guide our decisions through a lens of scientific rigor and human compassion.
            </p>
          </div>
          <div className="text-sky-100 font-serif italic text-7xl opacity-40 hidden lg:block select-none">
            LiveFit
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-white border border-sky-50 shadow-lg shadow-sky-100/10 hover:shadow-xl hover:shadow-sky-100/30 transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <value.icon className="w-20 h-20" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-all duration-500 shadow-sm">
                <value.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-sky-900">{value.title}</h3>
              <p className="text-sky-600 text-xs leading-relaxed font-medium">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Wind className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-sky-950 leading-tight">Beyond the <br /> <span className="text-sky-500">Boardroom</span></h2>
            <p className="text-lg text-sky-800 leading-relaxed font-medium">
              LiveFit was founded by a team of sports scientists and mindfulness experts who saw a critical gap in corporate wellness. Most programs were generic; we wanted something premium, personalized, and profoundly effective.
            </p>
            <p className="text-sky-700 leading-relaxed font-medium text-sm">
              Today, LiveFit powers the wellness journeys of over 100,000 employees globally, helping them achieve peak performance while maintaining deep inner calm.
            </p>
            <div className="pt-4">
              <button className="px-10 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 flex items-center gap-2 text-sm uppercase tracking-widest">
                Partner with Us
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-video lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80" 
                alt="LiveFit Shala" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-sky-50 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
