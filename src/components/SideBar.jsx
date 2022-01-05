import React, { useState } from "react";

import "./SideBar.scss";

import sideBarIcon from "../assets/PNG_image_6-removebg-preview.png";

const SideBar = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="sidebar">
      <img style={{ width: "250px" }} src={sideBarIcon} alt="" />
      <div className="nav-items">
        {items.map((item, index) => (
          <div
            className={`sidebar-item ${
              index == selectedIndex ? "sidebar-item-active" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
            key={item.title}
          >
            <div className="sidebar-icon-container">
              <img className="sidebar-icon" src={item.img} alt="" />
            </div>
            <div className="sidebar-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
