import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { apiClient } from '../lib/api';

type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    phone: string;
    email: string;
    role: 'livefit' | 'workfit';
    focusAreas: string[];
  };
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [activeRole, setActiveRole] = useState<'livefit' | 'workfit'>('livefit');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiClient.post<AuthResponse>('/api/auth/login', {
        ...formData,
        role: activeRole
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      if (res.data.user.role === 'workfit') {
        navigate('/workfit');
      } else {
        navigate('/');
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message || 'Invalid email or password');
        return;
      }

      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-orange-100"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <User className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-3xl font-serif text-sky-950 font-bold mb-2">Welcome Back</h1>
          <p className="text-sky-900/50 text-sm font-bold uppercase tracking-widest">Sign in to your LiveFit account</p>
        </div>

        {error && <p className="text-red-500 text-xs font-bold text-center mb-6">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Role selection tab switcher */}
          <div className="bg-slate-50 p-1.5 rounded-2xl flex relative border border-slate-100 mb-6">
            <button
              type="button"
              onClick={() => setActiveRole('livefit')}
              className={`flex-1 py-3 text-center rounded-xl text-[10px] font-black uppercase tracking-wider z-10 transition-all ${
                activeRole === 'livefit'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-sky-950/60 hover:text-sky-950'
              }`}
            >
              Personnel Wellness
            </button>
            <button
              type="button"
              onClick={() => setActiveRole('workfit')}
              className={`flex-1 py-3 text-center rounded-xl text-[10px] font-black uppercase tracking-wider z-10 transition-all ${
                activeRole === 'workfit'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-sky-950/60 hover:text-sky-950'
              }`}
            >
              Corporate Wellness
            </button>
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

          <div className="flex justify-end">
            <button type="button" className="text-[10px] font-black text-orange-500 uppercase tracking-widest hover:text-orange-600 transition-colors">Forgot Password?</button>
          </div>

          <button type="submit" className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-100 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
            Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-100 text-center space-y-4">
          <p className="text-sm text-sky-900/50 font-semibold mb-2">Don't have an account yet?</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/signup?role=livefit')}
              className="w-full py-4 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black uppercase tracking-wider text-[9px] sm:text-[10px] shadow-lg shadow-orange-100 transition-all flex items-center justify-center gap-2 group"
            >
              Create Livefit Login for personnel wellness
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/signup?role=workfit')}
              className="w-full py-4 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black uppercase tracking-wider text-[9px] sm:text-[10px] shadow-lg shadow-orange-100 transition-all flex items-center justify-center gap-2 group"
            >
              Create Workfit Login for corporate wellness
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
