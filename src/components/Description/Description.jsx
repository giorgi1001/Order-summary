import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="container">
      <h1>Order Summary</h1>
      <p className="description">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="annualPlan-info">
        <img src="./icon-music.svg" alt="icon music" />
        <div className="annual-change">
          <div>
            <p className="annual-text">Annual Plan</p>
            <p>$59.99/year</p>
          </div>
          <button className="change-btn">Change</button>
        </div>
      </div>
      <button className="payment">Proceed to Payment</button>
      <button className="cancel">Cancel Order</button>
    </div>
  );
}
