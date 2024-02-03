import React, { useState } from "react";

const UserInput = ({ onChangeInput, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            onChange={(e) => onChangeInput("duration", e.target.value)}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
