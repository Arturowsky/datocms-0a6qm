import React, {useContext} from "react";
import { MojContext } from "./Context";
import { NavLink } from "react-router-dom";
// IMPORTS
import "../scss/header.scss"
import logo from "../assets/logo-nav.svg"
import menu from "../assets/menu.svg"


export default () => (
  
  <header className="Header-header">
    
    <div className="progress-indicator" style={{width: `${10}%`}}></div>
    <nav className="Header-nav">
      <div><img src={logo} alt="Artur Lewandowicz" /></div>
      <div><NavLink
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
        className="Header-navLink"
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
      </NavLink></div>
      <div><img src={menu} alt="menu" /></div>
      
    </nav>
  </header>
);
