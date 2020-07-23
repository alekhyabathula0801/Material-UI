import React, { Component } from "react";
import SubscriptionList from "./SubscriptionList.jsx";
import Info from "./Info.jsx";

class Subscription extends Component {
  state = {
    subscriptionList: [
      {
        name: "Free",
        className: "free",
        users: "10",
        gb: "2",
        support: "Email support",
        cost: "0",
        buttonText: "SIGN UP FOR FREE",
      },
      {
        name: "Pro",
        className: "pro",
        users: "20",
        gb: "10",
        support: "Priority email support",
        cost: "15",
        buttonText: "GET STARTED",
        popular: "Most popular",
      },
      {
        name: "Enterprise",
        className: "enterprise",
        users: "50",
        gb: "30",
        support: "Phone & Email support",
        cost: "30",
        buttonText: "CONTACT US",
      },
    ],
  };

  componentDidMount() {
    console.log("subscription types shown");
  }

  componentWillUnmount() {
    console.log("Subscription list is unmounted");
  }

  render() {
    var subscriptionList = this.state.subscriptionList.map((content) => (
      <SubscriptionList subscription={content} />
    ));
    return (
      <div>
        <Info />
        <div id="subscription">{subscriptionList}</div>
      </div>
    );
  }
}

export default Subscription;
