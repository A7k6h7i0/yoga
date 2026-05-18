import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sparkles, ChevronRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Flower2, Activity, Apple, 
  Play, Users, Headphones, FileText, Monitor, 
  Smartphone, Wifi, Users2, Clock, Video, 
  UserCircle2, BookOpen, Star, PlayCircle,
  Brain, HeartPulse, TrendingDown, Armchair,
  TrendingUp, ShieldCheck, CheckCircle2,
  CalendarDays, Zap, Scale, DollarSign,
  Wind, Shield, Droplets, Check, Quote, Building, Globe2, PlusCircle,
  MinusCircle, ChevronDown, ChevronUp, Mail, Phone,
  Footprints, Smile, Target, Trophy, Leaf, Moon, Dumbbell
} from 'lucide-react';

const WorkFit = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 150]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  
  const workfitTestimonials = [
    { name: "Mahesh", title: "Founder & CEO", company: "Onsite Solutions", country: "🇺🇸 USA", text: "WorkFit has transformed the way our team feels and performs. The sessions are practical, engaging, and easy to integrate into our busy workday.", tags: ["Energy", "Focus", "Team Wellness"] },
    { name: "Shrikant", title: "Founder & CTO", company: "Excelfore", country: "🇺🇸 USA", text: "The blend of yoga, mobility, and mindfulness is exceptional. We've seen more energy, better concentration, and stronger teamwork.", tags: ["Performance", "Mindfulness", "Teamwork"] },
    { name: "Amita", title: "Project Coordinator", company: "Total Security Protection", country: "🇬🇧 UK", text: "We just had one class with WorkFit and the experience was outstanding! Our team loved it and felt an immediate sense of relaxation and positivity. We're excited to continue this journey.", tags: ["First Class Experience", "Relaxation", "Excited"] },
    { name: "Prasad", title: "Founder & MD", company: "Akshar School Solutions", country: "🇮🇳 India", text: "WorkFit's approach is holistic and very impactful. Our employees are more consistent, less stressed, and more productive.", tags: ["Holistic Wellness", "Stress Relief", "Productivity"] },
    { name: "Madhu", title: "Co-founder", company: "Onsite Solutions", country: "🇺🇸 USA", text: "The flexibility and variety of programs make it easy for everyone to participate. Our team looks forward to every session!", tags: ["Engagement", "Flexibility", "Well-being"] },
    { name: "Emma", title: "Professor", company: "", country: "🇬🇧 UK", text: "Just one session with WorkFit and I felt refreshed and re-energized. Practical, well-guided, and perfect for busy professional life!", tags: ["Refreshment", "Energy", "Wellness"] },
    { name: "Bekir Orahan", title: "Professor", company: "", country: "🇹🇷 Turkey", text: "The session was practical, refreshing, and eye-opening. It gave us simple tools for better health, focus, and mental clarity.", tags: ["Mental Clarity", "Focus", "Practical Tools"] },
    { name: "Michael Johnson", title: "Director - People & Culture", company: "VisionCore Systems", country: "🇺🇸 USA", text: "WorkFit is a game-changer for our workplace. We've noticed less stress, better focus, and a happier team.", tags: ["Stress Reduction", "Focus", "Happiness"] }
  ];

  const slides = [
    {
      image: '/wh1.png',
      badge: 'CORPORATE WELLNESS PLATFORM',
      badgeStyle: 'text',
      titleChunks: [
        { orange: 'Move', dark: ' Better.' },
        { orange: 'Feel', dark: ' Better.' },
        { orange: 'Work', dark: ' Better.' }
      ],
      description: 'Yoga, mindfulness, fitness, nutrition and healthy habit programs designed to energize your teams—wherever they work, wherever they are.',
      primaryButtonText: 'Book a Demo',
      secondaryButtonText: 'Explore Solutions',
      buttonStyle: 'screenshot'
    },
    {
      image: '/wh2.png',
      theme: 'dark',
      iconBadge: true,
      iconColor: 'bg-[#f97316]',
      badgeColor: 'text-[#f97316]',
      badgeStyle: 'number',
      badge: '01',
      IconComponent: Flower2,
      titleChunks: [
        { text: 'Move Together.' },
        { text: 'Work ', orange: 'Better.' }
      ],
      description: 'Yoga, Stretch at Desk & Workouts\nfor a Stronger You.',
      listAccent: '#f97316',
      listFeatures: [
        { icon: Flower2, title: 'Yoga for Balance', desc: 'Relieve stress, improve flexibility\nand focus.' },
        { icon: Armchair, title: 'Stretch at Desk', desc: 'Quick stretches to ease tension\nand improve posture.' },
        { icon: Dumbbell, title: 'Workouts for Strength', desc: 'Build strength, boost energy\nand stay healthy.' },
      ],
      tagline: 'Small moves. Big impact. Every day.'
    },
    {
      image: '/wh3.png',
      theme: 'dark',
      iconBadge: true,
      iconColor: 'bg-[#3b82f6]',
      badgeColor: 'text-[#3b82f6]',
      IconComponent: Flower2,
      title: ['Mind. Calm. Focused.'],
      subtitle: 'Mental & Emotional Wellbeing for Your Team',
      description: 'Support your team\'s mental and emotional wellbeing with expert-led sessions and resources that truly make a difference.',
      listFeatures: [
        { icon: UserCircle2, title: 'Live 1-on-1 Sessions', desc: 'Personalized support for stress, anxiety, burnout and more.' },
        { icon: Users2, title: 'Group Sessions', desc: 'Interactive sessions to build resilience, emotional balance and connection.' },
        { icon: BookOpen, title: 'Resource Library', desc: 'Yoga, meditation, mindfulness, blogs and podcasts – learn, anytime.' },
      ],
      tagline: 'Stronger minds. Happier teams. Better workplaces.'
    },
    {
      image: '/wh4.png',
      theme: 'dark',
      iconBadge: true,
      iconColor: 'bg-[#22c55e]',
      badgeColor: 'text-[#22c55e]',
      IconComponent: Activity,
      title: ['Stronger Together'],
      subtitle: 'Challenges & Team Programs',
      description: 'Fun, engaging and purpose-driven challenges that bring teams closer while building healthier habits.',
      multiSection: [
        {
          title: 'Physical Challenges',
          color: '#22c55e',
          fullWidth: true,
          items: [
            { icon: Footprints, title: 'Step Challenges', desc: 'Move more together. Track steps, climb leaderboards, win together.' },
            { icon: Activity, title: 'Virtual Runs', desc: 'Run anytime, anywhere. One goal, one team.' },
            { icon: Flower2, title: 'Sun Salutations', desc: 'Build strength, flexibility and mindfulness together.' },
          ]
        },
        {
          title: 'Mental Wellbeing Challenges',
          color: '#22c55e',
          items: [
            { icon: Flower2, title: 'Mindfulness Challenge', desc: 'Pause, breathe and stay present together.' },
            { icon: Smile, title: 'Gratitude Challenge', desc: 'Spread positivity. Build a culture of appreciation.' },
            { icon: Target, title: 'Focus Challenge', desc: 'Stay focused, reduce stress and achieve more.' },
          ]
        },
        {
          title: 'Team Programs',
          color: '#22c55e',
          items: [
            { icon: Users2, title: 'Team Wellness Program', desc: 'Holistic wellbeing plans tailored for your team.' },
            { icon: UserCircle2, title: 'Wellness Workshops', desc: 'Interactive sessions on fitness, nutrition, stress management & more.' },
            { icon: Trophy, title: 'Rewards & Recognition', desc: 'Celebrate progress. Inspire lasting change.' },
          ]
        }
      ],
      tagline: 'Better habits. Stronger teams. Healthier workplaces.'
    },
    {
      image: '/wh5.png',
      theme: 'dark',
      iconBadge: true,
      iconColor: 'bg-[#3b82f6]', // Clear blue as requested
      badgeColor: 'text-[#3b82f6]',
      IconComponent: Apple,
      title: ['Healthy Habits'],
      subtitle: 'Lifestyle & Wellness Programs',
      description: 'Build healthier routines through nutrition coaching, mindful living and sustainable wellbeing practices designed for modern teams.',
      simpleListFeatures: [
        { icon: Leaf, text: 'Personalized nutrition &\nhealthy eating guidance' },
        { icon: Brain, text: 'Positive mindset &\nstress-management programs' },
        { icon: Scale, text: 'Work-life balance &\nburnout prevention' },
        { icon: Moon, text: 'Sleep, recovery &\nenergy optimization' },
        { icon: Clock, text: 'Intermittent fasting &\nhabit-building challenges' },
        { icon: BookOpen, text: 'Wellness resources including\nblogs, podcasts & guided sessions' }
      ],
      tagline: 'Healthy people. Positive culture. Better performance.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div ref={containerRef} className="pb-0 overflow-hidden bg-[#0a1128]">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#F5F5F3]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full object-cover object-[center_top] md:object-center"
              alt="WorkFit Background"
            />
          </AnimatePresence>
          
          {/* Desktop Gradient */}
          <div className={`absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r hidden lg:block z-10 transition-colors duration-1000 ${
            slides[currentSlide].theme === 'dark' ? 'from-[#1c2438] via-[#1c2438]/95' : 'from-[#F5F5F3] via-[#F5F5F3]/90'
          } to-transparent`} />
          {/* Mobile Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t lg:hidden z-10 transition-colors duration-1000 ${
            slides[currentSlide].theme === 'dark' ? 'from-[#1c2438] via-[#1c2438]/95' : 'from-[#F5F5F3] via-[#F5F5F3]/50'
          } to-transparent`} />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 pt-32 pb-20 lg:pt-0 lg:pb-0">
          <div className="max-w-2xl text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Icon Badge */}
                {slides[currentSlide].iconBadge && (
                  <div className={`w-16 h-16 rounded-full ${slides[currentSlide].iconColor || 'bg-[#f97316]'} flex items-center justify-center mb-6 shadow-lg`}>
                    {slides[currentSlide].IconComponent ? (
                      React.createElement(slides[currentSlide].IconComponent, { className: "w-8 h-8 text-white" })
                    ) : (
                      <Flower2 className="w-8 h-8 text-white" />
                    )}
                  </div>
                )}

                {/* Badge */}
                {slides[currentSlide].badge && (
                  slides[currentSlide].badgeStyle === 'text' ? (
                    <div className="text-[#f97316] font-bold text-[10px] md:text-xs tracking-[0.15em] mb-4 uppercase">
                      {slides[currentSlide].badge}
                    </div>
                  ) : slides[currentSlide].badgeStyle === 'number' ? (
                    <div className={`${slides[currentSlide].badgeColor || 'text-[#f97316]'} font-bold text-2xl md:text-3xl mb-2`}>
                      {slides[currentSlide].badge}
                    </div>
                  ) : (
                    <div className="inline-block px-4 py-1.5 border border-orange-200 rounded-full bg-orange-50 text-orange-600 font-bold text-[10px] md:text-xs tracking-[0.1em] mb-6 shadow-sm">
                      {slides[currentSlide].badge}
                    </div>
                  )
                )}

                {/* Title */}
                {slides[currentSlide].titleChunks ? (
                  <h1 className={`text-5xl sm:text-6xl md:text-7xl font-sans ${slides[currentSlide].theme === 'dark' ? 'text-white' : 'text-[#1c2438]'} mb-6 leading-[1.15] font-black tracking-tight`}>
                    {slides[currentSlide].titleChunks.map((chunk: any, idx: number) => (
                      <span key={idx} className="block">
                        {chunk.text && <span>{chunk.text}</span>}
                        {chunk.orange && <span className="text-[#f97316]">{chunk.orange}</span>}
                        {chunk.dark && <span>{chunk.dark}</span>}
                      </span>
                    ))}
                  </h1>
                ) : (
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl ${slides[currentSlide].theme === 'dark' ? 'font-sans text-white' : 'font-serif text-sky-950'} mb-4 leading-[1.1] font-bold tracking-tight`}>
                    {slides[currentSlide].title?.map((line: string, idx: number) => (
                      <span key={idx} className={`block ${slides[currentSlide].orangeTitleIndex === idx ? 'text-[#f97316]' : ''}`}>
                        {line}
                      </span>
                    ))}
                  </h1>
                )}

                {/* Subtitle / Description */}
                {slides[currentSlide].subtitle && (
                  <p className={`text-xl md:text-2xl mb-6 leading-relaxed ${slides[currentSlide].theme === 'dark' ? 'text-white font-medium' : 'font-serif italic text-orange-500'}`}>
                    {slides[currentSlide].subtitle}
                  </p>
                )}

                {slides[currentSlide].description && (
                  <p className={`text-base md:text-lg mb-8 max-w-xl leading-relaxed font-medium ${
                    slides[currentSlide].theme === 'dark' ? 'text-gray-300' 
                    : slides[currentSlide].badgeStyle === 'text' ? 'text-gray-700' 
                    : 'text-sky-900/80'
                  }`}>
                    {slides[currentSlide].description}
                  </p>
                )}

                {/* Bullets (Checklist) */}
                {slides[currentSlide].bullets && (
                  <div className="space-y-3 mb-10">
                    {slides[currentSlide].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full border border-orange-200 flex items-center justify-center bg-orange-50/50">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                        </div>
                        <span className="text-sky-950/90 font-medium md:text-lg">{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features row */}
                {slides[currentSlide].features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {slides[currentSlide].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm">
                          <feature.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-sky-950 whitespace-nowrap">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* List Features (icon + title + desc) */}
                {(slides[currentSlide] as any).listFeatures && (() => {
                  const accent = (slides[currentSlide] as any).listAccent || '#3b82f6';
                  return (
                    <div className="space-y-4 mb-6">
                      {(slides[currentSlide] as any).listFeatures.map((f: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'transparent', border: `1px solid ${accent}` }}>
                            <f.icon className="w-5 h-5" style={{ color: accent }} />
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm md:text-base">{f.title}</div>
                            <div className="text-sm text-gray-400 leading-snug whitespace-pre-line">{f.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}

                {/* Multi-Section (full width then two-column) */}
                {(slides[currentSlide] as any).multiSection && (() => {
                  const sections = (slides[currentSlide] as any).multiSection;
                  const fullSections = sections.filter((s: any) => s.fullWidth);
                  const halfSections = sections.filter((s: any) => !s.fullWidth);
                  const accentColor = (slides[currentSlide] as any).badgeColor?.match(/\[(.*?)\]/)?.[1] || (slides[currentSlide] as any).badgeColor?.replace('text-', '') || '#22c55e';
                  const renderItem = (item: any, iIdx: number, small = false) => (
                    <div key={iIdx} className="flex items-start gap-2.5">
                      <div className={`${small ? 'w-7 h-7' : 'w-8 h-8'} rounded-full flex items-center justify-center shrink-0 mt-0.5`} style={{ background: 'transparent', border: `1px solid ${accentColor}` }}>
                        <item.icon style={{ color: accentColor }} className={small ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">{item.title}</div>
                        <div className="text-xs text-gray-400 leading-snug">{item.desc}</div>
                      </div>
                    </div>
                  );
                  return (
                    <div className="mb-3 space-y-3">
                      {fullSections.map((section: any, sIdx: number) => (
                        <div key={sIdx}>
                          <h4 className="text-white font-bold text-sm mb-2">{section.title}</h4>
                          <div className="space-y-1.5">
                            {section.items.map((item: any, iIdx: number) => renderItem(item, iIdx))}
                          </div>
                        </div>
                      ))}
                      {halfSections.length > 0 && (
                        <div className="grid grid-cols-2 gap-3">
                          {halfSections.map((section: any, sIdx: number) => (
                            <div key={sIdx}>
                              <h4 className="text-white font-bold text-xs mb-2">{section.title}</h4>
                              <div className="space-y-1.5">
                                {section.items.map((item: any, iIdx: number) => renderItem(item, iIdx, true))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Simple List Features */}
                {(slides[currentSlide] as any).simpleListFeatures && (() => {
                  const accentColor = (slides[currentSlide] as any).badgeColor?.match(/\[(.*?)\]/)?.[1] || (slides[currentSlide] as any).badgeColor?.replace('text-', '') || '#6366f1';
                  return (
                    <div className="mb-8 flex flex-col">
                      {(slides[currentSlide] as any).simpleListFeatures.map((f: any, idx: number, arr: any[]) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ border: `1px solid ${accentColor}` }}>
                            <f.icon className="w-5 h-5" style={{ color: accentColor }} />
                          </div>
                          <div className={`flex-1 py-3 ${idx !== arr.length - 1 ? 'border-b border-gray-700/50' : ''}`}>
                            <div className="text-white text-sm font-medium whitespace-pre-line leading-snug">
                              {f.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}

                {/* Tagline */}
                {(slides[currentSlide] as any).tagline && (
                  <p className="text-sm font-semibold mb-6" style={{ color: (slides[currentSlide] as any).badgeColor?.match(/\[(.*?)\]/)?.[1] || (slides[currentSlide] as any).badgeColor?.replace('text-', '') || '#3b82f6' }}>
                    {(slides[currentSlide] as any).tagline}
                  </p>
                )}

                {/* Action Buttons */}
                {(slides[currentSlide].primaryButtonText || slides[currentSlide].secondaryButtonText) && (
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/workfitinquiry')}
                    className={`group relative overflow-hidden font-bold transition-all flex items-center justify-center gap-2 ${
                      slides[currentSlide].buttonStyle === 'screenshot' 
                      ? 'bg-[#f97316] text-white rounded-lg px-8 py-3.5 shadow-md w-full sm:w-auto text-[15px]'
                      : slides[currentSlide].buttonStyle === 'outline' 
                      ? 'border-2 border-orange-500 text-orange-600 bg-white hover:bg-orange-50 rounded-full px-8 py-4'
                      : 'bg-orange-500 text-white shadow-xl shadow-orange-200 rounded-full px-8 py-4'
                    }`}
                  >
                    {slides[currentSlide].primaryButtonText}
                    {slides[currentSlide].buttonStyle !== 'screenshot' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </motion.button>
                  
                   {slides[currentSlide].secondaryButtonText && (
                    <motion.button 
                      onClick={() => {
                        if (slides[currentSlide].secondaryButtonText === 'Explore Solutions') {
                          navigate('/solutions');
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`font-bold transition-all flex items-center justify-center gap-2 ${
                        slides[currentSlide].buttonStyle === 'screenshot'
                        ? 'bg-white text-[#1c2438] border border-gray-300 rounded-lg px-8 py-3.5 hover:border-gray-400 w-full sm:w-auto text-[15px]'
                        : 'bg-white text-sky-950 border-2 border-sky-100 rounded-full px-8 py-4'
                      }`}
                    >
                      {slides[currentSlide].secondaryButtonText}
                      {slides[currentSlide].buttonStyle === 'screenshot' && <ArrowRight className="w-4 h-4" />}
                    </motion.button>
                  )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Control */}
        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-30 flex items-center gap-6 bg-[#2B2D42] text-white/90 px-6 py-3 rounded-full shadow-2xl backdrop-blur-md">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="hover:text-white transition-colors p-1"
          >
            ←
          </button>
          <span className="text-sm font-medium tracking-[0.2em]">
            0{currentSlide + 1} / 0{slides.length}
          </span>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="hover:text-white transition-colors p-1"
          >
            →
          </button>
        </div>

        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-[#0a1128] to-[#0a1128] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Icons */}
            <div className="lg:col-span-4 pr-0 lg:pr-8">
              <div className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">The Challenge</div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                Today's Workplace<br />Is Under <span className="text-orange-500">Pressure</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Rising stress, unhealthy habits, and disengagement are impacting employee well-being and business performance.
              </p>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center group">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                    <Brain className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-[10px] md:text-xs font-semibold text-gray-300 leading-tight">High Stress &<br/>Burnout</div>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                    <Armchair className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-[10px] md:text-xs font-semibold text-gray-300 leading-tight">Sedentary<br/>Lifestyles</div>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                    <HeartPulse className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-[10px] md:text-xs font-semibold text-gray-300 leading-tight">Chronic Health<br/>Risks</div>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                    <TrendingDown className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-[10px] md:text-xs font-semibold text-gray-300 leading-tight">Low Engagement<br/>& Productivity</div>
                </div>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { stat: '77%', desc: 'of employees experience work-related stress', source: 'Gallup', img: '/tc1.png' },
                  { stat: '60%', desc: 'of employees feel exhausted at work', source: 'McKinsey', img: '/tc2.png' },
                  { stat: '40%', desc: 'drop in productivity due to poor well-being', source: 'WHO', img: '/tc3.png' },
                  { stat: '$1.8T', desc: 'lost annually by businesses due to poor employee health', source: 'Harvard Business Review', img: '/tc4.png' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden bg-[#0d1530] border border-white/5 flex flex-col group cursor-pointer hover:border-white/10 transition-colors h-full">
                    <div className="h-40 overflow-hidden relative">
                      <img src={item.img} alt="Stat Context" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                      <div className="absolute inset-0 bg-[#0a1128]/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-3">{item.stat}</div>
                        <p className="text-gray-300 text-xs leading-relaxed mb-6">{item.desc}</p>
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium">Source: {item.source}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How WorkFit Helps Section */}
      <section className="py-24 bg-[#0a1128] text-white border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <div className="text-orange-500 font-bold text-lg tracking-[0.2em] uppercase mb-4">How WorkFit Helps</div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
              Wellness Programs That Drive Real Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: 'Improve Well-being', desc: 'Reduce stress, boost energy, and support physical & mental health.', icon: Flower2, iconBg: 'bg-orange-500', img: '/wp1.png' },
              { title: 'Increase Engagement', desc: 'Foster connection, motivation, and a positive workplace culture.', icon: Users2, iconBg: 'bg-green-500', img: '/wp2.png' },
              { title: 'Boost Productivity', desc: 'Healthy employees are more focused, productive, and present.', icon: TrendingUp, iconBg: 'bg-purple-500', img: '/wp3.png' },
              { title: 'Lower Healthcare Costs', desc: 'Prevent illnesses and reduce medical claims & absenteeism.', icon: ShieldCheck, iconBg: 'bg-blue-500', img: '/wp4.png' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl overflow-visible bg-[#0d1530] border border-white/5 flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative mt-6 lg:mt-0">
                <div className="h-48 overflow-hidden rounded-t-2xl relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-[#0a1128]/20 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Floating Icon */}
                <div className={`absolute top-[168px] left-6 w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center border-4 border-[#0d1530] shadow-lg z-10 group-hover:-translate-y-1 transition-transform`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                <div className="p-6 pt-10 flex-1 flex flex-col justify-between relative z-0">
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="flex items-center text-orange-500 font-bold text-sm group-hover:text-orange-400 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* WorkFit Solutions Section (White Background) */}
      <section className="py-24 bg-slate-50 text-[#0a1128] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">WorkFit Solutions</div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight text-[#0a1128]">
                Wellness Solutions<br />Designed For<br />
                <span className="text-orange-500">Modern Teams</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-sm">
                From personalized coaching and wellness challenges to mindfulness, movement, and hybrid workforce wellness — WorkFit helps employees feel healthier, happier, and more productive.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-6 border border-gray-100 max-w-md">
                <div className="flex items-center gap-4">
                  <Users className="w-10 h-10 text-orange-500 shrink-0" />
                  <div>
                    <div className="font-bold text-xl text-[#0a1128]">500+</div>
                    <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Companies Trust Us</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200 shrink-0" />
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
                  </div>
                  <div className="font-bold text-xl text-[#0a1128]">4.8/5</div>
                  <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Middle Column: 1-on-1 Coaching */}
            <div className="lg:col-span-4 flex">
              <div className="rounded-[2rem] bg-gradient-to-b from-orange-50/50 to-white flex flex-col overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-orange-100/50 w-full relative group">
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm">01</div>
                    <h3 className="text-2xl font-bold text-[#0a1128]">1-on-1 Coaching</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Personalized wellness coaching designed around individual goals, lifestyles, and workplace challenges.
                  </p>
                </div>
                
                <div className="relative px-6 mb-6">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                    <img src="/ws1.png" alt="1-on-1 Coaching" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Floating Dashboard Card */}
                  <div className="absolute -bottom-8 right-8 bg-white rounded-xl p-4 shadow-xl border border-gray-100 w-44 z-10">
                    <div className="text-[10px] font-bold text-[#0a1128] mb-3 text-center">Wellness Dashboard</div>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full border-4 border-green-500 border-r-green-100 flex items-center justify-center font-bold text-green-600 text-sm">87</div>
                    </div>
                    <div className="text-[9px] font-bold text-gray-500 mb-2">Wellness Score</div>
                    <div className="space-y-2">
                      {[{l:'Activity', w:'80%', c:'bg-green-500'}, {l:'Nutrition', w:'60%', c:'bg-green-500'}, {l:'Sleep', w:'70%', c:'bg-orange-500'}, {l:'Stress', w:'85%', c:'bg-orange-500'}].map((s,i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <span className="text-[8px] text-gray-600 font-medium w-10">{s.l}</span>
                          <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${s.c} rounded-full`} style={{width: s.w}} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="px-8 pt-8 pb-10 flex-1">
                  <ul className="space-y-3">
                    {['Fitness & workout guidance', 'Healthy habit coaching', 'Weight management support', 'Stress & energy management', 'Lifestyle optimization', 'Personalized wellness journeys'].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#0a1128] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 fill-orange-500/20" /> {li}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-orange-500 text-white p-6 flex items-center gap-4 mt-auto">
                  <ShieldCheck className="w-8 h-8 shrink-0" />
                  <span className="font-bold leading-tight text-sm">Personalized Wellness<br/>That Creates Lasting Change</span>
                </div>
              </div>
            </div>

            {/* Right Column: Diverse Wellness Programs */}
            <div className="lg:col-span-4 flex">
              <div className="rounded-[2rem] bg-gradient-to-b from-blue-50/50 to-white flex flex-col overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-100/50 w-full relative group">
                
                {/* Top Badge */}
                <div className="absolute top-6 right-6 bg-[#0a1128] text-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-bold leading-tight uppercase tracking-wider">Built For<br/>All Fitness<br/>Levels</span>
                </div>

                <div className="p-8 pb-4 pr-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm">02</div>
                    <h3 className="text-2xl font-bold text-[#0a1128] leading-tight">Diverse Wellness<br/>Programs</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Engaging wellness programs and challenges that inspire participation, consistency, and healthy habits across teams.
                  </p>
                </div>
                
                <div className="px-8 pb-6 relative z-10">
                  <ul className="space-y-3">
                    {['Step competitions', 'Yoga & fitness challenges', 'Meditation journeys', 'Sleep better programs', 'Healthy eating challenges', 'Fat burn & movement programs', 'Intermittent fasting challenges', 'Running & jogging initiatives'].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#0a1128] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 fill-blue-500/20" /> {li}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Floating Leaderboard */}
                  <div className="absolute top-10 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 w-48 z-20">
                    <div className="text-[11px] font-bold text-[#0a1128]">Step Challenge</div>
                    <div className="text-[9px] font-medium text-gray-500 mb-3">Leaderboard</div>
                    <div className="space-y-2">
                      {[{r:1, n:'Team Alpha', s:'842,421'}, {r:2, n:'Team Power', s:'735,290'}, {r:3, n:'Team Elevate', s:'607,612'}, {r:4, n:'Team Vitality', s:'512,309'}].map((t,i) => (
                        <div key={i} className="flex items-center justify-between text-[9px]">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[8px]">{t.r}</div>
                            <span className="font-semibold text-gray-700">{t.n}</span>
                          </div>
                          <span className="text-gray-500">{t.s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3 mt-auto relative z-0">
                  <div className="rounded-xl overflow-hidden h-64">
                    <img src="/ws2.png" alt="Yoga" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-64">
                    <img src="/ws3.png" alt="Running" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="bg-blue-600 text-white p-6 flex items-center gap-4 mt-auto z-10 relative">
                  <Users2 className="w-8 h-8 shrink-0" />
                  <span className="font-bold leading-tight text-sm">Turn Healthy Habits Into<br/>Team Culture</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Holistic Wellness Section (Dark Theme) */}
      <section className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-[#0a1128] to-[#0a1128] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <div className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">Mindfulness, Movement & Modern Workforce Wellness</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight">
              Holistic Wellness For Every Part Of Your Team
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 03: Calm & Mindfulness */}
            <div className="rounded-[2rem] bg-gradient-to-b from-blue-900/20 to-[#0d1530] border border-blue-500/20 flex flex-col overflow-hidden shadow-2xl relative group h-full">
              <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-sm">03</div>
                  <h3 className="text-2xl font-bold text-white">Calm & Mindfulness</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Support employee mental well-being through guided mindfulness, meditation, stress reduction, and wellness resources.
                </p>
              </div>
              
              <div className="relative px-6 mb-8">
                <div className="rounded-2xl overflow-hidden aspect-video relative">
                  <img src="/hw1.png" alt="Mindfulness" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-4 right-8 bg-[#0a1128]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-2xl w-48 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-white mb-0.5">Breathing Session</div>
                    <div className="text-[9px] text-gray-400">Active</div>
                  </div>
                  <div className="flex gap-0.5 items-center h-4">
                    {[1,2,3,4,3,2,1].map((h, i) => (
                      <motion.div key={i} animate={{ height: [4, h*4, 4] }} transition={{ repeat: Infinity, duration: 1.5, delay: i*0.1 }} className="w-0.5 bg-green-400 rounded-full" />
                    ))}
                  </div>
                  <PlayCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="px-8 pb-8 flex-1 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Flower2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Guided Mindfulness Sessions</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Structured mindfulness and meditation that reduce stress, improve focus, and build emotional balance every day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Mental Wellness Resources</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Expert webinars, articles, stress tools, sleep audio, recovery guidance, and wellness libraries at your fingertips.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0a1128] border-t border-blue-500/20 text-blue-400 p-6 flex items-center justify-center gap-3 mt-auto">
                <Shield className="w-5 h-5" />
                <span className="font-bold text-sm">Calmer Minds. Stronger Performance.</span>
              </div>
            </div>

            {/* Card 04: On-Site & Remote */}
            <div className="rounded-[2rem] bg-gradient-to-b from-green-900/20 to-[#0d1530] border border-green-500/20 flex flex-col overflow-hidden shadow-2xl relative group h-full">
              <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center text-sm">04</div>
                  <h3 className="text-2xl font-bold text-white">On-Site & Remote<br/>Team Wellness</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Flexible wellness experiences designed for both in-office and remote teams across different schedules, work styles, and global time zones.
                </p>
              </div>
              
              <div className="relative px-6 mb-8">
                <div className="rounded-2xl overflow-hidden aspect-video relative">
                  <img src="/hw2.png" alt="Team Wellness" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="px-8 pb-8 flex-1 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                    <CalendarDays className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Flexible Scheduling</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Wellness that fits every schedule, time zone and work style without disrupting productivity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                    <Users2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">Virtual Group Activities</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Live yoga, meditation, movement breaks, fitness sessions, breathwork workshops and hybrid wellness events.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0a1128] border-t border-green-500/20 text-green-400 p-6 flex items-center justify-center gap-3 mt-auto">
                <Shield className="w-5 h-5" />
                <span className="font-bold text-sm">Wellness Anywhere Your Team Works.</span>
              </div>
            </div>

            {/* Card 05: Make Breaks Effective */}
            <div className="rounded-[2rem] bg-gradient-to-b from-purple-900/20 to-[#0d1530] border border-purple-500/20 flex flex-col overflow-hidden shadow-2xl relative group h-full">
              <div className="p-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-sm">05</div>
                  <h3 className="text-2xl font-bold text-white">Make Breaks Effective</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transform short workplace breaks into moments of recovery, movement, and mental reset.
                </p>
              </div>
              
              <div className="relative px-6 mb-8">
                <div className="rounded-2xl overflow-hidden aspect-video relative">
                  <img src="/hw3.png" alt="Neck Stretch" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-4 right-4 bg-[#0a1128]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-2xl w-40">
                  <div className="text-[11px] font-bold text-white mb-3">5 Min Reset</div>
                  <div className="space-y-2">
                    {['Neck Stretch', 'Shoulder Roll', 'Deep Breathing', 'Lower Back Release'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[9px] text-gray-300 flex items-center gap-1.5"><span className="text-[7px] text-gray-500">{i+1}</span> {item}</span>
                        <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center"><Check className="w-2 h-2 text-white" /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-8 pb-8 flex-1">
                <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><Activity className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">5-min Mobility<br/>Sessions</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><Monitor className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">Desk Yoga</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><Flower2 className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">Guided<br/>Breathing</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><UserCircle2 className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">Neck & Shoulder<br/>Relief</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><Users2 className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">Lower Back<br/>Recovery</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><Zap className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">Midday Energy<br/>Reset</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center"><UserCircle2 className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-[9px] text-gray-400 font-medium leading-tight">Quick<br/>Meditation</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0a1128] border-t border-purple-500/20 text-purple-400 p-6 flex items-center justify-center gap-3 mt-auto">
                <Shield className="w-5 h-5" />
                <span className="font-bold text-sm">Small Breaks. Big Impact.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Real Results Section (Light Theme) */}
      <section className="py-24 bg-white text-[#0a1128] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-16">
            <div className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">Transforming Workspaces, One Step At A Time</div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold leading-tight">
              Real Results. Healthier Teams. Stronger Businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Stat 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col items-center lg:items-start group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-5xl font-bold text-orange-500 mb-4">17%</div>
              <p className="text-gray-600 font-bold text-sm leading-relaxed mb-8 flex-1 text-center lg:text-left">
                Reduction in overall medical expenses and cost
              </p>
              <div className="w-full h-8 opacity-50 flex items-end">
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-orange-400 fill-none" preserveAspectRatio="none">
                  <polyline points="0,15 10,12 20,18 30,8 40,14 50,5 60,10 70,2 80,8 90,4 100,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col items-center lg:items-start group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <Users2 className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-5xl font-bold text-green-500 mb-4">59%</div>
              <p className="text-gray-600 font-bold text-sm leading-relaxed mb-8 flex-1 text-center lg:text-left">
                Improvement in employee engagement in workplace
              </p>
              <div className="w-full h-8 opacity-50 flex items-end">
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-green-400 fill-none" preserveAspectRatio="none">
                  <polyline points="0,18 10,14 20,16 30,10 40,12 50,4 60,8 70,2 80,6 90,1 100,4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col items-center lg:items-start group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-5xl font-bold text-blue-500 mb-4">50%</div>
              <p className="text-gray-600 font-bold text-sm leading-relaxed mb-8 flex-1 text-center lg:text-left">
                Improvement in physical activity level
              </p>
              <div className="w-full h-8 opacity-50 flex items-end">
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-blue-400 fill-none" preserveAspectRatio="none">
                  <polyline points="0,10 10,15 20,8 30,12 40,5 50,14 60,6 70,10 80,2 90,8 100,3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col items-center lg:items-start group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-5xl font-bold text-purple-500 mb-4">4 <span className="text-2xl">KG</span></div>
              <p className="text-gray-600 font-bold text-sm leading-relaxed mb-8 flex-1 text-center lg:text-left">
                Average weight loss for employees
              </p>
              <div className="w-full h-8 opacity-50 flex items-end">
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-purple-400 fill-none" preserveAspectRatio="none">
                  <polyline points="0,4 10,8 20,2 30,10 40,6 50,14 60,8 70,16 80,10 90,18 100,12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto"
            onClick={() =>navigate("/workfitinquiry")}>
              Book a Demo
            </button>
            <button className="bg-white text-[#0a1128] border border-gray-200 hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            onClick={() =>navigate("/solutions")}>
              Explore All Solutions <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* Resource & Library Section */}
      <section className="py-12 md:py-16 bg-[#0a1128] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <span className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase">Resource & Library</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6">
              Your Wellness Library <br className="hidden md:block" />
              For <span className="text-orange-500">Everyday Work Life</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              Expert-led wellness resources designed to help employees recharge, recover,
              focus, and build healthier daily habits — anytime, anywhere.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column (Featured) */}
            <div className="lg:col-span-1 rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-64 lg:h-72 w-full overflow-hidden">
                <img src="/yw1.png" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md flex items-center gap-1.5">
                  <Star className="w-3 h-3" /> Featured
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/90 transition-all">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">5-Minute Stress Reset<br />for Busy Teams</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Guided breathwork and mobility exercises designed to reduce workplace stress and improve focus within minutes.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-6">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-orange-500" /> 5 Min</span>
                    <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-orange-500" /> Video Session</span>
                    <span className="flex items-center gap-1.5"><UserCircle2 className="w-3.5 h-3.5 text-orange-500" /> Guided By Experts</span>
                  </div>
                  <div className="flex items-center justify-end text-orange-500 font-bold text-sm group-hover:text-orange-400 transition-colors">
                    Watch Session <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Columns (2x2 Grid) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Quick Relief Videos */}
              <div className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative">
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw2.png" alt="Quick Relief" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4 text-orange-500">
                    <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quick Relief Videos</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-[200px]">
                    Short guided routines for posture correction, neck pain, eye fatigue, stress relief, and desk recovery.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Neck Relief', 'Desk Yoga', 'Eye Relaxation'].map((tag) => (
                        <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-gray-300 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recorded Wellness Programs */}
              <div className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative">
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw3.png" alt="Recorded Programs" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 text-green-500">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Recorded Wellness<br/>Programs</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-[200px]">
                    On-demand yoga, mobility, mindfulness, and fitness programs employees can access anytime.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Yoga', 'Mobility', 'Fitness'].map((tag) => (
                        <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-gray-300 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcasts & Mindfulness Audio */}
              <div className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative">
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw4.png" alt="Audio" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Podcasts &<br/>Mindfulness Audio</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-[200px]">
                    Mindfulness sessions, sleep recovery audio, stress management guidance, and wellness conversations.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Meditation', 'Sleep', 'Focus'].map((tag) => (
                        <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-gray-300 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative">
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw5.png" alt="Success Stories" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Success Stories &<br/>Wellness Insights</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-[200px]">
                    Real workplace wellness transformations, expert articles, and employee wellbeing strategies.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Articles', 'Stories', 'Wellness'].map((tag) => (
                        <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-gray-300 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="rounded-2xl bg-[#111836] border border-white/5 p-4 lg:py-5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 mt-6 relative overflow-hidden">
            <div className="flex-1 w-full lg:pr-8 lg:border-r border-white/10 z-10">
              <h3 className="text-lg font-bold mb-3">Accessible Across <span className="text-orange-500">Every Workplace</span></h3>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {[
                  { icon: Monitor, label: 'Desktop\nAccess' },
                  { icon: Smartphone, label: 'Mobile\nFriendly' },
                  { icon: Wifi, label: 'Remote\nTeams' },
                  { icon: Users2, label: 'Hybrid\nWorkplaces' },
                  { icon: PlayCircle, label: 'On-Demand\nAccess' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <item.icon className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-[10px] text-gray-300 font-medium leading-tight whitespace-pre-line">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-5 w-full lg:w-auto z-10">
              <div className="w-12 h-12 rounded-full border border-orange-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.15)] relative">
                <div className="absolute inset-0 rounded-full border border-orange-500/50 scale-[1.15]" />
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 lg:max-w-[260px]">
                <h4 className="text-base font-bold mb-1">Explore the Wellness Hub</h4>
                <p className="text-gray-400 text-[10px] leading-tight mb-2.5">
                  Empower employees with wellness support that continues beyond the session.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-5 rounded-full text-xs transition-colors flex items-center gap-2"
                onClick={() =>navigate("/workfitinquiry")}>
                  Book Demo <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Companies Choose WorkFit Section */}
      <section className="py-10 bg-slate-50/50 text-[#0B1530] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Dark Blue Hero Banner */}
          <div className="rounded-[2rem] bg-[#091535] relative overflow-hidden border border-white/5 shadow-xl mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
              
              {/* Left Column: Text & Stats */}
              <div className="lg:col-span-7 flex flex-col justify-center p-6 md:p-10 z-10 relative">
                <div className="text-[#f97316] font-bold text-[10px] tracking-[0.25em] uppercase mb-3">WHY COMPANIES CHOOSE WORKFIT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-white mb-4 leading-tight tracking-tight">
                  More Than Just Wellness Programs.<br/>
                  <span className="text-[#f97316]">A Partner in Your Team's Health & Performance.</span>
                </h2>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 max-w-xl font-medium">
                  WorkFit delivers modern, engaging, and results-driven wellness experiences that fit the way your team works today.
                </p>
                
                {/* Floating Stats Block */}
                <div className="bg-black/35 backdrop-blur-md rounded-xl p-4 border border-white/10 max-w-lg">
                  <div className="grid grid-cols-3 gap-2 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                    <div className="flex flex-col sm:flex-row items-center gap-2 pb-2 sm:pb-0">
                      <Users2 className="w-6 h-6 text-[#f97316] shrink-0" />
                      <div className="text-left">
                        <div className="text-base font-black text-white leading-tight">500+</div>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Organizations<br/>Trust WorkFit</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 sm:pt-0 sm:pl-3">
                      <Building className="w-6 h-6 text-[#f97316] shrink-0" />
                      <div className="text-left">
                        <div className="text-base font-black text-white leading-tight">250K+</div>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Employees<br/>Impacted</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 sm:pt-0 sm:pl-3">
                      <Star className="w-6 h-6 text-[#f97316] shrink-0" />
                      <div className="text-left">
                        <div className="text-base font-black text-white leading-tight">4.9/5</div>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Average Client<br/>Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden">
                <img
                  src="/Wc1.png"
                  alt="Team High Fiving"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Smooth Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#091535] via-[#091535]/40 to-transparent z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091535] via-[#091535]/40 to-transparent z-10 lg:hidden" />
              </div>

            </div>
          </div>

          {/* 6-Card Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-14">
            {[
              {
                icon: UserCircle2,
                title: 'Employee-Centric Approach',
                desc: 'Programs designed around employee needs, preferences, and workplace culture.',
                img: '/Wc2.png'
              },
              {
                icon: Target,
                title: 'Engaging & Interactive Experiences',
                desc: 'Fun, dynamic sessions that employees love to attend and look forward to.',
                img: '/Wc3.png'
              },
              {
                icon: Zap,
                title: 'Customized For Your Organization',
                desc: 'Tailored programs that align with your goals, challenges, and team dynamics.',
                img: '/Wc4.png'
              },
              {
                icon: Monitor,
                title: 'Hybrid-Ready By Design',
                desc: 'Seamless experiences for in-office, remote, and hybrid teams.',
                img: '/Wc5.png'
              },
              {
                icon: TrendingUp,
                title: 'Results That Matter',
                desc: 'Data-driven insights that show real improvements in wellbeing and productivity.',
                img: '/Wc6.png'
              },
              {
                icon: Users,
                title: 'More Than a Vendor, A True Partner',
                desc: 'Dedicated support, continuous innovation, and a partnership that grows with you.',
                img: '/Wc7.png'
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-orange-50/50 flex items-center justify-center mb-3 shrink-0">
                    <card.icon className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <h3 className="font-extrabold text-xs text-[#0B1530] mb-1.5 leading-snug">{card.title}</h3>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-3">{card.desc}</p>
                </div>
                <div className="h-32 rounded-xl overflow-hidden relative shadow-sm shrink-0">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-14 bg-white text-[#0B1530] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-[#0B1530] mb-2 tracking-tight">What Makes Us Different</h2>
            <div className="w-10 h-1 bg-[#f97316] mx-auto mb-10 rounded-full" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {[
                { icon: HeartPulse, title: 'Modern Wellness For Modern Teams', desc: 'We go beyond traditional wellness and create experiences that fit the evolving workplace.' },
                { icon: UserCircle2, title: 'Expert Instructors & Coaches', desc: 'Certified professionals who bring energy, expertise, and a human connection.' },
                { icon: Users2, title: 'High Participation By Design', desc: 'Built-in engagement strategies that drive participation across all levels.' },
                { icon: Flower2, title: 'Holistic & Balanced Wellbeing', desc: 'Movement, mindfulness, nutrition, mental health and more—supporting the whole person.' },
                { icon: ShieldCheck, title: 'Safe, Inclusive & Accessible', desc: 'Programs that are inclusive, adaptable, and accessible for everyone, everywhere.' },
                { icon: Star, title: 'Flexible Programs That Scale', desc: 'From quick stretch breaks to multi-week challenges—we scale with your organization.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B1530] flex items-center justify-center mb-3 shrink-0 shadow-md">
                    <item.icon className="w-5.5 h-5.5 text-[#f97316]" />
                  </div>
                  <h3 className="font-extrabold text-xs text-[#0B1530] mb-2 leading-snug max-w-[150px]">{item.title}</h3>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed max-w-[170px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment & Action Section */}
      <section className="py-14 bg-slate-50/50 text-[#0B1530]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Commitment To You Section */}
          <div className="rounded-[2rem] border border-gray-100 overflow-hidden mb-10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
              
              {/* Left Side: Dark Commitment Block */}
              <div className="lg:col-span-6 bg-[#091535] p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#f97316]" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-snug tracking-tight">
                  Our Commitment To You
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-medium max-w-md">
                  We're committed to creating a healthier, more energized workplace where employees thrive and organizations succeed.
                </p>
                
                {/* 4 Pillars Stats Grid */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/10">
                  <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <HeartPulse className="w-4 h-4 text-[#f97316] mb-1.5" />
                    <div className="text-[9px] text-white font-extrabold leading-tight">Healthier<br/>Employees</div>
                  </div>
                  <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <Smile className="w-4 h-4 text-[#f97316] mb-1.5" />
                    <div className="text-[9px] text-white font-extrabold leading-tight">Happier<br/>Teams</div>
                  </div>
                  <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <TrendingUp className="w-4 h-4 text-[#f97316] mb-1.5" />
                    <div className="text-[9px] text-white font-extrabold leading-tight">Stronger<br/>Performance</div>
                  </div>
                  <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <Building className="w-4 h-4 text-[#f97316] mb-1.5" />
                    <div className="text-[9px] text-white font-extrabold leading-tight">Better<br/>Business Outcomes</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Commitment Photo */}
              <div className="lg:col-span-6 min-h-[200px] lg:min-h-full relative overflow-hidden">
                <img
                  src="/Wc8.png"
                  alt="Yoga Stretching in Office"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Let's Build Together Action Banner */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 md:py-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] mb-14">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50/50 flex items-center justify-center shrink-0">
                <Flower2 className="w-6 h-6 text-[#f97316]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-[#0B1530] mb-0.5 leading-tight tracking-tight">Let's Build A Healthier, Happier Workplace Together.</h3>
                <p className="text-gray-500 font-bold text-[11px] md:text-xs">Partner with WorkFit and bring wellness experiences your employees will love—and your organization will see results from.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/workfitinquiry')}
                className="bg-[#f97316] hover:bg-orange-600 text-white font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-2.5 transition-colors shadow-lg shadow-orange-500/25 whitespace-nowrap"
              >
                BOOK A DEMO
                <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ChevronRight className="w-2.5 h-2.5 text-[#f97316] stroke-[3]" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/workfitinquiry')}
                className="bg-transparent border-2 border-gray-200 hover:border-gray-300 text-[#0B1530] font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
              >
                TALK TO WORKFIT <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              </motion.button>
            </div>
          </div>

          {/* Recognized By Logo Bar */}
          {/* <div className="text-center mb-6">
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Recognized By</div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {['Forbes', 'Inc.', 'FAST COMPANY', 'CNBC', 'HR DIVE', 'SHRM'].map((brand, idx) => (
                <div key={idx} className="font-sans font-black text-sm md:text-base text-gray-400/80 hover:text-gray-500 transition-colors select-none tracking-tight">
                  {brand}
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>

      {/* Testimonials Section — Light Theme */}
      <section className="py-24 bg-white text-[#0B1530]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-[#f97316] font-bold text-xs tracking-[0.25em] uppercase mb-4">TESTIMONIALS</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-[#0B1530] mb-5 tracking-tight leading-[1.1]">
              What Teams Say About WorkFit
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
              Helping organizations create healthier, happier, and more engaged workplaces through movement, mindfulness, and modern wellness experiences.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="rounded-[2.5rem] border border-gray-100 overflow-hidden mb-16 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.025)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
              {/* Left: Photo */}
              <div className="lg:col-span-5 min-h-[320px] lg:min-h-full relative overflow-hidden">
                <img
                  src="/Test1.png"
                  alt="WorkFit Team Session"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Right: Quote Card */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                {/* Elegant Quote Icon */}
                <div className="text-[#f97316] text-[5rem] font-serif leading-none absolute top-4 left-6 md:top-6 md:left-10 select-none opacity-15">“</div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1530] mb-6 leading-snug tracking-tight">
                    "WorkFit completely changed employee participation in wellness."
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                    Employees actually looked forward to the sessions. The energy, engagement, and participation levels improved dramatically after introducing weekly wellness programs.
                  </p>
                  
                  {/* Stats */}
                  <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50/50 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-[#f97316]">+41%</div>
                        <div className="text-[11px] font-bold text-gray-400 leading-tight">Participation Increase</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50/50 flex items-center justify-center shrink-0">
                        <Smile className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-[#0B1530]">Higher</div>
                        <div className="text-[11px] font-bold text-gray-400 leading-tight">Employee Morale</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50/50 flex items-center justify-center shrink-0">
                        <Users2 className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-[#0B1530]">Better</div>
                        <div className="text-[11px] font-bold text-gray-400 leading-tight">Team Connection</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0B1530] flex items-center justify-center text-white shrink-0 shadow-sm p-1">
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-[7px] font-black tracking-widest text-[#f97316] leading-none mb-0.5">TECH</span>
                        <span className="text-[8px] font-black tracking-widest text-white leading-none">NOVA</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-extrabold text-base text-[#0B1530] leading-tight">Jessica L.</div>
                      <div className="text-xs font-semibold text-gray-400 mt-0.5">HR Manager, Tech Company</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Grid Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                img: '/Test2.png',
                quote: '"The stretch breaks became our team\'s favorite part of the week."',
                body: 'Employees felt more energized, relaxed, and productive after the sessions.',
                name: 'Mary D.',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120&h=120',
                role: 'People Operations',
                company: 'FinTech Company',
              },
              {
                img: '/Test3.png',
                quote: '"WorkFit made wellness engaging instead of feeling like another HR activity."',
                body: 'The wellness challenges created excitement across teams and improved participation naturally.',
                name: 'Priya S.',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120',
                role: 'Wellness Lead',
                company: 'SaaS Company',
              },
              {
                img: '/Test4.png',
                quote: '"Our hybrid employees finally felt connected again."',
                body: 'The virtual wellness activities improved communication, engagement, and team morale.',
                name: 'Kevin R.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
                role: 'HR Director',
                company: 'Global Consulting Firm',
              },
              {
                img: '/Test5.png',
                quote: '"The sessions helped reduce stress during high-pressure work periods."',
                body: 'Employees appreciated having practical wellness tools during demanding project cycles.',
                name: 'Sarah M.',
                avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=120&h=120',
                role: 'Program Manager',
                company: 'Marketing Agency',
              },
            ].map((t, idx) => (
              <div key={idx} className="rounded-3xl border border-gray-100 overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-lg transition-all duration-300">
                {/* Photo */}
                <div className="h-48 overflow-hidden relative">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 relative">
                  <div className="text-[#f97316] text-4xl font-serif leading-none mb-1 opacity-20 select-none">“</div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm md:text-base font-extrabold text-[#0B1530] leading-snug mb-3">{t.quote}</p>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-6 font-medium">{t.body}</p>
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-50 shrink-0 shadow-sm"
                      />
                      <div>
                        <div className="text-xs md:text-sm font-extrabold text-[#0B1530] leading-tight">{t.name}</div>
                        <div className="text-[10px] md:text-xs font-semibold text-gray-400 mt-0.5 leading-tight">{t.role}<br/>{t.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="rounded-[2.5rem] bg-gray-50/50 border border-gray-100 p-8 md:py-12 md:px-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
              {[
                { icon: UserCircle2, value: '90%', label: 'employees prefer engaging wellness programs' },
                { icon: TrendingUp, value: '+41%', label: 'increase in wellness program participation' },
                { icon: HeartPulse, value: '+27%', label: 'improvement in employee engagement' },
                { icon: Brain, value: '-32%', label: 'reduction in stress levels' },
                { icon: Zap, value: '+24%', label: 'increase in overall productivity' },
                { icon: CalendarDays, value: '-18%', label: 'reduction in absenteeism' },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2 lg:border-r lg:border-gray-200/60 last:border-r-0">
                  <div className="w-10 h-10 flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-[#f97316]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#0B1530] mb-2">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-gray-400 font-semibold leading-relaxed max-w-[140px] mx-auto">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted By */}
          <div className="text-center mb-16">
            <div className="text-base font-extrabold text-[#0B1530] tracking-wide mb-8">Trusted By Forward-Thinking Teams</div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {[
                { name: 'TechNova', sub: 'SOLUTIONS' },
                { name: 'DataPeak', icon: true },
                { name: 'cloudyera', cloud: true },
                { name: 'BrightPath', leaf: true },
                { name: 'NEXORA', sub: 'SYSTEMS' },
                { name: 'TRUE NORTH', sub: 'FINANCIAL', star: true },
              ].map((brand, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer select-none">
                  {brand.icon && <TrendingUp className="w-4 h-4 text-gray-400/80" />}
                  {brand.cloud && <Wind className="w-4 h-4 text-gray-400/80" />}
                  {brand.leaf && <Leaf className="w-4 h-4 text-gray-400/80" />}
                  {brand.star && <Star className="w-3.5 h-3.5 text-gray-400/80" />}
                  <div className="text-left">
                    <div className={`font-extrabold leading-none ${idx === 4 ? 'tracking-[0.15em] text-xs' : 'text-sm'} tracking-wide text-gray-500`}>{brand.name}</div>
                    {brand.sub && <div className="text-[7px] tracking-widest text-gray-400 font-bold leading-none mt-0.5">{brand.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="rounded-[2.5rem] bg-[#091535] relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px]">
              {/* Left: Text */}
              <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10 relative">
                <div className="w-12 h-1 bg-[#f97316] mb-6 rounded-full" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Ready To Bring WorkFit To Your Team?
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-medium">
                  Create a healthier, more energized, and more connected workplace with wellness experiences employees genuinely enjoy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/workfitinquiry')}
                    className="bg-[#f97316] hover:bg-orange-600 text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg shadow-orange-500/25"
                  >
                    BOOK A DEMO
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                      <ChevronRight className="w-3 h-3 text-[#f97316] stroke-[3]" />
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/workfitinquiry')}
                    className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors"
                  >
                    PLAN A WELLNESS WEEK <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              {/* Right: Image */}
              <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden">
                <img
                  src="/wt_cta.png"
                  alt="WorkFit Team"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Smooth Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#091535] via-[#091535]/40 to-transparent z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091535] via-[#091535]/40 to-transparent z-10 lg:hidden" />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a1128] text-white border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
            
            {/* Left Column: Info & Contact */}
            <div className="lg:w-1/3 flex flex-col">
              <div className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">FAQs</div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                Everything You Need to Know About <span className="text-orange-500">WorkFit</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-12">
                Find answers to common questions about our wellness programs, services, and how we drive real impact in workplaces.
              </p>

              <div className="space-y-8 flex-1">
                {[
                  { title: 'Expert-Led Programs', desc: 'Certified experts delivering holistic wellness solutions.', icon: UserCircle2, color: 'text-orange-500', border: 'border-orange-500/30' },
                  { title: 'Tailored for Workplaces', desc: "Programs customized to fit your organization's needs.", icon: Building, color: 'text-green-500', border: 'border-green-500/30' },
                  { title: 'Accessible Anywhere', desc: 'Onsite, online, and on-demand - wellness anytime, anywhere.', icon: Users2, color: 'text-teal-500', border: 'border-teal-500/30' },
                  { title: 'Results That Matter', desc: 'Measurable improvements in health, engagement, and productivity.', icon: ShieldCheck, color: 'text-purple-500', border: 'border-purple-500/30' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className={`w-12 h-12 rounded-full border ${item.border} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Box */}
              <div className="mt-12 rounded-2xl bg-[#0d1530] border border-white/5 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-xl">
                <div className="flex gap-4 items-center">
                  <Headphones className="w-8 h-8 text-orange-500 shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-white mb-1">Still have questions?</div>
                    <div className="text-xs text-gray-400">We're here to help you build a healthier workplace.</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-medium text-orange-400">
                    <Mail className="w-3.5 h-3.5" /> Workfitbylivefit@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-orange-400">
                    <Phone className="w-3.5 h-3.5" /> +91 9890008742
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:w-2/3">
              <div className="rounded-2xl border border-white/10 bg-[#0d1530]/50 overflow-hidden divide-y divide-white/5 shadow-2xl">
                {[
                  { q: "What is WorkFit?", a: "WorkFit is a comprehensive corporate wellness solution by LiveFit, designed to improve employee well-being, boost engagement, and enhance productivity. Our programs combine expert-led sessions, on-demand resources, and personalized support to help organizations build healthier, happier, and high-performing teams." },
                  { q: "Who can benefit from your wellness programs?", a: "All employees can benefit from our programs, whether they aim to reduce stress, improve fitness, build healthier habits, or enhance overall well-being." },
                  { q: "What wellness services do you offer?", a: "We offer a wide range of services including fitness sessions, yoga & mindfulness, nutrition guidance, stress management, chronic care support, wellness challenges, and more." },
                  { q: "How are your programs delivered?", a: "Our programs are delivered through a blend of live sessions, on-demand content, expert coaching, wellness challenges, and onsite or virtual engagement activities." },
                  { q: "How do you measure the impact of your programs?", a: "We use advanced analytics and feedback tools to track key metrics like participation, engagement, well-being scores, habit improvement, absenteeism, and productivity." },
                  { q: "How do you cater to different time zones?", a: "We cater to different time zones by offering live fitness sessions and challenges accessible at various times, providing on-demand sessions, and allowing users to set their own challenge start times. This ensures flexibility and inclusivity for global teams." },
                  { q: "Do you offer virtual and remote wellness programs?", a: "Yes, our programs are designed to engage and support both in-office and remote teams with equal effectiveness." },
                  { q: "How do employees access the WorkFit platform?", a: "Employees can access the platform through web and mobile apps, where they can join live sessions, explore resources, track progress, and participate in challenges." },
                  { q: "Can programs be customized for our organization?", a: "Absolutely! We tailor our wellness programs to match your organization's unique goals, culture, and employee needs." },
                  { q: "How do we get started with WorkFit?", a: "Simply reach out to us via email or phone. Our team will understand your requirements and create a customized wellness plan for your organization." }
                ].map((faq, idx) => (
                  <div key={idx} className="group">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="mt-0.5 shrink-0">
                        {openFaq === idx ? 
                          <MinusCircle className="w-5 h-5 text-orange-500 fill-orange-500/20" /> : 
                          <PlusCircle className="w-5 h-5 text-orange-500 fill-orange-500/20" />
                        }
                      </div>
                      <div className="flex-1 font-bold text-[15px] pr-4">{faq.q}</div>
                      <div className="mt-0.5 shrink-0">
                        {openFaq === idx ? 
                          <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" /> : 
                          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                        }
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 pl-14 text-sm text-gray-400 leading-relaxed pr-10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="rounded-2xl border border-white/10 bg-[#0d1530] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center shrink-0 bg-[#0a1128]">
                <BookOpen className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-white mb-1">
                  Your Employees' <span className="text-green-500">Well-being</span>. Your Organization's <span className="text-orange-500">Success</span>.
                </h3>
                <p className="text-xs text-gray-400">WorkFit empowers your teams with the tools, support, and motivation to thrive.</p>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative pl-16 pr-8 py-5 bg-orange-600 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center"
              onClick={() => navigate("/workfitinquiry")}
            >
              <div className="absolute left-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-3rem)] z-10">
                <ChevronRight className="w-5 h-5 text-orange-600" />
              </div>
              <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-6">
                Request a Demo
              </span>
            </motion.button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default WorkFit;
