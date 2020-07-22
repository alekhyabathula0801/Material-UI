import React, { Component } from 'react';
import FooterList from './FooterList';

class Footer extends Component {
    render() {
        var footerContent = [
            {
                title: "Company",
                list: ["Team", "History", "Contact us", "Location"]
            },
            {
                title: "Features",
                list: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"]
            },
            {
                title: "Resources",
                list: ["Resource", "Resource name", "Another resource", "Final resource"]
            },
            {
                title: "Legal",
                list: ["Privacy policy", "Terms of use"]
            }
        ]
        var footerContent = footerContent.map(content =>
            <FooterList name={content.title} list={content.list} />
        )
        return (
            <div className="footer">
                <div id="footer-list">
                    {footerContent}
                </div>
                <div id="footer-copyright">
                    Copyright &#169; Your website 2020.
                </div>
            </div>
        );
    }
}

export default Footer;