import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

const Schedule = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const timings = [
    "Morning (6:00 AM - 9:00 AM)",
    "Late Morning (9:00 AM - 12:00 PM)",
    "Afternoon (12:00 PM - 3:00 PM)",
    "Late Afternoon (3:00 PM - 6:00 PM)",
    "Evening (6:00 PM - 9:00 PM)",
    "Late Night (9:00 PM - 12:00 AM)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#F5F5F3] px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-orange-100"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif text-sky-950 mb-4 font-bold">Request Received!</h2>
          <p className="text-sky-900/60 mb-8 leading-relaxed">
            Thank you for reaching out. Our team will review your preferred timings and get back to you at your email address shortly.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-sky-950 text-white rounded-full font-bold hover:bg-sky-900 transition-all uppercase tracking-widest text-xs"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F3] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 border border-orange-200 rounded-full bg-orange-50 text-orange-600 font-bold text-xs tracking-[0.1em] mb-6 uppercase">
            Booking & Schedule
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-sky-950 mb-8 leading-tight font-bold tracking-tight">
            Claim Your <br />
            <span className="text-orange-500 italic">Free Trial</span> Class
          </h1>
          <p className="text-xl text-sky-900/60 mb-12 leading-relaxed max-w-lg">
            Experience the transformation firsthand. Select your preferred time slot, and we'll match you with the perfect session.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-orange-50">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-sky-950 uppercase tracking-widest text-xs">Flexible Slots</h4>
                <p className="text-sm text-sky-900/50">Morning, Afternoon, or Evening</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-orange-50">
                <Calendar className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-sky-950 uppercase tracking-widest text-xs">Personalized Match</h4>
                <p className="text-sm text-sky-900/50">Based on your goals and level</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-orange-100 relative"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Calendar className="w-32 h-32 text-orange-500" />
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-8">
              <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                Preferred Timings
              </label>
              <div className="relative">
                <select 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium appearance-none"
                >
                  <option value="" disabled selected>Select a time slot</option>
                  {timings.map((time, idx) => (
                    <option key={idx} value={time}>{time}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                   <Clock className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                Your Email Address
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                   <Mail className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all flex items-center justify-center gap-3 group"
            >
              Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
              * We will contact you within 24 hours to <br /> confirm your session details.
            </p>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Schedule;
