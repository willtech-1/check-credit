import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { IoCalculator } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = ({ logout, inputField }) => {
  
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/profile" className="nav-links">
              <CgProfile className="profile-icon" />
              <span className="icon-text">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className="nav-links">
              <HiOutlineDocumentReport className="report-icon" />
              <span className="icon-text">Report</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/credit" className="nav-links">
              <MdOutlineExplore className="credit-icon" />
              <span className="icon-text">Explore</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-links">
              <IoCalculator className="calc-icon" />
              <span className="icon-text">Calculator</span>
            </Link>
          </li>
          
          <div className="logout-btn-container">
            <button onClick={logout} className="logout-btn">logout</button>
          </div>
          
        </ul>
      </div>
    </nav>
  );
};

export default Welcome;
