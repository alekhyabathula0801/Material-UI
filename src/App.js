import React, { Component } from 'react';
import Info from './components/Info';
import './css/pricing.css';
import Free from './components/Free';
import Enterprise from './components/Enterprise';
import Pro from './components/Pro';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <div id="pricing-list">
        <Free />
        <Pro />
        <Enterprise />
      </div>
      <Footer />
    </div>
  );
}

export default App;
