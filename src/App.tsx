import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import GoogleCalendarScheduling from './components/GoogleCalendarScheduling';



function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ProblemSection />
      <TestimonialsSection /> 
      <ProcessSection />
      
    </div>
  );
}

export default App;