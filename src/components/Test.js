import React, { useContext, useEffect, useState } from "react";
import Prism from "prismjs";
import Typewriter from "typewriter-effect";

import "../scss/prism.css";
const Test = () => {
  const [stan, setStan] = useState(20);
  const Click = () => {
    setStan(stan + 1);
  };
  const proba = "MyElement";
  useEffect(() => {
    Prism.highlightAll();
  });
 
  return (
    <div className="test" style={{ background: "#f5f2f0" }}>
      <div className="prism" style={{ width: "50%", margin: "0 auto;" }}>
        <button onClick={Click}>Dodaj liczbe</button>
        <pre>
          <code className="language-javascript">
            {`const ${proba} = () => {
        return (<div>hello</div>)
    } 
    const SecondHoverEffect = () => {
     gsap.to(secondItem.current, { x: 10, color: hoverTitleColor });
     gsap.to(secondItemPara.current, { x: ${stan} });
   }  
   }; `}
          </code>
        </pre>
      </div>
    </div>
  );
};
export default Test;
