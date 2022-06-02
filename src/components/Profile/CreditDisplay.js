import React from "react";
import "./CreditDisplay.css"

const CreditDisplay = ({ inputField }) => {
  let myCurrentDate = new Date();
  let date =
    myCurrentDate.getFullYear() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getDate() +
    " " +
    myCurrentDate.getHours() +
    ":" +
    myCurrentDate.getMinutes() +
    ":" +
    myCurrentDate.getSeconds();
  const newCurrentDate = date;

  return (
    <div>
      {" "}
      <section className="credit-tabs-container">
        <header className="tabs-header">
          <h2 style={{ color: "rgb(47, 68, 68)" }}>Welcome, {inputField.firstName}</h2>
        </header>
        <div className="half-circle"></div>
        <p className="display-scores">
          {inputField.lastName.startsWith("N") ? (
            <div style={{ marginTop: "1rem" }}>
              <p style={{ color: "gold)", fontWeight: "600" }}>
                +561
                <span style={{ color: "black", marginLeft: "0.25rem" }}>
                  {" "}
                  is your score
                </span>
              </p>
            </div>
          ) : inputField.lastName.startsWith("M") ? (
            <div style={{ marginTop: "1rem" }}>
              <p style={{ color: "rgb(35, 153, 35)", fontWeight: "600" }}>
                +690
                <span style={{ color: "black", marginLeft: "0.25rem" }}>
                  {" "}
                  your score is stable
                </span>
              </p>
            </div>
          ) : inputField.lastName.startsWith("B") ? (
            <div style={{ marginTop: "1rem" }}>
              <p style={{ color: "rgb(35, 153, 35)", fontWeight: "600" }}>
                +600
                <span style={{ color: "black", marginLeft: "0.25rem" }}>
                  {" "}
                  your score is stable
                </span>
              </p>
            </div>
          ) : inputField.lastName.startsWith("K") ? (
            <div style={{ marginTop: "1rem" }}>
              <p style={{ color: "rgb(35, 153, 35)", fontWeight: "600" }}>
                +702
                <span style={{ color: "black", marginLeft: "0.25rem" }}>
                  {" "}
                  you are going up!
                </span>
              </p>
            </div>
          ) : (
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ color: "rgb(35, 153, 35)", fontWeight: "600" }}>
                +900
                <span style={{ color: "black", marginLeft: "0.25rem" }}>
                  {" "}
                  excellent score, and you're going up!
                </span>
              </p>
            </div>
          )}
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "rgb(88, 88, 88)" }}>
            Today's date: {newCurrentDate}
          </h4>
        </div>

        
      </section>
    </div>
  );
};

export default CreditDisplay;
