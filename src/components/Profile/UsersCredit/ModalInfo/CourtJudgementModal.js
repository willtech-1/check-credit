import React, { useState, useEffect, useRef } from "react";

const CourtJudgementModal = ({ onCourtModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  // click esc to close modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onCourtModal(isOpen);
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
        onCourtModal(isOpen);
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
          onClick={() => onCourtModal(isOpen)}
        >
          X
        </button>
        <div className="modalTitle">
          <h4>Court Judgments</h4>
        </div>
        <div className="modalBody">
          <p>
            You can track how well you’re doing against your insights using the
            status tags we add to each action.
          </p>
        </div>
        <div className="modalFooter">
          <p>
            These actions are postively impacting your credit score. Keep on
            track to continue improving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourtJudgementModal;
