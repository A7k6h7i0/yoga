import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Star, X } from 'lucide-react';
import { apiClient } from '../lib/api';
import { API_BASE_URL } from '../lib/env';

const BASE_URL = API_BASE_URL || 'http://localhost:5000';

type Plan = {
  id: 'monthly' | 'yearly';
  name: string;
  price: string;
  period: '/ month' | '/ year';
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  buttonColor: string;
  popular: boolean;
};

type PricingProps = {
  onAccessGranted?: () => void;
};

const plans: Plan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '29',
    period: '/ month',
    features: ['Live online sessions', 'Video library access', 'Community support', 'Mobile app access'],
    icon: Zap,
    color: 'border-blue-100',
    buttonColor: 'bg-sky-950',
    popular: false,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '300',
    period: '/ year',
    features: ['Everything in Monthly', 'Best yearly value', 'Continuity support', 'Full LiveFit access'],
    icon: Star,
    color: 'border-orange-200',
    buttonColor: 'bg-orange-500',
    popular: true,
  },
];

type CreateOrderResponse = {
  keyId: string;
  order: {
    id: string;
    amount: number;
    currency: string;
    receipt: string;
  };
  plan: {
    id: string;
    name: string;
    amount: number;
    currency: string;
  };
};

type VerifyResponse = {
  payment: {
    planId: string;
    planName: string;
    amount: number;
    currency: string;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    receipt: string;
  };
};

type CustomerDetails = {
  name: string;
  email: string;
  phone: string;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}

const loadRazorpayScript = () =>
  new Promise<boolean>((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const Pricing = ({ onAccessGranted }: PricingProps) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [customer, setCustomer] = useState<CustomerDetails>({ name: '', email: '', phone: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [plansData, setPlansData] = useState<any>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/content/plans`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setPlansData(data);
        }
      })
      .catch((err) => console.error('Error loading dynamic plans:', err));
  }, []);

  const getDynamicPlanPrice = (planId: string, originalPrice: string) => {
    if (plansData && plansData[planId]?.price) {
      return String(plansData[planId].price);
    }
    return originalPrice;
  };

  const getDynamicPlanFeatures = (planId: string, originalFeatures: string[]) => {
    if (plansData && plansData[planId]?.description) {
      return plansData[planId].description.split(',').map((f: string) => f.trim()).filter(Boolean);
    }
    return originalFeatures;
  };

  const openCheckout = (plan: Plan) => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    setCustomer({
      name: storedUser?.name || '',
      email: storedUser?.email || '',
      phone: storedUser?.phone || '',
    });
    setSelectedPlan(plan);
    setError('');
  };

  const closeCheckout = () => {
    if (!isProcessing) {
      setSelectedPlan(null);
      setError('');
    }
  };

  const handlePayment = async () => {
    if (!selectedPlan) return;

    if (!customer.name || !customer.email || !customer.phone) {
      setError('Please fill in your name, email, and phone number.');
      return;
    }

    try {
      setIsProcessing(true);
      setError('');

      const scriptReady = await loadRazorpayScript();
      if (!scriptReady) {
        throw new Error('Razorpay checkout failed to load. Please try again.');
      }

      const orderResponse = await apiClient.post<CreateOrderResponse>('/api/payment/create-order', {
        planId: selectedPlan.id,
        customer,
      });

      const { keyId, order, plan } = orderResponse.data;

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'LiveFit',
        description: `${plan.name} Membership`,
        order_id: order.id,
        prefill: {
          name: customer.name,
          email: customer.email,
          contact: customer.phone,
        },
        theme: {
          color: '#0f172a',
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyResponse = await apiClient.post<VerifyResponse>('/api/payment/verify', {
              ...response,
              planId: selectedPlan.id,
              customer,
              receipt: order.receipt,
            });

            localStorage.setItem(
              'livefitMembership',
              JSON.stringify({
                product: 'livefit',
                planId: verifyResponse.data.payment.planId,
                planName: verifyResponse.data.payment.planName,
                email: customer.email,
                customer,
                paidAt: new Date().toISOString(),
              })
            );

            if (onAccessGranted) {
              onAccessGranted();
              return;
            }

            const params = new URLSearchParams({
              plan: verifyResponse.data.payment.planName,
              payment_id: verifyResponse.data.payment.razorpayPaymentId,
              order_id: verifyResponse.data.payment.razorpayOrderId,
              amount: String(verifyResponse.data.payment.amount),
              currency: verifyResponse.data.payment.currency,
            });

            window.location.assign(`/success?${params.toString()}`);
          } catch (verifyError: any) {
            setError(verifyError.response?.data?.message || 'Payment completed, but verification failed.');
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', () => {
        setError('Payment failed. Please try again or use a different payment method.');
      });
      razorpay.open();
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Unable to start payment.');
      setIsProcessing(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-8%] w-72 h-72 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] w-96 h-96 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-sky-950 mb-6 italic">Choose Your LiveFit Plan</h1>
        <p className="text-sky-900/60 text-lg max-w-2xl mx-auto">
          Select a LiveFit membership that fits your lifestyle and wellness goals. Payments are processed securely through Razorpay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.id}
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
              <span className="text-4xl font-black text-sky-950">${getDynamicPlanPrice(plan.id, plan.price)}</span>
              <span className="text-sky-900/40 font-bold uppercase tracking-widest text-xs">{plan.period}</span>
            </div>

            <div className="space-y-4 mb-10">
              {getDynamicPlanFeatures(plan.id, plan.features).map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-sm text-sky-900/60 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openCheckout(plan)}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs text-white shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${plan.buttonColor}`}
            >
              Buy Plan <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 relative">
            <button
              onClick={closeCheckout}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Secure Razorpay Checkout</p>
              <h2 className="text-3xl font-serif font-bold text-sky-950 italic mb-2">{selectedPlan.name} Membership</h2>
              <p className="text-sky-900/60 text-sm">
                Confirm your details so we can send payment receipts to both you and the admin.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-950">Full Name</span>
                <input
                  type="text"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full rounded-2xl border border-sky-100 px-4 py-3.5 text-sm outline-none focus:border-sky-400"
                  placeholder="Your full name"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-950">Email Address</span>
                <input
                  type="email"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  className="w-full rounded-2xl border border-sky-100 px-4 py-3.5 text-sm outline-none focus:border-sky-400"
                  placeholder="you@example.com"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-950">Phone Number</span>
                <input
                  type="tel"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full rounded-2xl border border-sky-100 px-4 py-3.5 text-sm outline-none focus:border-sky-400"
                  placeholder="+91 98765 43210"
                />
              </label>
            </div>

            {error && (
              <div className="mt-5 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-sm px-4 py-3">
                {error}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={closeCheckout}
                disabled={isProcessing}
                className="flex-1 py-4 rounded-2xl border border-sky-100 text-sky-900 font-black uppercase tracking-[0.18em] text-[10px] disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="flex-1 py-4 rounded-2xl bg-sky-950 text-white font-black uppercase tracking-[0.18em] text-[10px] shadow-xl disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : `Pay ₹${selectedPlan.price}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
