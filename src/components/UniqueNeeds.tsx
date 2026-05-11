import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, Heart, Brain, Baby, Flame, 
  UserRound, Smile, Users, User, Calendar,
  Wind, Moon, Trophy, ArrowRight
} from 'lucide-react';

const UniqueNeeds = () => {
  const programs = [
    {
      title: 'Strength & Mobility',
      desc: 'Build flexibility, core strength, posture, and endurance through mindful movement and functional training.',
      image: '/1.png',
      icon: Dumbbell
    },
    {
      title: 'Recovery & Pain Relief',
      desc: 'Ease back pain, neck tension, joint stiffness, and muscular stress with guided therapeutic movement.',
      image: '/2.png',
      icon: Heart
    },
    {
      title: 'Stress Relief & Mindfulness',
      desc: 'Reduce anxiety, calm the nervous system, and improve emotional balance through breathwork and meditation.',
      image: '/3.png',
      icon: Brain
    },
    {
      title: 'Prenatal & Motherhood Wellness',
      desc: 'Support your body and mind during pregnancy and postpartum recovery with safe, nurturing wellness practices.',
      image: '/4.png',
      icon: Baby
    },
    {
      title: 'Weight Loss & Fitness',
      desc: 'Burn calories, improve stamina, and transform your lifestyle through yoga-based fitness and functional workouts.',
      image: '/5.png',
      icon: Flame
    },
    {
      title: 'Senior Wellness',
      desc: 'Gentle sessions focused on mobility, balance, flexibility, breathing, and healthy aging.',
      image: '/6.png',
      icon: UserRound
    },
    {
      title: 'Kids Wellness',
      desc: 'Fun and engaging movement sessions that improve focus, confidence, flexibility, and mindfulness in children.',
      image: '/7.png',
      icon: Smile
    },
    {
      title: 'Community Wellness Sessions',
      desc: 'Experience motivation, accountability, and positive energy through interactive live group sessions.',
      image: '/8.png',
      icon: Users
    },
    {
      title: 'Personal Wellness Coaching',
      desc: 'Customized 1-on-1 sessions designed around your body, goals, schedule, and lifestyle.',
      image: '/9.png',
      icon: User
    },
    {
      title: 'Wellness Challenges & Programs',
      desc: 'Join guided transformation journeys focused on consistency, fitness, mindfulness, and healthy habits.',
      image: '/10.png',
      icon: Trophy
    }
  ];

  const subPrograms = [
    {
      title: 'Breathwork & Pranayama',
      desc: 'Powerful breathing techniques to improve focus, energy, sleep, and stress management naturally.',
      image: '/11.png',
      icon: Wind
    },
    {
      title: 'Meditation & Mental Wellness',
      desc: 'Guided meditation practices to improve clarity, emotional balance, mindfulness, and inner calm.',
      image: '/12.png',
      icon: Moon
    },
    {
      title: 'Wellness Challenges & Programs',
      desc: 'Join guided transformation journeys focused on consistency, fitness, mindfulness, and healthy habits.',
      image: '/13.png',
      icon: Calendar
    }
  ];

  return (
    <section className="py-24 bg-white text-sky-950 overflow-hidden">
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
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with Rounded Corners */}
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Floating Icon Badge */}
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  <program.icon className="w-5 h-5" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors leading-tight">
                  {program.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {program.desc}
                </p>
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
              className="relative group cursor-pointer rounded-2xl bg-orange-50/30 overflow-hidden flex h-32 md:h-40 border border-orange-100/50"
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
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                    <program.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-orange-500 transition-colors">
                    {program.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed line-clamp-3">
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
          className="rounded-[2.5rem] bg-orange-50/50 py-6 px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-orange-100"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm border border-orange-100">
              <Smile className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-xl md:text-2xl font-bold font-serif">Start Your Wellness Journey Today</h4>
              <p className="text-slate-500 font-medium">Move better. Breathe deeper. Live healthier.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-sm shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all">
              EXPLORE PROGRAMS
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-orange-600 border border-orange-200 rounded-full font-bold text-sm hover:bg-orange-50 transition-all flex items-center justify-center gap-2">
              BOOK FREE CONSULTATION <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueNeeds;
