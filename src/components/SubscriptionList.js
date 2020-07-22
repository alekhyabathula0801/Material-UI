import React, { Component } from 'react';

class SubscriptionList extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div id="heading">
                    {this.props.name === "Pro" &&
                        <span id="pro-star">&#9734;</span>
                    }
                    {this.props.name}
                    {this.props.name === "Pro" &&
                        <li>{this.props.popular}</li>
                    }
                </div>
                <div id="subscription-list-content">
                    <p><span id="cost">${this.props.cost}</span><span id="month">/mo</span></p>
                    <li>{this.props.users} users included</li>
                    <li>{this.props.gb} GB of storage</li>
                    <li>Help center access</li>
                    <li>{this.props.support}</li>
                    <button>{this.props.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default SubscriptionList;