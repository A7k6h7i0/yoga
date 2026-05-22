import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  Brain, 
  Flame, 
  Smile, 
  Wind, 
  Sun, 
  Moon, 
  Clock, 
  BedDouble, 
  Zap, 
  Leaf,
  Calendar,
  BarChart3,
  Target,
  X,
  CheckCircle2
} from 'lucide-react';

const categories = [
  'All Programs',
  'Fitness',
  'Yoga',
  'Mindfulness',
  'Nutrition',
  'Lifestyle'
];

function Programs() {
  const [activeCategory, setActiveCategory] = useState('All Programs');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programsWellness = [
    {
      title: '30-Day Weight Loss Challenge',
      desc: 'A holistic plan combining fitness, yoga, mindful eating, and lifestyle habits to help you shed weight safely and sustainably.',
      image: '/Hab1.png',
      icon: Flame,
      days: '30 Days',
      level: 'All Levels',
      category: 'Fitness',
      color: 'bg-green-500',
      overview: "Transform your lifestyle with a sustainable wellness approach that combines yoga, mindful movement, fitness, breathwork, and healthy nutrition habits. This challenge is designed to help you lose weight naturally while improving your energy, confidence, and consistency.",
      follow: [
        "Daily guided workout sessions",
        "Beginner-friendly yoga flows",
        "Mobility and calorie-burning routines",
        "Mindful eating practices",
        "Breathwork for cravings and stress control",
        "Weekly progress tracking",
        "Habit-building challenges"
      ],
      bestFor: [
        "Weight management",
        "Low energy levels",
        "Sedentary lifestyles",
        "Building fitness consistency"
      ]
    },
    {
      title: '30-Day Sun Salutation Challenge',
      desc: 'Build discipline, flexibility, stamina, and inner focus through the daily practice of Sun Salutations.',
      image: '/Hab2.png',
      icon: Sun,
      days: '30 Days',
      level: 'Beginner to Advanced',
      category: 'Yoga',
      color: 'bg-orange-500',
      overview: "Build discipline, flexibility, stamina, and inner focus through the daily practice of Sun Salutations. This challenge helps improve mobility, posture, circulation, and overall physical vitality.",
      follow: [
        "Daily guided Surya Namaskar practice",
        "Step-by-step posture guidance",
        "Breath synchronization techniques",
        "Warm-up and cooldown routines",
        "Flexibility and endurance progression",
        "Daily consistency tracking"
      ],
      bestFor: [
        "Beginners and regular practitioners",
        "Full-body mobility",
        "Morning wellness routines",
        "Energy and flexibility improvement"
      ]
    },
    {
      title: '30-Day Meditation Challenge',
      desc: 'Cultivate calm, reduce stress, and improve focus with guided daily meditation practices.',
      image: '/Hab3.png',
      icon: Brain,
      days: '30 Days',
      level: 'All Levels',
      category: 'Mindfulness',
      color: 'bg-purple-500',
      overview: "Develop calmness, clarity, and emotional balance through guided meditation and mindfulness practices. Learn how to reduce stress, improve focus, and create mental space in your daily life.",
      follow: [
        "Daily guided meditation sessions",
        "Breath awareness practices",
        "Stress-relief techniques",
        "Mindfulness exercises",
        "Sleep and relaxation meditations",
        "Focus and emotional wellness practices"
      ],
      bestFor: [
        "Stress reduction",
        "Mental clarity",
        "Anxiety management",
        "Better sleep and emotional balance"
      ]
    },
    {
      title: '30-Day Intermittent Fasting',
      desc: 'Reset your eating habits, improve metabolism, and boost energy with a structured fasting program.',
      image: '/Hab4.png',
      icon: Clock,
      days: '30 Days',
      level: 'All Levels',
      category: 'Nutrition',
      color: 'bg-emerald-500',
      overview: "Reset your eating habits and improve metabolic wellness with a structured intermittent fasting approach supported by mindful lifestyle guidance and wellness coaching.",
      follow: [
        "Beginner-friendly fasting schedules",
        "Meal timing guidance",
        "Hydration tracking",
        "Yoga and movement support",
        "Energy and hunger management techniques",
        "Healthy nutrition habits",
        "Wellness check-ins"
      ],
      bestFor: [
        "Metabolic wellness",
        "Energy improvement",
        "Better eating habits",
        "Mindful nutrition routines"
      ]
    },
    {
      title: '30-Day Strength & Mobility',
      desc: 'Improve strength, mobility, and posture with functional workouts and yoga-inspired movement.',
      image: '/Hab5.png',
      icon: Dumbbell,
      days: '30 Days',
      level: 'All Levels',
      category: 'Fitness',
      color: 'bg-blue-500',
      overview: "Improve posture, flexibility, mobility, and functional strength through guided movement practices inspired by yoga and fitness training.",
      follow: [
        "Daily strength and mobility sessions",
        "Joint mobility exercises",
        "Functional movement training",
        "Stretching and flexibility routines",
        "Posture correction exercises",
        "Recovery and breathwork sessions"
      ],
      bestFor: [
        "Desk workers",
        "Back stiffness and tightness",
        "Active aging",
        "Building functional fitness"
      ]
    },
    {
      title: '30-Day Better Sleep Challenge',
      desc: 'Establish a calming nighttime routine, reduce stress, and improve sleep quality naturally.',
      image: '/Hab6.png',
      icon: BedDouble,
      days: '30 Days',
      level: 'All Levels',
      category: 'Lifestyle',
      color: 'bg-rose-500',
      overview: "Create healthier sleep habits and improve recovery through relaxation practices, breathwork, mindfulness, and nighttime wellness routines.",
      follow: [
        "Evening relaxation sessions",
        "Guided breathwork for sleep",
        "Screen-detox wellness habits",
        "Gentle stretches and mobility",
        "Sleep-focused meditation",
        "Nervous system relaxation techniques"
      ],
      bestFor: [
        "Poor sleep quality",
        "Stress and burnout",
        "Mental fatigue",
        "Recovery and relaxation"
      ]
    },
    {
      title: '30-Day Healthy Habits Challenge',
      desc: 'Build lasting habits with daily actions around nutrition, movement, mindfulness, and self-care.',
      image: '/Hab7.png',
      icon: Leaf,
      days: '30 Days',
      level: 'All Levels',
      category: 'Lifestyle',
      color: 'bg-teal-500',
      overview: "Build a healthier lifestyle one small step at a time. This challenge focuses on creating sustainable daily routines around wellness, movement, nutrition, mindfulness, and self-care.",
      follow: [
        "Daily wellness habit tracker",
        "Movement and activity goals",
        "Hydration and nutrition reminders",
        "Journaling and mindfulness prompts",
        "Breathwork and stretching routines",
        "Weekly wellness reflections"
      ],
      bestFor: [
        "Lifestyle transformation",
        "Building consistency",
        "Self-discipline",
        "Everyday wellness improvement"
      ]
    },
    {
      title: '30-Day Energy Boost Challenge',
      desc: 'Boost stamina, strength, and mental clarity with a mix of yoga, fitness, breathwork, and nutrition.',
      image: '/Hab8.png',
      icon: Zap,
      days: '30 Days',
      level: 'All Levels',
      category: 'Fitness',
      color: 'bg-amber-500',
      overview: "Boost your physical and mental energy through a combination of yoga, movement, recovery, breathwork, and healthy daily habits designed to help you feel lighter, stronger, and more active.",
      follow: [
        "Energizing morning routines",
        "Yoga and fitness sessions",
        "Breathwork for stamina and focus",
        "Mobility and recovery exercises",
        "Nutrition and hydration habits",
        "Wellness accountability tracking"
      ],
      bestFor: [
        "Low energy and fatigue",
        "Busy professionals",
        "Active lifestyle improvement",
        "Daily motivation and productivity"
      ]
    },
  ];

  const filteredPrograms = activeCategory === 'All Programs' 
    ? programsWellness 
    : programsWellness.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-sky-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            Programs & Challenges
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-serif text-brand-dark mb-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.05 }}
          >
            Programs That Transform Habits
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          >
            Join expert-designed 30-day programs and challenges that help you build discipline, stay motivated, and create lasting
            change one day at a time.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program, index) => (
              <motion.div
                layout
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: index * 0.04 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedProgram(program)}
                className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-brand-primary px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      View Details
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 left-4 p-2.5 rounded-xl text-white shadow-lg ${program.color} transform group-hover:scale-110 transition-transform`}>
                    <program.icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-dark mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">{program.desc}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-brand-primary" />
                      {program.days}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart3 size={14} className="text-brand-primary" />
                      {program.level}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Bar */}
        <motion.div
          className="mt-16 bg-[#FFF4E8]/50 rounded-full py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-orange-100/50"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm">
              <Target size={20} />
            </div>
            <p className="text-gray-700 font-medium italic">
              "One Commitment. 30 Days. <span className="text-brand-primary">A healthier, stronger, calmer you.</span>"
            </p>
          </div>
          <button
            className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-brand-dark/20 uppercase text-xs tracking-widest"
            onClick={() => window.open('https://www.youtube.com/@Livefit4U', '_blank')}
          >
            Explore All Programs
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            />
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header/Image */}
              <div className="relative h-80 md:h-[400px] shrink-0">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover object-[center_top]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-500 hover:text-brand-primary transition-colors shadow-lg"
                >
                  <X size={20} />
                </button>
                <div className={`absolute bottom-6 left-8 p-3 rounded-2xl text-white shadow-xl ${selectedProgram.color}`}>
                  <selectedProgram.icon size={28} />
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                <h2 className="text-3xl font-bold text-brand-dark mb-2">{selectedProgram.title}</h2>
                <div className="flex gap-4 mb-8 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
                  <span className="bg-orange-50 px-3 py-1 rounded-full">{selectedProgram.days}</span>
                  <span className="bg-orange-50 px-3 py-1 rounded-full">{selectedProgram.level}</span>
                  <span className="bg-orange-50 px-3 py-1 rounded-full">{selectedProgram.category}</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-3 flex items-center gap-2">
                      <Target size={18} className="text-brand-primary" /> Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProgram.overview}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-4">What You'll Follow</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProgram.follow.map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-sky-50 rounded-3xl p-6">
                    <h3 className="text-lg font-bold text-brand-dark mb-4">Best For</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProgram.bestFor.map((item: string, i: number) => (
                        <span key={i} className="bg-white border border-orange-100 text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-full mt-10 bg-brand-primary text-white py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20 hover:shadow-brand-dark/20 uppercase tracking-widest text-sm">
                  Start This Challenge
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Programs;
