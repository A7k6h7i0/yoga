import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Sparkles, ChevronRight, User, LogOut
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
    desc: 'Design bespoke wellness challenges aligned with corporate goals', 
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
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  const isWorkFitPage = location.pathname.includes('workfit') || location.pathname.includes('solutions');
  const navLinks = [
    { name: isWorkFitPage ? 'LiveFit Home' : 'Home', path: '/' }
  ];

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#F5F5F3] py-0.5 md:py-1 border-b border-orange-100/50">
      <div className="w-full px-4 md:px-8">
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

            {/* WorkFit Link */}
            <Link
              to="/workfit"
              className="text-sm font-black text-sky-950 hover:text-orange-600 transition-colors uppercase tracking-[0.25em]"
            >
              WorkFit
            </Link>

            {/* Solutions Dropdown - Only visible on WorkFit-related pages */}
            {(location.pathname.includes('workfit') || location.pathname.includes('solutions')) && (
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-2 text-sm font-black text-sky-950 hover:text-sky-600 transition-colors uppercase tracking-[0.25em] cursor-pointer">
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
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
                            <Link key={item.slug} to={`/solutions/${item.slug}`} onClick={() => setActiveDropdown(null)} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                              <div className="mt-0.5">
                                <item.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="font-semibold text-slate-100 group-hover:text-white text-[15px] mb-1">{item.name}</div>
                                <div className="text-[13px] text-slate-400 group-hover:text-slate-300 leading-relaxed">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Column - Other Solutions */}
                      <div className="w-[60%] bg-[#1d232a] p-8 flex flex-col border-l border-white/5">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">Other Solutions</h3>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-auto">
                          {solutions.slice(4,10).map((item) => (
                            <Link key={item.slug} to={`/solutions/${item.slug}`} onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                              <div className="mt-0.5">
                                <item.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="font-semibold text-slate-100 group-hover:text-white text-[14px] mb-1">{item.name}</div>
                                <div className="text-[12px] text-slate-400 group-hover:text-slate-300 leading-relaxed">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-8 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between group">
                          <span className="text-[13px] font-medium text-slate-300 group-hover:text-white">Explore our complete wellness ecosystem</span>
                          <Link to="/solutions" onClick={() => setActiveDropdown(null)} className="text-orange-500 hover:text-orange-400 font-bold ml-2 text-xs uppercase tracking-widest">View All Solutions</Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/livefitinquiry')}
              className="group relative pl-16 pr-8 py-5 bg-orange-600 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-orange-100 transition-all flex items-center"
            >
              <div className="absolute left-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-3rem)] z-10">
                <ChevronRight className="w-5 h-5 text-orange-600" />
              </div>
              <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-6">
                Book a Demo
              </span>
            </motion.button>

            {/* Auth Section */}
            <div className="flex items-center">
              {user ? (
                <div 
                  className="relative ml-6"
                  onMouseEnter={() => setActiveDropdown('user')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer border-2 border-orange-500/20 hover:border-orange-500 transition-all shadow-md overflow-hidden p-0.5"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-inner">
                       <span className="text-white font-black text-sm tracking-tighter">{user.name.slice(0, 2).toUpperCase()}</span>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {activeDropdown === 'user' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-4 w-64 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-orange-100/50 overflow-hidden z-[100]"
                      >
                        <div className="p-6 bg-gradient-to-br from-orange-50/50 to-white border-b border-orange-100/30">
                          <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-1.5">Account</p>
                          <h4 className="text-lg font-black text-sky-950 leading-tight">Hi, {user.name} 👋</h4>
                          <p className="text-[11px] text-sky-900/40 font-bold mt-1 lowercase tracking-widest truncate">{user.email || 'Welcome Back'}</p>
                        </div>
                        <div className="p-3">
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 px-4 py-4 text-sm font-black text-sky-950 hover:text-orange-600 hover:bg-orange-50/50 rounded-2xl transition-all group/logout"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover/logout:bg-orange-100/50 transition-colors">
                              <LogOut className="w-5 h-5 text-slate-400 group-hover/logout:text-orange-600" />
                            </div>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-black uppercase tracking-widest">Logout</span>
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Sign out of session</span>
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="ml-8 text-sm font-black text-sky-950 hover:text-orange-600 transition-colors uppercase tracking-[0.25em]"
                >
                  Login
                </Link>
              )}
            </div>
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
              <div className="flex justify-between items-center mb-12 gap-4">
                 <Logo />
                 <button onClick={() => setIsOpen(false)} className="p-2 bg-sky-50 rounded-full shrink-0">
                    <X className="w-8 h-8 text-sky-600" />
                 </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-2xl md:text-3xl font-serif italic font-bold text-sky-950"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {(location.pathname.includes('workfit') || location.pathname.includes('solutions')) && (
                  <div className="mt-8">
                    <Link to="/workfit" onClick={() => setIsOpen(false)} className="text-[10px] font-black text-sky-300 hover:text-sky-500 transition-colors uppercase tracking-[0.4em] mb-6 block">WorkFit Solutions</Link>
                    <div className="grid grid-cols-1 gap-4">
                      {solutions.map((item) => (
                        <Link key={item.slug} to={`/solutions/${item.slug}`} onClick={() => setIsOpen(false)} className="flex items-center gap-4 group">
                           <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                              <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                           </div>

                           <div className="flex flex-col">
                              <span className="text-lg md:text-xl font-serif italic font-bold text-sky-950 leading-none mb-1">{item.name}</span>
                              <span className="text-[10px] md:text-xs text-sky-400 font-bold leading-tight">{item.desc}</span>
                           </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-12">
                {user ? (
                  <div className="mb-6 p-6 bg-orange-50/50 rounded-[2rem] border border-orange-100/50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <span className="text-white font-black text-sm">{user.name.slice(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest leading-none mb-1">Signed in</p>
                        <p className="text-lg font-black text-sky-950 leading-none">Hi, {user.name}</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="mb-6 w-full py-5 border-2 border-sky-100 rounded-[2rem] flex items-center justify-center text-sm font-black text-sky-950 uppercase tracking-[0.3em]"
                  >
                    Login to Account
                  </Link>
                )}
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
