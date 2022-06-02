import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FaSignInAlt } from "react-icons/fa";
import Welcome from "./components/Welcome/Welcome";
import CreditMainPage from "./components/Home/CreditMainPage";
import Profile from "./components/Profile/Profile";
import Report from "./components/Report/Report";
import Credit from "./components/Credit/Credit";
import Footer from "./components/Footer/Footer";
import Calculator from "./components/Calculator/Calculator";

function App() {
  // login state
  const [login, setLogin] = useState(false);

  // inputfields State
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
  });

  // inputFields event handler
  function handleInputField(event) {
    setInputField((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  //handleSubmit
  const handleSignInFormSubmit = (e) => {
    e.preventDefault();

    if (inputField.idNumber.length !== 13) {
      alert("Please check the length of your id numbers");
    }

    var tempDate = new Date(
      inputField.idNumber.substring(0, 2),
      inputField.idNumber.substring(2, 4) - 1,
      inputField.idNumber.substring(4, 6)
    );

    var id_date = tempDate.getDate();
    var id_month = tempDate.getMonth();

    if (
      !tempDate.getYear() === inputField.idNumber.substring(0, 2) &&
      id_month === inputField.idNumber.substring(2, 4) - 1 &&
      id_date === inputField.idNumber.substring(4, 6)
    ) {
      alert("Please check the date");
    }

    // apply Luhn formula for check-digits
    var tempTotal = 0;
    var checkSum = 0;
    var multiplier = 1;
    for (var i = 0; i < 13; ++i) {
      tempTotal = parseInt(inputField.idNumber.charAt(i)) * multiplier;
      if (tempTotal > 9) {
        tempTotal =
          parseInt(tempTotal.toString().charAt(0)) +
          parseInt(tempTotal.toString().charAt(1));
      }
      checkSum = checkSum + tempTotal;
      multiplier = multiplier % 2 === 0 ? 1 : 2;
    }

    if (checkSum % 10 !== 0) {
      alert("Id number not authentic");
    } else {
      setLogin((prev) => {
        return !prev;
      });
    }
  };

  //logout function
  function logout() {
    setInputField({
      firstName: "",
      lastName: "",
      idNumber: "",
    });
    setLogin(false);
  }

  return (
    <>
      {login ? (
        <span>
          <Router>
            <Welcome inputField={inputField} logout={logout} />

            <Routes>
              <Route
                exact
                path="/"
                element={<CreditMainPage inputField={inputField} />}
              />
            </Routes>
            <Routes>
              <Route exact path="/calculator" element={<Calculator />} />
            </Routes>
            <Routes>
              <Route
                exact
                path="/profile"
                element={<Profile inputField={inputField} />}
              />
            </Routes>
            <Routes>
              <Route
                path="/report"
                element={<Report inputField={inputField} />}
              />
            </Routes>
            <Routes>
              <Route path="/credit" element={<Credit />} />
            </Routes>
            <br />
            <Footer />
          </Router>
        </span>
      ) : (
        <div>
          <div className="login-form-container">
            <section className="login-section">
              <div
                style={{
                  textAlign: "center",
                  letterSpacing: "2px",
                  fontSize: "22px",
                  color: "#191919",
                }}
              >
                <h1>Sign In</h1>
              </div>
              <form onSubmit={handleSignInFormSubmit}>
                <div>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={inputField.firstName}
                    onChange={handleInputField}
                    required
                  />
                </div>
                <div>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={inputField.lastName}
                    onChange={handleInputField}
                    required
                  />
                </div>
                <div>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter ID Number"
                    name="idNumber"
                    value={inputField.idNumber}
                    onChange={handleInputField}
                    required
                  />
                </div>
                <div>
                  <button className="signin-btn">
                    Sign In <FaSignInAlt />
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
