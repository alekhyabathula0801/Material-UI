import React, { Component } from 'react';
import Info from './components/Info';
import './css/pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
