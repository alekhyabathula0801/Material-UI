import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  toggleLoginButton() {
    this.setState({ isLogin: !this.state.isLogin });
  }

  componentDidMount() {
    console.log("Heaader loaded");
  }

  componentDidUpdate() {
    console.log("Button updated");
  }

  render() {
    return (
      <div className="header">
        <div id="header-company">
          <h6>Company name</h6>
        </div>
        <div className="header-menu">
          <li id="header-menu-text">MENU</li>
          <div id="header-menu-content">
            <Link to="/subscription">
              <li>SUBSCRIPTION</li>
            </Link>
            <Link to="/user-list">
              <li>USER</li>
            </Link>
            <Link to="/">
              <li>SUPPORT</li>
            </Link>
            <button id="login" onClick={() => this.toggleLoginButton()}>
              {this.state.isLogin ? "LOGIN" : "LOGOUT"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
