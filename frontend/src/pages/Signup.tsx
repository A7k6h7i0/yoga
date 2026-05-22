import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Lock, ArrowRight, Phone, Check, ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
import { apiClient } from '../lib/api';
import { SHOW_LOGIN } from '../config/auth';

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

type OtpStartResponse = {
  message: string;
  email: string;
};

type ResendOtpResponse = {
  message: string;
  email: string;
};

const ONBOARDING_OPTIONS = [
  'Build Strength',
  'Increase Flexibility',
  'Boost Energy Levels',
  'Reduce Aches and Pain',
  'Stress Relief',
  'Lose Weight',
  'Manage a Health Condition',
  'Sports Injury',
  'Prenatal or Postnatal',
];

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get role from search params or default to 'livefit'
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role') || 'livefit';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '' });
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [otp, setOtp] = useState('');
  const [otpEmail, setOtpEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleFocusToggle = (option: string) => {
    if (selectedFocus.includes(option)) {
      setSelectedFocus(selectedFocus.filter((item) => item !== option));
    } else {
      setSelectedFocus([...selectedFocus, option]);
    }
  };

  const handleSendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await apiClient.post<OtpStartResponse>('/api/auth/signup', {
        ...formData,
        role,
        focusAreas: selectedFocus,
      });
      setOtpEmail(res.data.email || formData.email.trim().toLowerCase());
      setOtp('');
      setStep(3);
      setError('');
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || 'Something went wrong');
      } else {
        setError('Something went wrong');
      }
      setStep(1); // Go back to first step to fix errors
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await apiClient.post<AuthResponse>('/api/auth/signup/verify', {
        email: otpEmail || formData.email,
        otp,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      navigate('/workfit');
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || 'Something went wrong');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    setError('');
    try {
      const res = await apiClient.post<ResendOtpResponse>('/api/auth/signup/resend-otp', {
        email: otpEmail || formData.email,
      });
      setOtpEmail(res.data.email || otpEmail || formData.email.trim().toLowerCase());
      setOtp('');
      setError('');
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || 'Could not resend OTP');
      } else {
        setError('Could not resend OTP');
      }
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center px-6 pt-28 pb-12">
      <div className="max-w-xl w-full">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-orange-100"
            >
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-3xl font-serif text-sky-950 font-bold mb-2">Create Account</h1>
                <p className="text-sky-900/50 text-sm font-bold uppercase tracking-widest">
                  Join the LiveFit {role === 'workfit' ? 'WorkFit' : 'Community'}
                </p>
              </div>

              {error && <p className="text-red-500 text-xs font-bold text-center mb-6">{error}</p>}

              <form className="space-y-6" onSubmit={handleNextStep}>
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
                  <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-3">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950"
                      placeholder="+1 (555) 000-0000"
                    />
                    <Phone className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
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

                <button
                  type="submit"
                  className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-100 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
                >
                  Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {SHOW_LOGIN && (
                <div className="mt-10 pt-8 border-t border-slate-50 text-center">
                  <p className="text-sm text-sky-900/50 font-medium mb-4">Already have an account?</p>
                  <button
                    onClick={() => navigate('/login')}
                    className="text-sky-950 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 mx-auto hover:text-orange-500 transition-colors"
                  >
                    Login Instead <ArrowRight className="w-3 h-3 text-orange-500" />
                  </button>
                </div>
              )}
            </motion.div>
          ) : step === 2 ? (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-orange-100"
            >
              {/* Back Button */}
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-sky-950/60 font-semibold text-sm hover:text-orange-500 transition-colors mb-6"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              <h1 className="text-4xl font-sans text-sky-950 font-bold mb-2 tracking-tight">
                What would you like to focus on?
              </h1>
              <p className="text-sky-900/40 text-sm font-medium mb-8">
                You can select multiple
              </p>

              {error && <p className="text-red-500 text-xs font-bold text-center mb-6">{error}</p>}

              {/* Options list exactly mimicking standard Android/iOS premium choice design */}
              <div className="space-y-3 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {ONBOARDING_OPTIONS.map((option) => {
                  const isSelected = selectedFocus.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleFocusToggle(option)}
                      className={`w-full p-5 rounded-2xl flex items-center justify-between text-left transition-all border ${
                        isSelected
                          ? 'bg-[#fff8f5] border-orange-300 text-orange-600 font-bold shadow-md shadow-orange-50/50 scale-[1.01]'
                          : 'bg-slate-50 border-slate-100 text-sky-950 hover:bg-slate-100/50 font-medium'
                      }`}
                    >
                      <span className="text-base tracking-wide">{option}</span>
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors border ${
                          isSelected
                            ? 'bg-orange-500 border-orange-500 text-white'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Continue orange button */}
              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full py-5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-100 hover:shadow-orange-200 transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-orange-100"
            >
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-sky-950/60 font-semibold text-sm hover:text-orange-500 transition-colors mb-6"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-3xl font-serif text-sky-950 font-bold mb-2">Verify Your Email</h1>
                <p className="text-sky-900/50 text-sm font-bold uppercase tracking-widest">
                  Enter the OTP sent to {otpEmail || formData.email}
                </p>
              </div>

              {error && <p className="text-red-500 text-xs font-bold text-center mb-6">{error}</p>}

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-sky-950 uppercase tracking-[0.2em] mb-3">OTP</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-sky-950 tracking-[0.35em] text-center text-lg"
                    placeholder="123456"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length !== 6}
                  className="w-full py-5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-orange-100 hover:shadow-orange-200 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Verifying...' : 'Verify OTP & Create Account'}
                </button>

                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendLoading}
                  className="w-full py-4 rounded-2xl border border-sky-100 text-sky-900 font-black uppercase tracking-[0.2em] text-[10px] disabled:opacity-50"
                >
                  {resendLoading ? 'Resending...' : 'Resend OTP'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Signup;
