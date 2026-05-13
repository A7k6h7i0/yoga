import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, Heart, Brain, Baby, Flame, 
  UserRound, Smile, Users, User, Calendar,
  Wind, Moon, Trophy, ArrowRight, X, CheckCircle2, Target, Sparkles
} from 'lucide-react';

const UniqueNeeds = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      title: 'Strength & Mobility',
      tagline: 'Move Better. Feel Stronger.',
      desc: 'Build flexibility, core strength, posture, and endurance through mindful movement and functional training.',
      image: '/1.png',
      icon: Dumbbell,
      overview: 'Improve flexibility, posture, core strength, balance, and endurance through guided movement practices designed for all fitness levels. Our sessions combine yoga-inspired mobility, functional training, stretching, and mindful movement to help you feel stronger and more energized in daily life.',
      details: 'Whether you’re looking to improve athletic performance, increase flexibility, or simply move without stiffness, our expert-led sessions help you build a healthier and more capable body.',
      benefits: ['Improve flexibility & mobility', 'Build strength & stability', 'Enhance posture & balance', 'Increase energy & endurance']
    },
    {
      title: 'Recovery & Pain Relief',
      tagline: 'Gentle Movement for Lasting Relief',
      desc: 'Ease back pain, neck tension, joint stiffness, and muscular stress with guided therapeutic movement.',
      image: '/2.png',
      icon: Heart,
      overview: 'Designed for people dealing with back pain, neck tension, joint stiffness, poor posture, or muscular discomfort, these sessions focus on therapeutic movement, stretching, mobility, and relaxation techniques.',
      details: 'Our approach helps release tension, improve alignment, and restore ease in the body through safe and mindful practices.',
      benefits: ['Relieve back & neck pain', 'Reduce stiffness & tension', 'Improve posture & alignment', 'Support recovery & mobility']
    },
    {
      title: 'Stress Relief & Mindfulness',
      tagline: 'Restore Calm & Mental Balance',
      desc: 'Reduce anxiety, calm the nervous system, and improve emotional balance through breathwork and meditation.',
      image: '/3.png',
      icon: Brain,
      overview: 'Modern life can feel overwhelming. Our mindfulness sessions combine gentle movement, breathwork, relaxation, and meditation techniques to help reduce stress, calm the nervous system, and improve emotional wellness.',
      details: 'Take time to slow down, breathe deeply, and reconnect with yourself.',
      benefits: ['Reduce stress & anxiety', 'Improve focus & clarity', 'Calm the mind naturally', 'Enhance emotional wellness']
    },
    {
      title: 'Prenatal & Motherhood Wellness',
      tagline: 'Support Through Every Stage of Motherhood',
      desc: 'Support your body and mind during pregnancy and postpartum recovery with safe, nurturing wellness practices.',
      image: '/4.png',
      icon: Baby,
      overview: 'Safe, nurturing wellness sessions designed for pregnancy, fertility support, and postpartum recovery. These gentle practices help improve mobility, relaxation, breathing, circulation, and emotional well-being during this important journey.',
      details: 'Every session is carefully adapted to support both mother and baby safely.',
      benefits: ['Improve relaxation & sleep', 'Reduce pregnancy discomfort', 'Support postpartum recovery', 'Gentle & safe movement practices']
    },
    {
      title: 'Weight Loss & Fitness',
      tagline: 'Transform Your Energy & Lifestyle',
      desc: 'Burn calories, improve stamina, and transform your lifestyle through yoga-based fitness and functional workouts.',
      image: '/5.png',
      icon: Flame,
      overview: 'Achieve your fitness goals through a balanced combination of yoga-based workouts, strength training, mobility exercises, and mindful movement practices.',
      details: 'These sessions are designed to improve stamina, burn calories, increase metabolism, and help you build healthy long-term habits.',
      benefits: ['Burn calories naturally', 'Improve strength & stamina', 'Boost metabolism & energy', 'Build a sustainable healthy lifestyle']
    },
    {
      title: 'Senior Wellness',
      tagline: 'Wellness for Healthy Aging',
      desc: 'Gentle sessions focused on mobility, balance, flexibility, breathing, and healthy aging.',
      image: '/6.png',
      icon: UserRound,
      overview: 'Gentle and supportive sessions focused on improving mobility, flexibility, balance, breathing, and overall well-being for older adults.',
      details: 'Our low-impact approach helps seniors stay active, independent, and confident while reducing stiffness and improving daily movement.',
      benefits: ['Improve balance & flexibility', 'Increase mobility safely', 'Support healthy aging', 'Reduce stiffness & discomfort']
    },
    {
      title: 'Kids Wellness',
      tagline: 'Fun, Active & Mindful Learning',
      desc: 'Fun and engaging movement sessions that improve focus, confidence, flexibility, and mindfulness in children.',
      image: '/7.png',
      icon: Smile,
      overview: 'Interactive wellness sessions designed to help children improve flexibility, focus, coordination, confidence, and emotional balance through movement, breathing, and mindfulness activities.',
      details: 'Classes are engaging, playful, and age-appropriate to help kids stay active while having fun.',
      benefits: ['Improve focus & concentration', 'Build flexibility & coordination', 'Encourage confidence & mindfulness', 'Healthy movement habits for kids']
    },
    {
      title: 'Community Wellness Sessions',
      tagline: 'Wellness Together Feels Better',
      desc: 'Experience motivation, accountability, and positive energy through interactive live group sessions.',
      image: '/8.png',
      icon: Users,
      overview: 'Join a supportive community through live group wellness sessions designed to motivate, energize, and inspire consistency.',
      details: 'Experience the positive energy of practicing together while receiving expert guidance in real time.',
      benefits: ['Stay motivated & accountable', 'Experience community support', 'Interactive live sessions', 'Suitable for all levels']
    },
    {
      title: 'Personal Wellness Coaching',
      tagline: 'Personalized Guidance for Your Goals',
      desc: 'Customized 1-on-1 sessions designed around your body, goals, schedule, and lifestyle.',
      image: '/9.png',
      icon: User,
      overview: 'Receive customized 1-on-1 wellness sessions tailored specifically to your body, goals, schedule, and lifestyle.',
      details: 'Whether your focus is flexibility, recovery, fitness, stress management, or overall wellness, your program is designed entirely around your needs.',
      benefits: ['Personalized wellness plans', 'Dedicated expert attention', 'Flexible scheduling', 'Faster progress & support']
    },
    {
      title: 'Wellness Challenges & Programs',
      tagline: 'Build Healthy Habits That Last',
      desc: 'Join guided transformation journeys focused on consistency, fitness, mindfulness, and healthy habits.',
      image: '/10.png',
      icon: Trophy,
      overview: 'Join guided wellness challenges and transformation programs designed to help you stay consistent, motivated, and accountable in your wellness journey.',
      details: 'From flexibility and fitness goals to mindfulness and lifestyle improvements, our programs help create lasting positive change.',
      benefits: ['Stay consistent & motivated', 'Track your wellness progress', 'Build healthy routines', 'Transform mind & body naturally']
    }
  ];

  const subPrograms = [
    {
      title: 'Breathwork & Pranayama',
      tagline: 'Breathe Better. Live Better.',
      desc: 'Powerful breathing techniques to improve focus, energy, sleep, and stress management naturally.',
      image: '/11.png',
      icon: Wind,
      overview: 'Discover the power of conscious breathing techniques that help improve focus, energy, sleep quality, emotional balance, and stress management.',
      details: 'These guided pranayama sessions help calm the mind while energizing the body naturally.',
      benefits: ['Reduce stress quickly', 'Improve energy & focus', 'Support better sleep', 'Calm the nervous system']
    },
    {
      title: 'Meditation & Mental Wellness',
      tagline: 'Find Stillness in a Busy World',
      desc: 'Guided meditation practices to improve clarity, emotional balance, mindfulness, and inner calm.',
      image: '/12.png',
      icon: Moon,
      overview: 'Guided meditation sessions designed to help you relax deeply, improve clarity, reduce overthinking, and build emotional resilience.',
      details: 'Learn simple mindfulness practices that can bring calm and balance into your everyday life.',
      benefits: ['Improve mental clarity', 'Reduce anxiety & overthinking', 'Build mindfulness & calm', 'Enhance emotional balance']
    },
    {
      title: 'Challenges & Transformation',
      tagline: 'Build Healthy Habits That Last',
      desc: 'Join guided transformation journeys focused on consistency, fitness, mindfulness, and healthy habits.',
      image: '/13.png',
      icon: Calendar,
      overview: 'Join guided wellness challenges and transformation programs designed to help you stay consistent, motivated, and accountable in your wellness journey.',
      details: 'From flexibility and fitness goals to mindfulness and lifestyle improvements, our programs help create lasting positive change.',
      benefits: ['Stay consistent & motivated', 'Track your wellness progress', 'Build healthy routines', 'Transform mind & body naturally']
    }
  ];

  return (
    <section className="py-24 bg-white text-sky-950 overflow-hidden relative">
      <div className="w-full px-4 md:px-8 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Wellness Programs for Every Lifestyle</h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">
            Personalized wellness experiences designed to help you move better, feel stronger, reduce stress, and live healthier.
          </p>
        </div>
        
        {/* Main Grid: 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedProgram(program)}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with Rounded Corners */}
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/3] shadow-md border border-slate-100">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                
                {/* Floating Icon Badge */}
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg z-10 transform group-hover:scale-110 transition-transform">
                  <program.icon className="w-5 h-5" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors leading-tight">
                  {program.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2">
                  {program.desc}
                </p>
                <div className="flex items-center gap-1 text-orange-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-Programs Row (Wider Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {subPrograms.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (idx * 0.1) }}
              onClick={() => setSelectedProgram(program)}
              className="relative group cursor-pointer rounded-3xl bg-orange-50/20 overflow-hidden flex h-32 md:h-40 border border-orange-100/40 hover:bg-white hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500"
            >
              <div className="w-[40%] overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="w-[60%] p-4 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <program.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-orange-500 transition-colors">
                    {program.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed line-clamp-2">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-[#FFF8F2] py-8 px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-orange-100"
        >
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center text-orange-500 shadow-xl shadow-orange-100/50 border border-orange-50">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h4 className="text-2xl md:text-3xl font-bold font-serif mb-1">Start Your Wellness Journey</h4>
              <p className="text-slate-500 font-medium">Move better. Breathe deeper. Live healthier.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-[20%] lg:w-auto">
            <button className="w-[40%] sm:w-auto px-10 py-4 bg-orange-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-orange-200 hover:bg-slate-900 transition-all duration-300">
              EXPLORE ALL PROGRAMS
            </button>
            <button className="w-[20%] sm:w-auto px-10 py-4 bg-white text-orange-600 border border-orange-100 rounded-2xl font-bold text-sm hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2">
              BOOK FREE CONSULTATION <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl z-[101] overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner */}
              <div className="relative h-56 md:h-72 shrink-0">
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-6 right-6 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-orange-500 transition-colors shadow-lg"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-6 left-10 flex items-center gap-5">
                  <div className="w-16 h-16 bg-orange-500 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-orange-500/40">
                    <selectedProgram.icon size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-none mb-2">
                      {selectedProgram.title}
                    </h2>
                    <p className="text-orange-600 font-bold text-sm uppercase tracking-[0.2em]">
                      {selectedProgram.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-10 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-10">
                  <div className="bg-orange-50/30 p-8 rounded-[2rem] border border-orange-100/50">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-orange-500" /> Overview
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg italic font-serif">
                      {selectedProgram.overview}
                    </p>
                  </div>

                  <div className="space-y-6">
                     <p className="text-slate-600 leading-relaxed">
                        {selectedProgram.details}
                     </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                       <Sparkles className="w-6 h-6 text-orange-500" /> Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProgram.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-orange-200 transition-colors">
                           <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                           <span className="text-slate-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 hover:bg-slate-900 transition-all duration-300">
                    Start Today
                  </button>
                  <button className="flex-1 bg-white text-slate-900 border border-slate-200 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300">
                    Free Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UniqueNeeds;

