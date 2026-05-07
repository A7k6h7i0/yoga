import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Sparkles, Globe, 
  Wind, Brain, Users2, Trophy, MapPin, 
  Star, Activity, Flower2, Heart, Sparkle
} from 'lucide-react';
import Logo from './Logo';

const solutions = [
  { 
    name: 'Daily Asana', 
    slug: 'steps-challenge', 
    desc: 'Posture & Spinal Health', 
    icon: Wind,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: 'Zen Mastery', 
    slug: 'custom-challenges', 
    desc: 'Mindfulness Streaks', 
    icon: Brain,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: 'Collective Flow', 
    slug: 'team-challenge', 
    desc: 'Team Wellness', 
    icon: Users2,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: 'Pranayama Quest', 
    slug: 'virtual-marathon', 
    desc: 'Breathwork Journey', 
    icon: Trophy,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: 'Remote Studio', 
    slug: 'remote-team-wellness', 
    desc: 'Virtual Shala', 
    icon: MapPin,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: 'Mindful Workplace', 
    slug: 'mental-health', 
    desc: 'Cognitive Resilience', 
    icon: Sparkles,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: 'Wellness Credits', 
    slug: 'wellness-rewards', 
    desc: 'Incentivized Practice', 
    icon: Star,
    color: 'text-sky-500 bg-sky-50'
  },
  { 
    name: '8 Pillars', 
    slug: 'holistic-wellness', 
    desc: 'Complete Path', 
    icon: Flower2,
    color: 'text-sky-500 bg-sky-50'
  }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Philosophy', path: '/#philosophy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-sky-50 shadow-sm' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-black text-sky-950 hover:text-sky-600 transition-colors uppercase tracking-[0.25em]"
              >
                {link.name}
              </Link>
            ))}

            {/* WorkFit Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('workfit')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 text-sm font-black text-sky-950 hover:text-sky-600 transition-colors uppercase tracking-[0.25em]">
                WorkFit <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'workfit' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'workfit' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-[-100px] w-[600px] mt-4 bg-white/95 backdrop-blur-2xl rounded-[3rem] p-8 shadow-[0_40px_80px_-20px_rgba(12,74,110,0.2)] border border-sky-50"
                  >
                    <div className="flex items-center justify-between mb-6 px-4">
                       <div className="text-[10px] font-black text-sky-300 uppercase tracking-[0.4em]">Corporate Solutions</div>
                       <Link to="/workfit" className="text-[10px] font-black text-sky-600 hover:text-sky-950 uppercase tracking-widest flex items-center gap-2">
                          Overview <ChevronDown className="w-3 h-3 -rotate-90" />
                       </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {solutions.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/solutions/${item.slug}`}
                          className="flex items-center gap-4 p-4 rounded-3xl hover:bg-sky-50/80 transition-all group border border-transparent hover:border-sky-100"
                        >
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm ${item.color}`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-serif italic font-bold text-sky-950 text-base group-hover:text-sky-600 transition-colors leading-none mb-1">{item.name}</div>
                            <div className="text-[10px] text-sky-400 font-bold group-hover:text-sky-500 tracking-wide">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-sky-50 flex items-center justify-between px-4">
                       <div className="flex items-center gap-2 text-sky-400">
                          <Activity className="w-4 h-4 animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Live Practitioners: 85k+</span>
                       </div>
                       <Sparkle className="w-4 h-4 text-sky-200" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(12, 74, 110, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-sky-600 text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl shadow-sky-100 transition-all flex items-center gap-2"
            >
              Book Demo <Sparkles className="w-3 h-3" />
            </motion.button>
          </div>

          <button 
            className="lg:hidden p-2 text-sky-950"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 lg:hidden bg-white z-[60] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                 <Logo />
                 <button onClick={() => setIsOpen(false)} className="p-2 bg-sky-50 rounded-full">
                    <X className="w-8 h-8 text-sky-600" />
                 </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-4xl font-serif italic font-bold text-sky-950"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="mt-12">
                   <div className="text-[10px] font-black text-sky-300 uppercase tracking-[0.4em] mb-8">WorkFit Solutions</div>
                   <div className="grid grid-cols-1 gap-6">
                     {solutions.map((item) => (
                       <Link key={item.slug} to={`/solutions/${item.slug}`} className="flex items-center gap-5 group">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                             <item.icon className="w-7 h-7" />
                          </div>
                          <div className="flex flex-col">
                             <span className="text-2xl font-serif italic font-bold text-sky-950 leading-none mb-1">{item.name}</span>
                             <span className="text-xs text-sky-400 font-bold">{item.desc}</span>
                          </div>
                       </Link>
                     ))}
                   </div>
                </div>
              </div>

              <div className="mt-auto pt-12">
                <button className="w-full py-6 bg-sky-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-sky-100">
                  Request a Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
