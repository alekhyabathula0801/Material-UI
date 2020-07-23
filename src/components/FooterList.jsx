import React, { Component } from 'react';

class FooterList extends Component {
    render() {
        const lists = this.props.list.map((content) =>
            <li>{content}</li>
        );
        return (
            <div id="footer-content">
                <li id="footer-content-heading">{this.props.name}</li>
                <div id="footer-list-content">
                {lists}
            </div>
            </div>
        );
    }
}

export default FooterList;