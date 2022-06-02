import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CreditModal = ({ onCreditModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    // click esc to close modal
    useEffect(() => {
      const close = (e) => {
        if (e.keyCode === 27) {
          onCreditModal(isOpen);
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
          onCreditModal(isOpen);
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
            onClick={() => onCreditModal(isOpen)}
          >
            X
          </button>
          <div className="modalTitle">
            <h3>Understand your insights</h3>
          </div>
          <div className="modalBody">
            <h4>How this affects your score</h4>
            <p>
            You can track how well you’re doing against your insights using the status tags we add to each action.
            </p>
          </div>
          <div className="modalFooter">
             
            <p>
            <h4>Managing missed payments</h4>
            These actions may be negatively impacting your credit score. Check to see if there is anything you can do to get them back on track.
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
}

export default CreditModal