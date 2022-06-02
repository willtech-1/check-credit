import React from "react";
import { GoCreditCard } from "react-icons/go";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-wrapper">
        <div className="footer-section">
          <GoCreditCard className="footer-icon" />
          <span className="footer-company-title">Lift Score</span>
          <p className="footer-text">
            Lift Score (PTY) Limited Company registered in South Africa NCR
            Authorised (NCRCB011)
          </p>
        </div>

        <p className="footer-text2">
          ©2022 Lift Score Information Solutions, Inc. All rights reserved.
        </p>

        <div className="footer-socials">
          <span className="socials-title">Socials</span>
          <div>
            <a href="https://www.youtube.com/">
              <AiFillYoutube className="footer-icon" />
            </a>
            <span className="social-text">YouTube</span>
          </div>
          <div>
            <a href="https://twitter.com/">
              <AiOutlineTwitter className="footer-icon" />
            </a>
            <span className="social-text">Twitter</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
