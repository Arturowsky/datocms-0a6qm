import React from 'react'
import "../scss/sociallinks.scss"
import fb from "../assets/social-fb.svg"
import lin from "../assets/social-in.svg"
import git from "../assets/social-git.svg"
const SocialLinks = () => {

    return (<div className="social-links-wrapper"><div><img src={fb} alt="" /></div><div><img src={lin} alt="" /></div><div><img src={git} alt="" /></div></div>)
}

export default SocialLinks;