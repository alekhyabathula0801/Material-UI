import React from 'react';
import './css/pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/subscription" component={Subscription} />
        <Route path="/user-list" component={UserList} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
