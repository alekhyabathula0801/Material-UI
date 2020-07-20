import React, { Component } from 'react';
import Info from './components/Info';
import './css/pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Subscription from './components/Subscription';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
