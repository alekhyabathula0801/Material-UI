import React, { Component } from 'react';
import PricingList from './PricingList';

class Free extends Component {
    render() {
        return (
            <PricingList className="free" users="10 users included" gb="2 GB of storage" support="Email support"
                help="Help center access" name="Free" cost="0" buttonText="SIGN UP FOR FREE" />
        );
    }
}

export default Free;