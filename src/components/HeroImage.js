import "./HeroImageStyles.css"

import React from 'react'
import IntroImg from "../assets/technology-gb0d033055_1920.jpg"
import {Link} from "react-router-dom"
import MyImg from "../assets/IMG_3177.JPG"

const HeroImage = () => {
  return (
    <div className = "hero">
        <div className="mask">
            <img className = "intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M PRASHANSA EVANGELINE BONAPALLE</p>
            <div className="image-class">
              <img className="my-img" src={MyImg} alt="MyImg"></img>
            </div>{/* <h1>SOFTWARE DEVELOPER</h1> */}
            <div>
                <Link to="/experiences" className="hbtn">Experience
                </Link>
                <Link to="/contact" className="hbtn-light">Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage