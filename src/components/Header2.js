import React, { useContext, useState, useEffect, useRef } from "react";
import { MojContext } from "./Context";
import { NavLink } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import AOS from "aos";
import { gsap } from "gsap";
// IMPORTS
import "../scss/header.scss";
import 'aos/dist/aos.css';
import logo from "../assets/logo-nav.svg";
import menu from "../assets/menu.svg";
import close from "../assets/x.svg"

const Header = () => {
  const [ilosc, setIlosc] = useContext(MojContext);
  const [menuState, setMenuState] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0)
  const [menuVisibility, setMenuVisibility] = useState("hidden")
  const [menuDisplay, setMenuDisplay] = useState()

  const headerRef = useRef();
  const progressRef = useRef();
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
  // const handleMenu = () => {
  //   setMenuState(!menuState);
  //   if (menuState === true) {
  //     setMenuHeight(150)
  //     setMenuDisplay("none")
  //   }
  //   else if (menuState === false) {
  //     setMenuHeight(0)
  //     setMenuDisplay("block")
  //   }
  // };
  const expandMenu = () => {
    setMenuState(!menuState);
    // if (menuState === true) {
    //   setMenuHeight(0)
    //   setMenuVisibility("hidden")
      
    // }
    // else if (menuState === false) {
    //   setMenuHeight(250)
    //   setMenuVisibility("visible")
      
    // }
    
  }
  useEffect(() => {
    if (menuState === true) {
      gsap.to(headerRef.current, { height: "500px" });
      setMenuVisibility("visible")
    }
    if (menuState === false) {
      gsap.to(headerRef.current, { height: "0px" });
      setMenuVisibility("hidden")
    }
  }, [menuState])
  useEffect(() => {
    gsap.to(progressRef.current, { width: `${ilosc}%`})
  }, [ilosc])
  useEffect(() => {
    AOS.init();
   
  });

  
  return (
    <>
      <header className="Header-header">
        
        <div
          className="progress-indicator"
          // style={{ width: `${ilosc}%` }}
          ref={progressRef}
        ></div>
        <div data-aos="fade-down" className="expand-menu-wrapper" ref={headerRef} ><div className="expand-menu" style={{visibility: menuVisibility}}><div className="menu-links">
            <NavLink
              exact
              to="/"
              className="Header-navLinkMobile"
              activeClassName="Header-isActiveMobile"
            >
              Strona główna
            </NavLink>
            <NavLink
              to="/projekty"
              className="Header-navLinkkMobile"
              activeClassName="Header-isActiveMobile"
            >
              Projekty
            </NavLink>
            <NavLink
              to="/oferta"
              className="Header-navLinkkMobile open-project"
              activeClassName="Header-isActiveMobile"
            >
              Oferta
            </NavLink>
            <NavLink
              to="/o-mnie"
              className="Header-navLinkkMobile"
              activeClassName="Header-isActiveMobile"
            >
              O mnie
            </NavLink>
            <NavLink
              to="/blog"
              className="Header-navLinkkMobile"
              activeClassName="Header-isActiveMobile"
            >
              Blog
            </NavLink>
            <NavLink
              to="/kontakt"
              className="Header-navLinkkMobile"
              activeClassName="Header-isActiveMobile"
            >
              Kontakt
            </NavLink>
          </div></div></div>
        <nav className="Header-nav">
          <div>
            <img src={logo} alt="Artur Lewandowicz" />
          </div>
          <div className="menu-links">
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
            {/* <img src={menuState ? close : menu} alt="menu" onClick={() => handleMenu()} /> */}
            <img src={menuState ? close : menu} alt="menu" onClick={() => expandMenu()} /> 
          </button>
        </nav>
      </header>
      {/* <div className="expand-menu-wrapper" style={{height: menuHeight}}><div className="expand-menu" style={{visibility: menuVisibility}}>My Extra Menu</div></div> */}
      {/* <div className="sub-container" style={{height: menuDisplay}}>
        <div
          className="sub-menu" style={{transform: `translateX(${menuTranslate}%)`}}
          
        ><h1>Siemaneczkk co tam ?</h1></div>
      </div> */}
    </>
  );
};
export default Header;
