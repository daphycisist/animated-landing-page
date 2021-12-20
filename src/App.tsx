import React from 'react';
import './App.css';
import Commitments from './components/Commitments';
import FeatureSection from './components/FeatureSection';
import Header from './components/Header';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <Header />
      <FeatureSection />
      <Commitments />
      <Testimony />
    </div>
  );
}

export default App;
