import React, { useState, createContext } from "react";

export const MojContext = createContext();
export const ContextProvider = (props) => {
  const [ilosc, setIlosc] = useState(
    0
  );
 

  return (
    <MojContext.Provider value={[ilosc, setIlosc]}>
      {props.children}
    </MojContext.Provider>
  );
};
