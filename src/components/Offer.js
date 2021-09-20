import React, { useContext, useEffect, useState, useRef } from "react";
import { MojContext } from "./Context";
import AOS from "aos";
import { gsap } from "gsap";
// STYLES
import "../scss/projects.scss";
import "../scss/settings.scss";
import 'aos/dist/aos.css';
// IMAGES
import obraz from "../assets/414.svg"


const Offer = () => {

    return (<div style={{width: "100%"}}><div style={{width: "1200px", margin: "200px auto"}}><img src={obraz} alt="" /></div></div>)
}
export default Offer;