import React, { useContext, useEffect, useState } from "react";
import { MojContext } from "./Context";
// STYLES
import "../scss/projects.scss";
import "../scss/settings.scss";
// IMAGES
import projects from "../assets/projects.svg";
import btnlist from "../assets/btn-list.svg"
import divmaker from "../assets/divmaker.svg"
import currencyapp from "../assets/currencyapp2.svg"
import weatherapp from "../assets/weatherapp.svg"
import backgroundSVG from "../assets/gbg.svg"
import ol from "../assets/ol.png";
import el from "../assets/el.png";
const Projects = () => {
  return (
    <div className="projects-container" style={{background: `url(${backgroundSVG})` }}>
      <div className="projects">
        <div className="projects-grid">
          <img src={projects} alt="" />
          <h1>Wykonane projekty</h1>
          <p>
            Zrealizowane projekty. Technologie, których używam aby dostarczyć Ci
            gotowy i funkcjonalny projekt dostosowany do Twoich indywidualnych
            potrzeb 🥳
          </p>
          <button className="projects-btn"><img src={btnlist} alt="" />zobacz wszystkie projekty</button>
        </div>
        <div className="projects-images">
          <div className="projects-grid-img">
            <img src={divmaker} alt="" />
          </div>
          <div className="projects-subgrid-img">
            <div>
              <img src={currencyapp} alt="" />
            </div>
            <div>
              <img src={weatherapp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
