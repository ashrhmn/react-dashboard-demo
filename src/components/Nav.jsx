import React from "react";

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
        <img
          className="toogleThemeBtn"
          src="src/assets/monitor-levels.png"
          alt=""
        />
        <div>
          <span className="legend">Alia John</span>
          <div>
            <img
              className="ico"
              src="src/assets/icons8_notification_96px_1.png"
              alt=""
            />
            <img
              className="ico"
              src="src/assets/icons8_expand_arrow_96px_1.png"
              alt=""
            />
          </div>
        </div>
        <img className="avatar" src="src/assets/avatar.png" alt="" />
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
