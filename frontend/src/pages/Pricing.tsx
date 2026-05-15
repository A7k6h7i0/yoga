import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Crown, Star } from 'lucide-react';
import { apiClient } from '../lib/api';

const plans = [
  {
    name: 'Starter',
    price: '29',
    features: ['3 Live Sessions/week', 'Access to Video Library', 'Community Support', 'Mobile App Access'],
    icon: Zap,
    color: 'border-blue-100',
    buttonColor: 'bg-sky-950',
    popular: false
  },
  {
    name: 'Premium',
    price: '59',
    features: ['Unlimited Live Sessions', 'One-on-One Consultation', 'Personalized Diet Plan', 'Priority Support'],
    icon: Star,
    color: 'border-orange-200',
    buttonColor: 'bg-orange-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '199',
    features: ['Corporate Wellness Program', 'Unlimited User Accounts', 'Dedicated Account Manager', 'Custom Analytics'],
    icon: Crown,
    color: 'border-purple-100',
    buttonColor: 'bg-purple-600',
    popular: false
  }
];

type CheckoutResponse = {
  url?: string;
};

const Pricing = () => {
  const handleCheckout = async (plan: (typeof plans)[number]) => {
    try {
      const res = await apiClient.post<CheckoutResponse>('/api/payment/create-checkout-session', {
        items: [{
          name: `${plan.name} Plan`,
          amount: parseInt(plan.price),
          quantity: 1
        }],
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/pricing`
      });

      if (res.data.url) {
        window.location.assign(res.data.url);
      }
    } catch (err) {
      console.error('Payment Error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-sky-950 mb-6 italic">Choose Your Journey</h1>
        <p className="text-sky-900/60 text-lg max-w-2xl mx-auto">Select a plan that fits your lifestyle and wellness goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-white rounded-[2.5rem] p-10 border-2 ${plan.color} relative shadow-xl overflow-hidden`}
          >
            {plan.popular && (
              <div className="absolute top-6 right-6 bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center ${plan.popular ? 'bg-orange-50 text-orange-500' : 'bg-slate-50 text-sky-950'}`}>
              <plan.icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-sky-950 mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-sky-950">${plan.price}</span>
              <span className="text-sky-900/40 font-bold uppercase tracking-widest text-xs">/ month</span>
            </div>

            <div className="space-y-4 mb-10">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-sm text-sky-900/60 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleCheckout(plan)}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs text-white shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${plan.buttonColor}`}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
