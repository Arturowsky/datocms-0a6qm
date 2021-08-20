import React, { useContext, useEffect, useState } from "react";

import "../scss/settings.scss";
import "../scss/index.scss";
import waveTop from "../assets/tech-top-wave.svg";
import waveBottom from "../assets/tech-bottom-wave.svg";
import swirlyArrow from "../assets/swirly-arrow2.svg";
import logosy from "../assets/logosy.svg";
import react from "../assets/react.svg";
import js from "../assets/js.svg"
import html from "../assets/html5.svg"
import css3 from "../assets/css3.svg"
import scss from "../assets/sass.svg"
import bootstrap from "../assets/bootstrap.svg"
import npm from '../assets/npm.svg'
import git from "../assets/git.svg"
const Stack = () => {
  return (
    <div>
      <div className="wave top-wave">
        <img src={waveTop} alt="" />
      </div>
      <div className="stack-bg">
        <div className="tech-stack">
          <div className="stack-info">
            <h1>Tech Stack</h1>
            <p>
              Technologie, których używam aby dostarczyć Ci gotowy i
              funkcjonalny projekt dostosowany do Twoich indywidualnych potrzeb
              ✌️✏︎ 
            </p>
            <img src={swirlyArrow} alt="Swirly Arrow" />
          </div>
          <div className="stack-img">
            <img src={logosy} alt="Circle" />
          </div>
        </div>
        <div className="tech-stack-details">
          <div className="single-stack">
            <div className="single-stack-logo"><img src={react} alt="" /></div>
            <div className="single-stack-title"><h2>ReactJS</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={js} alt="" /></div>
            <div className="single-stack-title"><h2>Javascript</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={html} alt="" /></div>
            <div className="single-stack-title"><h2>HTML5</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={css3} alt="" /></div>
            <div className="single-stack-title"><h2>CSS3</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={scss} alt="" /></div>
            <div className="single-stack-title"><h2>Scss</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={bootstrap} alt="" /></div>
            <div className="single-stack-title"><h2>Bootstrap</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={npm} alt="" /></div>
            <div className="single-stack-title"><h2>NPM</h2></div>
            
          </div>
          <div className="single-stack">
            <div className="single-stack-logo"><img src={git} alt="" /></div>
            <div className="single-stack-title"><h2>Git</h2></div>
            
          </div>
          
        </div>
      </div>
      <div className="wave bottom-wave">
        <img src={waveBottom} alt="" />
      </div>
    </div>
  );
};

export default Stack;
