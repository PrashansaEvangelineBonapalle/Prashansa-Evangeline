import "./EducationStyles.css"

import React from 'react'
import sjsu from "../assets/SJSU_Seal.jpg"
import ou from "../assets/Osmania_University_Logo.jpg"

const Education = () => {
  return (
    <div className="education-container">
    <h1 className="education-heading">Education</h1>
    <div className="timeline">
        <div className="container left-container">
            <img src={sjsu} alt="img"/>
            <div className="text-box">
                <h2>San Jose State University</h2>
                <h3>M.S., Computer Engineering</h3>
                <h5>GPA: 3.7</h5>
                <small>2022 - 2024</small>
                <p>Relevant Coursework: Data Mining, AI, ML, Enterprise Software Platforms, Software Security Technologies, System Software,
Data Structures & Algorithms, Object oriented programming</p>
                <span className="left-container-arrow" />
            </div>
        </div>

        <div className="container right-container">
            <img src={ou} alt="img"/>
            <div className="text-box">
                <h2>Osmania University</h2>
                <h3>B.S., Electronics & Communication Engineering</h3>
                <h5>GPA: 3.8</h5>
                <small>2017 - 2021</small>
                <p>Relevant Coursework: Computer Architecture, Assembly Language Programming, Embedded Systems, Verilog Systems, Computer Design & Architecture, VLSI Design, Digital & Analog Communication.</p>
                <span className="right-container-arrow" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Education