import React, { Component } from 'react';

class SubscriptionList extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div id="heading">{this.props.name}
                <li>{this.props.popular}</li>
                </div>
                <div id="subscription-list-content">
                    <p><span id="cost">${this.props.cost}</span><span id="month">/mo</span></p>
                    <li>{this.props.users}</li>
                    <li>{this.props.gb}</li>
                    <li>{this.props.help}</li>
                    <li>{this.props.support}</li>
                    <button>{this.props.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default SubscriptionList;