import React, { useState } from "react";

import CalcModal from "./CalcModal";
import "./Calculator.css";

const Calculator = () => {
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState({
    netIncome: "",
    totalDebt: "",
    expenses: "",
  });

  const handleCalc = (e) => {
    setNumber((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onCalcBtn = (e) => {
    e.preventDefault();

    if (!openModal) {
      setOpenModal(true);
    } else {
      setOpenModal(!openModal);
    }

    if( number.netIncome === "" && number.totalDebt === "" && number.expenses === ""){
      setOpenModal(false);
    }
  };

  return (
    <div>
      {openModal && (
        <CalcModal number={number} setOpenModal={setOpenModal} />
      )}
      <div className="calc-heading">
        <p className="calc-title">Affordability Calculator</p>
        <p className="calc-header">
          Determine how much you could afford to save monthly
        </p>
      </div>

      <div className="calc-container">
        <div className="calc-info-wrapper">
          <p className="calc-info">
            Use this affordability calculator to determine how much you could
            afford to save monthly, pay monthly on a new loan or pay extra
            monthly on an existing loan.
          </p>
          <p className="calc-info">
            This calculation is used by responsible lenders to ensure that you
            can afford the monthly repayments on loans, cards and cellphone
            contracts.
          </p>
          <p className="calc-info">
            Knowing this information can help you make decisions as to which
            product is right for you.
          </p>
        </div>
      </div>

      <section className="calc-form">
        <form>
          <div className="calc-margin">
            <h4>Monthly net income</h4>
            <p className="calc-text">
              How much money is deposited into your bank account on average
              monthly
            </p>
            <input
              className="inputField"
              type="text"
              name="netIncome"
              onChange={handleCalc}
              value={number.netIncome}
              placeholder="Income net"
              required
            />
          </div>

          <div className="calc-margin">
            <h4>Total monthly debt repayments</h4>
            <p className="calc-text">
              The total amount of money you pay monthly on debt based on your
              credit bureau information
            </p>
            <input
              className="inputField"
              type="text"
              name="totalDebt"
              onChange={handleCalc}
              value={number.totalDebt}
              placeholder="Bureau debt"
              required
            />
          </div>

          <div className="calc-margin">
            <h4>Total monthly expenses</h4>
            <p className="calc-text">
              How much you spend monthly excluding your debt repayments, tax and
              anything that comes off of your salary
            </p>
            <input
              className="inputField"
              type="text"
              name="expenses"
              onChange={handleCalc}
              value={number.expenses}
              placeholder="Expenses"
              required
            />
          </div>

          <button onClick={onCalcBtn} type="button" className="calc-btn">
            calculate
          </button>
        </form>
      </section>

      
    </div>
  );
};

export default Calculator;
