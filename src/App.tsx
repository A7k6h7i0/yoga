import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Breathwork from './components/Breathwork';
import Stick from './components/Stick';
import Capsules from './components/Capsules';
import AppShowcase from './components/AppShowcase';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Philosophy from './components/Philosophy';
import Chakras from './components/Chakras';
import Journey from './components/Journey';
import AsanaGallery from './components/AsanaGallery';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white/30 selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#7A98FF] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <Breathwork />
        <Philosophy />
        <Chakras />
        <Journey />
        <Stick />
        <Capsules />
        <AsanaGallery />
        <Instructors />
        <AppShowcase />
        <Testimonials />
      </main>

      <footer className="bg-black text-white/40 py-12 text-center text-sm border-t border-white/10 mt-32">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Yoga Concept. Educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
