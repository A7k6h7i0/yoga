import React from 'react';
import Hero from '../components/Hero';
import Breathwork from '../components/Breathwork';
import Philosophy from '../components/Philosophy';
import Chakras from '../components/Chakras';
import Journey from '../components/Journey';
import Stick from '../components/Stick';
import Capsules from '../components/Capsules';
import AsanaGallery from '../components/AsanaGallery';
import Instructors from '../components/Instructors';
import Testimonials from '../components/Testimonials';
import GlobalReach from '../components/GlobalReach';

const Home = () => {
  return (
    <>
      <Hero />
      <Breathwork />
      <Philosophy />
      <GlobalReach />
      <Chakras />
      <Journey />
      <Stick />
      <Capsules />
      <AsanaGallery />
      <Instructors />
      <Testimonials />
    </>
  );
};

export default Home;
