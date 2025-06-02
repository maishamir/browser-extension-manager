import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import "./ThemeToggle.scss"

function ThemeToggle({ handleChanage, isChecked }) {
  const [toggleIcon, setToggleIcon] = useState(moon);
  return (
    <div className="themeToggle-container">
      <img src={logo} alt="extensions logo" className="themeToggle__logo" />
      <div className="themeToggle__toggle">
        <img src={toggleIcon} alt="" />
      </div>
    </div>
  );
}

export default ThemeToggle;
