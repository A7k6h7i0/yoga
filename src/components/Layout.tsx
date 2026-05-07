import React from 'react';
import Navigation from './Navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Flower2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-white min-h-screen text-sky-950 font-sans selection:bg-sky-100">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-sky-50/30 text-sky-800 py-12 border-t border-sky-100 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
          <Flower2 className="w-48 h-48 text-sky-900" />
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl italic text-sky-600">LiveFit</h3>
            <p className="text-sm text-sky-700 font-medium leading-relaxed max-w-xs">
              The premium mindfulness ecosystem for high-performance teams. We cultivate resilience, vitality, and focus through integrated wellness solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sky-900 mb-4 uppercase tracking-widest text-[10px]">Pathways</h4>
            <ul className="space-y-2 text-sm text-sky-600 font-medium">
              <li className="hover:text-sky-900 transition-colors cursor-pointer">WorkFit Challenges</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Collective Flow</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Mindfulness</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Vitals Analytics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sky-900 mb-4 uppercase tracking-widest text-[10px]">The Community</h4>
            <ul className="space-y-2 text-sm text-sky-600 font-medium">
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Our Story</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Instructors</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sky-900 mb-4 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-2 text-sm text-sky-600 font-medium">
              <li className="hover:text-sky-900 transition-colors cursor-pointer">The LiveFit Journal</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Wellness Digest</li>
              <li className="hover:text-sky-900 transition-colors cursor-pointer">Help Center</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-6 border-t border-sky-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-sky-400 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} LiveFit. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-sky-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-sky-900 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
