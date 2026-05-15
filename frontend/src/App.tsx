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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workfit" element={<WorkFit />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/how-it-works" element={<HowToBook />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
