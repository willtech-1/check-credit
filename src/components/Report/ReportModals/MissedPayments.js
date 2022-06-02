import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MissedPayments = ({ onPaymentsModal, inputField }) => {
  const [isOpen, setIsOpen] = useState(false);

  // click esc to close modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onPaymentsModal(isOpen);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  // click outside modal
  let modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onPaymentsModal(isOpen);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="modalBackground">
      <div ref={modalRef} className="modalContainer">
        <button
          className="modalCancelBtn"
          onClick={() => onPaymentsModal(isOpen)}
        >
          X
        </button>
        <div className="modalTitle">
          <h4>Why you're being shown this insight</h4>
          {inputField.lastName.startsWith("N") ||
                    inputField.lastName.startsWith("M") ||
                    inputField.lastName.startsWith("B") ||
                    inputField.lastName.startsWith("K") ? <p>
            You've had multiple missed payments on your accounts over the past
            year.
          </p> : <p>You are going well</p>}
        </div>
        <div className="modalBody">
          <h4>How this affects your score</h4>
          <p>
            Even if the account is settled/paid up now, information relating to
            missed payments will stay on your report for 3 years. Lenders will
            see this as a negative factor but they’ll pay less attention the
            older the record is.
          </p>
        </div>
        <div className="modalFooter">
           
          <p>
          <h4>Managing missed payments</h4>
            You took action on this insight to improve your score and it showed
            in your report this month. Continue taking action to get back on
            track.
          </p>
        </div>
        <div className="modalLinkBtn">
        <Link className="modal-link" to="/profile">
          Accounts
        </Link>
      </div>
      </div>
    </div>
  );
};

export default MissedPayments;
