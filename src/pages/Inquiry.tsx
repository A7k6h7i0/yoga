import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

const Inquiry = () => {
  const [submitted, setSubmitted] = useState(false);

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
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-orange-500" />
          </div>
          <h2 className="text-3xl font-serif text-sky-950 mb-4 font-bold">Message Sent!</h2>
          <p className="text-sky-900/60 mb-8 leading-relaxed">
            Thank you for your inquiry. One of our wellness consultants will reach out to you shortly to schedule your free consultation.
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 border border-orange-200 rounded-full bg-orange-50 text-orange-600 font-black text-[10px] tracking-[0.2em] mb-6 uppercase">
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-sky-950 font-bold mb-6">Free Consultation</h1>
          <p className="text-xl text-sky-900/60 max-w-2xl mx-auto">
            Take the first step towards a healthier lifestyle. Fill out the form below and we'll help you find the right path.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-orange-100"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-4">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950"
                />
                <User className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-4">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950"
                />
                <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-4">Inquiry Message</label>
              <div className="relative">
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your wellness goals..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950 resize-none"
                ></textarea>
                <MessageSquare className="absolute right-6 top-6 w-4 h-4 text-slate-300" />
              </div>
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-100 hover:bg-orange-600 transition-all flex items-center justify-center gap-3 group"
              >
                Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Inquiry;
