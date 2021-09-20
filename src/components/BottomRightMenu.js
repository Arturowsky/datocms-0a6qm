import React, {useState, useEffect, useRef} from 'react'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import AOS from "aos";
import { gsap } from "gsap";
import "../scss/settings.scss"
import "../scss/btmenu.scss"
import goup from "../assets/caret-up-fill.svg"
import sidebar from "../assets/window-sidebar.svg"
import github from "../assets/github-btm.svg"
import linked from "../assets/linked-btm.svg"
import facebook from "../assets/face-btm.svg"
import closeBtmMenu from "../assets/closeBtmMenu.svg"
const BottomRightMenu = () => {
    
    const [subMenuVisibility, setSubMenuVisibility] = useState("none")
    const [subMenu, setSubMenu] = useState(true)
    const [disableMenu, setDisableMenu] = useState("none")
    const turnoff = () => {
        setDisableMenu("block")
    }
    const openclose = () => {
        setSubMenu(!subMenu)
        if (subMenu) {
            setDisableMenu("block")
           
        }
        if (subMenu === false) {
            setDisableMenu("none")
        }
    }
    useScrollPosition(({ prevPos, currPos }) => {
        // console.log(currPos.x)
        // console.log(currPos.y)
        let scrollDown = window.scrollY;
        if (scrollDown > 500) {
            setSubMenuVisibility("grid")

        }
        // if (scrollDown < 100) {
        //     setSubMenuVisibility("none")
        // }
      });
      useEffect(() => {
        AOS.init();
      })
    //   const githubRef = useRef();
    //   const linkedRef = useRef();
    //   const facebookRef = useRef();
      
    //   useEffect(() => {
         
    //      gsap.from(githubRef.current, {x: -100, opacity: 0})
    //      gsap.from(linkedRef.current, {x: -100, opacity: 0, delay: 0.5})
    //      gsap.from(facebookRef.current, {x: -100, opacity: 0, delay: 1})
         
    //   },[subMenu])

    // //   const BottomMenuClicked = () => {
    // //     gsap.to(githubRef.current, {y: 220})
    // //   }
    // const testy = () => {
    //     setSubMenu(!subMenu)
    // }
    return (
        <>
        <div className="btm-wrapper" style={{display: disableMenu}}>
            {/* <div><button onClick={turnoff}>X</button></div> */}
            {/* <input type="checkbox" className="test"/> */}
            <div className="btm-item" data-aos="fade-up"><img src={github} alt="" /><p>arturowsky</p></div>
            <div className="btm-item" ><img src={linked} alt="" /><p>artur.lewandowicz</p></div>
            <div className="btm-item" ><img src={facebook} alt="" /><p>artur.lewandowicz</p></div>
        </div>
        <div className="btm-buttons-group" style={{display: subMenuVisibility}}>
            <button className="btn-first" ><img src={goup} alt="" /></button>
            <button className="btn-second" onClick={openclose}><img src={subMenu ? sidebar : closeBtmMenu} alt="" /></button>
        </div>
        </>
    )
}
export default BottomRightMenu;