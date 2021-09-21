import React, { useContext, useEffect, useState } from "react";

import "../scss/settings.scss";
import "../scss/index.scss";
import telefon from "../assets/telefon.svg"
import heroimg from "../assets/heroimg.svg"

const Hero = () => {

    return (<div className="hero">
    <div>
      <h1>artur<span>lewandowicz</span></h1>
      <h2>Freelance front end developer</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
    </div>
    <div><img src={heroimg} alt="" /></div>
  </div>)
}
export default Hero;