import React from 'react';
import './App.css';
import Commitments from './components/Commitments';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Partners from './components/Partners';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <Header />
      <FeatureSection />
      <Commitments />
      <Testimony />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
