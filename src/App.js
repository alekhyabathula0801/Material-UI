import React from 'react';
import './css/pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/subscription" component={Subscription} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
