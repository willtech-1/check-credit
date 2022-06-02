import React from "react";
import "./Profile.css";
import UsersAccounts from "./UsersCredit/UsersAccounts";
import UsersCredit from "./UsersCredit/UsersCredit";
import History from "./UsersCredit/History";
import UsersInfo from "./UsersCredit/UsersInfo";
import ProfileFooter from "./UsersCredit/ProfileFooter";
import CreditDisplay from "./CreditDisplay";

const Profile = ({ inputField }) => {

  return (
    <>
      <div className="profile-heading">
        <p className="profile-title">Your details</p>
        <p className="title-header">Personal details</p>
      </div>
      <div className="profile-container">
      <div className="profile-info-wrapper">
          <CreditDisplay inputField={inputField}/>
          
        
            <p style={{ color: "rgb(88, 88, 88)", marginTop: "0.5rem" }}>Name: {inputField.firstName}</p>{" "}
            <p style={{ color: "rgb(88, 88, 88)", marginTop: "0.5rem" }}>Surname: {inputField.lastName}</p>{" "}
            <p style={{ color: "rgb(88, 88, 88)", marginTop: "0.5rem" }}>ID Number: {inputField.idNumber}</p>
         
        </div>
      </div>
      <UsersCredit inputField={inputField} />
      <UsersAccounts inputField={inputField} />
      <History inputField={inputField} />
      <UsersInfo inputField={inputField} />
      <ProfileFooter />
    </>
  );
};

export default Profile;
