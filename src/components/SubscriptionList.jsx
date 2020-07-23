import React, { Component } from 'react';

class SubscriptionList extends Component {
    render() {
        return (
            <div className={this.props.subscription.className}>
                <div id="heading">
                    {this.props.subscription.name === "Pro" &&
                        <span id="pro-star">&#9734;</span>
                    }
                    {this.props.subscription.name}
                    {this.props.subscription.name === "Pro" &&
                        <li>{this.props.subscription.popular}</li>
                    }
                </div>
                <div id="subscription-list-content">
                    <p><span id="cost">${this.props.subscription.cost}</span><span id="month">/mo</span></p>
                    <li>{this.props.subscription.users} users included</li>
                    <li>{this.props.subscription.gb} GB of storage</li>
                    <li>Help center access</li>
                    <li>{this.props.subscription.support}</li>
                    <button>{this.props.subscription.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default SubscriptionList;