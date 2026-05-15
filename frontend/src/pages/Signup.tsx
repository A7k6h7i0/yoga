import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-orange-100"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <User className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-3xl font-serif text-sky-950 font-bold mb-2">Create Account</h1>
          <p className="text-sky-900/50 text-sm font-bold uppercase tracking-widest">Join the LiveFit community</p>
        </div>

        {error && <p className="text-red-500 text-xs font-bold text-center mb-6">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-3">Full Name</label>
            <div className="relative">
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-3">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-3">Password</label>
            <div className="relative">
              <input 
                type="password" 
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950"
                placeholder="••••••••"
              />
              <Lock className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            </div>
          </div>

          <button type="submit" className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-100 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
            Sign Up <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-50 text-center">
          <p className="text-sm text-sky-900/50 font-medium mb-4">Already have an account?</p>
          <button 
            onClick={() => navigate('/login')}
            className="text-sky-950 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 mx-auto hover:text-orange-500 transition-colors"
          >
            Login Instead <ArrowRight className="w-3 h-3 text-orange-500" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
