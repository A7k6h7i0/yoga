import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Sparkles, ChevronRight, ArrowRight, Flower2, Activity, Apple,
  Play, Users, Headphones, FileText, Monitor, Smartphone, Wifi, Users2, Clock,
  Video, UserCircle2, BookOpen, Star, PlayCircle, Brain, HeartPulse, TrendingDown,
  Armchair, TrendingUp, ShieldCheck, CheckCircle2, CalendarDays, Zap, Scale, DollarSign,
  Wind, Shield, Droplets, Check, Quote, Building, Globe2, PlusCircle, MinusCircle,
  ChevronDown, ChevronUp, Mail, Phone, Footprints, Smile, Target, Trophy, Leaf, Moon,
  Dumbbell, UserPlus, ClipboardList, BarChart3, Building2, Sliders, Heart
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../lib/env';

const BASE_URL = API_BASE_URL || 'http://localhost:5000';

const challengeRevealContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const challengeRevealUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
  },
};

const challengeRevealLeft = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
  },
};

const challengeRevealRight = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, ease: [0.23, 1, 0.32, 1] },
  },
};

const challengeCardReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, delay, ease: [0.23, 1, 0.32, 1] },
  },
});

const CountUpValue = ({
  value,
  prefix = '',
  suffix = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

const TypingText = ({
  text,
  speed = 60,
  caretClassName = 'bg-white',
}: {
  text: string;
  speed?: number;
  caretClassName?: string;
}) => {
  const [typedText, setTypedText] = useState('');
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setTypedText('');
      return;
    }

    let index = 0;
    setTypedText('');

    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [isInView, speed, text]);

  const isTyping = typedText.length < text.length;

  return (
    <span ref={ref} className="inline-block whitespace-pre-wrap">
      {typedText}
      {isTyping ? (
        <span className={`inline-block w-[2px] h-[0.95em] translate-y-[0.1em] ml-1 align-middle animate-pulse ${caretClassName}`} />
      ) : null}
    </span>
  );
};

const workfitWorksReveal = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.23, 1, 0.32, 1] },
  },
};

const workfitWorksContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const workfitWorksCard = (delay = 0) => ({
  hidden: { opacity: 0, y: 80, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.05, delay, ease: [0.23, 1, 0.32, 1] },
  },
});

const workplaceSolutionsData = [
  {
    id: "01",
    title: "Employee Burnout",
    problem: "Chronic stress and long work hours lead to burnout and mental fatigue.",
    image: "/tc2.png",
    path: "/solutions/employee-burnout",
    solutions: [
      { name: "Mindfulness & Meditation", icon: Brain },
      { name: "Stress Relief Workshops", icon: HeartPulse },
      { name: "Breathwork Sessions", icon: Wind },
      { name: "Recovery Yoga & Relaxation", icon: Flower2 }
    ]
  },
  {
    id: "02",
    title: "Posture & Back Pain",
    problem: "Sedentary work and poor posture cause pain and discomfort.",
    image: "/postureback pain.png",
    path: "/solutions/posture-back-pain",
    solutions: [
      { name: "Desk Yoga & Stretch Breaks", icon: Armchair },
      { name: "Posture Correction", icon: Scale },
      { name: "Ergonomic Workshops", icon: Building },
      { name: "Mobility & Spine Health Programs", icon: Activity }
    ]
  },
  {
    id: "03",
    title: "Stress & Mental Health",
    problem: "Stress, anxiety and poor well-being impact focus, creativity and performance.",
    image: "/stress.png",
    path: "/solutions/stress-mental-health",
    solutions: [
      { name: "Mental Wellness Workshops", icon: Brain },
      { name: "Guided Meditation", icon: PlayCircle },
      { name: "Sleep & Recovery Programs", icon: Moon },
      { name: "Emotional Well-being Support", icon: Smile }
    ]
  },
  {
    id: "04",
    title: "Low Employee Engagement",
    problem: "Disconnected teams lead to low morale, low participation, and weak culture.",
    image: "/wp2.png",
    path: "/solutions/low-employee-engagement",
    solutions: [
      { name: "Wellness Challenges & Competitions", icon: Trophy },
      { name: "Team Building Activities", icon: Users2 },
      { name: "Group Yoga Sessions", icon: Users },
      { name: "Wellness Events & Campaigns", icon: Sparkles }
    ]
  },
  {
    id: "05",
    title: "Low Productivity & Energy",
    problem: "Fatigue, low energy and distractions reduce focus and productivity.",
    image: "/tc3.avif",
    path: "/solutions/low-productivity-energy",
    solutions: [
      { name: "Energy Boosting Sessions", icon: Zap },
      { name: "Focus & Breathwork Programs", icon: Wind },
      { name: "Midday Recharge Breaks", icon: Clock },
      { name: "Healthy Habit Coaching", icon: Target }
    ]
  },
  {
    id: "06",
    title: "Hybrid Work Challenges",
    problem: "Remote & hybrid teams struggle with wellness, connection and routines.",
    image: "/Hybridworkchallenges.png",
    path: "/solutions/hybrid-work-challenges",
    solutions: [
      { name: "Virtual Wellness Programs", icon: Monitor },
      { name: "Online Yoga & Fitness", icon: Video },
      { name: "Hybrid Wellness Challenges", icon: Globe2 },
      { name: "Wellness Habit Tracking", icon: Footprints }
    ]
  },
  {
    id: "07",
    title: "High Healthcare Costs",
    problem: "Lifestyle issues lead to rising healthcare costs and sick leaves.",
    image: "/wp4.png",
    path: "/solutions/high-healthcare-costs",
    solutions: [
      { name: "Preventive Wellness Programs", icon: ShieldCheck },
      { name: "Lifestyle & Nutrition Guidance", icon: Apple },
      { name: "Chronic Pain Management", icon: Activity },
      { name: "Health Risk Assessments", icon: FileText }
    ]
  },
  {
    id: "08",
    title: "Boring Wellness Programs",
    problem: "Generic programs have low participation and don't create real impact.",
    image: "/Wc8.png",
    path: "/solutions/boring-wellness-programs",
    solutions: [
      { name: "Fun & Interactive Programs", icon: PlayCircle },
      { name: "Gamified Wellness Challenges", icon: Trophy },
      { name: "Personalized Wellness Plans", icon: UserCircle2 },
      { name: "Engaging Wellness Experiences", icon: Sparkles }
    ]
  }
];

const WorkFit = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  const [activeSolutionCard, setActiveSolutionCard] = useState<any>(null);

  const [dbSolutions, setDbSolutions] = useState<any>(null);
  const [dbTestimonials, setDbTestimonials] = useState<any[]>([]);
  const storedUser = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    // 1. Fetch dynamic solutions
    fetch(`${BASE_URL}/api/content/solutions`)
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) setDbSolutions(data);
      })
      .catch(err => console.error("Error loading solutions:", err));

    // 2. Fetch dynamic testimonials
    fetch(`${BASE_URL}/api/content/testimonials`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setDbTestimonials(data);
      })
      .catch(err => console.error("Error loading testimonials:", err));
  }, []);

  const getDynamicCardTitle = (slug: string, defaultTitle: string) => {
    if (dbSolutions && dbSolutions[slug]?.title) return dbSolutions[slug].title;
    return defaultTitle;
  };

  const getDynamicCardDesc = (slug: string, defaultDesc: string) => {
    if (dbSolutions && dbSolutions[slug]?.problem) return dbSolutions[slug].problem;
    return defaultDesc;
  };

  const getDynamicCardImage = (slug: string, defaultImage: string) => {
    if (dbSolutions && dbSolutions[slug]?.image) return dbSolutions[slug].image;
    return defaultImage;
  };

  const getDynamicTestimonial = (index: number, defaultTestimonial: any) => {
    if (dbTestimonials && dbTestimonials[index]) {
      const dbT = dbTestimonials[index];
      return {
        ...defaultTestimonial,
        quote: `"${dbT.text}"`,
        body: `Employee wellness index grew, and general workplace participation reached an all-time high of ${dbT.rating * 20}%!`,
        name: dbT.author,
        role: dbT.role,
        company: ""
      };
    }
    return {
      ...defaultTestimonial,
      company: ""
    };
  };

  const workfitTestimonials = [
    { name: "Mahesh", title: "Founder & CEO", company: "", country: "🇺🇸 USA", text: "WorkFit has transformed the way our team feels and performs. The sessions are practical, engaging, and easy to integrate into our busy workday.", tags: ["Energy", "Focus", "Team Wellness"] },
    { name: "Shrikant", title: "Founder & CTO", company: "", country: "🇺🇸 USA", text: "The blend of yoga, mobility, and mindfulness is exceptional. We've seen more energy, better concentration, and stronger teamwork.", tags: ["Performance", "Mindfulness", "Teamwork"] },
    { name: "Amita", title: "Project Coordinator", company: "", country: "🇬🇧 UK", text: "We just had one class with WorkFit and the experience was outstanding! Our team loved it and felt an immediate sense of relaxation and positivity. We're excited to continue this journey.", tags: ["First Class Experience", "Relaxation", "Excited"] },
    { name: "Prasad", title: "Founder & MD", company: "", country: "🇮🇳 India", text: "WorkFit's approach is holistic and very impactful. Our employees are more consistent, less stressed, and more productive.", tags: ["Holistic Wellness", "Stress Relief", "Productivity"] },
    { name: "Madhu", title: "Co-founder", company: "", country: "🇺🇸 USA", text: "The flexibility and variety of programs make it easy for everyone to participate. Our team looks forward to every session!", tags: ["Engagement", "Flexibility", "Well-being"] },
    { name: "Emma", title: "Professor", company: "", country: "🇬🇧 UK", text: "Just one session with WorkFit and I felt refreshed and re-energized. Practical, well-guided, and perfect for busy professional life!", tags: ["Refreshment", "Energy", "Wellness"] },
    { name: "Bekir Orahan", title: "Professor", company: "", country: "🇹🇷 Turkey", text: "The session was practical, refreshing, and eye-opening. It gave us simple tools for better health, focus, and mental clarity.", tags: ["Mental Clarity", "Focus", "Practical Tools"] },
    { name: "Michael Johnson", title: "Director - People & Culture", company: "", country: "🇺🇸 USA", text: "WorkFit is a game-changer for our workplace. We've noticed less stress, better focus, and a happier team.", tags: ["Stress Reduction", "Focus", "Happiness"] }
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

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.slice(1);
    const timer = window.setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div ref={containerRef} className="pb-0 overflow-hidden bg-[#0a1128] pt-24 md:pt-27">
      {/* Hero */}
      <section className="relative min-h-[calc(85vh-4rem)] md:min-h-[calc(85vh-5rem)] flex items-center overflow-hidden bg-[#F5F5F3]">
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
          <div className={`absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r hidden lg:block z-10 transition-colors duration-1000 ${slides[currentSlide].theme === 'dark' ? 'from-[#1c2438] via-[#1c2438]/95' : 'from-[#F5F5F3] via-[#F5F5F3]/90'
            } to-transparent`} />
          {/* Mobile Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t lg:hidden z-10 transition-colors duration-1000 ${slides[currentSlide].theme === 'dark' ? 'from-[#1c2438] via-[#1c2438]/95' : 'from-[#F5F5F3] via-[#F5F5F3]/50'
            } to-transparent`} />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 pt-10 pb-20 lg:pt-0 lg:pb-0">
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
                  <p className={`text-base md:text-lg mb-8 max-w-xl leading-relaxed font-medium ${slides[currentSlide].theme === 'dark' ? 'text-gray-300'
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
                    {slides[currentSlide].primaryButtonText === 'Book a Demo' ? (
                      <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.25)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/workfitinquiry')}
                        className="group relative pl-16 pr-8 py-5 bg-orange-600 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-orange-100 transition-all flex items-center justify-center shrink-0 w-full sm:w-auto"
                      >
                        <div className="absolute left-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-3rem)] z-10">
                          <ChevronRight className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-6">
                          {slides[currentSlide].primaryButtonText}
                        </span>
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/workfitinquiry')}
                        className={`group relative overflow-hidden font-bold transition-all flex items-center justify-center gap-2 ${slides[currentSlide].buttonStyle === 'screenshot'
                            ? 'bg-[#f97316] text-white rounded-lg px-8 py-3.5 shadow-md w-full sm:w-auto text-[15px]'
                            : slides[currentSlide].buttonStyle === 'outline'
                              ? 'border-2 border-orange-500 text-orange-600 bg-white hover:bg-orange-50 rounded-full px-8 py-4'
                              : 'bg-orange-500 text-white shadow-xl shadow-orange-200 rounded-full px-8 py-4'
                          }`}
                      >
                        {slides[currentSlide].primaryButtonText}
                        {slides[currentSlide].buttonStyle !== 'screenshot' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </motion.button>
                    )}

                    {slides[currentSlide].secondaryButtonText && (
                      <motion.button
                        onClick={() => {
                          if (slides[currentSlide].secondaryButtonText === 'Explore Solutions') {
                            navigate('/solutions');
                          }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`font-bold transition-all flex items-center justify-center gap-2 ${slides[currentSlide].buttonStyle === 'screenshot'
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
      <section id="one-on-one-coaching" className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-[#0a1128] to-[#0a1128] pointer-events-none"
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-[-8%] right-[-6%] w-[28rem] h-[28rem] rounded-full bg-orange-500/6 blur-[110px] pointer-events-none"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-12%] left-[-8%] w-[26rem] h-[26rem] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none"
          animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Icons */}
            <motion.div
              className="lg:col-span-4 pr-0 lg:pr-8"
              variants={challengeRevealContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div variants={challengeRevealUp} className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">
                The Challenge
              </motion.div>
              <motion.h2 variants={challengeRevealUp} className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                Today's Workplace<br />Is Under <span className="text-orange-500">Pressure</span>
              </motion.h2>
              <motion.p variants={challengeRevealUp} className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Rising stress, unhealthy habits, and disengagement are impacting employee well-being and business performance.
              </motion.p>

              <motion.div className="grid grid-cols-4 gap-4" variants={challengeRevealLeft}>
                {[
                  { label: 'High Stress &\nBurnout', icon: Brain, color: 'text-orange-500' },
                  { label: 'Sedentary\nLifestyles', icon: Armchair, color: 'text-blue-400' },
                  { label: 'Chronic\nHealth Risks', icon: HeartPulse, color: 'text-red-400' },
                  { label: 'Low Engagement\n& Productivity', icon: TrendingDown, color: 'text-green-400' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    variants={challengeCardReveal(0.08 * idx)}
                    whileHover={{ y: -4, transition: { duration: 0.22 } }}
                    className="text-center group"
                  >
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                    <div className="text-[10px] md:text-xs font-semibold text-gray-300 leading-tight whitespace-pre-line">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Stat Cards */}
            <motion.div
              className="lg:col-span-8"
              variants={challengeRevealRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { stat: '77%', desc: 'of employees experience work-related stress', source: 'Gallup', img: '/tc1.png' },
                  { stat: '60%', desc: 'of employees feel exhausted at work', source: 'McKinsey', img: '/tc2.png' },
                  { stat: '40%', desc: 'drop in productivity due to poor well-being', source: 'WHO', img: '/tc3.png' },
                  { stat: '$1.8T', desc: 'lost annually by businesses due to poor employee health', source: 'Harvard Business Review', img: '/tc4.png' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={challengeCardReveal(0.09 * idx)}
                    whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25 } }}
                    className="rounded-2xl overflow-hidden bg-[#0d1530] border border-white/5 flex flex-col group cursor-pointer hover:border-white/10 transition-colors h-full"
                  >
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
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How WorkFit Helps Section */}
      <section className="py-24 bg-[#0a1128] text-white border-y border-white/5 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/8 via-[#0a1128] to-[#0a1128] pointer-events-none"
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-[-8%] right-[-8%] w-[26rem] h-[26rem] rounded-full bg-orange-500/6 blur-[120px] pointer-events-none"
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-12%] left-[-8%] w-[28rem] h-[28rem] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none"
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            className="text-center mb-16"
            variants={challengeRevealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            <motion.div variants={challengeRevealUp} className="text-orange-500 font-bold text-lg tracking-[0.2em] uppercase mb-4">
              How WorkFit Helps
            </motion.div>
            <motion.h2 variants={challengeRevealUp} className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
              Wellness programs that drive real impact
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={challengeRevealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              { title: 'Improve Well-being', desc: 'Reduce stress, boost energy, and support physical & mental health.', icon: Flower2, iconBg: 'bg-orange-500', img: '/wp1.png' },
              { title: 'Increase Engagement', desc: 'Foster connection, motivation, and a positive workplace culture.', icon: Users2, iconBg: 'bg-green-500', img: '/wp2.png' },
              { title: 'Boost Productivity', desc: 'Healthy employees are more focused, productive, and present.', icon: TrendingUp, iconBg: 'bg-purple-500', img: '/wp3.png' },
              { title: 'Lower Healthcare Costs', desc: 'Prevent illnesses and reduce medical claims & absenteeism.', icon: ShieldCheck, iconBg: 'bg-blue-500', img: '/wp4.png' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={challengeCardReveal(0.08 * idx)}
                whileHover={{ y: -10, scale: 1.015, transition: { duration: 0.25 } }}
                className="rounded-2xl overflow-visible bg-[#0d1530] border border-white/5 flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative mt-6 lg:mt-0"
              >
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights Bar at the Bottom of Section */}
          <motion.div
            className="pt-10 border-t border-white/10 mt-16"
            variants={challengeRevealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
              {[
                {
                  title: "Holistic Approach",
                  desc: "Mind, body & workplace wellness in one place.",
                  icon: Leaf
                },
                {
                  title: "Expert Guidance",
                  desc: "Certified coaches & wellness experts.",
                  icon: Users2
                },
                {
                  title: "Measurable Impact",
                  desc: "Track progress and see real results.",
                  icon: TrendingUp
                },
                {
                  title: "Trusted by Companies",
                  desc: "Corporate wellness partners you can rely on.",
                  icon: ShieldCheck
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={challengeCardReveal(0.07 * idx)}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className={`flex gap-4 items-start px-6 ${idx !== 3 ? 'md:border-r border-white/10' : ''
                    }`}
                >
                  <item.icon className="w-8 h-8 text-[#f97316] shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-white text-sm mb-1 tracking-wide">{item.title}</h4>
                    <p className="text-slate-300/80 text-[11px] leading-relaxed max-w-[190px] font-semibold">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Workplace Challenges Grid Section */}
      <section id="wellness-challenges" className="py-24 bg-white text-[#0a1128] overflow-hidden relative">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/5 via-white to-white pointer-events-none"
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-[-10%] right-[-8%] w-[28rem] h-[28rem] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none"
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-12%] left-[-8%] w-[26rem] h-[26rem] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none"
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-20"
            variants={challengeRevealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            <motion.div variants={challengeRevealUp} className="text-[#f97316] font-bold text-sm tracking-[0.25em] uppercase mb-4">
              THE PROBLEMS WE SOLVE
            </motion.div>
            <motion.h2 variants={challengeRevealUp} className="text-4xl md:text-5xl font-sans font-extrabold mb-6 leading-tight text-[#0a1128] tracking-tight">
              Workplace Challenges. Real Solutions.
            </motion.h2>
            <motion.div variants={challengeRevealUp} className="w-20 h-1 bg-[#f97316] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={challengeRevealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                id: "01",
                title: "Employee Burnout",
                desc: "High stress, long hours, and constant pressure lead to mental & physical exhaustion.",
                image: "/tc2.png",
                stat: "55%",
                statDesc: "of employees experience burnout in 2023*",
                icon: Brain,
                iconColor: "text-orange-500",
                iconBg: "bg-orange-50/70 border-orange-100"
              },
              {
                id: "02",
                title: "Posture & Back Pain",
                desc: "Sedentary work and poor posture cause chronic pain and discomfort.",
                image: "/postureback pain.png",
                stat: "80%+",
                statDesc: "of jobs are predominantly sedentary*",
                icon: Armchair,
                iconColor: "text-blue-500",
                iconBg: "bg-blue-50/70 border-blue-100"
              },
              {
                id: "03",
                title: "Stress & Mental Health",
                desc: "Stress, anxiety & poor well-being impact focus, creativity, and overall performance.",
                image: "/stress.png",
                stat: "72%",
                statDesc: "of employees report high workplace stress*",
                icon: HeartPulse,
                iconColor: "text-purple-500",
                iconBg: "bg-purple-50/70 border-purple-100"
              },
              {
                id: "04",
                title: getDynamicCardTitle('low-employee-engagement', "Low Employee Engagement"),
                desc: getDynamicCardDesc('low-employee-engagement', "Disconnected teams lead to low morale, low participation, and weak culture."),
                image: getDynamicCardImage('low-employee-engagement', "/wp2.avif"),
                stat: "23%",
                statDesc: "actively engaged at work globally*",
                icon: Users2,
                iconColor: "text-emerald-500",
                iconBg: "bg-emerald-50/70 border-emerald-100"
              },
              {
                id: "05",
                title: "Low Productivity & Energy",
                desc: "Fatigue, low energy and distractions reduce productivity and increase errors.",
                image: "/tc3.avif",
                stat: "2.5 hrs",
                statDesc: "lost productivity per employee each day due to stress*",
                icon: Clock,
                iconColor: "text-amber-500",
                iconBg: "bg-amber-50/70 border-amber-100"
              },
              {
                id: "06",
                title: getDynamicCardTitle('hybrid-work-challenges', "Hybrid Work Challenges"),
                desc: getDynamicCardDesc('hybrid-work-challenges', "Remote & hybrid teams struggle with wellness, connection and healthy routines."),
                image: getDynamicCardImage('hybrid-work-challenges', "/Hybridworkchallenges.png"),
                stat: "63%",
                statDesc: "of companies struggle to support hybrid employee wellness*",
                icon: Globe2,
                iconColor: "text-cyan-500",
                iconBg: "bg-cyan-50/70 border-cyan-100"
              },
              {
                id: "07",
                title: getDynamicCardTitle('high-healthcare-costs', "High Healthcare Costs"),
                desc: getDynamicCardDesc('high-healthcare-costs', "Lifestyle issues lead to rising healthcare costs and more sick leaves."),
                image: getDynamicCardImage('high-healthcare-costs', "/wp4.avif"),
                stat: "$2,000",
                statDesc: "higher annual healthcare cost per unhealthy employee*",
                icon: DollarSign,
                iconColor: "text-rose-500",
                iconBg: "bg-rose-50/70 border-rose-100"
              },
              {
                id: "08",
                title: getDynamicCardTitle('boring-wellness-programs', "Boring Wellness Programs"),
                desc: getDynamicCardDesc('boring-wellness-programs', "Generic programs have low participation and don't create real impact."),
                image: getDynamicCardImage('boring-wellness-programs', "/Wc8.png"),
                stat: "70%",
                statDesc: "wellness programs fail due to low engagement*",
                icon: Sparkles,
                iconColor: "text-indigo-500",
                iconBg: "bg-indigo-50/70 border-indigo-100"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={challengeCardReveal(0.08 * idx)}
                whileHover={{ y: -10, scale: 1.015, transition: { duration: 0.25 } }}
                onMouseEnter={() => setActiveSolutionCard(workplaceSolutionsData[idx])}
                onClick={() => {
                  const paths = [
                    '/solutions/employee-burnout',
                    '/solutions/posture-back-pain',
                    '/solutions/stress-mental-health',
                    '/solutions/low-employee-engagement',
                    '/solutions/low-productivity-energy',
                    '/solutions/hybrid-work-challenges',
                    '/solutions/high-healthcare-costs',
                    '/solutions/boring-wellness-programs'
                  ];
                  navigate(paths[idx]);
                }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full group relative cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-[#0a1128]/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Floating Round Number Badge */}
                <div className="absolute top-[204px] left-6 w-10 h-10 rounded-full bg-[#f97316] text-white flex items-center justify-center font-black text-sm z-10 border-2 border-white shadow-md">
                  {card.id}
                </div>

                {/* Card Body */}
                <div className="p-6 pt-9 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-sky-950 mb-3 group-hover:text-[#f97316] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-sky-900/60 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                      {card.desc}
                    </p>
                  </div>

                  {/* Stat Area */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col justify-end">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center shrink-0`}>
                        <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline flex-wrap">
                          <span className={`font-black text-lg md:text-xl ${card.iconColor} mr-1`}>{card.stat}</span>
                          <span className="text-[10px] text-sky-900/50 font-bold leading-tight block truncate md:whitespace-normal">
                            {card.statDesc}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const paths = [
                          '/solutions/employee-burnout',
                          '/solutions/posture-back-pain',
                          '/solutions/stress-mental-health',
                          '/solutions/low-employee-engagement',
                          '/solutions/low-productivity-energy',
                          '/solutions/hybrid-work-challenges',
                          '/solutions/high-healthcare-costs',
                          '/solutions/boring-wellness-programs'
                        ];
                        navigate(paths[idx]);
                      }}
                      className="flex items-center text-[#f97316] font-extrabold text-xs tracking-wider uppercase mt-4 hover:text-orange-600 transition-colors self-start group/link"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-left text-[10px] md:text-xs text-sky-900/40 font-bold mt-10 pt-4 border-t border-slate-100"
            variants={challengeRevealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            *Sources: Gallup 2024, WHO 2023, Harvard Business Review, McKinsey, Global Wellness Institute
          </motion.div>
        </div>
      </section>

      {/* Wellness Solutions Designed for Modern Teams Section */}
      <section className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
        {/* Ambient Glowing Background Radial Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-[#0a1128] to-[#0a1128] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 font-bold text-sm tracking-[0.25em] uppercase mb-4"
            >
              Wellness Solutions Designed for Modern Teams
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight"
            >
              Holistic wellness for every part of your team
            </motion.h2>
            <p className="text-slate-400 mt-6 text-base md:text-lg max-w-2xl mx-auto">
              Empower your people with personalized support, interactive challenges, and effective daily practices designed for healthy habits and high productivity.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8 text-xs text-orange-500/80 font-bold tracking-wider uppercase bg-orange-500/5 border border-orange-500/10 px-4 py-2 rounded-full w-fit mx-auto">
              <span>Swipe or scroll to explore our 5 key pillars</span>
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="font-extrabold">→</motion.span>
            </div>
          </div>

          {/* Overlapping Cards Container Row */}
          <div className="flex overflow-x-auto pb-24 pt-10 px-4 md:px-12 hide-scrollbar snap-x snap-mandatory relative z-10 max-w-full -mx-4 md:-mx-12">
            <div className="flex pl-4 pr-16 md:pl-12 md:pr-32 py-4">
              
              {/* Card 01: 1-on-1 Coaching */}
              <div id="one-on-one-coaching-card" className="snap-center shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[2rem] bg-gradient-to-b from-[#1a1412] to-[#0d1530] border border-orange-500/20 flex flex-col overflow-hidden shadow-2xl relative transition-all duration-500 ease-out z-10 hover:z-30 first:ml-0 -ml-16 sm:-ml-24 md:-ml-28 lg:-ml-32 hover:scale-[1.06] hover:-translate-y-6 hover:mx-6 sm:hover:mx-8 md:hover:mx-10 hover:shadow-[0_20px_50px_rgba(249,115,22,0.25)] hover:border-orange-500/40 group h-[660px]">
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(249,115,22,0.5)]">01</div>
                    <h3 className="text-2xl font-bold text-white">1-on-1 Coaching</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                    Personalized wellness coaching designed around individual goals, lifestyles, and workplace challenges.
                  </p>
                </div>

                <div className="relative px-6 mb-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/5">
                    <img src="/ws1.png" alt="1-on-1 Coaching" className="w-full h-full object-cover" />
                  </div>

                  {/* Floating Dashboard Card */}
                  <div className="absolute -bottom-6 right-8 bg-[#0a1128]/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/10 w-44 z-10 transition-transform duration-500 group-hover:scale-105">
                    <div className="text-[10px] font-bold text-white mb-3 text-center">Wellness Dashboard</div>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full border-4 border-orange-500 border-r-orange-100/20 flex items-center justify-center font-bold text-orange-400 text-sm shadow-[0_0_15px_rgba(249,115,22,0.2)]">87</div>
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 mb-2">Wellness Score</div>
                    <div className="space-y-2">
                      {[{ l: 'Activity', w: '80%', c: 'bg-orange-500' }, { l: 'Nutrition', w: '60%', c: 'bg-orange-500' }, { l: 'Sleep', w: '70%', c: 'bg-orange-400' }, { l: 'Stress', w: '85%', c: 'bg-orange-400' }].map((s, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <span className="text-[8px] text-slate-300 font-medium w-10">{s.l}</span>
                          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${s.c} rounded-full`} style={{ width: s.w }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pt-6 pb-6 flex-1">
                  <ul className="space-y-3">
                    {['Fitness & workout guidance', 'Healthy habit coaching', 'Weight management support', 'Stress & energy management', 'Lifestyle optimization', 'Personalized wellness journeys'].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 fill-orange-500/20" /> {li}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0a1128]/80 border-t border-orange-500/20 text-orange-400 p-6 flex items-center gap-4 mt-auto">
                  <ShieldCheck className="w-8 h-8 shrink-0 text-orange-500" />
                  <span className="font-bold leading-tight text-sm text-white">Personalized Wellness<br /><span className="text-orange-400 font-medium">That Creates Lasting Change</span></span>
                </div>
              </div>

              {/* Card 02: Diverse Wellness Programs */}
              <div id="diverse-holistic-wellness-programs-card" className="snap-center shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[2rem] bg-gradient-to-b from-[#101b38] to-[#0d1530] border border-blue-500/20 flex flex-col overflow-hidden shadow-2xl relative transition-all duration-500 ease-out z-10 hover:z-30 -ml-16 sm:-ml-24 md:-ml-28 lg:-ml-32 hover:scale-[1.06] hover:-translate-y-6 hover:mx-6 sm:hover:mx-8 md:hover:mx-10 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:border-blue-500/40 group h-[660px]">
                
                {/* Top Badge */}
                <div className="absolute top-6 right-6 bg-[#0a1128]/90 backdrop-blur-md text-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg border border-white/10 z-20">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-[9px] font-bold leading-tight uppercase tracking-wider">Built For<br />All Fitness<br />Levels</span>
                </div>

                <div className="p-8 pb-4 pr-32">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">02</div>
                    <h3 className="text-2xl font-bold text-white leading-tight">Diverse Wellness Programs</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                    Engaging wellness programs and challenges that inspire consistency and healthy habits across teams.
                  </p>
                </div>

                <div className="px-8 pb-4 relative z-10 flex-1">
                  <ul className="space-y-3">
                    {['Step competitions', 'Yoga & fitness challenges', 'Meditation journeys', 'Sleep better programs', 'Healthy eating challenges', 'Fat burn & movement programs', 'Running & jogging initiatives'].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 fill-blue-500/20" /> {li}
                      </li>
                    ))}
                  </ul>

                  {/* Floating Leaderboard */}
                  <div className="absolute bottom-2 -right-4 bg-[#0a1128]/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/10 w-48 z-20 transition-transform duration-500 group-hover:scale-105">
                    <div className="text-[11px] font-bold text-white mb-1">Step Challenge</div>
                    <div className="text-[9px] font-medium text-slate-400 mb-3">Leaderboard</div>
                    <div className="space-y-2">
                      {[{ r: 1, n: 'Team Alpha', s: '842,421' }, { r: 2, n: 'Team Power', s: '735,290' }, { r: 3, n: 'Team Elevate', s: '607,612' }, { r: 4, n: 'Team Vitality', s: '512,309' }].map((t, i) => (
                        <div key={i} className="flex items-center justify-between text-[9px]">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-[8px]">{t.r}</div>
                            <span className="font-semibold text-slate-300">{t.n}</span>
                          </div>
                          <span className="text-slate-400">{t.s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3 mt-auto relative z-0">
                  <div className="rounded-xl overflow-hidden h-28 border border-white/5">
                    <img src="/ws2.png" alt="Yoga" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-28 border border-white/5">
                    <img src="/ws3.png" alt="Running" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="bg-[#0a1128]/80 border-t border-blue-500/20 text-blue-400 p-6 flex items-center gap-4 mt-auto">
                  <Users2 className="w-8 h-8 shrink-0 text-blue-500" />
                  <span className="font-bold leading-tight text-sm text-white">Turn Healthy Habits<br /><span className="text-blue-400 font-medium">Into Team Culture</span></span>
                </div>
              </div>

              {/* Card 03: Calm & Mindfulness */}
              <div id="mental-health-wellbeing-card" className="snap-center shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[2rem] bg-gradient-to-b from-[#0d2133] to-[#0d1530] border border-teal-500/20 flex flex-col overflow-hidden shadow-2xl relative transition-all duration-500 ease-out z-10 hover:z-30 -ml-16 sm:-ml-24 md:-ml-28 lg:-ml-32 hover:scale-[1.06] hover:-translate-y-6 hover:mx-6 sm:hover:mx-8 md:hover:mx-10 hover:shadow-[0_20px_50px_rgba(20,184,166,0.25)] hover:border-teal-500/40 group h-[660px]">
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(20,184,166,0.5)]">03</div>
                    <h3 className="text-2xl font-bold text-white">Calm & Mindfulness</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                    Support employee mental well-being through guided mindfulness, meditation, stress reduction, and wellness resources.
                  </p>
                </div>

                <div className="relative px-6 mb-4">
                  <div className="rounded-2xl overflow-hidden aspect-video relative border border-white/5">
                    <img src="/hw1.png" alt="Mindfulness" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-4 right-8 bg-[#0a1128]/95 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-2xl w-48 flex items-center justify-between transition-transform duration-500 group-hover:scale-105 z-10">
                    <div>
                      <div className="text-[10px] font-bold text-white mb-0.5">Breathing Session</div>
                      <div className="text-[9px] text-slate-400">Active</div>
                    </div>
                    <div className="flex gap-0.5 items-center h-4">
                      {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                        <motion.div key={i} animate={{ height: [4, h * 4, 4] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }} className="w-0.5 bg-teal-400 rounded-full" />
                      ))}
                    </div>
                    <PlayCircle className="w-4 h-4 text-white hover:text-teal-400 cursor-pointer" />
                  </div>
                </div>

                <div className="px-8 pb-6 flex-1 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-teal-500/30 flex items-center justify-center shrink-0">
                      <Flower2 className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white mb-1">Guided Mindfulness Sessions</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Structured mindfulness and meditation that reduce stress, improve focus, and build emotional balance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-teal-500/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white mb-1">Mental Wellness Resources</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Expert webinars, recovery guidance, sleep audio, and dynamic wellness libraries at your fingertips.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a1128]/80 border-t border-teal-500/20 text-teal-400 p-6 flex items-center gap-4 mt-auto">
                  <Shield className="w-8 h-8 shrink-0 text-teal-500" />
                  <span className="font-bold leading-tight text-sm text-white">Calmer Minds.<br /><span className="text-teal-400 font-medium">Stronger Performance.</span></span>
                </div>
              </div>

              {/* Card 04: On-Site & Remote Team Wellness */}
              <div id="on-site-remote-wellness-card" className="snap-center shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[2rem] bg-gradient-to-b from-[#0c1f28] to-[#0d1530] border border-green-500/20 flex flex-col overflow-hidden shadow-2xl relative transition-all duration-500 ease-out z-10 hover:z-30 -ml-16 sm:-ml-24 md:-ml-28 lg:-ml-32 hover:scale-[1.06] hover:-translate-y-6 hover:mx-6 sm:hover:mx-8 md:hover:mx-10 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] hover:border-green-500/40 group h-[660px]">
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(34,197,94,0.5)]">04</div>
                    <h3 className="text-2xl font-bold text-white leading-none">On-Site & Remote</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                    Flexible wellness experiences designed for both in-office and remote teams across all schedules.
                  </p>
                </div>

                <div className="relative px-6 mb-4">
                  <div className="rounded-2xl overflow-hidden aspect-video relative border border-white/5">
                    <img src="/hw2.png" alt="Team Wellness" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="px-8 pb-6 flex-1 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                      <CalendarDays className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white mb-1">Flexible Scheduling</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Wellness that fits every schedule, time zone and work style without disrupting core company productivity.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                      <Users2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white mb-1">Virtual Group Activities</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Live yoga, movement breaks, fitness sessions, breathwork workshops and interactive hybrid events.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a1128]/80 border-t border-green-500/20 text-green-400 p-6 flex items-center gap-4 mt-auto">
                  <Shield className="w-8 h-8 shrink-0 text-green-500" />
                  <span className="font-bold leading-tight text-sm text-white">Wellness Anywhere<br /><span className="text-green-400 font-medium">Your Team Works.</span></span>
                </div>
              </div>

              {/* Card 05: Make Breaks Effective */}
              <div id="make-breaks-effective-card" className="snap-center shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[2rem] bg-gradient-to-b from-[#181538] to-[#0d1530] border border-purple-500/20 flex flex-col overflow-hidden shadow-2xl relative transition-all duration-500 ease-out z-10 hover:z-30 -ml-16 sm:-ml-24 md:-ml-28 lg:-ml-32 hover:scale-[1.06] hover:-translate-y-6 hover:mx-6 sm:hover:mx-8 md:hover:mx-10 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)] hover:border-purple-500/40 group h-[660px]">
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(168,85,247,0.5)]">05</div>
                    <h3 className="text-2xl font-bold text-white">Make Breaks Effective</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                    Transform short workplace breaks into powerful moments of recovery and mental reset.
                  </p>
                </div>

                <div className="relative px-6 mb-4">
                  <div className="rounded-2xl overflow-hidden aspect-video relative border border-white/5">
                    <img src="/hw3.png" alt="Neck Stretch" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-4 right-8 bg-[#0a1128]/95 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-2xl w-40 transition-transform duration-500 group-hover:scale-105 z-10">
                    <div className="text-[10px] font-bold text-white mb-2">5 Min Reset</div>
                    <div className="space-y-1">
                      {['Neck Stretch', 'Shoulder Roll', 'Deep Breathing', 'Back Release'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-[8px] text-slate-300 flex items-center gap-1"><span className="text-[7px] text-slate-500">{i + 1}</span> {item}</span>
                          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center shrink-0"><Check className="w-2 h-2 text-white" /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-4 flex-1">
                  <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                    {[
                      { i: Activity, t: 'Mobility Breaks' },
                      { i: Monitor, t: 'Desk Yoga' },
                      { i: Flower2, t: 'Deep Breathing' },
                      { i: UserCircle2, t: 'Shoulder Relief' },
                      { i: Users2, t: 'Lower Back Recovery' },
                      { i: Zap, t: 'Midday Energy' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-1 bg-purple-500/5 hover:bg-purple-500/10 rounded-xl p-2 border border-purple-500/10 transition-colors">
                        <item.i className="w-4 h-4 text-purple-400" />
                        <span className="text-[8px] text-slate-300 font-medium leading-tight">{item.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0a1128]/80 border-t border-purple-500/20 text-purple-400 p-6 flex items-center gap-4 mt-auto">
                  <Shield className="w-8 h-8 shrink-0 text-purple-500" />
                  <span className="font-bold leading-tight text-sm text-white">Small Breaks.<br /><span className="text-purple-400 font-medium">Big Impact.</span></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Resource & Library Section */}
      <section id="wellness-library" className="py-12 md:py-16 bg-[#0a1128] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <span className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase">Your Wellness Library</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6">
              Your Wellness Library <br className="hidden md:block" />
              for <span className="text-orange-500">Everyday Work Life</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              Expert-led wellness resources designed to help employees recharge, recover,
              focus, and build healthier daily habits — anytime, anywhere.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column (Featured) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-1 rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors" onClick={() => window.open("https://www.youtube.com/channel/UCPRWk7Ch4FQSJEf8L8hrK6w", "_blank")}
            >
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
            </motion.div>

            {/* Right Columns (2x2 Grid) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Quick Relief Videos */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative" onClick={() => window.open("https://www.youtube.com/channel/UCPRWk7Ch4FQSJEf8L8hrK6w", "_blank")}
              >
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
              </motion.div>

              {/* Recorded Wellness Programs */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative" onClick={() => window.open("https://www.youtube.com/channel/UCPRWk7Ch4FQSJEf8L8hrK6w", "_blank")}
              >
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw3.png" alt="Recorded Programs" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 text-green-500">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Recorded Wellness<br />Programs</h3>
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
              </motion.div>

              {/* Podcasts & Mindfulness Audio */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative" onClick={() => window.open("https://www.youtube.com/channel/UCPRWk7Ch4FQSJEf8L8hrK6w", "_blank")}
              >
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw4.png" alt="Audio" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Podcasts &<br />Mindfulness Audio</h3>
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
              </motion.div>

              {/* Success Stories */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="rounded-2xl bg-[#111836] border border-white/5 overflow-hidden flex flex-col group cursor-pointer hover:border-white/10 transition-colors relative" onClick={() => window.open("https://www.youtube.com/channel/UCPRWk7Ch4FQSJEf8L8hrK6w", "_blank")}
              >
                <div className="absolute inset-0 right-0 w-[65%] ml-auto overflow-hidden">
                  <img src="/yw5.png" alt="Success Stories" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111836] via-[#111836]/80 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col h-full min-h-[260px] z-10">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Success Stories &<br />Wellness Insights</h3>
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
              </motion.div>
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-2xl bg-[#111836] border border-white/5 p-4 lg:py-5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 mt-6 relative overflow-hidden"
          >
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
                  onClick={() => navigate("/workfitinquiry")}>
                  Book Demo <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Testimonials Section — Light Theme */}
      <section id="global-employee-engagement" className="py-24 bg-white text-[#0B1530]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={challengeRevealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={challengeRevealUp} className="text-[#f97316] font-bold text-xs tracking-[0.25em] uppercase mb-4">TESTIMONIALS</motion.div>
            <motion.h2 variants={challengeRevealUp} className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-[#0B1530] mb-5 tracking-tight leading-[1.1]">
              What Teams say about Workfit
            </motion.h2>
            <motion.p variants={challengeRevealUp} className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Helping organizations create healthier, happier, and more engaged workplaces through movement, mindfulness, and modern wellness experiences.
            </motion.p>
          </motion.div>

          {/* Featured Testimonial */}
          {(() => {
            const fT = getDynamicTestimonial(4, {
              img: '/Test1.png',
              quote: '"WorkFit completely changed employee participation in wellness."',
              body: 'Employees actually looked forward to the sessions. The energy, engagement, and participation levels improved dramatically after introducing weekly wellness programs.',
              name: 'Jessica L.',
              avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=120&h=120',
              role: 'HR Manager',
              company: 'Tech Company'
            });
            return (
              <motion.div
                className="rounded-[2.5rem] border border-gray-100 overflow-hidden mb-16 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.025)]"
                variants={challengeRevealContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                  {/* Left: Photo */}
                  <motion.div className="lg:col-span-5 min-h-[320px] lg:min-h-full relative overflow-hidden" variants={challengeRevealLeft}>
                    <img
                      src={fT.img}
                      alt="WorkFit Team Session"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Right: Quote Card */}
                  <motion.div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative" variants={challengeRevealRight}>
                    {/* Elegant Quote Icon */}
                    <div className="text-[#f97316] text-[5rem] font-serif leading-none absolute top-4 left-6 md:top-6 md:left-10 select-none opacity-15">“</div>
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1530] mb-6 leading-snug tracking-tight">
                        {fT.quote}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                        {fT.body}
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
                      <div className="flex items-center justify-between w-full pt-6 border-t border-gray-100">
                        <div>
                          <div className="font-extrabold text-base text-[#0B1530] leading-tight">{fT.name}</div>
                          <div className="text-xs font-semibold text-gray-400 mt-0.5">{fT.role}</div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md flex items-center gap-1">
                          🇺🇸 USA
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })()}

          {/* Scrolling Testimonials Marquee (Floating) */}
          {(() => {
            const allWorkfitTestimonials = [
              getDynamicTestimonial(0, {
                img: '/Test2.png',
                quote: '"The stretch breaks became our team\'s favorite part of the week."',
                body: 'Employees felt more energized, relaxed, and productive after the sessions.',
                name: 'Mary D.',
                role: 'People Operations',
                country: '🇺🇸 USA',
                tags: ['Stretch Breaks', 'Energy', 'Productivity']
              }),
              getDynamicTestimonial(1, {
                img: '/Test3.png',
                quote: '"WorkFit made wellness engaging instead of another HR activity."',
                body: 'The wellness challenges created excitement across teams and improved participation naturally.',
                name: 'Priya S.',
                role: 'Wellness Lead',
                country: '🇮🇳 India',
                tags: ['Wellness Challenges', 'Engagement', 'Teamwork']
              }),
              getDynamicTestimonial(2, {
                img: '/Test4.png',
                quote: '"Our hybrid employees finally felt connected again."',
                body: 'The virtual wellness activities improved communication, engagement, and team morale.',
                name: 'Kevin R.',
                role: 'HR Director',
                country: '🇺🇸 USA',
                tags: ['Hybrid Wellness', 'Communication', 'Morale']
              }),
              getDynamicTestimonial(3, {
                img: '/Test5.png',
                quote: '"The sessions helped reduce stress during high-pressure work periods."',
                body: 'Employees appreciated having practical wellness tools during demanding project cycles.',
                name: 'Sarah M.',
                role: 'Program Manager',
                country: '🇬🇧 UK',
                tags: ['Stress Reduction', 'Mindfulness', 'Well-being']
              }),
              // Mahesh
              getDynamicTestimonial(5, {
                img: '/office1.png',
                quote: '"WorkFit has transformed the way our team feels and performs."',
                body: 'The sessions are practical, engaging, and easy to integrate into our busy workday.',
                name: 'Mahesh',
                role: 'Founder & CEO',
                country: '🇺🇸 USA',
                tags: ['Energy', 'Focus', 'Team Wellness']
              }),
              // Shrikant
              getDynamicTestimonial(6, {
                img: '/2.png',
                quote: '"The blend of yoga, mobility, and mindfulness is exceptional."',
                body: 'We\'ve seen more energy, better concentration, and stronger teamwork.',
                name: 'Shrikant',
                role: 'Founder & CTO',
                country: '🇺🇸 USA',
                tags: ['Performance', 'Mindfulness', 'Teamwork']
              }),
              // Amita
              getDynamicTestimonial(7, {
                img: '/3.png',
                quote: '"We just had one class with WorkFit and the experience was outstanding!"',
                body: 'I loved it and felt an immediate sense of relaxation and positivity. I\'m excited to continue this journey with more sessions ahead.',
                name: 'Amita',
                role: 'Project Coordinator',
                country: '🇬🇧 UK',
                tags: ['First Class Experience', 'Relaxation', 'Excited']
              }),
              // Prasad
              getDynamicTestimonial(8, {
                img: '/4.png',
                quote: '"WorkFit\'s approach is holistic and very impactful."',
                body: 'Our employees are more consistent, less stressed, and more productive.',
                name: 'Prasad',
                role: 'Founder & MD',
                country: '🇮🇳 India',
                tags: ['Holistic Wellness', 'Stress Relief', 'Productivity']
              }),
              // Madhu
              getDynamicTestimonial(9, {
                img: '/5.png',
                quote: '"The flexibility and variety of programs make it easy for everyone to participate."',
                body: 'Our team looks forward to every session!',
                name: 'Madhu',
                role: 'Co-founder',
                country: '🇺🇸 USA',
                tags: ['Engagement', 'Flexibility', 'Well-being']
              }),
              // Emma
              getDynamicTestimonial(10, {
                img: '/office2.png',
                quote: '"Just one session with WorkFit and I felt refreshed and re-energized."',
                body: 'Practical, well-guided, and perfect for busy professional life!',
                name: 'Emma',
                role: 'Professor',
                country: '🇬🇧 UK',
                tags: ['Refreshment', 'Energy', 'Wellness']
              }),
              // Bekir Orahan
              getDynamicTestimonial(11, {
                img: '/office3.png',
                quote: '"The session was practical, refreshing, and eye-opening."',
                body: 'It gave us simple tools for better health, focus, and mental clarity.',
                name: 'Bekir Orahan',
                role: 'Professor',
                country: '🇹🇷 Turkey',
                tags: ['Mental Clarity', 'Focus', 'Practical Tools']
              }),
              // Michael Johnson
              getDynamicTestimonial(12, {
                img: '/8.png',
                quote: '"WorkFit is a game-changer for our workplace."',
                body: 'We\'ve noticed less stress, better focus, and a happier team.',
                name: 'Michael Johnson',
                role: 'Director - People & Culture',
                country: '🇺🇸 USA',
                tags: ['Stress Reduction', 'Focus', 'Happiness']
              })
            ];

            return (
              <motion.div className="relative flex overflow-hidden py-10 select-none group -mx-4 sm:-mx-6 lg:-mx-8 mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                <motion.div 
                  animate={{ x: [0, -4608] }}
                  transition={{ 
                    duration: 65, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                  className="flex gap-6 whitespace-nowrap min-w-full"
                >
                  {[...allWorkfitTestimonials, ...allWorkfitTestimonials].map((t, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={challengeCardReveal(0.04 * (idx % 6))}
                      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.22 } }}
                      onClick={() => setSelectedTestimonial(t)}
                      className="w-[360px] cursor-pointer flex-shrink-0 rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col hover:border-[#f97316]/50 hover:shadow-2xl hover:shadow-[#f97316]/10 transition-all duration-500 hover:-translate-y-2 group/card relative whitespace-normal"
                    >
                      {/* Photo */}
                      <div className="h-44 overflow-hidden relative">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 relative h-full justify-between">
                        <div>
                          {/* Star Rating */}
                          <div className="flex gap-0.5 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                            ))}
                          </div>
                          
                          <p className="text-sm font-extrabold text-[#0B1530] leading-snug mb-3 line-clamp-2">{t.quote}</p>
                          <p className="text-xs text-gray-500 leading-relaxed font-medium mb-4 line-clamp-3">{t.body}</p>
                        </div>
                        
                        <div>
                          {/* Tag Badges */}
                          {t.tags && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {t.tags.map((tag: string) => (
                                <span key={tag} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-orange-50 text-[#f97316] rounded-md border border-orange-100/30">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Author Details without Profile Avatar and without Company */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div>
                              <div className="text-xs font-extrabold text-[#0B1530] leading-tight">{t.name}</div>
                              <div className="text-[10px] font-semibold text-gray-400 mt-0.5 leading-tight">{t.role}</div>
                            </div>
                            {t.country && (
                              <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md flex items-center gap-1">
                                {t.country}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Side Fades */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
              </motion.div>
            );
          })()}

          {/* Stats Row */}
          <motion.div className="rounded-[2.5rem] bg-gray-50/50 border border-gray-100 p-8 md:py-12 md:px-8 mb-16" variants={challengeRevealContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
              {[
                { icon: UserCircle2, value: 90, prefix: '', suffix: '%', label: 'employees prefer engaging wellness programs' },
                { icon: TrendingUp, value: 41, prefix: '+', suffix: '%', label: 'increase in wellness program participation' },
                { icon: HeartPulse, value: 27, prefix: '+', suffix: '%', label: 'improvement in employee engagement' },
                { icon: Brain, value: 32, prefix: '-', suffix: '%', label: 'reduction in stress levels' },
                { icon: Zap, value: 24, prefix: '+', suffix: '%', label: 'increase in overall productivity' },
                { icon: CalendarDays, value: 18, prefix: '-', suffix: '%', label: 'reduction in absenteeism' },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={challengeCardReveal(0.05 * idx)} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="flex flex-col items-center text-center px-2 lg:border-r lg:border-gray-200/60 last:border-r-0">
                  <div className="w-10 h-10 flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-[#f97316]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#0B1530] mb-2">
                    <CountUpValue value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-400 font-semibold leading-relaxed max-w-[140px] mx-auto">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.25)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/workfitinquiry')}
                    className="group relative pl-16 pr-8 py-5 bg-[#f97316] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center shrink-0 w-full sm:w-auto"
                  >
                    <div className="absolute left-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-3rem)] z-10">
                      <ChevronRight className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-6">
                      BOOK A DEMO
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

      {/* How WorkFit Works Section */}
      <section className="py-20 bg-white text-[#0a1128] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-24"
            variants={workfitWorksReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 text-[#ff5722] tracking-tight relative inline-block" variants={workfitWorksReveal}>
              How Workfit Works
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#ff5722] rounded-full"></div>
            </motion.h2>
            <motion.p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-10 font-medium" variants={workfitWorksReveal}>
              Our proven 4-step process makes workplace wellness easy to implement<br className="hidden md:block"/> and delivers results your teams and business can feel.
            </motion.p>
          </motion.div>

          {/* 4-Step Process Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 xl:gap-8 mb-16"
            variants={workfitWorksContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                id: '01',
                title: 'Discover & Onboard',
                desc: 'We learn about your goals, culture, and team needs to build the perfect wellness foundation.',
                icon: UserPlus,
                img: '/Test3.png'
              },
              {
                id: '02',
                title: 'Assess & Customize',
                desc: 'We assess baseline well-being and customize a program that fits your people and priorities.',
                icon: ClipboardList,
                img: '/wt_cta.png'
              },
              {
                id: '03',
                title: 'Engage & Execute',
                desc: 'We deliver engaging wellness sessions, challenges, and resources your teams will love.',
                icon: Activity,
                img: '/Wc1.png'
              },
              {
                id: '04',
                title: 'Measure & Maximize',
                desc: 'We track results, share insights, and continuously optimize for greater impact.',
                icon: BarChart3,
                img: '/Test5.png'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={workfitWorksCard(0.08 * idx)}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="relative flex flex-col bg-white rounded-[2rem] p-6 pt-14 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Connecting Arrow for lg screens */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 lg:-right-4 xl:-right-6 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center">
                    <ArrowRight className="text-[#ff5722] w-6 h-6" strokeWidth={2.5} />
                  </div>
                )}

                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <div className="text-center mb-3">
                  <span className="text-[#ff5722] font-bold text-xl mr-2">{step.id}</span>
                  <span className="font-extrabold text-[#091535] text-lg tracking-tight">{step.title}</span>
                </div>
                <p className="text-sm text-gray-600 text-center mb-6 flex-grow leading-relaxed font-medium px-2">
                  {step.desc}
                </p>
                <div className="rounded-2xl overflow-hidden h-40 w-full mt-auto bg-gray-100">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Banner */}
          <motion.div
            className="rounded-2xl bg-[#091535] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl mt-12 mb-6"
            variants={workfitWorksReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex-1 p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-center justify-between">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 flex-1">
                {/* Target Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#ff5722] flex items-center justify-center shrink-0 border-[3px] border-[#091535] shadow-[0_0_0_4px_rgba(255,87,34,0.3)] mt-1">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                </div>
                
                {/* Text Block */}
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Wellness that works. Results that matter.
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    We make workplace wellness simple to start and easy to sustain—<br className="hidden md:block"/>
                    so you can focus on what matters most:<br className="hidden md:block"/>
                    <span className="text-[#ff5722] font-semibold mt-1 inline-block">your people and your business.</span>
                  </p>
                </div>
              </div>
              
              {/* Button Block */}
              <div className="flex flex-col items-center lg:items-center shrink-0 lg:pl-4">
                <button 
                  onClick={() => navigate('/workfitinquiry')}
                  className="bg-[#ff5722] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-lg w-full sm:w-auto mb-3"
                >
                  BOOK A DEMO
                </button>
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5722]" />
                  No obligation. Just better outcomes.
                </div>
              </div>
            </div>

            {/* Right side Image */}
            <div className="w-full lg:w-[35%] min-h-[250px] lg:min-h-auto relative shrink-0">
              <img src="/team_discussion.png" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-6 text-gray-500 font-medium text-sm md:text-base tracking-wide word-spacing-large"
            variants={workfitWorksReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            A proven process. &nbsp;&nbsp;A healthier workforce. &nbsp;&nbsp;A stronger organization.
          </motion.div>
        </div>
      </section>

      {/* Our Program Formats Section */}
      <section className="py-20 bg-white text-[#0a1128] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Header & Right Image Card layout */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 mb-16 items-center"
            variants={workfitWorksContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Left text */}
            <motion.div className="flex-1 w-full lg:max-w-xl" variants={workfitWorksCard(0)}>
              <motion.div className="text-[#ff5722] font-bold text-2xl lg:text-3xl tracking-wide uppercase mb-3" variants={workfitWorksReveal}>
                OUR PROGRAM FORMATS
              </motion.div>
              <motion.h2 className="text-5xl md:text-6xl lg:text-[5rem] font-sans font-black text-[#091535] leading-[1] tracking-tight mb-8 uppercase" variants={workfitWorksReveal}>
                WELLNESS THAT FITS<br/>YOUR WORKPLACE
              </motion.h2>
              <motion.p className="text-gray-800 text-xl leading-relaxed font-medium" variants={workfitWorksReveal}>
                Flexible delivery options designed to engage your teams—<br className="hidden md:block"/>
                whether in the office, remote, or everywhere in between.
              </motion.p>
            </motion.div>

            {/* Right Image + Overlapping floating card */}
            <motion.div className="flex-1 w-full relative" variants={workfitWorksCard(0.1)}>
              <div className="w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="/office3.png" alt="Office Stretching" className="w-full h-full object-cover" />
              </div>
              
              {/* Overlapping Card */}
              <div className="absolute top-8 -left-8 lg:-left-20 bg-[#091535] rounded-3xl p-8 lg:p-10 shadow-2xl z-10 hidden sm:block">
                <div className="flex flex-col gap-8">
                  <div className="flex gap-5 items-start">
                    <div className="mt-1">
                      <Users2 className="w-8 h-8 text-[#ff5722]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">For Every Team</h4>
                      <p className="text-gray-300 text-sm lg:text-base max-w-[200px] leading-snug">Programs for all roles, levels & locations</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="mt-1">
                      <CalendarDays className="w-8 h-8 text-[#ff5722]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Flexible & Scalable</h4>
                      <p className="text-gray-300 text-sm lg:text-base max-w-[200px] leading-snug">Adaptable to your goals, schedule & culture</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="mt-1">
                      <TrendingUp className="w-8 h-8 text-[#ff5722]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Engaging & Impactful</h4>
                      <p className="text-gray-300 text-sm lg:text-base max-w-[200px] leading-snug">Experience-driven formats that drive real results</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 4 Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={workfitWorksContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.18 }}
          >
            {[
              {
                title: 'On-site Programs',
                desc: 'In-person sessions that bring energy, movement, and mindfulness right to your workplace.',
                icon: Building2,
                points: ['Group Fitness & Yoga', 'Wellness Talks & Workshops', 'Posture & Ergonomics Training'],
                img: '/office1.png'
              },
              {
                title: 'Virtual Programs',
                desc: 'Live, interactive sessions that keep remote and hybrid teams connected and motivated.',
                icon: Monitor,
                points: ['Live Online Classes', 'Virtual Wellness Challenges', 'Expert Webinars'],
                img: '/zoom.png'
              },
              {
                title: 'Hybrid Programs',
                desc: 'A blend of on-site and virtual experiences for a seamless wellness journey.',
                icon: Users2,
                points: ['On-site + Live Online', 'Hybrid Challenges', 'Flexible Participation'],
                img: '/hybrid_yoga.png'
              },
              {
                title: 'Special Programs',
                desc: 'High-impact initiatives that create excitement, engagement, and lasting wellness habits.',
                icon: CalendarDays,
                points: ['Wellness Weeks', 'Challenges & Competitions', 'Wellness Retreats'],
                img: '/Wc1.png'
              }
            ].map((card, idx) => (
              <motion.div key={idx} variants={workfitWorksCard(0.08 * idx)} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-orange-50/50 flex items-center justify-center text-[#ff5722] border border-orange-100 shrink-0">
                    <card.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#091535] leading-tight">{card.title}</h3>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow font-medium">{card.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-800 font-semibold">
                      <Check className="w-5 h-5 text-[#ff5722] shrink-0" strokeWidth={3} />
                      <span className="pt-0.5">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl overflow-hidden h-40 mt-auto bg-gray-100">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Banner */}
          <motion.div
            className="rounded-[2rem] bg-[#091535] overflow-hidden flex flex-col xl:flex-row items-stretch shadow-2xl border border-white/5"
            variants={workfitWorksReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="p-8 lg:p-10 flex flex-col xl:flex-row gap-10 lg:gap-12 items-center justify-between w-full">
              
              {/* Left text with Target Icon */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-1 w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg mt-1">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-[#ff5722]" strokeWidth={2} />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Customizable. Measurable. Meaningful.</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Every organization is unique. We design programs that<br className="hidden lg:block"/> align with your goals and deliver measurable impact.
                  </p>
                </div>
              </div>

              {/* Center Button */}
              <div className="flex flex-col items-center shrink-0 xl:border-r border-white/10 xl:pr-12 w-full xl:w-auto">
                <button 
                  onClick={() => navigate('/workfitinquiry')}
                  className="bg-[#ff5722] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-lg w-full sm:w-auto mb-3"
                >
                  BOOK A DEMO
                </button>
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5722]" />
                  No obligation. Just better outcomes.
                </div>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-4 gap-6 lg:gap-12 justify-center shrink-0 w-full xl:w-auto">
                {[
                  { icon: Sliders, label: 'Tailored To You' },
                  { icon: UserCircle2, label: 'Expert Led' },
                  { icon: TrendingUp, label: 'Proven Results' },
                  { icon: Heart, label: 'Lasting Impact' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={workfitWorksCard(0.06 * i)} className="flex flex-col items-center gap-4 text-center">
                    <stat.icon className="w-8 h-8 text-[#ff5722]" strokeWidth={1.5} />
                    <span className="text-gray-300 font-medium text-xs lg:text-sm max-w-[70px] leading-tight">
                      {stat.label.split(' ').map((word, j) => <React.Fragment key={j}>{word}<br/></React.Fragment>)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
                  More than just wellness programs.<br />
                  <span className="text-[#f97316]">A partner in your teams....</span>
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
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Organizations<br />Trust WorkFit</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 sm:pt-0 sm:pl-3">
                      <Building className="w-6 h-6 text-[#f97316] shrink-0" />
                      <div className="text-left">
                        <div className="text-base font-black text-white leading-tight">250K+</div>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Employees<br />Impacted</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 sm:pt-0 sm:pl-3">
                      <Star className="w-6 h-6 text-[#f97316] shrink-0" />
                      <div className="text-left">
                        <div className="text-base font-black text-white leading-tight">4.9/5</div>
                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Average Client<br />Satisfaction</div>
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.12,
                },
              },
            }}
          >
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
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                      ease: [0.23, 1, 0.32, 1],
                      delay: idx * 0.05,
                    },
                  },
                }}
                whileHover={{ x: 4, y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* The WorkFit Impact Section */}
      <section className="py-24 bg-[#0a1128] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="text-orange-500 font-bold text-sm tracking-[0.25em] uppercase mb-4">THE WORKFIT IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold mb-6 leading-tight text-white tracking-tight">
              <TypingText text="Healthier Employees. Stronger Organisations." speed={55} caretClassName="bg-white/90" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 py-6">
            {[
              { value: '+21%', label: 'Increase in Productivity', icon: HeartPulse },
              { value: '+31%', label: 'Improvement in Employee Well-being', icon: Smile },
              { value: '+27%', label: 'Increase in Engagement', icon: Users2 },
              { value: '-32%', label: 'Reduction in Sick Leave', icon: ShieldCheck },
              { value: '-18%', label: 'Lower Healthcare Costs', icon: DollarSign }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 px-6 justify-center lg:justify-start ${idx !== 4 ? 'lg:border-r border-white/10' : ''}`}>
                <div className="w-14 h-14 rounded-full border-2 border-[#f97316] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <div>
                  <div className="font-extrabold text-white text-2xl md:text-3xl tracking-tight mb-1">
                    <CountUpValue
                      value={parseInt(item.value.replace(/[^0-9]/g, ''), 10)}
                      prefix={item.value.startsWith('-') ? '-' : item.value.startsWith('+') ? '+' : ''}
                      suffix="%"
                    />
                  </div>
                  <div className="text-slate-300/80 text-[11px] leading-snug font-semibold max-w-[130px]">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[1200px] mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mt-20 bg-gradient-to-r from-[#f97316] to-[#ea580c] grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
            <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
              <img
                src="/ws1.png"
                alt="Let's Build a Healthier, Happier & More Productive Team"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="md:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left">
              <div className="text-white/80 font-extrabold text-[10px] md:text-xs tracking-[0.25em] uppercase mb-3">
                READY TO TRANSFORM YOUR WORKPLACE?
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-8 tracking-tight max-w-xl">
                Let's Build a Healthier, Happier & More Productive Team.
              </h3>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(10, 17, 40, 0.25)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/workfitinquiry')}
                className="group relative pl-16 pr-8 py-5 bg-[#0a1128] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl transition-all flex items-center w-fit shrink-0"
              >
                <div className="absolute left-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-3rem)] z-10">
                  <ChevronRight className="w-5 h-5 text-[#0a1128]" />
                </div>
                <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-6">
                  BOOK A DEMO
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Bring WorkFit Section */}
      <section className="py-24 bg-[#091535] text-white border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-[2.5rem] bg-[#091535] relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px]">
              <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10 relative">
                <div className="w-12 h-1 bg-[#f97316] mb-6 rounded-full" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Ready to bring Workfit to your teams?
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-medium">
                  Create a healthier, more energized, and more connected workplace with wellness experiences employees genuinely enjoy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.25)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/workfitinquiry')}
                    className="group relative pl-16 pr-8 py-5 bg-[#f97316] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center shrink-0 w-full sm:w-auto"
                  >
                    <div className="absolute left-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-3rem)] z-10">
                      <ChevronRight className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-6">
                      BOOK A DEMO
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
              <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden">
                <img
                  src="/wt_cta.png"
                  alt="WorkFit Team"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#091535] via-[#091535]/40 to-transparent z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091535] via-[#091535]/40 to-transparent z-10 lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-24 bg-[#0a1128] text-white border-t border-white/5 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/6 via-[#0a1128] to-[#0a1128] pointer-events-none"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-[-10%] left-[-8%] w-[26rem] h-[26rem] rounded-full bg-orange-500/6 blur-[120px] pointer-events-none"
          animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-14%] right-[-6%] w-[28rem] h-[28rem] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none"
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">

            {/* Left Column: Info & Contact */}
            <motion.div
              className="lg:w-1/3 flex flex-col"
              variants={challengeRevealContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.28 }}
            >
              <motion.div variants={challengeRevealUp} className="text-orange-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">
                Do You Have Any Questions?
              </motion.div>
              <motion.h2 variants={challengeRevealUp} className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                Everything You Need to Know About <span className="text-orange-500">WorkFit</span>
              </motion.h2>
              <motion.p variants={challengeRevealUp} className="text-gray-400 text-sm leading-relaxed mb-12">
                Find answers to common questions about our wellness programs, services, and how we drive real impact in workplaces.
              </motion.p>

              <motion.div className="space-y-8 flex-1" variants={challengeRevealContainer}>
                {[
                  { title: 'Expert-Led Programs', desc: 'Certified experts delivering holistic wellness solutions.', icon: UserCircle2, color: 'text-orange-500', border: 'border-orange-500/30' },
                  { title: 'Tailored for Workplaces', desc: "Programs customized to fit your organization's needs.", icon: Building, color: 'text-green-500', border: 'border-green-500/30' },
                  { title: 'Accessible Anywhere', desc: 'Onsite, online, and on-demand - wellness anytime, anywhere.', icon: Users2, color: 'text-teal-500', border: 'border-teal-500/30' },
                  { title: 'Results That Matter', desc: 'Measurable improvements in health, engagement, and productivity.', icon: ShieldCheck, color: 'text-purple-500', border: 'border-purple-500/30' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={challengeCardReveal(0.08 * idx)}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex gap-5"
                  >
                    <div className={`w-12 h-12 rounded-full border ${item.border} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Box */}
              <motion.div
                variants={challengeRevealUp}
                className="mt-12 rounded-2xl bg-[#0d1530] border border-white/5 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-xl"
              >
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
              </motion.div>
            </motion.div>

            {/* Right Column: Accordion */}
            <motion.div
              className="lg:w-2/3"
              variants={challengeRevealRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                className="rounded-2xl border border-white/10 bg-[#0d1530]/50 overflow-hidden divide-y divide-white/5 shadow-2xl backdrop-blur-sm"
                variants={challengeRevealContainer}
              >
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
                  <motion.div
                    key={idx}
                    variants={challengeCardReveal(0.05 * idx)}
                    className="group"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-white/5 transition-colors"
                    >
                      <motion.div
                        className="mt-0.5 shrink-0"
                        animate={openFaq === idx ? { rotate: 180, scale: 1.06 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {openFaq === idx ?
                          <MinusCircle className="w-5 h-5 text-orange-500 fill-orange-500/20" /> :
                          <PlusCircle className="w-5 h-5 text-orange-500 fill-orange-500/20" />
                        }
                      </motion.div>
                      <div className="flex-1 font-bold text-[15px] pr-4">{faq.q}</div>
                      <motion.div
                        className="mt-0.5 shrink-0"
                        animate={openFaq === idx ? { y: -1 } : { y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {openFaq === idx ?
                          <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" /> :
                          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                        }
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -6 }}
                          animate={{ height: 'auto', opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -6 }}
                          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 pl-14 text-sm text-gray-400 leading-relaxed pr-10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

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

      {/* Solutions Popup Modal on Hover */}
      <AnimatePresence>
        {activeSolutionCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            {/* Blurred Backdrop overlay */}
            <div 
              className="absolute inset-0 bg-[#0a1128]/70 backdrop-blur-md cursor-pointer"
              onClick={() => setActiveSolutionCard(null)}
            />
            
            {/* Modal Body Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onMouseLeave={() => setActiveSolutionCard(null)}
              className="bg-white text-[#0a1128] rounded-[2.5rem] overflow-hidden border border-slate-100/50 shadow-2xl max-w-4xl w-full relative z-10 flex flex-col md:flex-row min-h-[380px]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveSolutionCard(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#0a1128]/5 hover:bg-[#0a1128]/10 flex items-center justify-center text-[#0a1128]/60 hover:text-[#0a1128] transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Image */}
              <div className="md:w-2/5 relative min-h-[220px] md:min-h-full">
                <img 
                  src={activeSolutionCard.image} 
                  alt={activeSolutionCard.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1128]/5 pointer-events-none" />
              </div>

              {/* Right Column: Title + Main Text + Solutions Panel */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between relative">
                <div>
                  {/* Title & Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#f97316] text-white flex items-center justify-center font-black text-sm border-2 border-white shadow-md shrink-0">
                      {activeSolutionCard.id}
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-sky-950 leading-tight tracking-tight">
                      {activeSolutionCard.title}
                    </h3>
                  </div>

                  {/* Problem Statement */}
                  <p className="text-sky-900/60 text-sm md:text-base leading-relaxed mb-8 font-medium">
                    {activeSolutionCard.problem}
                  </p>
                </div>

                {/* Tailored Solutions Horizontal Section */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="text-orange-500 font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-5">
                    WorkFit Solutions
                  </div>

                  {/* 4 sub-solutions grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeSolutionCard.solutions.map((sol: any, sIdx: number) => (
                      <div 
                        key={sIdx} 
                        className={`flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-orange-50/50 hover:border-orange-100 transition-colors ${
                          sIdx !== 3 ? 'md:border-r border-slate-100/30' : ''
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm mb-3">
                          <sol.icon className="w-4 h-4 text-[#f97316]" />
                        </div>
                        <span className="text-[10px] text-sky-950 font-black leading-tight max-w-[90px] mx-auto block">
                          {sol.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* View Detailed Solution Button */}
                  <div className="mt-6 flex justify-start">
                    <button
                      onClick={() => {
                        setActiveSolutionCard(null);
                        navigate(activeSolutionCard.path);
                      }}
                      className="group flex items-center gap-2 bg-[#0a1128] text-white hover:bg-[#f97316] px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_12px_rgba(10,17,40,0.15)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>View Detailed Solution</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Popup Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            {/* Blurred Backdrop overlay */}
            <div 
              className="absolute inset-0 bg-[#0a1128]/70 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedTestimonial(null)}
            />
            
            {/* Modal Body Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white text-[#0a1128] rounded-[2.5rem] overflow-hidden border border-slate-100/50 shadow-2xl max-w-2xl w-full relative z-10 flex flex-col md:flex-row min-h-[380px]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#0a1128]/5 hover:bg-[#0a1128]/10 flex items-center justify-center text-[#0a1128]/60 hover:text-[#0a1128] transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Image */}
              <div className="md:w-2/5 relative min-h-[200px] md:min-h-full">
                <img 
                  src={selectedTestimonial.img} 
                  alt={selectedTestimonial.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Content */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between relative">
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  {/* Quote & Body */}
                  <h3 className="text-lg md:text-xl font-extrabold text-[#0B1530] leading-snug mb-4 tracking-tight">
                    {selectedTestimonial.quote}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {selectedTestimonial.body}
                  </p>
                </div>

                <div>
                  {/* Tag Badges */}
                  {selectedTestimonial.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {selectedTestimonial.tags.map((tag: string) => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-orange-50 text-[#f97316] rounded-md border border-orange-100/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 w-full">
                    <div>
                      <div className="text-sm font-extrabold text-[#0B1530] leading-tight">{selectedTestimonial.name}</div>
                      <div className="text-xs font-semibold text-gray-400 mt-0.5 leading-tight">{selectedTestimonial.role}</div>
                    </div>
                    {selectedTestimonial.country && (
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                        {selectedTestimonial.country}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default WorkFit;
