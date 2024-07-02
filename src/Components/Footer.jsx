import React from 'react'
import "./Footer.css"
import Linkedin from "../assets/linkedin-square-icon.png"
import github from "../assets/github-icon.png"
import facebook from "../assets/facebook-round-color-icon.png"
const Footer = () => {
  return (
   <div className="footer">
   <div className="foot">
  Copyright &copy; all rights reserved | Foodie Haven
</div>
    <div className="logosfooter">
   <a href="https://www.facebook.com/profile.php?id=100012213272803" target="_blank"> <img  className="footerlogos"src={facebook} alt="facebook" /></a>
   <a href="https://github.com/AdeelTahir-SE" target="_blank"> <img className="footerlogos"src={github} alt="github" /></a>
   <a href="https://www.linkedin.com/in/adeel-tahir-41ba212b9/" target="_blank"> <img className="footerlogos"src={Linkedin}alt="Linkedin" /></a>
   </div>
   </div>
  )
}

export default Footer
