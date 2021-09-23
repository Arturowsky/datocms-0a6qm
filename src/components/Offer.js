import React, { useContext, useEffect, useState, useRef } from "react";
import { MojContext } from "./Context";
import AOS from "aos";
import { gsap } from "gsap";
// STYLES
import "../scss/projects.scss";
import "../scss/settings.scss";
import "../scss/offer.scss";
import "aos/dist/aos.css";
// IMAGES
import obraz from "../assets/414.svg";
import chevronDown from "../assets/chevron-down.svg";
import chevronRight from "../assets/chevron-right.svg";
import brackets from "../assets/brackets.svg"
import offerImg from "../assets/corobie.svg"
import offerBg from "../assets/offerbg.svg"

const Details = props => {
  return (<details>
    {props.text}
    <summary>
      <span>{props.name} <img src={props.image} alt=""/> </span>
    </summary>
  </details>)
}
const detailsArr = [
  { 
    name: "Aplikacje internetowe",
    text: "Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: brackets
  },
  { 
    name: "Indywidualny design",
    text: " Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: brackets
  },
  { 
    name: "Animowane banery reklamowe",
    text: " Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: brackets
  },
  { 
    name: "Social media marketing",
    text: " Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: brackets
  },
  { 
    name: "Jam Stack",
    text: "Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: brackets
  },
 
]
const Offer = () => {
  const detailList = detailsArr.map((index, value) => 
  <Details name={index.name} text={index.text} image={index.image} key={index}/>);
  return (
    // <div style={{ width: "100%" }}>
    //   <div style={{ width: "1200px", margin: "200px auto" }}>
    //     <img src={obraz} alt="" />
    //   </div>
    //   <details open>
    //     Twoja firma chce zainstniec w sieci ? It is a long established fact that
    //     a reader will be distracted by the readable content of a page when
    //     looking at its layout
    //     <summary>
    //       <span>Aplikacje internetowe <img src={brackets} alt=""/> </span>
    //     </summary>
    //   </details>
    //   <details>
    //     Twoja firma chce zainstniec w sieci ? It is a long established fact that
    //     a reader will be distracted by the readable content of a page when
    //     looking at its layout
    //     <summary>
    //       <span>Indywidualny design</span>
    //     </summary>
    //   </details>
    // </div>
      <div className="offer-container">
        <div className="offer" style={{background: `url(${offerBg})`}}>
          <div className="offer-grid">
          <div>
            {detailList}
        {/* <details open>
         Twoja firma chce zainstniec w sieci ? It is a long established fact that
         a reader will be distracted by the readable content of a page when
         looking at its layout
         <summary>
           <span>Aplikacje internetowe <img src={brackets} alt=""/> </span>
         </summary>
       </details>
       <details>
         Twoja firma chce zainstniec w sieci ? It is a long established fact that
         a reader will be distracted by the readable content of a page when
         looking at its layout
         <summary>
           <span>Indywidualny design</span>
         </summary>
         </details>
         <details>
         Twoja firma chce zainstniec w sieci ? It is a long established fact that
         a reader will be distracted by the readable content of a page when
         looking at its layout
         <summary>
           <span>Animowane banery reklamowe </span>
         </summary>
         </details>
         <details>
         Twoja firma chce zainstniec w sieci ? It is a long established fact that
         a reader will be distracted by the readable content of a page when
         looking at its layout
         <summary>
           <span>Social media marketing</span>
         </summary>
         </details>
         <details>
         Twoja firma chce zainstniec w sieci ? It is a long established fact that
         a reader will be distracted by the readable content of a page when
         looking at its layout
         <summary>
           <span>Jam Stack</span>
         </summary>
         </details> */}
        </div>
        <div><img src={offerImg} alt=""/><h2>Co mogę dla Ciebie zaprojektować ?</h2>
        <p>Twoja firma chce zainstniec w sieci ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p></div>
          </div>
        </div>
      </div>
  );
};
export default Offer;
