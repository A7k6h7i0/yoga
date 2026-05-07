import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, TrendingUp, Users2, Brain, Activity, Zap, 
  Wind, Trophy, Settings2, MapPin, Star, Globe, Heart, BarChart3,
  ArrowRight, Smartphone, Sparkles, Flower2
} from 'lucide-react';

const WorkFit = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const categories = [
    {
      id: 'challenges',
      title: 'WorkFit Challenges',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
      items: [
        { name: 'Daily Asana', slug: 'steps-challenge', desc: 'Engage in daily posture challenges designed for office mobility and spinal health.', icon: Wind, color: 'text-sky-600 bg-sky-50' },
        { name: 'Zen Mastery', slug: 'custom-challenges', desc: 'Achieve deep focus with customized meditation streaks and mindful breathing.', icon: Brain, color: 'text-sky-600 bg-sky-50' },
        { name: 'Collective Flow', slug: 'team-challenge', desc: 'Foster team unity through synchronized group yoga and collective energy.', icon: Users2, color: 'text-sky-600 bg-sky-50' },
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
    <div ref={containerRef} className="pb-16 overflow-hidden bg-brand-white">
      {/* Hero */}
      <section className="relative py-20 bg-sky-50/50 overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 80]) }}
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
        >
          <img src="https://images.unsplash.com/photo-1524673317493-2340aa41256b?auto=format&fit=crop&q=80" alt="Yoga" className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white text-sky-600 rounded-full text-xs font-bold mb-6 shadow-sm border border-sky-100"
          >
            <Flower2 className="w-3.5 h-3.5" />
            <span>Elevating Workplace Consciousness</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif italic text-sky-950 mb-6 max-w-4xl mx-auto tracking-tight leading-[0.95]">
            LiveFit: A Corporate <br /> <span className="text-sky-500">Wellness Sanctuary</span>
          </h1>
          <p className="text-lg md:text-xl text-sky-800 max-w-xl mx-auto mb-8 font-medium">
            Transform your company culture with ancient wisdom, gamified mindfulness, and real-time community engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 group flex items-center gap-2 text-sm">
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-white text-sky-900 rounded-full font-bold border border-sky-100 hover:bg-sky-50 transition-all text-sm">
              Calculate Wellness ROI
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      {categories.map((cat, catIdx) => (
        <section key={cat.id} className={`py-20 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-sky-50/20'}`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: catIdx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={catIdx % 2 === 0 ? 'order-1' : 'order-2'}
              >
                <h2 className="text-4xl md:text-6xl font-serif italic text-sky-950 mb-6">{cat.title}</h2>
                <p className="text-lg text-sky-700 leading-relaxed font-medium mb-8">
                  Comprehensive wellness solutions designed to restore balance to your workforce, from physical vigor to mental clarity.
                </p>
                <div className="flex gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-sky-100 overflow-hidden shadow-md">
                        <img src={`https://i.pravatar.cc/150?u=${i + catIdx*10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sky-500 font-bold text-xs flex flex-col justify-center">
                    <span>100k+ Practitioners</span>
                    <span>Already Flowing</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-video ${catIdx % 2 === 0 ? 'order-2' : 'order-1'}`}
              >
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <Sparkles className="w-6 h-6 mb-3 text-sky-200" />
                    <h3 className="text-xl font-bold">The LiveFit Experience</h3>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2rem] bg-white border border-sky-50 hover:shadow-xl hover:shadow-sky-100/50 transition-all group relative overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-sky-900">{item.name}</h3>
                  <p className="text-sky-600 leading-relaxed mb-6 font-medium text-xs">
                    {item.desc}
                  </p>
                  <Link 
                    to={`/solutions/${item.slug}`}
                    className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2 group-hover:text-sky-900 transition-colors"
                  >
                    Enter the Path <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Mobile App Showcase */}
      <section className="py-20 bg-sky-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sky-100 text-[10px] font-bold mb-6"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>A Personal Sanctuary in Your Pocket</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">Mindfulness <br /> <span className="text-sky-200">Simplified</span></h2>
            <p className="text-lg text-sky-50 leading-relaxed mb-8 font-medium opacity-90">
              Access curated wellness paths and meditation cycles anywhere. Track your progress, log your calm moments, and connect with your team—all in one beautiful space.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white text-sky-600 rounded-xl font-bold flex items-center gap-2 cursor-pointer hover:bg-sky-50 transition-all text-sm shadow-lg">
                Download for iOS
              </div>
              <div className="px-6 py-3 border border-white/30 text-white rounded-xl font-bold flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all text-sm">
                Download for Android
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80" alt="LiveFit App" className="w-full max-w-xs mx-auto rounded-[2.5rem] shadow-2xl rotate-3" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-sky-50/50 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative border border-sky-100">
          <div className="lg:w-1/2 relative z-10">
            <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center text-white mb-6 shadow-lg">
              <Activity className="w-7 h-7" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-sky-950 mb-6 leading-tight">Insight into <br /> collective calm</h2>
            <p className="text-sky-800 text-base leading-relaxed mb-8 font-medium">
              Monitor your team's stress resilience and engagement with detailed analytics. Our AI identifies burn-out risks and recommends specific wellness practices to restore balance.
            </p>
            <ul className="space-y-4">
              {['Stress resilience index', 'Collective mindfulness minutes', 'Engagement heartbeats'].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sky-900 font-bold text-sm">
                  <div className="w-5 h-5 rounded-full bg-sky-600 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-sky-50">
              <div className="h-60 flex items-end gap-2 px-2">
                {[45, 65, 55, 95, 75, 85, 60].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                    className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-lg opacity-90"
                  />
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-sky-50 grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-sky-900 mb-1">92%</div>
                  <div className="text-[10px] text-sky-400 uppercase tracking-[0.2em] font-bold">Focus Level</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-900 mb-1">45m</div>
                  <div className="text-[10px] text-sky-400 uppercase tracking-[0.2em] font-bold">Avg. Session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-sky-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80" alt="LiveFit CTA" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif italic text-white mb-6 tracking-tight leading-tight">Begin your <br /> corporate journey</h2>
            <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-10 font-medium opacity-90">
              Join visionary companies using LiveFit to cultivate a healthy, resilient, and thriving workplace culture.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-white text-sky-600 rounded-full font-bold hover:bg-sky-50 transition-all shadow-xl shadow-black/10 text-base">
                Request a Custom Plan
              </button>
              <button className="px-10 py-5 bg-transparent text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all text-base flex items-center gap-2">
                Watch the Experience
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkFit;
