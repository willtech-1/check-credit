import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { Modal } from "./ModalInfo/Modal";
import { MissedPaymentsModal  } from "./ModalInfo/MissedPaymentsModal";
import CourtJudgementModal from "./ModalInfo/CourtJudgementModal";
import "./UsersInfo.css";

const UsersInfo = ({ inputField }) => {

  const [paymentsModal, setPaymentsModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [courtModal, setCourtModal] = useState(false);
  
  
  return (
    <div className="users-info-cover">
      <div className="users-info-wrapper">
        <section className="users-section">
          <div className="info-section">
          {inputField.lastName.startsWith("N") ||
          inputField.lastName.startsWith("M") ||
          inputField.lastName.startsWith("B") ||
          inputField.lastName.startsWith("K") ? <p className="missed-payments-heading">OFF TRACK {""}</p> : <p className="court-heading">ON TRACK</p> }
            <span>
              <BsInfoCircle className="info-icon" onClick={() => setPaymentsModal(!paymentsModal)}/>
            </span>
            {paymentsModal && <MissedPaymentsModal onPaymentsModal={setPaymentsModal}/>}
          </div>
          <p className="payments-text">Missed payments</p> 
          <p className="users-info-para">
            You can avoid this happening again by setting up a debit order to
            pay all of your credit repayments, even if it's for the minimum
            amount. If you’re worried about missing a payment, speak to your
            lender as they may be able to help you.
            
          </p> 
        </section>

        <section className="users-section">
          <div className="info-section">
          {inputField.lastName.startsWith("N") ||
          inputField.lastName.startsWith("M") ||
          inputField.lastName.startsWith("K") ? <p className="missed-payments-heading">OFF TRACK {""}</p> : <p className="court-heading">ON TRACK</p> }
            <span>
              <BsInfoCircle
                className="info-icon"
                onClick={() => setModal(!modal)}
              />
            </span>
            {modal && <Modal onModal={setModal}/>}
          </div>
          <p className="payments-text">Take out credit card</p>
          <p className="users-info-para">
            If you don’t have any active credit accounts, this could have a
            negative impact on your credit score. This is because lenders have
            no information about your borrowing behaviour, so you may be
            considered a greater credit risk.
          </p>
        </section>
        <section className="users-section">
          <div className="info-section">
            <p className="court-heading">ON TRACK</p>
            <span>
              <BsInfoCircle className="info-icon" onClick={() => setCourtModal(!courtModal)} />
            </span>
            {courtModal && <CourtJudgementModal onCourtModal={setCourtModal}/>}
          </div>
          <p className="payments-text">Court Judgments</p>
          <p className="users-info-para">
            If you have a judgment on your report, this information will stay on
            your credit report for 5 years and could cause your score to drop.
          </p>
        </section>
      </div>
    </div>
  );
};

export default UsersInfo;
