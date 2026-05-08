import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WorkFit from './pages/WorkFit';
import PhilosophyPage from './pages/Philosophy';
import SolutionDetail from './pages/SolutionDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/workfit" element={<WorkFit />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
