import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
    </div>
  );
}

export default App;