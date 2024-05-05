import React from "react";
import India from "../../Asset/india.jpg";
import Russia from "../../Asset/Russia.jpg";
import UK from "../../Asset/UK.jpg";
import USA from "../../Asset/USA.jpg";
import Introduction from "../../Asset/introduction.jpeg";
import Alan from "../../Asset/image/alan.jpg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="user-profile">
        <img src={Alan} alt="alan" className="profile-img" />
        <div className="user-details">
          <h4>Alan</h4>
          <p>Tech Lead</p>
          <p>Email: alan@outlook.com</p>
          <p>Location: Los Angeles, USA</p>
        </div>
      </div>
      <div className="conversation-section">
        <p>
          Conversation <span>+</span>
        </p>
      </div>
      <div className="office-section">
        <div className="office-item">
          <img src={India} alt="india" className="office-img" />
          <p>India Office</p>
        </div>

        <div className="office-item">
          <img src={Introduction} alt="intro" className="office-img" />
          <p>Introduction</p>
        </div>

        <div className="office-item">
          <img src={USA} alt="USA" className="office-img" />
          <p>USA Office</p>
        </div>

        <div className="office-item">
          <img src={UK} alt="UK" className="office-img" />
          <p>UK Office</p>
        </div>

        <div className="office-item">
          <img src={Russia} alt="Russia" className="office-img" />
          <p>Russia Office</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
