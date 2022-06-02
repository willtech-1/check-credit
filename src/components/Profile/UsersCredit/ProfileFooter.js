import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import "./ProfileFooter.css";

const ProfileFooter = () => {
  return (
    <div className="profile-footer-container">
      <section className="profile-footer-wrapper">
        <p className="profile-footer-heading">
          Share your score with people you trust.
        </p>
        <header className="profile-footer-header">
          Share your free credit score with your friends and family
        </header>
        <p className="profile-footer-text">
          Invite your friends and family to join now and help them get in
          control of their finances. Remember to only share your score with
          people you trust.
        </p>
        <div className="profile-footer-icons">
          <span className="mail-profile-icon">
            <a href="https://gmail.com/">
              <MdOutlineMail className="profile-footer-icon" />
            </a>
            <p className="p-footer-text">EMAIL</p>
          </span>
          <span className="facebook-profile-icon">
            <a href="https://facebook.com/">
              <FaFacebookF className="profile-footer-icon" />
            </a>
            <p className="p-footer-text">FACEBOOK</p>
          </span>
          <span className="twitter-profile-icon">
            <a href="https://twitter.com/">
              <BsTwitter className="profile-footer-icon" />
            </a>
            <p className="p-footer-text">TWITTER</p>
          </span>
          <span className="whatsapp-profile-icon">
            <a href="https://whatsapp.com/">
              <SiWhatsapp className="profile-footer-icon" />
            </a>
            <p className="p-footer-text">WHATSAPP</p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProfileFooter;
