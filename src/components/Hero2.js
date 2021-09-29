import React, { useContext, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

import "../scss/settings.scss";
import "../scss/index.scss";
import telefon from "../assets/telefon.svg"
import heroimg from "../assets/heroimg.svg"
import tlo from "../assets/tlo.svg"

const Hero = () => {

    return (<div className="hero-container"><div className="hero">
    <div>
      <h1>artur<span>lewandowicz</span></h1>
      <h2>front end dev
        <Typewriter
  options={{
    strings: ['aplikacje internetowe', 'REACT & Javascript'],
    autoStart: true,
    loop: true,
  }}
/> </h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
    </div>
    <div></div>
  </div></div>)
}
export default Hero;