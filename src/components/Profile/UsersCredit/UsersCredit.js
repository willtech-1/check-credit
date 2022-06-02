import React from "react";
import "./UsersCredit.css";

const UsersCredit = ({ inputField }) => {
  
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1638913658211-c999de7fe786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.2)",
      }}
      className="backgroundImage"
    >
      
      <div className="users-score-container">
        <div className="user-score-wrapper">
          <span className="users-score-display">
            <p className="score-number">561</p>
            <p className="score-text">National Average</p>
          </span>
          <span className="users-score-display">
            <p className="users-scores-number">{inputField.lastName.startsWith("N") ? "561" : inputField.lastName.startsWith("M") ? "670" : inputField.lastName.startsWith("B") ? "600" : inputField.lastName.startsWith("K") ? "720" : "900"}</p>
            <p className="score-text">Your Score is Stable</p>
          </span>
          <span className="users-score-display">
            <p className="score-number">561</p>
            <p className="score-text">Average in your area</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersCredit;
