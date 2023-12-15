import React, { useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import homeIcon from "../../Svgs/home.svg";
import profileIcon from "../../Svgs/profile.svg";
import scheduleIcon from "../../Svgs/schedule.svg";
import activitiesIcon from "../../Svgs/activities.svg";
import settingsIcon from "../../Svgs/settings.svg";
const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { to: "", icon: homeIcon, title: "Home" },
    { to: "", icon: profileIcon, title: "Profile" },
    { to: "", icon: scheduleIcon, title: "Schedule" },
    { to: "", icon: activitiesIcon, title: "Activities" },
    { to: "", icon: settingsIcon, title: "Settings" },
  ];

  return (
    <>
      <div
        className={`navigation ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <ul>
          <li>
            <Link to="">
              <span className="icon"></span>
              <span className="titleLogo">Logo Area</span>
            </Link>
          </li>

          {menuItems.map((item, index) => (
            <li key={index} className={selectedItem === index ? "active" : ""}>
              <Link to={item.to} onClick={() => handleItemClick(index)}>
                <div className="iconLi">
                  <span className="icon">
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <span className="title">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile-toggle" onClick={handleMobileMenuToggle}>
        <span
          className={`toggle-ico ${isMobileMenuOpen ? "open" : ""}`}
        ><svg className="svgPosition" fill="#000000" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>menu</title><path d="M64 96L448 96 448 144 64 144 64 96ZM64 232L448 232 448 280 64 280 64 232ZM64 368L448 368 448 416 64 416 64 368Z" /></svg></span>
      </div>
    </>
  );
};

export default Sidebar;
