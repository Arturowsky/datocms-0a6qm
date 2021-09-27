import React, { useContext, useEffect, useState, useRef } from "react";
import { MojContext } from "./Context";
import AOS from "aos";
import { gsap } from "gsap";
// STYLES
import "../scss/projects.scss";
import "../scss/settings.scss";
import 'aos/dist/aos.css';
// IMAGES
import projects from "../assets/projects1.svg";
import btnlist from "../assets/btn-list.svg"
import divmaker from "../assets/divmaker.svg"
import divmlogo from "../assets/divmlogo.svg"
import weatherapplogo from "../assets/weatherapplogo.svg"
import currencyapplogo from "../assets/currencyapplogo.svg"
import l2mlogo from "../assets/l2m.png"
import currencyapp from "../assets/currencyapp2.svg"
import weatherapp from "../assets/weatherapp.svg"
import backgroundSVG from "../assets/gbg.svg"
import ol from "../assets/ol.png";
import el from "../assets/el.png";
const Projects = () => {
  const firstItem = useRef();
  const firstItemPara = useRef();
  const hoverTitleColor = "#6B62E0";
  const hoverOutTitleColor = "#7C7979";
  const FirstHoverEffect = () => {
    gsap.to(firstItem.current, { x: 10, color: hoverTitleColor });
    gsap.to(firstItemPara.current, { x: 20 });
  }
  const FirstHoverEffectOut = () => {
    gsap.to(firstItem.current, { x: 0, color: hoverOutTitleColor });
    gsap.to(firstItemPara.current, { x: 0 });
  }
  const secondItem = useRef();
  const secondItemPara = useRef();

  const SecondHoverEffect = () => {
    gsap.to(secondItem.current, { x: 10, color: hoverTitleColor });
    gsap.to(secondItemPara.current, { x: 20 });
  }
  const SecondHoverEffectOut = () => {
    gsap.to(secondItem.current, { x: 0, color: hoverOutTitleColor });
    gsap.to(secondItemPara.current, { x: 0 });
  }
  const thirdItem = useRef();
  const thirdItemPara = useRef();

  const ThirdHoverEffect = () => {
    gsap.to(thirdItem.current, { x: 10, color: hoverTitleColor });
    gsap.to(thirdItemPara.current, { x: 20 });
  }
  const ThirdHoverEffectOut = () => {
    gsap.to(thirdItem.current, { x: 0, color: hoverOutTitleColor });
    gsap.to(thirdItemPara.current, { x: 0 });
  }
  const fourthItem = useRef();
  const fourthItemPara = useRef();

  const FourthHoverEffect = () => {
    gsap.to(fourthItem.current, { x: 10, color: hoverTitleColor });
    gsap.to(fourthItemPara.current, { x: 20 });
  }
  const FourthHoverEffectOut = () => {
    gsap.to(fourthItem.current, { x: 0, color: hoverOutTitleColor });
    gsap.to(fourthItemPara.current, { x: 0 });
  }
  useEffect(() => {
    AOS.init();
  })
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
        
        <div className="my-projects">
          <div className="my-projects-single-item" data-aos="fade-up"  onMouseEnter={FirstHoverEffect} onMouseLeave={FirstHoverEffectOut}>
            <div className="my-projects-item-logo"><img src={divmlogo} alt=""/></div>
            <div className="my-projects-item-description" >
              <h1 ref={firstItem}>DIVMaker</h1>
              <p ref={firstItemPara}>Aplikacja do edytowania elementów DIV języka HTML. </p>
            </div>
          </div>
          <div className="my-projects-single-item" data-aos="fade-up" onMouseEnter={SecondHoverEffect} onMouseLeave={SecondHoverEffectOut}>
            <div className="my-projects-item-logo"><img src={weatherapplogo} alt=""/></div>
            <div className="my-projects-item-description" >
              <h1 ref={secondItem}>Weather App</h1>
              <p ref={secondItemPara}>Aplikacja pogodowa przeznaczona na urządzenia mobilne.</p>
            </div>
          </div>
          <div className="my-projects-single-item" data-aos="fade-up" onMouseEnter={ThirdHoverEffect} onMouseLeave={ThirdHoverEffectOut}>
            <div className="my-projects-item-logo"><img src={currencyapplogo} alt=""/></div>
            <div className="my-projects-item-description" >
              <h1 ref={thirdItem}>Currency App</h1>
              <p ref={thirdItemPara}>Przelicznik i kalkulator walut. Wyświetla ostatnie notowania oraz ceny złota.</p>
            </div>
          </div>
          <div className="my-projects-single-item" data-aos="fade-up" onMouseEnter={FourthHoverEffect} onMouseLeave={FourthHoverEffectOut}>
            <div className="my-projects-item-logo"><img src={l2mlogo} alt=""/></div>
            <div className="my-projects-item-description" >
              <h1 ref={fourthItem}>Lineage 2 Mobile</h1>
              <p ref={fourthItemPara}>Portal o mobilnej wersji gry Lineage 2 oparty o silnik Invision Power Board </p>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
