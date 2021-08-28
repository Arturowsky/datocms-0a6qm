import React, {useState} from 'react'
import "../scss/settings.scss"
import "../scss/btmenu.scss"
const BottomRightMenu = () => {
    const [disableMenu, setDisableMenu] = useState("block")
    const turnoff = () => {
        setDisableMenu("none")
    }
    return (
        <>
        <div className="btm-wrapper" style={{display: disableMenu}}>
            <div><button onClick={turnoff}>X</button></div>
        </div>
        </>
    )
}
export default BottomRightMenu;