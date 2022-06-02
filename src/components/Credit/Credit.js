import React, { useState } from "react";

import { FaAngleDoubleRight } from "react-icons/fa";
import creditTabsData from "./creditTabsData";
import "./Credit.css";

const Credit = () => {
  const [creditdata, setCreditData] = useState(creditTabsData);
  const [value, setValue] = useState(0);

  const { titleBtn, offersInfo, offers, title } = creditdata[value];
  return (
    <div>
      <section className="section">
        <div className="title">
          <h3>Explore</h3>
        </div>
        <div className="credit-wrapper">
          <div className="titleBtn-container">
            {creditdata.map((credit, index) => {
              return (
                <button
                  key={credit.id}
                  onClick={() => setValue(index)}
                  className={`title-btn ${
                    index === value && "active-titleBtn"
                  }`}
                >
                  {credit.titleBtn}
                </button>
              );
            })}
          </div>
          <section className="credit-info">
            <h4>{title}</h4>
            <h5>{titleBtn}</h5>
            <p className="creditInfo">{offersInfo}</p>
            {offers.map((offer, index) => {
              return (
                <div key={index} className="credit-desc">
                  <FaAngleDoubleRight className="angle-icon" />
                  <p>{offer}</p>
                </div>
              );
            })}
          </section>
        </div>
      
      </section>
    </div>
  );
};

export default Credit;
