import "./AboutDetailsStyles.css"

import React from 'react'
import snj from "../assets/SJSU.jpg"

const Activity = () => {
  return (
    <div className="about-container">
        <h1 className="activity-heading">Activities</h1>
        <div className="activity-container">
            <div className="activity-card">
                <img src={snj} alt="img" />
                <h2 className="activity-title">Activity Title</h2>
                <div className="activity-details">
                  <p>This is activity Text</p>
                </div>
            </div>

        </div> 
    </div>
  )
}

export default Activity