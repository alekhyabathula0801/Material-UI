import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div id="header-company"><h6>Company name</h6></div>
                <div id="header-menu">
                    <Link to="/subscription">
                    <a href="#">SUBSCRIPTION</a>
                    </Link>
                    <a href="#">ENTERPRISE</a>
                    <a href="#">SUPPORT</a>
                    <button id="login">LOGIN</button>
                </div>
            </div>
        );
    }
}

export default Header;