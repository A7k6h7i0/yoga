import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Users2, Brain, Activity, Zap, 
  Wind, Trophy, MapPin, Star, Globe,
  ArrowRight, Sparkles, Flower2, ShieldCheck, Microscope, 
  TrendingUp, Calendar, ChevronRight, GraduationCap, Building2,
  Stethoscope, Landmark, Rocket
} from 'lucide-react';

const WorkFit = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 150]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);

  const mentors = [
    { name: 'Dr. Aris Thorne', role: 'Chief of Breathwork', img: 'https://i.pravatar.cc/150?u=aris', specialty: 'Neural Regulation' },
    { name: 'Maya Sterling', role: 'Vinyasa Lead', img: 'https://i.pravatar.cc/150?u=maya', specialty: 'Flow State Optimization' },
    { name: 'Julian Vane', role: 'Mindfulness Architect', img: 'https://i.pravatar.cc/150?u=julian', specialty: 'Executive Presence' },
    { name: 'Sienna Ross', role: 'Spinal Health Expert', img: 'https://i.pravatar.cc/150?u=sienna', specialty: 'Posture Mechanics' },
  ];

  const industries = [
    { name: 'FinTech', icon: Landmark, desc: 'High-frequency focus for high-pressure markets.' },
    { name: 'HealthTech', icon: Stethoscope, desc: 'Wellbeing solutions for the healers themselves.' },
    { name: 'SaaS', icon: Rocket, desc: 'Scaling calm alongside rapid growth.' },
    { name: 'Architecture', icon: Building2, desc: 'Building structural integrity in the body and mind.' },
  ];

  const categories = [
    {
      id: 'challenges',
      title: 'WorkFit Challenges',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
      items: [
        { name: 'Daily Asana', slug: 'steps-challenge', desc: 'Daily posture challenges designed for office mobility and spinal health.', icon: Wind, color: 'text-sky-600 bg-sky-50' },
        { name: 'Zen Mastery', slug: 'custom-challenges', desc: 'Deep focus with meditation streaks and mindful breathing.', icon: Brain, color: 'text-sky-600 bg-sky-50' },
        { name: 'Collective Flow', slug: 'team-challenge', desc: 'Team unity through synchronized group yoga and collective energy.', icon: Users2, color: 'text-sky-600 bg-sky-50' },
        { name: 'Pranayama Quest', slug: 'virtual-marathon', desc: 'A global journey through ancient breathwork techniques to boost vitality.', icon: Trophy, color: 'text-sky-600 bg-sky-50' },
      ]
    },
    {
      id: 'holistic',
      title: 'Holistic Path',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
      items: [
        { name: 'Mindful Workplace', slug: 'mental-health', desc: 'Reduce corporate stress with guided sessions rooted in yogic philosophy.', icon: Sparkles, color: 'text-sky-600 bg-sky-50' },
        { name: 'Wellness Rewards', slug: 'wellness-rewards', desc: 'Earn tangible rewards for your consistency on the mat and in meditation.', icon: Star, color: 'text-sky-600 bg-sky-50' },
        { name: 'Remote Yoga Studio', slug: 'remote-team-wellness', desc: 'Bring the shala to your home with live classes for distributed teams.', icon: MapPin, color: 'text-sky-600 bg-sky-50' },
        { name: '8 Pillars Program', slug: 'holistic-wellness', desc: 'The complete path to well-being: body, mind, and professional spirit.', icon: Flower2, color: 'text-sky-600 bg-sky-50' },
      ]
    }
  ];

  return (
    <div ref={containerRef} className="pb-16 overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 lg:pt-48 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff7f00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8">
                The Future of Corporate Vitality
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-sky-950 mb-10 tracking-tight leading-[1.1]">
                Elevating <br /> <span className="text-orange-500">Workplace Consciousness</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-sky-900/60 mb-12 max-w-2xl font-medium leading-relaxed">
                Transform your company culture with ancient wisdom, gamified mindfulness, and real-time community engagement. Designed for high-performance global teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-12 py-5 bg-orange-600 text-white rounded-full font-bold text-sm md:text-base shadow-2xl shadow-orange-100 hover:bg-orange-700 transition-all">
                  Request a Demo
                </button>
                <button className="px-12 py-5 bg-white text-sky-950 border border-sky-100 rounded-full font-bold text-sm md:text-base hover:bg-sky-50 transition-all">
                  View ROI Report
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img src="/workplace_consciousness.png" alt="Workplace Wellness" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Block - Vantage Fit Style */}
      <section className="py-12 bg-sky-50/30 border-y border-sky-100">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center">
            <div>
              <div className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Impact Study</div>
              <h3 className="text-3xl font-serif italic text-sky-950">Improving wellness across global organizations</h3>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl lg:text-5xl font-serif italic font-bold text-orange-600 mb-1">40%</div>
              <div className="text-[10px] font-bold text-sky-950 uppercase tracking-widest opacity-60">More Motivated Employees</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl lg:text-5xl font-serif italic font-bold text-orange-600 mb-1">26%</div>
              <div className="text-[10px] font-bold text-sky-950 uppercase tracking-widest opacity-60">Drop in Absenteeism</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Lineage Section */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mb-20 md:mb-32">
            <div className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Industries We Serve</div>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif italic text-sky-950 mb-8 leading-none">The Lineage of <br /> <span className="text-orange-500">Transformation</span></h2>
            <p className="text-lg md:text-2xl text-sky-900/60 font-medium leading-relaxed max-w-2xl">
              Tailored wellness architectures designed specifically for the world's most demanding high-performance industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-sky-50 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 transition-transform group-hover:scale-110">
                  <ind.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif italic font-bold mb-4 text-sky-900">{ind.name}</h4>
                <p className="text-sm md:text-base font-medium text-sky-900/60 leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Foundation Section */}
      <section className="py-24 md:py-48 bg-[#fffaf5] overflow-hidden border-y border-sky-100">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Neuro-Wellness Research</div>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif italic text-sky-950 mb-10 leading-none tracking-tight">The Science <br /> <span className="text-orange-500">of Calm</span></h2>
              <p className="text-lg md:text-xl text-sky-900/60 leading-relaxed font-medium mb-12">
                LiveFit isn't just a wellness platform—it's a neuro-integrated ecosystem. We've collaborated with cognitive scientists to translate yogic practices into measurable corporate outcomes.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Cortisol Reduction', desc: 'Targeted breathwork cycles proven to lower stress hormones by 24% in high-pressure environments.', icon: ShieldCheck },
                  { title: 'Cognitive Agility', desc: 'Mindfulness streaks that enhance prefrontal cortex activity and executive function.', icon: TrendingUp },
                  { title: 'Collective Heart-Rate', desc: 'Synchronized team sessions that align cardiac rhythms and build interpersonal trust.', icon: Users2 }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0 shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif italic font-bold text-sky-900 text-xl md:text-2xl mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base text-sky-900/60 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10"
              >
                <img src="/wellness_analytics.png" alt="Science" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <div className="text-4xl md:text-6xl font-bold mb-2">98%</div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-80">User Satisfaction Rate</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Mentors Section */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-32 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-8xl font-serif italic text-sky-950 mb-8 leading-none">Masters of the <br /> <span className="text-sky-500">Sacred Shift</span></h2>
              <p className="text-lg md:text-2xl text-sky-800 font-medium opacity-60">
                Learn from world-class architects of wellbeing and cognitive performance.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 border border-sky-100 rounded-full font-bold text-sky-600 hover:bg-sky-50 transition-all flex items-center gap-3"
            >
              Meet the Full Team <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {mentors.map((mentor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 relative">
                  <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-1">{mentor.specialty}</div>
                    <div className="font-bold text-sky-950">Bio-Link <ArrowRight className="w-3 h-3 inline ml-1" /></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-sky-950 mb-1 font-serif italic">{mentor.name}</h4>
                <p className="text-sky-500 font-bold text-xs uppercase tracking-widest">{mentor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.id} className={`py-24 md:py-48 ${catIdx % 2 === 0 ? 'bg-sky-50/20' : 'bg-white'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-8xl font-serif italic text-sky-950 mb-8 leading-none tracking-tight">{cat.title}</h2>
              <p className="text-lg md:text-2xl text-sky-800 max-w-2xl mx-auto font-medium opacity-70">
                Specialized pathways designed for the modern professional spirit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {cat.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-sky-100 hover:shadow-2xl transition-all group h-full flex flex-col"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 ${item.color}`}>
                    <item.icon className="w-7 md:w-8 h-7 md:h-8" />
                  </div>
                  <h3 className="text-2xl font-serif italic font-bold mb-4 text-sky-900">{item.name}</h3>
                  <p className="text-sky-700 leading-relaxed mb-10 font-medium text-sm flex-1 opacity-70">
                    {item.desc}
                  </p>
                  <Link to={`/solutions/${item.slug}`} className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2 group-hover:text-sky-900 transition-colors">
                    Explore Solution <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Implementation Roadmap */}
      <section className="py-24 md:py-48 bg-sky-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sky-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8"
            >
              The Path to Transformation
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-serif italic mb-10 tracking-tight leading-none">Your <span className="text-sky-400">Implementation</span> Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              { phase: '01', title: 'Cultural Audit', desc: 'We begin with a deep analysis of your company pulse, identifying stress hotspots and engagement gaps.' },
              { phase: '02', title: 'Sacred Setup', icon: Calendar, desc: 'Seamless integration with your existing tools and the creation of your custom digital shala.' },
              { phase: '03', title: 'Collective Flow', icon: Zap, desc: 'Launching synchronized team challenges and starting the global mindfulness journey.' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="text-6xl md:text-9xl font-serif italic text-white/5 absolute -top-16 md:-top-24 left-0 -z-10">{step.phase}</div>
                <h4 className="text-2xl md:text-4xl font-serif italic font-bold mb-6">{step.title}</h4>
                <p className="text-lg md:text-xl text-sky-100/60 leading-relaxed font-medium">
                  {step.desc}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-12 translate-x-1/2 w-24 h-px bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Insight */}
      <section className="py-24 md:py-48 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(12,74,110,0.15)] border border-sky-50"
            >
              <div className="h-48 md:h-72 flex items-end gap-3 md:gap-4">
                {[45, 65, 55, 95, 75, 85, 60].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1.5 }}
                    className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-xl"
                  />
                ))}
              </div>
              <div className="mt-12 md:mt-20 flex justify-around text-center">
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-sky-950 mb-2">92%</div>
                  <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Resilience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-sky-950 mb-2">45m</div>
                  <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Avg Session</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl">
              <Activity className="w-6 md:w-8 h-6 md:h-8" />
            </div>
            <h2 className="text-4xl md:text-7xl font-serif italic text-sky-950 mb-10 leading-none tracking-tight">Real-time <br /> <span className="text-sky-500">Corporate Pulse</span></h2>
            <p className="text-lg md:text-xl text-sky-800 leading-relaxed font-medium mb-12 opacity-80">
              Go beyond basic tracking. Our AI engine analyzes collective engagement and provides leadership with actionable insights to prevent burnout and boost morale.
            </p>
            <ul className="space-y-6">
              {['Advanced stress-mapping', 'Departmental engagement heatmaps', 'AI-driven wellbeing forecasts'].map((f, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-sky-900 font-bold text-base md:text-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 container mx-auto px-4 md:px-6">
        <div className="bg-sky-600 rounded-[3rem] md:rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-9xl font-serif italic text-white mb-12 tracking-tight leading-[0.85]">Join the <span className="text-sky-200">Global</span> Sanctuary</h2>
            <p className="text-lg md:text-3xl text-sky-50 mb-16 font-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
              Experience the platform that is redefining corporate culture across 45 countries. Begin your team's transformation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-12 md:px-16 py-5 md:py-6 bg-white text-sky-600 rounded-full font-bold text-base md:text-lg shadow-xl"
              >
                Request Custom Plan
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-12 md:px-16 py-5 md:py-6 bg-transparent text-white border border-white/20 rounded-full font-bold text-base md:text-lg"
              >
                Explore Case Studies
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkFit;
