import React, { useContext, useEffect, useState } from "react";
import { MojContext } from "./Context";


// COMPOMENTS
import Hero from "./Hero";
import Stack from "./Stack"
import Projects from "./Projects"
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
      <h1>datocms-0a6</h1>
      <Hero />
      <Stack />
      <Projects />
      
      
    </div>
  );
};

export default Artur;
