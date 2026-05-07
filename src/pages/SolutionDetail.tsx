import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wind, Brain, Users, Trophy, 
  MapPin, Star, Globe, Activity,
  CheckCircle2, ArrowLeft, Sparkles,
  Play, Flower2
} from 'lucide-react';

const solutionData: Record<string, any> = {
  'steps-challenge': {
    title: 'Daily Asana',
    subtitle: 'Daily yoga posture challenges for all levels',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Transform your daily routine with curated asana challenges. Designed specifically for the modern professional, these sequences target spinal health, hip mobility, and mental focus.',
    benefits: ['Increased flexibility', 'Reduced back pain', 'Higher energy levels', 'Stress reduction'],
    features: [
      { title: 'AI Posture Correction', desc: 'Real-time feedback on your alignment using your device camera.' },
      { title: 'Level Progression', desc: 'From basic stretches to advanced flows, progress at your own pace.' },
      { title: 'Team Streaks', desc: 'Build collective momentum with office-wide consistency challenges.' }
    ]
  },
  'custom-challenges': {
    title: 'Zen Mastery',
    subtitle: 'Customized mindfulness and meditation streaks',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Master the art of focus with personalized meditation paths. Our AI adapts to your stress levels and schedule to provide the perfect mindfulness break.',
    benefits: ['Enhanced focus', 'Emotional regulation', 'Better sleep quality', 'Burnout prevention'],
    features: [
      { title: 'Brainwave Sync', desc: 'Guided sessions designed to align with your natural circadian rhythms.' },
      { title: 'Silent Retreats', desc: 'Virtual weekend immersions for deep mental resetting.' },
      { title: 'Custom Mantras', desc: 'Personalized affirmations based on your professional goals.' }
    ]
  },
  'team-challenge': {
    title: 'Collective Flow',
    subtitle: 'Team-based synchronized yoga sessions',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1524673317493-2340aa41256b?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Bridge the gap between remote and in-office teams with synchronized yoga flows. Experience the power of the collective sangha.',
    benefits: ['Improved team morale', 'Reduced isolation', 'Synchronized energy', 'Better communication'],
    features: [
      { title: 'Live Shala', desc: 'Interactive group sessions with real-time instructor feedback.' },
      { title: 'Community Altars', desc: 'Shared digital spaces for team intentions and gratitude.' },
      { title: 'Partner Poses', desc: 'Cooperative stretching exercises to build trust and connection.' }
    ]
  },
  'virtual-marathon': {
    title: 'Pranayama Quest',
    subtitle: 'Global breathwork and energy workshops',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Embark on a global journey through the science of breath. Learn ancient pranayama techniques to instantly shift your state of mind.',
    benefits: ['Instant stress relief', 'Lung capacity growth', 'Mental clarity', 'Natural detoxification'],
    features: [
      { title: 'Breath Biometrics', desc: 'Track your heart rate variability and respiratory rate during practice.' },
      { title: 'Energy Mapping', desc: 'Visualize your vital energy flow throughout the workday.' },
      { title: 'Global Circles', desc: 'Join thousands in synchronized breathing for global harmony.' }
    ]
  },
  'remote-team-wellness': {
    title: 'Remote Yoga Studio',
    subtitle: 'Live virtual classes for distributed teams',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'The premium shala experience, delivered to your home office. Expert instructors lead live classes tailored to the needs of remote workers.',
    benefits: ['Zero commute time', 'Ergonomic relief', 'Home-work boundary', 'Community feel'],
    features: [
      { title: 'On-Demand Library', desc: 'Access hundreds of recorded flows whenever you have a break.' },
      { title: 'Private Consults', desc: 'One-on-one sessions with senior teachers for injury prevention.' },
      { title: 'Home Props Guide', desc: 'Learn to use everyday household items as effective yoga props.' }
    ]
  },
  'mental-health': {
    title: 'Mindful Workplace',
    subtitle: 'Stress management through yogic wisdom',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Address the root causes of workplace stress through the lens of yoga philosophy and practical mindfulness tools.',
    benefits: ['Psychological safety', 'Resilience building', 'Compassionate culture', 'Mental stamina'],
    features: [
      { title: 'Dharma Coaching', desc: 'Align your professional path with your personal values and purpose.' },
      { title: 'Zen Pods', desc: 'Structured small-group discussions for peer support and growth.' },
      { title: 'Focus Intervals', desc: 'Micro-meditations designed to be performed at your desk.' }
    ]
  },
  'wellness-rewards': {
    title: 'Wellness Credits',
    subtitle: 'Earn rewards for consistent practice',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Your dedication to the path is rewarded. Earn Zen Coins for every minute practiced and redeem them for wellness experiences.',
    benefits: ['Extrinsic motivation', 'Sustainable habits', 'Tangible value', 'Positive reinforcement'],
    features: [
      { title: 'Zen Marketplace', desc: 'Redeem coins for yoga gear, retreat vouchers, and wellness products.' },
      { title: 'Gift of Presence', desc: 'Donate your earned credits to mindfulness education in schools.' },
      { title: 'Leaderboards', desc: 'Friendly competition to see who can maintain the longest streaks.' }
    ]
  },
  'global-engagement': {
    title: 'Global Sangha',
    subtitle: 'Connect with a global community of practitioners',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Join a worldwide community of conscious professionals. Share experiences, insights, and collective energy across borders.',
    benefits: ['Cultural exchange', 'Shared wisdom', 'Global support', 'Sense of belonging'],
    features: [
      { title: 'Wisdom Exchange', desc: 'Live webinars with master teachers from various traditions.' },
      { title: 'Regional Shalas', desc: 'Find local practitioners for in-person flow meetups.' },
      { title: 'Translation Zen', desc: 'Real-time translation for global community discussions.' }
    ]
  },
  'holistic-wellness': {
    title: '8 Pillars Program',
    subtitle: 'Complete yogic path for corporate health',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Our flagship program covering the eight limbs of yoga, adapted for the modern professional life.',
    benefits: ['Total life balance', 'Ethical leadership', 'Physical mastery', 'Spiritual grounding'],
    features: [
      { title: 'Pillar Progress', desc: 'Interactive tracking for each of the eight limbs of the program.' },
      { title: 'Master Classes', desc: 'Deep dives into anatomy, philosophy, and advanced asana.' },
      { title: 'Annual Retreat', desc: 'Exclusive access to our annual corporate sanctuary gathering.' }
    ]
  },
  'health-analytics': {
    title: 'Vitals Tracking',
    subtitle: 'Monitor stress levels and flexibility growth',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    color: 'sky',
    description: 'Data-driven insights into your well-being. See the tangible impact of your yoga practice on your physiological state.',
    benefits: ['Scientific validation', 'Personalized insights', 'Trend identification', 'Objective growth'],
    features: [
      { title: 'Biometric Sync', desc: 'Connect your wearable devices for a holistic health view.' },
      { title: 'Stress Heatmaps', desc: 'Visualize your stress peaks and valleys throughout the week.' },
      { title: 'Flexibility Score', desc: 'AI-calculated metrics on your physical range of motion.' }
    ]
  }
};

const SolutionDetail = () => {
  const { slug } = useParams();
  const data = solutionData[slug || 'steps-challenge'] || solutionData['steps-challenge'];
  
  return (
    <div className="pb-16 bg-brand-white overflow-hidden">
      {/* Header */}
      <section className="relative py-16 bg-sky-50/30">
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/solutions" className="inline-flex items-center gap-2 text-sky-600 font-bold mb-6 hover:-translate-x-1 transition-transform text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center text-white mb-6 shadow-lg"
              >
                {(() => {
                  const Icon = data.icon;
                  return <Icon className="w-7 h-7" />;
                })()}
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-serif italic text-sky-950 mb-3 tracking-tight">{data.title}</h1>
              <p className="text-lg text-sky-700 font-medium mb-8 leading-relaxed">
                {data.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-100 flex items-center gap-2 text-sm">
                  Begin the Journey
                  <Play className="w-4 h-4 fill-current" />
                </button>
                <button className="px-8 py-3 bg-white text-sky-900 border border-sky-100 rounded-full font-bold hover:bg-sky-50 transition-all text-sm">
                  Get Team Pricing
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video relative group"
              >
                <img src={data.image} alt={data.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Benefits */}
            <div className="lg:col-span-4">
              <div className="bg-sky-50/50 rounded-[2rem] p-8 border border-sky-100 sticky top-24">
                <h3 className="text-xl font-bold text-sky-900 mb-6">Core Benefits</h3>
                <ul className="space-y-4">
                  {data.benefits.map((benefit: string) => (
                    <li key={benefit} className="flex items-center gap-3 text-sky-800 font-bold text-xs uppercase tracking-wide">
                      <div className="w-5 h-5 rounded-full bg-sky-600 flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features & Description */}
            <div className="lg:col-span-8">
              <div className="mb-12">
                <h2 className="text-3xl font-serif italic text-sky-900 mb-4">Why {data.title}?</h2>
                <p className="text-lg text-sky-700 leading-relaxed font-medium">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features.map((feature: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] bg-white border border-sky-50 hover:shadow-xl hover:shadow-sky-100/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-5 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-sky-900 mb-2">{feature.title}</h4>
                    <p className="text-sky-600 leading-relaxed text-xs font-medium">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-16 container mx-auto px-6">
        <div className="bg-sky-600 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src={data.image} alt="Yoga CTA" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-4">Experience the transformation</h2>
            <p className="text-lg text-sky-50 max-w-xl mx-auto mb-8 opacity-90">
              Join thousands of professionals already thriving with {data.title}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-sky-600 rounded-full font-bold hover:bg-sky-50 transition-all shadow-xl shadow-black/10 text-sm">
                Book a Demo
              </button>
              <button className="px-8 py-3 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all text-sm">
                View Sample Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;
