import React, { Component } from 'react';

class Free extends Component {
    render() {
        return (
            <div className="free">
                <div id="free-heading">Free</div>
                <div id="free-content">
                    <p><span id="cost">$0</span><span id="month">/mo</span></p>
                    <p>10 users included</p>
                    <p>2 GB of storage</p>
                    <p>Help center access</p>
                    <p>Email support</p>
                    <button className="sign-up-for-free">SIGN UP FOR FREE</button>
                </div>
            </div>
        );
    }
}

export default Free;