import React from 'react';
import Hero from '../components/Hero';
import GlobalReach from '../components/GlobalReach';
import Chakras from '../components/Chakras';
import UniqueNeeds from '../components/UniqueNeeds';
import OneOnOne from '../components/OneOnOne';
import ZoomSessions from '../components/ZoomSessions';
import GroupClasses from '../components/GroupClasses';
import IndividualClasses from '../components/IndividualClasses';
import AboutUsSection from '../components/AboutUsSection';
import MyYogaTestimonials from '../components/MyYogaTestimonials';
import MyYogaGuides from '../components/MyYogaGuides';
import MyYogaFaq from '../components/MyYogaFaq';

const Home = () => {
  return (
    <>
      <Hero />
      <UniqueNeeds />
      <AboutUsSection />
      <OneOnOne />
      <ZoomSessions />
      <GroupClasses />
      <IndividualClasses />
      <GlobalReach />
      <Chakras />
      <MyYogaGuides />
      <MyYogaTestimonials />
      <MyYogaFaq />
    </>
  );
};

export default Home;
