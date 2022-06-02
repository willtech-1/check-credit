import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import MissedPayments from "./ReportModals/MissedPayments";
import Doingwell from "./ReportModals/Doingwell";
import CreditModal from "./ReportModals/CreditModal";
import "./Report.css";

const Report = ({ inputField }) => {
  const [paymentModal, setPaymentsModal] = useState(false);
  const [creditModal, setCreditModal] = useState(false);
  const [courtModal, setCourtModal] = useState(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const date = monthNames[d.getMonth()] + " " + d.getFullYear();

  // get the gender
  let genderCode = inputField.idNumber.substring(6, 10);
  let gender = parseInt(genderCode) < 5000 ? "Female" : "Male";

  // get country ID for citzenship
  let citzenship =
    parseInt(inputField.idNumber.substring(10, 11)) === 0 ? "Yes" : "No";

  return (
    <div>
      <section className="report-container">
        <div className="report-heading">
          <div className="title">
            <h3>Report</h3>
          </div>
        </div>

        <div>
          <p className="report-personal-details">
            ID Number: {inputField.idNumber}
          </p>
          <p className="report-personal-details">Gender: {gender}</p>
          <p className="report-personal-details">Citizenship: {citzenship}</p>
          <p className="report-personal-details">{date}</p>
        </div>
        <div className="report-head">
          <h3>Factors affecting your score</h3>
          {inputField.lastName.startsWith("N") ||
          inputField.lastName.startsWith("M") ||
          inputField.lastName.startsWith("K") ? (
            <p className="head-para">
              Good work so far. 4 of your 6 insights are on track. Try to shape
              up the remaining to improve your score
            </p>
          ) : (
            <p className="head-para">
              Good work so far. Your credit is good, you’re doing well
            </p>
          )}
        </div>

        <div className="report-info-cover">
          <div className="report-info-wrapper">
            <section className="section-cover">
              {inputField.lastName.startsWith("N") ||
              inputField.lastName.startsWith("M") ||
              inputField.lastName.startsWith("K") ? (
                <h3>Let's improve</h3>
              ) : (
                <h3>Improving and going up</h3>
              )}

              <div className="first-flex-section">
                <section className="report-section-1">
                  <div className="info-section">
                    {inputField.lastName.startsWith("N") ||
                    inputField.lastName.startsWith("M") ||
                    inputField.lastName.startsWith("B") ||
                    inputField.lastName.startsWith("K") ? (
                      <p className="missed-payments-heading">
                        LET'S IMPROVE {""}
                      </p>
                    ) : (
                      <p className="court-heading">DOING WELL</p>
                    )}
                    <span>
                      <BsInfoCircle
                        className="info-icon"
                        onClick={() => setPaymentsModal(!paymentModal)}
                      />
                    </span>
                    {paymentModal && (
                      <MissedPayments
                        onPaymentsModal={setPaymentsModal}
                        inputField={inputField}
                      />
                    )}
                  </div>
                  <p className="payments-text">Missed payments</p>
                  <p className="report-info-para">
                    You've had multiple missed payments on your accounts over
                    the past year.Even if the account is settled/paid up now,
                    information relating to missed payments will stay on your
                    report for 3 years.
                  </p>
                </section>

                <section className="report-section-1">
                  <div className="info-section">
                    <p className="missed-payments-heading">
                      LET'S IMPROVE {""}
                    </p>
                    <span>
                      <BsInfoCircle
                        className="info-icon"
                        onClick={() => setCreditModal(!creditModal)}
                      />
                    </span>
                    {creditModal && (
                      <CreditModal onCreditModal={setCreditModal} />
                    )}
                  </div>
                  <p className="payments-text">
                    Using a credit card to improve your score
                  </p>
                  <p className="report-info-para">
                    By taking out a credit card and using it carefully, you can
                    build up a track record of borrowing reliably which should
                    improve your score.
                  </p>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>

      <h3 className="doing-well-section-header">Doing well</h3>
      <div className="doing-well-section">
        <div className="second-flex-section">
            <section className="report-section">
              <div className="info-section">
                <p className="court-heading">DOING WELL</p>
                <span>
                  <BsInfoCircle
                    className="info-icon"
                    onClick={() => setCourtModal(!courtModal)}
                  />
                </span>
                {courtModal && <Doingwell onCourtModal={setCourtModal} />}
              </div>
              <p className="payments-text">Court Judgments</p>
              <p className="report-info-para">
                You have no judgments on your report.If you have a judgment on
                your report, this information will stay on your credit report
                for 5 years and could cause your score to drop.
              </p>
            </section>

            <section className="report-section">
              <div className="info-section">
                <p className="court-heading">DOING WELL</p>
                <span>
                  <BsInfoCircle
                    className="info-icon"
                    onClick={() => setCourtModal(!courtModal)}
                  />
                </span>
                {courtModal && <Doingwell onCourtModal={setCourtModal} />}
              </div>
              <p className="payments-text">Credit enquiries</p>
              <p className="report-info-para">
                You haven’t made many applications for credit in the past 6
                months. If you apply for too many credit products in a short
                period of time, lenders may view this negatively as it can make
                you appear overly reliant on credit.
              </p>
            </section>

            <section className="report-section">
              <div className="info-section">
                <p className="court-heading">DOING WELL</p>
                <span>
                  <BsInfoCircle
                    className="info-icon"
                    onClick={() => setCourtModal(!courtModal)}
                  />
                </span>
                {courtModal && <Doingwell onCourtModal={setCourtModal} />}
              </div>
              <p className="payments-text">Defaults</p>
              <p className="report-info-para">
                Make your payments on time and in full - setting up direct
                orders can help you avoid missed payments. If you do start
                missing payments, speak to your provider about your situation as
                soon as possible.
              </p>
            </section>
          
        </div>
      </div>
    </div>
  );
};

export default Report;
