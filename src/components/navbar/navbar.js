import React, { useState } from "react";

import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className="nav-container">
      <div
        className={active ? "nav-item active" : "nav-item"}
        onClick={toggleClass}
      >
        A-Z
      </div>
      <div
        className={active ? "nav-item active" : "nav-item"}
        onClick={toggleClass}
      >
        In-Play
      </div>
      <div className="nav-item logo"></div>
      <div
        className={active ? "nav-item active" : "nav-item"}
        onClick={toggleClass}
      >
        Join
      </div>
      <div
        className={active ? "nav-item active" : "nav-item"}
        onClick={toggleClass}
      >
        Log In
      </div>
    </div>
  );
};

export default Navbar;
