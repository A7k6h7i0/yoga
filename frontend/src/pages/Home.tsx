import React from 'react';
import Hero from '../components/Hero';
import UniqueNeeds from '../components/UniqueNeeds';
import OneOnOne from '../components/OneOnOne';
import ZoomSessions from '../components/ZoomSessions';
import AboutUsSection from '../components/AboutUsSection';
import Programs from '../components/Programs';
import GalleryLibrary from '../components/GalleryLibrary';
import WorkoutStats from '../components/WorkoutStats';
import ScheduleCTA from '../components/ScheduleCTA';
import GlobalSchedule from '../components/GlobalSchedule';
import LiveFitTestimonials from '../components/LiveFitTestimonials';


const Home = () => {
  return (
    <>
      <Hero />
      <UniqueNeeds />
      <AboutUsSection />
      <OneOnOne />
      <ZoomSessions />
      <Programs />
      <GlobalSchedule />
      <ScheduleCTA />
      <WorkoutStats />
      <GalleryLibrary />
      <LiveFitTestimonials />
    </>
  );
};

export default Home;


