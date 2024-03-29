import React, { useState, useEffect } from "react";
import styles, { layout } from "./styles";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system");
  const element = document.documentElement;
  const darkQuery = window.matchMedia("prefers-color-scheme: dark");

  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const toogleThemeDark = () => {
    setTheme("light");
  };
  const toogleThemeLight = () => {
    setTheme("dark");
  };

  return (
    <>
      <div className={`${layout.header}`}>
        <div className={`${styles.brandFontSize} uppercase font-bold text-very-light-gray tracking-[8px]`}>todo</div>
        <img
          src={sun}
          alt="sun icon"
          onClick={toogleThemeDark}
          style={{ display: theme === "dark" ? "flex" : "none" }}
          className="cursor-pointer"
        ></img>
        <img
          src={moon}
          alt="moon icon"
          onClick={toogleThemeLight}
          style={{ display: theme === "dark" ? "none" : "flex" }}
          className="cursor-pointer"
        ></img>
      </div>
    </>
  );
};

export default Header;
