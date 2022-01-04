import React, { useState } from "react";

import "./Nav.scss";

import avatar from "../assets/avatar.png";
import toogleThemeIcon from "../assets/monitor-levels.png";
import notificationIcon from "../assets/icons8_notification_96px_1.png";
import arrowIcon from "../assets/icons8_expand_arrow_96px_1.png";

import sideBarIcon from "../assets/PNG_image_6-removebg-preview.png";

const Nav = ({ menuItem }) => {
  const [isMenuSHown, setIsMenuShown] = useState(false);
  return (
    <div>
      {
        <MenuView
          menuItem={menuItem}
          isMenuSHown={isMenuSHown}
          setIsMenuShown={setIsMenuShown}
        />
      }
      <nav>
        <h3>Stake</h3>
        <div className="right-nav">
          <input
            className="nav-search"
            type="text"
            name="search"
            placeholder="Search"
          />
          <img className="toogleThemeBtn" src={toogleThemeIcon} alt="" />
          <div>
            <span className="legend">Alia John</span>
            <div>
              <img className="ico" src={notificationIcon} alt="" />
              <img className="ico" src={arrowIcon} alt="" />
            </div>
          </div>
          <img className="avatar" src={avatar} alt="" />
          <div onClick={() => setIsMenuShown(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-menu"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

const MenuView = ({ menuItem, isMenuSHown, setIsMenuShown }) => {
  return (
    <div className={`menu-${isMenuSHown ? "show" : "hide"}`}>
      <div className="btn-close" onClick={() => setIsMenuShown(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="menu-items">
        <div className="menu-icon-container">
          <img className="menu-icon" src={sideBarIcon} alt="" />
        </div>
        <div className="nav-items">
          {menuItem.map((item) => (
            <div
              onClick={() => setIsMenuShown(false)}
              className="sidebar-item"
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
    </div>
  );
};

export default Nav;
