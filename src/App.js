import React, { Component } from 'react';
import Info from './components/Info';
import './css/pricing.css';
import Free from './components/Free';
import Enterprise from './components/Enterprise';

function App() {
  return (
    <div className="App">
      <Info />
      <div id="pricing-list">
        <Free />
        <Enterprise/>
      </div>
    </div>
  );
}

export default App;
