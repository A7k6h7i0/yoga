import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Wind, Brain, Users2, Trophy, MapPin, Sparkles, Star, 
  Flower2, Activity, ArrowLeft, CheckCircle2, Play, Calendar, Globe,
  Quote, Microscope, Lightbulb, Zap, Shield, Heart, Gem, ArrowRight,
  ChevronRight, Layers, Target, Compass
} from 'lucide-react';

const solutionData: any = {
  'steps-challenge': {
    title: 'Step Marathon',
    subtitle: 'Active Workforce',
    desc: 'Ignite a culture of movement with our competitive step challenges. Empower your team to reach new heights through daily walking goals, real-time leaderboards, and virtual global routes.',
    science: 'Walking 10,000 steps a day is linked to a 50% lower risk of cardiovascular disease and significantly improves mental clarity and metabolic health.',
    userStory: {
      quote: "The Step Marathon turned our office into a thriving community of walkers. I've never felt more energized!",
      author: "Michael Scott",
      role: "Regional Manager @ Dunder Mifflin"
    },
    uniqueSection: {
      layout: 'split',
      title: "Real-Time Mobility Hub",
      desc: "Sync with any wearable device and watch your team traverse virtual landscapes from the Himalayas to the Amazon Rainforest.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
      accent: "bg-orange-600",
      icon: Activity
    },
    icon: Wind,
    color: 'text-orange-600 bg-orange-50',
    image: 'https://plus.unsplash.com/premium_photo-1727444085897-35a0197a7ea6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Real-time leaderboard', 'Wearable device sync', 'Virtual global routes', 'Team milestones']
  },
  'custom-challenges': {
    title: 'Custom Challenges',
    subtitle: 'Tailored Wellness Journeys',
    desc: 'Design bespoke wellness challenges aligned with your corporate goals. From hydration tracking to targeted fitness milestones, create programs that resonate with your unique workforce.',
    science: 'Customized wellness programs experience up to 60% higher engagement rates compared to generic fitness tracking solutions.',
    userStory: {
      quote: "Being able to design our own 'Summer Active' challenge completely transformed our team's engagement. It felt like it was truly ours.",
      author: "Elena Rodriguez",
      role: "HR Director @ TechNova"
    },
    uniqueSection: {
      layout: 'centered',
      title: "Challenge Builder Studio",
      desc: "Use our intuitive drag-and-drop builder to mix and match activities, set custom rules, define milestones, and create reward tiers tailored to your company culture.",
      image: "https://images.unsplash.com/photo-1560233075-4c1e2007908e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accent: "bg-indigo-500",
      icon: Layers
    },
    icon: Target,
    color: 'text-indigo-600 bg-indigo-50',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
    features: ['Drag-and-drop challenge builder', 'Customizable reward tiers', 'Flexible activity tracking', 'Branded interface options']
  },
  'team-challenge': {
    title: 'Team Challenge',
    subtitle: 'Synchronized Team Wellness',
    desc: 'Break down silos and build team unity through engaging, interactive challenges. Experience the power of collaborative movement and shared energy to hit common wellness goals.',
    science: 'Group synchronization and collaborative activities release high levels of oxytocin, which directly impacts team cohesion and psychological safety at work.',
    userStory: {
      quote: "Our cross-departmental challenge brought teams together who had never spoken before. The competitive spirit was incredible!",
      author: "Anita Patel",
      role: "HR Director @ CreativeFlow"
    },
    uniqueSection: {
      layout: 'mosaic',
      title: "Interpersonal Resonance",
      desc: "Experience the science of 'Co-Regulation' where team members align their physiological states and goals for peak collaborative output.",
      image: "https://images.pexels.com/photos/31196609/pexels-photo-31196609.jpeg",
      image2: "https://images.pexels.com/photos/15495236/pexels-photo-15495236.jpeg",
      accent: "bg-sky-400",
      icon: Users2
    },
    icon: Users2,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Live group tracking', 'Team leaderboards', 'Collaborative goals', 'Shared achievement space']
  },
  'virtual-marathon': {
    title: 'Virtual Marathon',
    subtitle: 'Unite Your Global Workforce',
    desc: 'A seamless, scalable virtual marathon platform designed to bring remote and global teams together. Participants can run, walk, or wheelchair their way to the finish line from anywhere in the world, fostering a deep sense of shared achievement.',
    science: 'Company-wide physical challenges have been shown to reduce absenteeism by 25% and create shared experiences that break down geographical and hierarchical barriers.',
    userStory: {
      quote: "Our Virtual Marathon saw 80% participation across 15 timezones. It was the most engaging health initiative we've ever run.",
      author: "James Peterson",
      role: "VP of Global HR @ Apex Solutions"
    },
    uniqueSection: {
      layout: 'atmospheric',
      title: "Run The World Together",
      desc: "Track collective progress on a live global map. Watch as your team's combined distance unlocks charitable donations, company perks, and digital badges.",
      image: "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg",
      accent: "bg-sky-700",
      icon: Trophy
    },
    icon: Trophy,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.pexels.com/photos/1555351/pexels-photo-1555351.jpeg',
    features: ['Live global leaderboards', 'Charity integrations', 'Custom milestone badges', 'Wearable sync & manual entry']
  },
  'remote-team-wellness': {
    title: 'Remote Yoga Studio',
    subtitle: 'Virtual Shala',
    desc: 'Bring the professional yoga studio experience to your remote teams with live classes led by world-class instructors.',
    science: 'Virtual synchronous wellness reduces feelings of isolation in remote workers by 45%, providing a sense of shared routine.',
    userStory: {
      quote: "LiveFit has been a lifesaver for our remote team. It's the only time we all get together for us.",
      author: "Elena Rodriguez",
      role: "Founder @ RemoteScale"
    },
    uniqueSection: {
      layout: 'dual',
      title: "Distributed Presence",
      desc: "Our low-latency streaming technology ensures every breath and movement is perfectly synced across any timezone.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80",
      accent: "bg-sky-600",
      icon: MapPin
    },
    icon: MapPin,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80',
    features: ['Live HD streaming', 'Interactive classes', 'Global instructor access', 'On-demand library']
  },
  'mental-health': {
    title: 'Mindful Workplace',
    subtitle: 'Cognitive Resilience',
    desc: 'Reduce corporate stress with guided sessions rooted in yogic philosophy and modern neuroscience.',
    science: 'Regular mindfulness practice reduces the reactivity of the Amygdala, decreasing the biological impact of workplace stressors.',
    userStory: {
      quote: "Our team's stress metrics have plummeted. It's a total game-changer for our culture.",
      author: "Dr. James Lee",
      role: "Chief People Officer @ BioSystems"
    },
    uniqueSection: {
      layout: 'balanced',
      title: "Emotional Equilibrium",
      desc: "Develop a 'Centered Workspace' mindset that maintains peak productivity without compromising mental health.",
      image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80",
      accent: "bg-sky-500",
      icon: Sparkles
    },
    icon: Sparkles,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    features: ['Guided stress-relief', 'Neuro-feedback integration', 'Emotional intelligence', 'Leadership coaching']
  },
  'wellness-rewards': {
    title: 'Wellness Credits',
    subtitle: 'Incentivized Practice',
    desc: 'Turn consistency into tangible rewards. Earn Zen Coins for every mindful minute and unlock exclusive benefits.',
    science: 'Gamification triggers dopamine pathways that facilitate the formation of long-term habits.',
    userStory: {
      quote: "The rewards program keeps me coming back to the mat every single morning.",
      author: "Chloe Jenkins",
      role: "Product Designer @ InnovateHub"
    },
    uniqueSection: {
      layout: 'showcase',
      title: "The Token of Tranquility",
      desc: "Our circular economy model rewards your inner peace with benefits that enhance your overall lifestyle.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80",
      accent: "bg-sky-400",
      icon: Gem
    },
    icon: Star,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80',
    features: ['Gamified tracking', 'Partner marketplace', 'Corporate incentives', 'Reward analytics']
  },
  'global-engagement': {
    title: 'Global Sangha',
    subtitle: 'Community Connection',
    desc: 'Connect your global workforce through a shared commitment to wellbeing. Build a community that transcends boundaries.',
    science: 'Social connection is a primary driver of longevity and workplace satisfaction.',
    userStory: {
      quote: "I've met colleagues from our Berlin office that I never would have interacted with otherwise.",
      author: "Thomas Miller",
      role: "Account Executive @ GlobalReach"
    },
    uniqueSection: {
      layout: 'global',
      title: "Universal Heartbeat",
      desc: "Join a borderless community of practitioners sharing insights and support across all continents.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      accent: "bg-sky-300",
      icon: Globe
    },
    icon: Globe,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    features: ['Global community feed', 'Cross-cultural sessions', 'Interest-based groups', 'Cultural workshops']
  },
  'holistic-wellness': {
    title: '8 Pillars Program',
    subtitle: 'The Complete Path',
    desc: 'Our flagship program covering the eight limbs of yoga adapted for the corporate world.',
    science: 'The Ashtanga framework provides a comprehensive approach to health addressing root causes of stress.',
    userStory: {
      quote: "This program has changed my life. It's a profound journey into what it means to be healthy.",
      author: "Lisa Zhang",
      role: "Director of Sustainability @ EcoLogic"
    },
    uniqueSection: {
      layout: 'pillars',
      title: "The Architecture of Self",
      desc: "Build a foundation that supports physical strength, mental clarity, and professional purpose.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
      accent: "bg-sky-600",
      icon: Layers
    },
    icon: Flower2,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    features: ['Curated 12-month path', 'Holistic assessment', 'Integrative lifestyle tips', 'Spiritual intelligence']
  },
  'health-analytics': {
    title: 'Vitals Tracking',
    subtitle: 'Scientific Insights',
    desc: 'Measure the impact of your practice with detailed health analytics in real-time.',
    science: 'Heart Rate Variability (HRV) is the gold standard for measuring autonomic nervous system health.',
    userStory: {
      quote: "Watching my HRV improve week over week has been incredibly motivating.",
      author: "Kevin Frost",
      role: "CTO @ DataFirst"
    },
    uniqueSection: {
      layout: 'dashboard',
      title: "Biological Feedback Loop",
      desc: "Translate physiological data into actionable lifestyle changes that optimize your performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      accent: "bg-sky-500",
      icon: Activity
    },
    icon: Activity,
    color: 'text-sky-600 bg-sky-50',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80',
    features: ['Wearable integration', 'Stress-level mapping', 'Longitudinal reports', 'AI recommendations']
  }
};

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = solutionData[slug as string] || solutionData['steps-challenge'];

  const renderUniqueSection = () => {
    const { uniqueSection } = solution;
    
    switch (uniqueSection.layout) {
      case 'split':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-stretch">
            <div className="relative overflow-hidden rounded-[3rem] md:rounded-[4rem] group">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={uniqueSection.image} 
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-8 leading-none">{uniqueSection.title}</h2>
              <p className="text-xl md:text-2xl text-sky-800 leading-relaxed font-medium mb-10 opacity-70">{uniqueSection.desc}</p>
              <div className={`w-16 h-16 ${uniqueSection.accent} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                <uniqueSection.icon className="w-8 h-8" />
              </div>
            </div>
          </div>
        );

      case 'centered':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-serif italic text-sky-950 mb-12 leading-none">{uniqueSection.title}</h2>
            <div className="relative mb-16 rounded-[4rem] overflow-hidden group">
              <img src={uniqueSection.image} className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-sky-600 shadow-2xl">
                    <uniqueSection.icon className="w-10 h-10" />
                 </motion.div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-sky-900 leading-relaxed font-medium opacity-80">{uniqueSection.desc}</p>
          </div>
        );

      case 'mosaic':
        return (
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.img whileInView={{ y: [-20, 0] }} src={uniqueSection.image} className="w-full h-64 object-cover rounded-3xl" />
              <motion.img whileInView={{ y: [20, 0] }} src={uniqueSection.image2 || "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80"} className="w-full h-64 object-cover rounded-3xl mt-12" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-8">{uniqueSection.title}</h2>
              <p className="text-xl text-sky-800 leading-relaxed mb-10">{uniqueSection.desc}</p>
              <div className="flex gap-4">
                 {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">{i}</div>)}
              </div>
            </div>
          </div>
        );

      case 'atmospheric':
        return (
          <div className="relative py-20 px-10 bg-sky-50 rounded-[4rem] border border-sky-100 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
             <div className="md:w-1/2 relative z-10">
               <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-8">{uniqueSection.title}</h2>
               <p className="text-xl text-sky-800 opacity-70">{uniqueSection.desc}</p>
             </div>
             <motion.div 
               animate={{ y: [0, -30, 0] }} 
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="md:w-1/2"
             >
                <img src={uniqueSection.image} className="w-full h-96 object-cover rounded-[3rem] shadow-2xl rotate-3" />
             </motion.div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-[80px]" />
          </div>
        );

      case 'dual':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-7 bg-sky-900 rounded-[3rem] p-12 text-white flex flex-col justify-center">
               <h2 className="text-4xl md:text-7xl font-serif italic mb-8">{uniqueSection.title}</h2>
               <p className="text-xl text-sky-200 opacity-80">{uniqueSection.desc}</p>
            </div>
            <div className="lg:col-span-5 h-[500px] rounded-[3rem] overflow-hidden">
               <img src={uniqueSection.image} className="w-full h-full object-cover" />
            </div>
          </div>
        );

      case 'balanced':
        return (
          <div className="bg-white p-12 md:p-24 rounded-[5rem] shadow-xl border border-sky-50 text-center relative overflow-hidden">
             <uniqueSection.icon className="w-16 h-16 text-sky-200 mx-auto mb-10" />
             <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-10">{uniqueSection.title}</h2>
             <p className="text-xl md:text-2xl text-sky-800 max-w-3xl mx-auto opacity-70 mb-12">{uniqueSection.desc}</p>
             <img src={uniqueSection.image} className="w-full h-80 object-cover rounded-3xl" />
          </div>
        );

      case 'showcase':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-5xl md:text-8xl font-serif italic text-sky-950 mb-10">{uniqueSection.title}</h2>
                <div className="space-y-6">
                   {['Exclusive Rewards', 'Zen Economy', 'Lifestyle Access'].map(f => (
                     <div key={f} className="flex items-center gap-4 text-xl font-bold text-sky-600">
                        <Gem className="w-6 h-6" /> {f}
                     </div>
                   ))}
                </div>
             </div>
             <motion.div whileHover={{ rotate: -2 }} className="relative">
                <img src={uniqueSection.image} className="w-full h-[500px] object-cover rounded-[4rem] shadow-2xl" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                   <Star className="w-12 h-12 fill-current" />
                </div>
             </motion.div>
          </div>
        );

      case 'global':
        return (
          <div className="relative min-h-[600px] rounded-[5rem] overflow-hidden flex items-center p-12">
             <img src={uniqueSection.image} className="absolute inset-0 w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-950/40 to-transparent" />
             <div className="relative z-10 max-w-2xl text-white">
                <h2 className="text-5xl md:text-8xl font-serif italic mb-10">{uniqueSection.title}</h2>
                <p className="text-2xl text-sky-100 opacity-80 mb-12">{uniqueSection.desc}</p>
                <div className="flex gap-8">
                   <div>
                      <div className="text-4xl font-bold">45</div>
                      <div className="text-xs uppercase tracking-widest text-sky-400">Countries</div>
                   </div>
                   <div className="w-px h-12 bg-white/20" />
                   <div>
                      <div className="text-4xl font-bold">250k</div>
                      <div className="text-xs uppercase tracking-widest text-sky-400">Sangha Members</div>
                   </div>
                </div>
             </div>
          </div>
        );

      case 'pillars':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div className="space-y-12">
                <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-12">{uniqueSection.title}</h2>
                {[1,2,3].map(i => (
                  <div key={i} className="flex gap-6 items-start group">
                     <div className="text-6xl font-serif italic text-sky-100 group-hover:text-sky-500 transition-colors">0{i}</div>
                     <p className="text-xl text-sky-800 font-medium pt-4">Bespoke phase {i} of the 8 pillars framework for your professional growth.</p>
                  </div>
                ))}
             </div>
             <img src={uniqueSection.image} className="w-full h-[600px] object-cover rounded-[4rem] shadow-2xl" />
          </div>
        );

      case 'dashboard':
        return (
          <div className="bg-sky-50 rounded-[4rem] p-12 md:p-24 border border-sky-100">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                   <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-10 leading-none">{uniqueSection.title}</h2>
                   <p className="text-xl text-sky-800 opacity-70 mb-12">{uniqueSection.desc}</p>
                   <button className="px-8 py-4 bg-sky-600 text-white rounded-full font-bold shadow-xl">Launch Analysis</button>
                </div>
                <div className="lg:col-span-7 bg-white p-8 rounded-[3rem] shadow-2xl border border-sky-100">
                   <img src={uniqueSection.image} className="w-full h-80 object-cover rounded-2xl mb-8" />
                   <div className="flex justify-between items-center px-4">
                      <div className="flex gap-2">
                         {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 bg-sky-100 rounded-full" />)}
                      </div>
                      <div className="text-sky-600 font-bold">Real-time Syncing...</div>
                   </div>
                </div>
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pb-16 bg-white pt-24 md:pt-40 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/workfit" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-12 md:mb-16 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to WorkFit
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-24 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center mb-10 md:mb-12 shadow-2xl ${solution.color}`}
            >
              {(() => {
                const Icon = solution.icon;
                return <Icon className="w-10 md:w-12 h-10 md:h-12 text-orange-600" />;
              })()}
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-serif italic text-sky-950 mb-6 leading-[0.9] tracking-tight">
              {solution.title}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-8 md:mb-12"
            >
              {solution.subtitle}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl text-sky-900/60 leading-relaxed font-medium mb-12 md:mb-16 max-w-xl"
            >
              {solution.desc}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
              {solution.features.map((f: string, i: number) => (
                <motion.div 
                  key={f} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-4 text-sky-950 font-bold text-sm md:text-base group"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sky-900/60 group-hover:text-sky-950 transition-colors">{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 md:px-12 py-5 bg-orange-600 text-white rounded-full font-bold shadow-2xl shadow-orange-100 flex items-center justify-center gap-3 text-sm md:text-base"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 md:px-12 py-5 bg-white text-sky-950 border border-sky-100 rounded-full font-bold transition-all text-sm md:text-base"
              >
                Case Study
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 max-w-xl mx-auto lg:ml-auto">
              <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-50 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>

        {/* Science & Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center mb-24 md:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">The Scientific Method</div>
            <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-10 leading-none tracking-tight">Evidence Based <br /> <span className="text-orange-500">Wellness</span></h2>
            <p className="text-lg md:text-xl text-sky-900/60 leading-relaxed font-medium mb-12">
              {solution.science}
            </p>
            <div className="p-8 bg-sky-50 rounded-[2.5rem] border border-sky-100 flex gap-6 items-start">
              <Microscope className="w-8 h-8 text-orange-600 shrink-0" />
              <p className="text-sky-950 font-bold text-sm md:text-base italic leading-relaxed">
                "Our neural-mapping shows that consistent practice of {solution.title} enhances neuro-plasticity by 15% within the first 60 days."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#fffaf5] p-10 md:p-20 rounded-[4rem] shadow-sm border border-sky-50 relative overflow-hidden"
          >
            <Quote className="w-32 h-32 text-orange-500/5 absolute -top-10 -right-10" />
            <div className="relative z-10">
              <p className="text-2xl md:text-4xl text-sky-950 font-serif italic leading-tight mb-12">
                "{solution.userStory.quote}"
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl">
                  {solution.userStory.author[0]}
                </div>
                <div>
                  <div className="font-serif italic font-bold text-sky-950 text-xl">{solution.userStory.author}</div>
                  <div className="text-xs text-orange-500 font-black uppercase tracking-widest">{solution.userStory.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BESPOKE UNIQUE SECTION (Varied Layouts) */}
        <section className="py-24 md:py-48 relative overflow-hidden">
          <div className="w-full px-4 md:px-8">
             {renderUniqueSection()}
          </div>
          
          {/* Background Ambient Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/30 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50/40 rounded-full blur-[150px] -z-10" />
        </section>

        {/* Global Impact CTA (Moved to bottom and refined) */}
        <section className="pb-24">
          <div className="bg-sky-600 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-7xl font-serif italic text-white mb-8">Redefine your <span className="text-sky-200">Culture</span></h2>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   className="px-10 md:px-12 py-4 bg-white text-sky-600 rounded-full font-bold text-base shadow-xl"
                 >
                   Request a Demo
                 </motion.button>
                 <motion.button 
                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                   className="px-10 md:px-12 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-base"
                 >
                   View ROI Report
                 </motion.button>
               </div>
             </div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
             >
                <Flower2 className="w-full h-full text-white scale-150" />
             </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionDetail;
