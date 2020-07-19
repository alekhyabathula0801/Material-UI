import React, { Component } from 'react';
import PricingList from './PricingList';

class Pro extends Component {
    render() {
        return (
            <PricingList className="pro" users="20 users included" gb="10 GB of storage" support="Priority email support"
                help="Help center access" name="Pro" popular="Most popular" cost="15" buttonText="GET STARTED" />    
        );
    }
}

export default Pro;