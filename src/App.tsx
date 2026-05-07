import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WorkFit from './pages/WorkFit';

import Blogs from './pages/Blogs';
import SolutionDetail from './pages/SolutionDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<WorkFit />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
