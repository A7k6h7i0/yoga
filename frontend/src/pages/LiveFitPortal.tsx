import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { apiClient } from '../lib/api';
import Home from './Home';
import Pricing from './Pricing';

const LiveFitPortal = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const storedMembership = JSON.parse(localStorage.getItem('livefitMembership') || 'null');
        if (storedMembership?.email) {
          setHasAccess(true);
          setIsChecking(false);
          return;
        }

        const email = user?.email;
        if (!email) {
          setHasAccess(false);
          setIsChecking(false);
          return;
        }

        const res = await apiClient.get('/api/payment/access-status', {
          params: {
            email,
            product: 'livefit',
          },
        });

        if (res.data?.hasAccess && res.data.payment) {
          localStorage.setItem(
            'livefitMembership',
            JSON.stringify({
              product: 'livefit',
              planId: res.data.payment.planId,
              planName: res.data.payment.planName,
              email: res.data.payment.customer?.email || email,
              customer: res.data.payment.customer,
              paidAt: res.data.payment.paidAt,
            })
          );
          setHasAccess(true);
        } else {
          localStorage.removeItem('livefitMembership');
          setHasAccess(false);
        }
      } catch (err) {
        console.error('Error checking LiveFit access:', err);
      } finally {
        setIsChecking(false);
      }
    };

    checkAccess();
  }, [user?.email]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#F5F5F3] pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="rounded-[2rem] bg-white shadow-2xl border border-sky-100 px-8 py-10 text-center max-w-md">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Checking Access</p>
          <h2 className="text-3xl font-serif font-bold text-sky-950 italic mb-3">LiveFit membership</h2>
          <p className="text-sky-900/60 text-sm">We are verifying your LiveFit membership before loading the full site.</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return <Pricing onAccessGranted={() => setHasAccess(true)} />;
  }

  return <Home />;
};

export default LiveFitPortal;
