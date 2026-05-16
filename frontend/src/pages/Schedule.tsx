import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, CheckCircle2, ArrowRight, Globe2, MessageSquare, Target, Phone } from 'lucide-react';

const Schedule = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const timings = Array.from({ length: 8 }).map((_, i) => {
    const startHour = i * 3;
    const endHour = (i * 3 + 3) % 24;
    const formatHour = (h: number) => {
      const ampm = h >= 12 ? 'PM' : 'AM';
      const formatted = h % 12 === 0 ? 12 : h % 12;
      return `${formatted}:00 ${ampm}`;
    };
    return `${formatHour(startHour)} - ${formatHour(endHour)}`;
  });

  const timezones = [
    "UTC-12:00 Baker Island", "UTC-11:00 Niue, Samoa", "UTC-10:00 Hawaii-Aleutian Time",
    "UTC-09:00 Alaska Standard Time", "UTC-08:00 Pacific Time (US & Canada)",
    "UTC-07:00 Mountain Time (US & Canada)", "UTC-06:00 Central Time (US & Canada)",
    "UTC-05:00 Eastern Time (US & Canada)", "UTC-04:00 Atlantic Time (Canada)",
    "UTC-03:00 Argentina, Brazil", "UTC-02:00 South Georgia", "UTC-01:00 Azores, Cape Verde",
    "UTC+00:00 Greenwich Mean Time", "UTC+01:00 Central European Time",
    "UTC+02:00 Eastern European Time", "UTC+03:00 Moscow Time", "UTC+03:30 Iran Standard Time",
    "UTC+04:00 Gulf Standard Time", "UTC+04:30 Afghanistan Time", "UTC+05:00 Pakistan Standard Time",
    "UTC+05:30 Indian Standard Time", "UTC+05:45 Nepal Time", "UTC+06:00 Bangladesh Standard Time",
    "UTC+06:30 Myanmar", "UTC+07:00 Indochina Time", "UTC+08:00 China Standard Time",
    "UTC+08:45 Southeastern Western Australia", "UTC+09:00 Japan Standard Time",
    "UTC+09:30 Australian Central Standard Time", "UTC+10:00 Australian Eastern Standard Time",
    "UTC+11:00 Solomon Islands", "UTC+12:00 New Zealand Standard Time", "UTC+13:00 Tonga", "UTC+14:00 Line Islands"
  ];

  const inquiryOptions = [
    "LiveFit (Yoga & Wellness)",
    "WorkFit (Corporate Wellness)",
    "One-on-One Sessions",
    "Group Classes",
    "Custom Challenges",
    "Other"
  ];

  const [formData, setFormData] = useState({ inquiryFor: '', timezone: '', time: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await fetch(`${apiUrl}/api/contact/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                  Inquiry For
                </label>
                <div className="relative">
                  <select 
                    required
                    value={formData.inquiryFor}
                    onChange={(e) => setFormData({...formData, inquiryFor: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium appearance-none text-sm"
                  >
                    <option value="" disabled>Select option</option>
                    {inquiryOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <Target className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                  Timezone
                </label>
                <div className="relative">
                  <select 
                    required
                    value={formData.timezone}
                    onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium appearance-none text-sm"
                  >
                    <option value="" disabled>Select timezone</option>
                    {timezones.map((tz, idx) => (
                      <option key={idx} value={tz}>{tz}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <Globe2 className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Preferred Timings */}
              <div>
                <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                  Preferred Call Time
                </label>
                <div className="relative">
                  <select 
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium appearance-none text-sm"
                  >
                    <option value="" disabled>Select time</option>
                    {timings.map((time, idx) => (
                      <option key={idx} value={time}>{time}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <Clock className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium text-sm"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <Mail className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Contact Number (Optional) */}
              <div>
                <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                  Contact (Optional)
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium text-sm"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <Phone className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-8">
              <label className="block text-sky-950 font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                Additional Comments
              </label>
              <div className="relative">
                <textarea 
                  rows={3} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 pl-12 outline-none focus:border-orange-500 transition-all text-sky-950 font-medium resize-none text-sm"
                  placeholder="Tell us more about your requirements or any specific questions you have..."
                />
                <div className="absolute left-4 top-4 pointer-events-none">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Submit Request'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
