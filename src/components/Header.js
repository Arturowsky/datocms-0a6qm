import React, { useContext, useState, useEffect } from "react";
import { MojContext } from "./Context";
import { NavLink } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import AOS from "aos";
// IMPORTS
import "../scss/header.scss";
import logo from "../assets/logo-nav.svg";
import menu from "../assets/menu.svg";
import close from "../assets/x.svg"

const Header = () => {
  const [ilosc, setIlosc] = useContext(MojContext);
  const [menuState, setMenuState] = useState(false);
  const [menuTranslate, setMenuTranslate] = useState(150)
  const [menuDisplay, setMenuDisplay] = useState()
  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.x)
    // console.log(currPos.y)

    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setIlosc(scrollPercentRounded);
  });
  const handleMenu = () => {
    setMenuState(!menuState);
    if (menuState === true) {
      setMenuTranslate(150)
      setMenuDisplay("none")
    }
    if (menuState === false) {
      setMenuTranslate(0)
      setMenuDisplay("block")
    }
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <header className="Header-header">
        <div
          className="progress-indicator"
          style={{ width: `${ilosc}%` }}
        ></div>
        <nav className="Header-nav">
          <div>
            <img src={logo} alt="Artur Lewandowicz" />
          </div>
          <div>
            <NavLink
              exact
              to="/"
              className="Header-navLink"
              activeClassName="Header-isActive"
            >
              Strona główna
            </NavLink>
            <NavLink
              to="/projekty"
              className="Header-navLink"
              activeClassName="Header-isActive"
            >
              Projekty
            </NavLink>
            <NavLink
              to="/oferta"
              className="Header-navLink open-project"
              activeClassName="Header-isActive"
            >
              Oferta
            </NavLink>
            <NavLink
              to="/o-mnie"
              className="Header-navLink"
              activeClassName="Header-isActive"
            >
              O mnie
            </NavLink>
            <NavLink
              to="/blog"
              className="Header-navLink"
              activeClassName="Header-isActive"
            >
              Blog
            </NavLink>
            <NavLink
              to="/kontakt"
              className="Header-navLink"
              activeClassName="Header-isActive"
            >
              Kontakt
            </NavLink>
          </div>

          <button className="menu-trigger">
            <img src={menuState ? close : menu} alt="menu" onClick={() => handleMenu()} />
          </button>
        </nav>
      </header>
      <div className="sub-container" style={{display: menuDisplay}}>
        <div
          className="sub-menu" style={{transform: `translateX(${menuTranslate}%)`}}
          
        ><h1>Siemaneczkk co tam ?</h1></div>
      </div>
    </>
  );
};
export default Header;
