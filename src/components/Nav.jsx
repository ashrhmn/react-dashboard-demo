import React from "react";

import avatar from "../assets/avatar.png";
import toogleThemeIcon from "../assets/monitor-levels.png";
import notificationIcon from "../assets/icons8_notification_96px_1.png";
import arrowIcon from "../assets/icons8_expand_arrow_96px_1.png";

const Nav = () => {
  return (
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
    </nav>
  );
};

export default Nav;
