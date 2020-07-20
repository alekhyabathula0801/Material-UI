import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div id="company"><h6>Company name</h6></div>
                <div id="menu">
                    <a href="#">FEATURES</a>
                    <a href="#">ENTERPRISE</a>
                    <a href="#">SUPPORT</a>
                    <button id="login">LOGIN</button>
                </div>
            </div>
        );
    }
}

export default Header;