import React, { Component } from 'react';
import PricingList from './PricingList';

class Enterprise extends Component {
    render() {
        return (
            <PricingList className="enterprise" name="Enterprise" users="50 users included" cost="30"
            gb="30 GB of storage" help="Help center access" support="Phone & Email support" 
            buttonText="CONTACT US"/>
        );
    }
}

export default Enterprise;