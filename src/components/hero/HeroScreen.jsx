import React from "react";

const HeroScreen = () => {
  return (
    <div className="app-ui">

      <div className="balance-box">
        <p>Total Balance</p>
        <h2>$12,450</h2>
      </div>

      <div className="stats">

        <div className="card income">
          <div>
            <p>Income</p>
            <span>This month</span>
          </div>
          <strong>$4,200</strong>
        </div>

        <div className="card expense">
          <div>
            <p>Expenses</p>
            <span>This month</span>
          </div>
          <strong>$2,100</strong>
        </div>

        <div className="card savings">
          <div>
            <p>Savings</p>
            <span>Remaining</span>
          </div>
          <strong>$2,100</strong>
        </div>

      </div>

    </div>
  );
};

export default HeroScreen;