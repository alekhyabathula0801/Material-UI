
import React, { Component } from 'react';
import PricingList from './PricingList';

class Pricing extends Component {
    render() {
        return (
            <div id="pricing-list">
                <PricingList className="free" users="10 users included" gb="2 GB of storage" support="Email support"
                    help="Help center access" name="Free" cost="0" buttonText="SIGN UP FOR FREE" />
                <PricingList className="pro" users="20 users included" gb="10 GB of storage" support="Priority email support"
                    help="Help center access" name="Pro" popular="Most popular" cost="15" buttonText="GET STARTED" />
                <PricingList className="enterprise" name="Enterprise" users="50 users included" cost="30"
                    gb="30 GB of storage" help="Help center access" support="Phone & Email support"
                    buttonText="CONTACT US" />
            </div>
        );
    }
}

export default Pricing;