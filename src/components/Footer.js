import React, { Component } from 'react';
import FooterList from './FooterList';

class Footer extends Component {
    render() {
        const company = ["Team", "History", "Contact us", "Location"];
        const features = ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"];
        const resources = ["Resource", "Resource name", "Another resource", "Final resource"];
        const legal = ["Privacy policy", "Terms of use"];
        return (
            <div className="footer">
                <div id="footer-list">
                    <FooterList name="Company" list={company} />
                    <FooterList name="Features" list={features} />
                    <FooterList name="Resources" list={resources} />
                    <FooterList name="Legal" list={legal} />
                </div>
                <div id="footer-copyright">
                    Copyright &#169; Your website 2020.
                </div>
            </div>
        );
    }
}

export default Footer;