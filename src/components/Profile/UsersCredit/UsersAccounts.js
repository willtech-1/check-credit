import React, { useState } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { BiWifiOff } from "react-icons/bi";
import { MdCreditScore } from "react-icons/md";
import accountsData from "./acountsData";
import "./UsersAccounts.css";

const UsersAccounts = ({ inputField }) => {
  const [data, setData] = useState(accountsData);
  
  return (
    <div className="users-container">
     
      <div className="data-container">
         <p className="users-header">{inputField.firstName}'s Accounts</p>
        {inputField.lastName.startsWith("N") && (
          <div className="data-wrapper">
            {data.telecom.map((account) => {
              const { id, accountCo, accountStatus, balance, creditLimit } =
                account;
              return (
                <section key={id} className="account-info">
                  <BsFillPhoneFill className="accountIcon" />
                  <p>Company: {accountCo}</p>
                  <p>Status: {accountStatus}</p>
                  <p>Balance: R {balance}</p>
                  <p>Credit Limit: R {creditLimit}</p>
                  <p className="activated">Active</p>
                </section>
              );
            })}
          </div>

        )}
        {inputField.lastName.startsWith("M") && (
          <div className="data-wrapper">
            {data.insurance.map((account) => {
              const { id, accountCo, accountStatus, balance, creditLimit } =
                account;
              return (
                <>
                  <section key={id} className="account-info">
                    <AiFillCar className="accountIcon" />
                    <p>Company: {accountCo}</p>
                    <p>Status: {accountStatus}</p>
                    <p>Balance: R {balance}</p>
                    <p>Credit Limit: R {creditLimit}</p>
                    <p className="activated">Active</p>
                  </section>
      
                </>
              );
            })}
          </div>
        )}
        {inputField.lastName.startsWith("B") && (
          <div className="data-wrapper">
            {data.bond.map((account) => {
              const { id, accountCo, accountStatus, balance, creditLimit } =
                account;
              return (
                <section key={id} className="account-info">
                  <FcHome className="accountIcon" />
                  <p>Company: {accountCo}</p>
                  <p>Status: {accountStatus}</p>
                  <p>Balance: R {balance}</p>
                  <p>Credit Limit: R {creditLimit}</p>
                  <p className="activated">Active</p>
                </section>
              );
            })}
          </div>
        )}
        {inputField.lastName.startsWith("K") && (
          <div className="data-wrapper">
            {data.wifi.map((account) => {
              const { id, accountCo, accountStatus, balance, creditLimit } =
                account;
              return (
                <>
                  <section key={id} className="account-info">
                    <BiWifiOff className="accountIcon" />
                    <p>Company: {accountCo}</p>
                    <p>Status: {accountStatus}</p>
                    <p>Balance: R {balance}</p>
                    <p>Credit Limit: R {creditLimit}</p>
                    <p className="activated">Active</p>
                  </section>
                  
                </>
              );
            })}
          </div>
        )}
        {!inputField.lastName.startsWith("N") &&
        !inputField.lastName.startsWith("M") &&
        !inputField.lastName.startsWith("B") &&
        !inputField.lastName.startsWith("K") ? (
          <div className="data-wrapper">
            <section className="account-info">
              <MdCreditScore className="accountIcon" />
              <p>Good Credit</p>
              <p>Premium Credit Card</p>
              <p>Premium insurance</p>
              <p>Qualify for loan</p>
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UsersAccounts;
