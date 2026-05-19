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
      <div id="hero">
        <Hero />
      </div>
      <div id="unique-needs">
        <UniqueNeeds />
      </div>
      <div id="our-story">
        <AboutUsSection />
      </div>
      <div id="one-on-one">
        <OneOnOne />
      </div>
      <div id="zoom-sessions">
        <ZoomSessions />
      </div>
      <div id="wellness-programs">
        <Programs />
      </div>
      <div id="schedule">
        <GlobalSchedule />
      </div>
      <ScheduleCTA />
      <WorkoutStats />
      <div id="gallery">
        <GalleryLibrary />
      </div>
      <div id="testimonials">
        <LiveFitTestimonials />
      </div>
    </>
  );
};

export default Home;


