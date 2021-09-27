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
import brackets from "../assets/brackets.svg";
import brush from "../assets/brush.svg";
import wand from "../assets/wand.svg";
import browser from "../assets/browser.svg";
import ruler from "../assets/ruler.svg";
import offerImg from "../assets/corobie.svg";
import offerBg from "../assets/offerbg.svg";

const Details = (props) => {
  const [open, setOpen] = useState(false);
  const [openArr, setOpenArr] = useState([]);
//   const onToggle = (id) => {
//     setOpen(id);
// };

// const isOpen = (id) => {
//    return id === open ? "open" : "closed";
// }

  const onToggle = (id, i) => {
    // let xxx = open.filter(item => item !== id)
    setOpen(!open);
    if (open[i] === true) {
      console.log("rowna sie ")
    }
   

    console.log(id);
  };
  // // const toggleOpen = (id) => {
   
  // //   // alert(id)
    
  // // };
  // const toggleOpen = (i) => {
  //   const arr = detailsArr.filter((item) => item.isOpen !== i);
  //       setOpenArr(arr);
  // }

  // const isOpen = (id) => {
  //    return id === open ? "true" : "false";
  // }

  return (
    <details onToggle={() => onToggle(props.id)} open={props.isOpen}>
      <div>
        {" "}
        <p> {props.text} </p>
      </div>
      <summary>
        {" "}
        <img src={props.image} alt="" />
        <span> {props.id +1} {props.name} </span>{" "}
      </summary>{" "}
    </details>
  );
};
const detailsArr = [
  {
    name: "Aplikacje internetowe",
    text: "Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: true,
    image: brackets,
  },
  {
    name: "Indywidualny design",
    text: " Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: true,
    image: brush,
  },
  {
    name: "Animowane banery reklamowe",
    text: " Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: wand,
  },
  {
    name: "Social media marketing",
    text: " Twoja firma chce zainstniec w sieci ? It is a long established fact that Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: browser,
  },
  {
    name: "Jam Stack",
    text: "Twoja firma chce zainstniec w sieci ? It is a long established fact that",
    isOpen: false,
    image: ruler,
  },
 
];
const Offer = () => {
  const stickyOfferRef = useRef();
  useEffect(() => {
    gsap.set(stickyOfferRef.current, {
      position: "sticky",
      top: "250px",
    });
  }, []);
  const detailList = detailsArr.map((item, value) => (
    <Details
      name={item.name}
      text={item.text}
      image={item.image}
      open={item.isOpen}
      key={value}
      id={value}

    />
  ));
  return (
    <div className="offer-container">
      <div
        className="offer"
        style={{
          background: `url(${offerBg})`,
        }}
      >
        <div className="offer-grid">
          {/* <div> {detailList}</div>{" "} */}
          <div
            className="offer-sticky"
            ref={stickyOfferRef}
            style={{
              position: "relative",
              top: "0",
            }}
          >
            {" "}
            <img src={offerImg} alt="" />{" "}
            <h2> Co mogę dla Ciebie zaprojektować ? </h2>{" "}
            <p>
              {" "}
              Twoja firma chce zainstniec w sieci ? It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout{" "}
            </p>
          </div>
          <div> {detailList}</div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Offer;
