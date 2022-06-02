import React, { useState, useEffect, useRef } from "react";

const CalcModal = ({ number, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpenModal(isOpen);
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
        setOpenModal(isOpen);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  let totalExpenses = `${
    parseInt(number.totalDebt) + parseInt(number.expenses)
  }`;

  let finalAnswer = `${parseInt(number.netIncome) - totalExpenses}`;

  return (
    <div className="modalBackground">
      <div ref={modalRef} className="modalContainer">
        <button className="modalCancelBtn" onClick={() => setOpenModal(isOpen)}>
          X
        </button>
        <div className="modalTitle">
          <h4>Affordability Calculation</h4>
        </div>
        <div className="modalBody">
          <p className="finalAnswer">R {finalAnswer}</p>
          <p className="calc-body-text">
            {finalAnswer < 5000
              ? "It looks like you may need to find a way to save on your debt or cut back on some expenses."
              : "You do qualify for a short-term and long term loan."}
          </p>
        </div>
        <div className="modalFooter">
          <p>
            {finalAnswer < 5000
              ? "This could mean setting up a monthly budget, perhaps taking out a debt consolidation loan or speaking to someone about your finances."
              : "Home Loan, business loan and personal loan terms and conditions apply"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalcModal;
