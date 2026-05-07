import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, 
  Wind, Users, Trophy, 
  MapPin, Brain, Star, Globe, 
  ArrowRight, Flower2, Sparkles, Activity
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => {
    setIsSolutionsOpen(false);
    setIsOpen(false);
  };

  const yogaChallenges = [
    { name: 'Daily Asana', slug: 'steps-challenge', desc: 'Daily yoga posture challenges for all levels', icon: Wind },
    { name: 'Zen Mastery', slug: 'custom-challenges', desc: 'Customized mindfulness and meditation streaks', icon: Brain },
    { name: 'Collective Flow', slug: 'team-challenge', desc: 'Team-based synchronized yoga sessions', icon: Users },
    { name: 'Pranayama Quest', slug: 'virtual-marathon', desc: 'Global breathwork and energy workshops', icon: Trophy },
  ];

  const yogaSolutions = [
    { name: 'Remote Yoga Studio', slug: 'remote-team-wellness', desc: 'Live virtual classes for distributed teams', icon: MapPin },
    { name: 'Mindful Workplace', slug: 'mental-health', desc: 'Stress management through yogic wisdom', icon: Sparkles },
    { name: 'Wellness Credits', slug: 'wellness-rewards', desc: 'Earn rewards for consistent practice', icon: Star },
    { name: 'Global Sangha', slug: 'global-engagement', desc: 'Connect with a global community of practitioners', icon: Globe },
    { name: '8 Pillars Program', slug: 'holistic-wellness', desc: 'Complete yogic path for corporate health', icon: Flower2 },
    { name: 'Vitals Tracking', slug: 'health-analytics', desc: 'Monitor stress levels and flexibility growth', icon: Activity },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] glass px-6 py-3 flex justify-between items-center"
      onMouseLeave={() => setIsSolutionsOpen(false)}
    >
      <div className="flex items-center space-x-2">
        <Link to="/" onClick={handleClose} className="text-2xl font-serif italic font-bold tracking-tight text-sky-600">
          LiveFit
        </Link>
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {/* WorkFit Dropdown Trigger */}
        <div 
          className="relative h-full"
          onMouseEnter={() => setIsSolutionsOpen(true)}
        >
          <Link 
            to="/solutions"
            onClick={handleClose}
            className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-sky-500 py-2 ${
              location.pathname.startsWith('/solutions') ? 'text-sky-500' : 'text-sky-900'
            }`}
          >
            WorkFit <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
          </Link>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {isSolutionsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[800px]"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <div className="bg-white rounded-[2rem] shadow-2xl border border-sky-100 p-8 overflow-hidden relative">
                  {/* Decorative background leaf/gradient */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-sky-50 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none" />
                  
                  <div className="grid grid-cols-12 gap-8 relative">
                    {/* Yoga Challenges Column */}
                    <div className="col-span-5 border-r border-sky-50 pr-8">
                      <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-6 text-center bg-sky-50 py-1 rounded-full">Yoga Challenges</h4>
                      <div className="space-y-6">
                        {yogaChallenges.map((item) => (
                          <Link key={item.name} to={`/solutions/${item.slug}`} onClick={handleClose} className="group flex gap-4">
                            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0 shadow-sm">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-bold text-sky-900 group-hover:text-sky-500 transition-colors text-sm mb-0.5">{item.name}</h5>
                              <p className="text-[11px] text-sky-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Other Solutions Column */}
                    <div className="col-span-7">
                      <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-6 text-center bg-sky-50 py-1 rounded-full">Holistic Path</h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {yogaSolutions.map((item) => (
                          <Link key={item.name} to={`/solutions/${item.slug}`} onClick={handleClose} className="group flex gap-4">
                            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0 shadow-sm">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-bold text-sky-900 group-hover:text-sky-500 transition-colors text-sm mb-0.5">{item.name}</h5>
                              <p className="text-[11px] text-sky-500 leading-relaxed line-clamp-1">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Footer in Menu */}
                      <Link 
                        to="/solutions"
                        onClick={handleClose}
                        className="mt-8 p-4 bg-sky-600 rounded-2xl flex items-center justify-between group/footer hover:bg-sky-700 transition-colors"
                      >
                        <span className="text-white text-xs font-medium">Discover your path to total corporate well-being</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover/footer:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link 
          to="/about" 
          onClick={handleClose}
          className={`text-sm font-semibold tracking-wide transition-colors hover:text-sky-500 ${
            location.pathname === '/about' ? 'text-sky-500' : 'text-sky-900'
          }`}
        >
          About Us
        </Link>
        <Link 
          to="/blog" 
          onClick={handleClose}
          className={`text-sm font-semibold tracking-wide transition-colors hover:text-sky-500 ${
            location.pathname === '/blog' ? 'text-sky-500' : 'text-sky-900'
          }`}
        >
          Blog
        </Link>

        <button onClick={handleClose} className="px-6 py-2 bg-sky-600 text-white rounded-full text-sm font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-100">
          Book a Demo
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-sky-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-sky-50 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <Link to="/solutions" onClick={handleClose} className="text-lg font-semibold text-sky-900">WorkFit</Link>
            <Link to="/about" onClick={handleClose} className="text-lg font-semibold text-sky-900">About Us</Link>
            <Link to="/blog" onClick={handleClose} className="text-lg font-semibold text-sky-900">Blog</Link>
            <button onClick={handleClose} className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold">
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
