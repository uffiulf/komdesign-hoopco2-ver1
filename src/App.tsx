import React from 'react';
import { useGSAP } from './hooks/useGSAP';
import Loader from './components/Loader';
import DashboardCard from './components/DashboardCard';
import BubbleContainer from './components/BubbleContainer';
import HeroSection from './components/HeroSection';
import ProblemVideoSection from './components/ProblemVideoSection';
import ScrollyContainer from './components/ScrollyContainer';
import MapSection from './components/MapSection';
import TimelineSection from './components/TimelineSection';
import ContextSection from './components/ContextSection';
import SourcesSection from './components/SourcesSection';
import './styles/globals.css';
import './styles/components.css';
import './styles/animations.css';

function App() {
  useGSAP();

  return (
    <div className="App">
      <Loader />
      <BubbleContainer />
      <DashboardCard />
      <HeroSection />
      <ProblemVideoSection />
      <ScrollyContainer />
      <MapSection />
      <TimelineSection />
      <ContextSection />
      <SourcesSection />
    </div>
  );
}

export default App;