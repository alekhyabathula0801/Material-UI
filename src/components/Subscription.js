import React, { Component } from 'react';
import SubscriptionList from './SubscriptionList';

class Subscription extends Component {
    render() {
        return (
            <div id="subscription">
                <SubscriptionList className="free" users="10" gb="2" support="Email support" name="Free" 
                cost="0" buttonText="SIGN UP FOR FREE" />
                <SubscriptionList className="pro" users="20" gb="10" support="Priority email support"
                name="Pro" popular="Most popular" cost="15" buttonText="GET STARTED" />
                <SubscriptionList className="enterprise" name="Enterprise" users="50" cost="30" gb="30" 
                support="Phone & Email support" buttonText="CONTACT US" />
            </div>
        );
    }
}

export default Subscription;