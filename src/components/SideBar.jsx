import React from "react";

const SideBar = ({ items }) => {
  return (
    <div className="sidebar">
      <img
        style={{ width: "250px" }}
        src="src/assets/PNG_image_6-removebg-preview.png"
        alt=""
      />
      <div className="nav-items">
        {items.map((item) => (
          <div className="sidebar-item" key={item.title}>
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
