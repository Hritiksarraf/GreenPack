import React from "react";
import Darkpng from "../../assets/website/dark-mode-button.png";
import Lightpng from "../../assets/website/light-mode-button.png";
import { useState, useEffect } from "react";

export default function DarkMode() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className=" relative ">
        <img
          src={Darkpng}
          onClick={changeTheme}
          alt=""
          className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0.1)] transition-all duration-300 ${theme=="dark"?"opacity-100":"opacity-0"} `}
        />
        <img
          src={Lightpng}
          onClick={changeTheme}
          alt=""
          className="w-12  z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0.1)] transition-all duration-300  "
        />
      </div>
    </>
  );
}
