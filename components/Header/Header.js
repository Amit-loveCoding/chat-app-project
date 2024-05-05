import React from "react";
import { IoIosPeople } from "react-icons/io";
import "./Header.css";
import chatIcon from "../../Asset/chat-icon.jpeg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={chatIcon} alt="Chat Icon" className="header-icon" />
        <div className="header-text">
          <h3 className="header-heading">TechExchange Circle</h3>
          <div className="header-people">
            <span className="people-count">3 / 100</span>
            <IoIosPeople className="people-icon" />
          </div>
        </div>
      </div>

      <p className="header-intro">
        Connecting Tech Enthusiasts for Insightful Discussions on Innovation and
        Progress
      </p>
      <hr className="header-hr" />
    </div>
  );
};

export default Header;
