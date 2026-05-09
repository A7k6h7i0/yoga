import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Sparkles
} from 'lucide-react';
import Logo from './Logo';
import {
  StepsIcon, CustomIcon, TeamIcon, MarathonIcon,
  RemoteIcon, MentalIcon, RewardsIcon, GlobalIcon,
  HolisticIcon, AnalyticsIcon
} from './WorkFitIcons';

const solutions = [
  { 
    name: 'Steps Challenge', 
    slug: 'steps-challenge', 
    desc: 'Promote physical activity through varied step challenges', 
    icon: StepsIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Custom Challenges', 
    slug: 'custom-challenges', 
    desc: 'Create custom challenges catering to different health goals', 
    icon: CustomIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Team Challenge', 
    slug: 'team-challenge', 
    desc: 'Promote collaboration through team challenges', 
    icon: TeamIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Virtual Marathon', 
    slug: 'virtual-marathon', 
    desc: 'Unite your global workforce with one day virtual marathon', 
    icon: MarathonIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Remote Team Wellness', 
    slug: 'remote-team-wellness', 
    desc: 'Offer wellness plans crafted for remote teams', 
    icon: RemoteIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Mental Health & Well-being', 
    slug: 'mental-health', 
    desc: 'Support mental health at work', 
    icon: MentalIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Wellness Rewards Program', 
    slug: 'wellness-rewards', 
    desc: 'Encourage healthy behaviours through rewards', 
    icon: RewardsIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Global Employee Engagement', 
    slug: 'global-engagement', 
    desc: 'Connect employees across diverse cultures', 
    icon: GlobalIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Holistic Wellness Program', 
    slug: 'holistic-wellness', 
    desc: 'Promote a well-rounded approach to wellness', 
    icon: HolisticIcon,
    color: 'text-orange-500 bg-orange-50'
  },
  { 
    name: 'Health & Fitness Analytics', 
    slug: 'health-analytics', 
    desc: 'Track and optimize wellness programs', 
    icon: AnalyticsIcon,
    color: 'text-orange-500 bg-orange-50'
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
    { name: 'Home', path: '/' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-2 md:py-3 bg-white/80 backdrop-blur-xl border-b border-sky-50 shadow-sm' : 'py-4 md:py-6 bg-transparent'
    }`}>
      <div className="w-full px-4 md:px-8 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-black text-sky-950 hover:text-orange-600 transition-colors uppercase tracking-[0.25em]"
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
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-[-80px] w-[850px] mt-6 rounded-[24px] shadow-2xl overflow-hidden flex border border-slate-700/50"
                  >
                    {/* Left Column - Challenges */}
                    <div className="w-[40%] bg-[#141920] p-8">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">Challenges</h3>
                      <div className="flex flex-col gap-2">
                        {solutions.slice(0,4).map((item) => (
                          <a key={item.slug} href={`/solutions/${item.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="mt-0.5">
                              <item.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-100 group-hover:text-white text-[15px] mb-1">{item.name}</div>
                              <div className="text-[13px] text-slate-400 group-hover:text-slate-300 leading-relaxed">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Column - Other Solutions */}
                    <div className="w-[60%] bg-[#1d232a] p-8 flex flex-col border-l border-white/5">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">Other Solutions</h3>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-auto">
                        {solutions.slice(4,10).map((item) => (
                          <a key={item.slug} href={`/solutions/${item.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="mt-0.5">
                              <item.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-100 group-hover:text-white text-[14px] mb-1">{item.name}</div>
                              <div className="text-[12px] text-slate-400 group-hover:text-slate-300 leading-relaxed">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                      
                      <a href="/workfit" target="_blank" rel="noopener noreferrer" className="mt-8 block">
                        <div className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between group">
                          <span className="text-[13px] font-medium text-slate-300 group-hover:text-white">See how Vantage Fit works as your all-in-one employee wellness software</span>
                          <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-orange-600 text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl shadow-orange-100 transition-all flex items-center gap-2"
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
            <div className="w-full px-4 md:px-8 py-8 h-full flex flex-col">
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
                <button className="w-full py-6 bg-orange-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-orange-100">
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
