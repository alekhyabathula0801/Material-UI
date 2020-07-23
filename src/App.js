import React, { Component } from "react";
import "./css/pricing.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Subscription from "./components/Subscription.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./components/UserList.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="main-container">
          <Route path="/subscription" component={Subscription} />
          <Route path="/user-list" component={UserList} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
