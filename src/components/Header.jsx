import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isLogin: true,
        }
    }

    toggleLoginButton() {
        this.setState(
            { isLogin: !this.state.isLogin, }
        );
    }

    render() {
        return (
            <div className="header">
                <div id="header-company"><h6>Company name</h6></div>
                <div id="header-menu">
                    <Link to="/subscription">
                        <a>SUBSCRIPTION</a>
                    </Link>
                    <Link to="/user-list">
                        <a href="#">USER</a>
                    </Link>
                    <a href="#">SUPPORT</a>
                    <button id="login" onClick={() => this.toggleLoginButton()}>{this.state.isLogin ? "LOGIN" : "LOGOUT"}</button>
                </div>
            </div>
        );
    }
}

export default Header;