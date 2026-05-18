import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, Calendar, Globe, ArrowRight, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OneOnOne = () => {
  const navigate = useNavigate();

  const navigateToHowItWorks = () => {
    navigate('/how-it-works');
  };

  return (
    <section className="py-24 bg-[#FFFAF5] text-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Column */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">
                Personalized. Purposeful. Powerful.
              </h4>
              <h2 className="text-3xl md:text-[34px] font-bold mb-4 leading-[1.2] text-slate-900">
                One-on-One Wellness Coaching <br className="hidden lg:block" />
                Backed by <span className="text-orange-500">Yoga, Workouts & Programs</span>
              </h2>
              
              <div className="w-12 h-1 bg-orange-500 mb-8 rounded-full"></div>
              
              <p className="text-[15px] text-slate-600 mb-12 leading-relaxed">
                Get fully personalized guidance designed around your body, goals, lifestyle, and challenges. Our expert coaches combine the power of yoga, functional training, mindfulness, and structured programs to help you move better, feel stronger, reduce stress, and create lasting habits.
              </p>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: User,
                    title: 'Personalized for You',
                    desc: 'Customized plans and session sequencing based on your body type, goals, and current condition.'
                  },
                  {
                    icon: Activity,
                    title: 'Real-Time Guidance',
                    desc: 'Live posture corrections, alignment cues, and modifications to ensure safe and effective practices.'
                  },
                  {
                    icon: Calendar,
                    title: 'Flexible & Convenient',
                    desc: 'Choose timings that suit your schedule with complete flexibility—anytime, anywhere.'
                  },
                  {
                    icon: Globe,
                    title: 'Learn from the Best',
                    desc: 'Direct access to world-class Indian wellness experts with years of experience and authentic training.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full border border-orange-100 flex items-center justify-center bg-white shrink-0 shadow-sm relative overflow-hidden group">
                      <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <item.icon className="w-6 h-6 text-orange-500 relative z-10" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed pr-4">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <button 
                  onClick={() => navigate('/livefitinquiry')}
                  className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2 hover:-translate-y-0.5"
                >
                  Book Your Personalized Session <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={navigateToHowItWorks}
                  className="px-6 py-4 text-slate-700 font-bold hover:text-orange-500 transition-colors flex items-center gap-3 group border border-orange-500 rounded-full"
                >
                  <PlayCircle className="w-7 h-7 text-slate-800 group-hover:text-orange-500 transition-colors" strokeWidth={1.5} /> 
                  How It Works
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Image/Mock Column */}
          <div className="lg:w-1/2 w-full relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full drop-shadow-2xl"
             >
               <img 
                 src="/oneonone.png" 
                 alt="One-on-One Yoga Session Interface" 
                 className="w-full h-auto object-contain"
               />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneOnOne;
