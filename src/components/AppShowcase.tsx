import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bell, Heart, Activity, Sparkles } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-sky-600 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-950 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sky-100 text-[10px] font-bold mb-6"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>A Personal Shala in Your Pocket</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
              Mindfulness <br /> <span className="text-sky-200">Simplified</span>
            </h2>
            
            <p className="text-lg text-sky-50 leading-relaxed mb-10 font-medium opacity-90 max-w-lg">
              Access curated yoga paths and meditation cycles anywhere. Track your flexibility, log your calm moments, and connect with your sangha—all in one beautiful space.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Bell, title: 'Gentle Reminders', desc: 'Customized notifications to help you maintain your daily flow.' },
                { icon: Activity, title: 'Vitality Metrics', desc: 'Sync with your wearables to track your physiological growth.' },
                { icon: Sparkles, title: 'Zen Rewards', desc: 'Earn Zen Coins for every session and redeem them for wellness gear.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-sky-100 opacity-80 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-8 py-3 bg-white text-sky-600 rounded-xl font-bold flex items-center gap-2 cursor-pointer hover:bg-sky-50 transition-all text-sm shadow-xl">
                Download for iOS
              </div>
              <div className="px-8 py-3 border border-white/20 text-white rounded-xl font-bold flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all text-sm">
                Download for Android
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 max-w-sm mx-auto"
            >
              <div className="relative rounded-[3rem] border-[8px] border-sky-950/20 bg-sky-950 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80" 
                  alt="Yoga App" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating App Card */}
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-1/4 bg-white p-4 rounded-2xl shadow-2xl text-sky-950 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-sky-400 uppercase">Focus Level</div>
                    <div className="text-sm font-bold">92% High</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
