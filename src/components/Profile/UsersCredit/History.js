import React from "react";
import "./History.css";

const History = ({ inputField }) => {
  console.log(inputField);
  return (
    <div className="payment-history-cover">
      <div>
        <p className="payment-header">Payment History</p>
      </div>

      {/* 2019 */}

      <div className="payment-history-wrapper">
        {inputField.lastName.startsWith("K") ||
        inputField.lastName.startsWith("B") ||
        inputField.lastName.startsWith("M") ||
        inputField.lastName.startsWith("N") ? (
          <div className="payment-container">
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="missed"></span>
            <span className="missed"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <div>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="missed"></span>
            </div>
            <div>
              <p className="payment-year">2019</p>
            </div>
            <p>
              <span className="on-time-display"></span> ON TIME
            </p>
          </div>
        ) : (
          <div className="payment-container">
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <div>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="missed"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
            </div>
            <p className="payment-year">2019</p>
            <p>
              <span className="on-time-display"></span> ON TIME
            </p>
          </div>
        )}

        {/* 2020 */}
        
        {inputField.lastName.startsWith("K") ||
        inputField.lastName.startsWith("M") ||
        inputField.lastName.startsWith("N") ? (
          <div className="payment-container">
            <span className="on-time"></span>
            <span className="missed"></span>
            <span className="missed"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <div>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="missed"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
            </div>
            <p className="payment-year">2020</p>
            <p>
              <span className="missed-display"></span> MISSED 
            </p>
          </div>
        ) : (
          <div className="payment-container">
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <div>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
            </div>
            <p className="payment-year">2020</p>
            <p>
              <span className="missed-display"></span> MISSED 
            </p>
          </div>
        )}

        {/* 2021 */}

        {inputField.lastName.startsWith("N") ||
        inputField.lastName.startsWith("M") ||
        inputField.lastName.startsWith("K") ? (
          <div className="payment-container">
            <span className="nodata"></span>
            <span className="nodata"></span>
            <span className="nodata"></span>
            <span className="nodata"></span>
            <span className="nodata"></span>
            <span className="nodata"></span>
            <div>
              <span className="nodata"></span>
              <span className="nodata"></span>
              <span className="nodata"></span>
              <span className="nodata"></span>
              <span className="nodata"></span>
              <span className="on-time"></span>
            </div>
            <p className="payment-year">2021</p>
            <p>
              <span className="nodata-display"></span> NO DATA
            </p>
          </div>
        ) : (
          <div className="payment-container">
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <span className="on-time"></span>
            <div>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
              <span className="on-time"></span>
            </div>
            <p className="payment-year">2021</p>
            <p>
              <span className="nodata-display"></span> NO DATA
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
