import React, { useState, useEffect } from "react";
import creditData from "./creditMainPageData";
import "./CreditMainPage.css";

function CreditMainPage({ inputField }) {
  const [creditInfo, setCreditInfo] = useState(creditData);
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const lastIndex = creditInfo.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, creditInfo]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="creditPage-wrapper">
      <section className="section">
        <h2 style={{ textAlign: "center" }}>Lift Score</h2>

        <div className="section-center">
          {creditInfo.map((credit, infoIndex) => {
            const { id, quote, title, text, image } = credit;

            let position = "nextSlide";
            if (infoIndex === index) {
              position = "activeSlide";
            }
            if (
              infoIndex === index - 1 ||
              (index === 0 && infoIndex === credit.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={title} className="person-img" />
                <p className="credit-info-text">{title}</p>
                <p className="credit-info-text">{text}</p>
                <p className="credit-info-text">
                  {quote ? `${inputField.firstName}, ${quote}` : null}
                </p>

                <div className="dots-container">
                  <span
                    style={{ background: infoIndex === 0 && "rgb(17, 17, 17)" }}
                    className="dot-1"
                  ></span>
                  <span
                    style={{ background: infoIndex === 1 && "rgb(17, 17, 17)" }}
                    className="dot-2"
                  ></span>
                  <span
                    style={{ background: infoIndex === 2 && "rgb(17, 17, 17)" }}
                    className="dot-3"
                  ></span>
                  <span
                    style={{ background: infoIndex === 3 && "rgb(17, 17, 17)" }}
                    className="dot-4"
                  ></span>
                  <span
                    style={{ background: infoIndex === 4 && "rgb(17, 17, 17)" }}
                    className="dot-5"
                  ></span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      

      
    </div>
  );
}

export default CreditMainPage;
