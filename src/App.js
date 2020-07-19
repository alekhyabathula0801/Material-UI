import React, { Component } from 'react';
import Info from './components/Info';
import './css/pricing.css';
import Free from './components/Free';
import Enterprise from './components/Enterprise';
import Pro from './components/Pro';

function App() {
  return (
    <div className="App">
      <Info />
      <div id="pricing-list">
        <Free />
        <Pro />
        <Enterprise/>
      </div>
    </div>
  );
}

export default App;
