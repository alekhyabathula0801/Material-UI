import React from 'react';
import './css/pricing.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Subscription from './components/Subscription.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/UserList.jsx';

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
