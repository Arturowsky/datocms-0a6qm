import React, { useContext, useEffect, useState } from "react";
import { MojContext } from "./Context";


// COMPOMENTS
import Hero from "./Hero2";
import Stack from "./Stack"
import Projects from "./Projects"
import Offer from "./Offer"
// STYLES
import "../scss/settings.scss";
import "../scss/index.scss";
// IMAGES
import telefon from "../assets/telefon.svg";

import g from "../assets/g.svg"
import logos from "../assets/logos-group.svg"
import num from "../assets/404.png"

const Artur = () => {
  const [ilosc, setIlosc] = useContext(MojContext);
 
  useEffect(() => {
   
    const wartosc = ilosc;
  }, [ilosc]);
  return (
    <div className="w-full">
      
      <Hero />
      <Projects />
      <Stack />
      <Offer />
      
      
      
      
      
      
    </div>
  );
};

export default Artur;
