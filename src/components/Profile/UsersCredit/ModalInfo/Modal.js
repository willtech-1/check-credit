import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

export const Modal = ({ onModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  // click esc to close modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onModal(isOpen);
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
        onModal(isOpen);
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
        <button className="modalCancelBtn" onClick={() => onModal(isOpen)}>
          X
        </button>
        <div className="modalTitle">
          <h4>Understand your insights</h4>
        </div>
        <div className="modalBody">
          <p>
            You can track how well you’re doing against your insights using the
            status tags we add to each action.These actions may be negatively
            impacting your credit score. Check to see if there is anything you
            can do to get them back on track.
          </p>
        </div>
        <div className="modalFooter">
          <p>
            You took action on this insight to improve your score and it showed
            in your report this month. Continue taking action to get back on
            track.
          </p>
        </div>
      </div>
    </div>
  );
};

