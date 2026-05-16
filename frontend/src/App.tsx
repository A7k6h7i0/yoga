import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WorkFit from './pages/WorkFit';
import SolutionDetail from './pages/SolutionDetail';
import Schedule from './pages/Schedule';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Inquiry from './pages/Inquiry';
import HowToBook from './pages/HowToBook';
import Pricing from './pages/Pricing';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Solutions from './pages/Solutions';

const Success = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F5F5F3]">
    <div className="text-center bg-white p-16 rounded-[3rem] shadow-2xl">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h1 className="text-4xl font-serif font-bold text-sky-950 mb-4 italic">Payment Successful!</h1>
      <p className="text-sky-900/60 mb-8">Thank you for joining LiveFit. Your journey starts now.</p>
      <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-sky-950 text-white rounded-full font-black uppercase tracking-widest text-[10px]">Back to Home</button>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workfit" element={<WorkFit />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/how-it-works" element={<HowToBook />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
