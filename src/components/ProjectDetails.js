import "./ProjectDetailsStyles.css"

import React from 'react'
import {Link} from "react-router-dom"

const ProjectDetails = () => {
  return (
    <div className="projects">
    <h1 className="project-heading">Academic Projects</h1>
        <div className="card-container">
            <div className="card">
                <h4>Project 1</h4>
                <span className="bar"></span>
                <p className="btc">Language Proficiency Assessment</p>
                <p>Application that scores essay inputs based on 6 parameters.</p>
                <p>Used RoBERTa and DeBERTa, compared them.</p>
                <p>Achieved a Mean Columnwise RMSE loss of 0.43</p>
                <a href="/contact" className="btn">LEARN MORE</a>
            </div>

            <div className="card">
                <h4>Project 2</h4>
                <span className="bar"></span>
                <p className="btc">KickStarter Success Prediction</p>
                <p>Predicts the success of the Projects using various models.</p>
                <p>Compared NLTK, Pandas, Scikit-Learn for data analysis.</p>
                <p>Achieved an Accuracy of 98.17% with Decision Tree Classifier.</p>
                <Link to="https://github.com/PrashansaEvangelineBonapalle/Kickstarter_Success_Rate_Prediction" className="btn">LEARN MORE</Link>
            </div>

            <div className="card">
                <h4>Project 3</h4>
                <span className="bar"></span>
                <p className="btc">Cartoonification & Emotion Detection</p>
                <p>Application that uses pixel-level filters on images.</p>
                <p>Detects emotions using CNN and delivers captions.</p>
                <p>Achieved a training accuracy of 92.86%.</p><br></br>
                <Link to="https://github.com/PrashansaEvangelineBonapalle/Cartoonifying_an_image_and_Emotion_Detection" className="btn">LEARN MORE</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails