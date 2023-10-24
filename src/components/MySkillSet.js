import "./MySkillSetStyles.css"

import React from 'react'

const MySkillSet = () => {
  return (
    <div className="skillset">
        <h1 className="skills-heading">My Skills</h1>
        <div className="skillset-container">
            <div className="skills-card-front">
                <h4>Frontend Development</h4>
                <span className="bar" />
                <div className="my-skills-container">
                    <p>HTML
                        <br /><small>Experienced</small>
                    </p>
                    <p>CSS
                        <br /><small>Experienced</small>
                    </p>
                    <p>JavaScript
                        <br /><small>Experienced</small>
                    </p>
                    <p>React
                        <br /><small>Experienced</small>
                    </p>
                    <p>Bootstrap
                        <br /><small>Beginner</small>
                    </p>
                    <p>Angular
                        <br /><small>Beginner</small>
                    </p>
                </div>
            </div>
            <div className="skills-card-back">
                <h4>Backend Development</h4>
                <span className="bar" />
                <div className="my-skills-container">
                    <p>Java
                        <br /><small>Experienced</small>
                    </p>
                    <p>Python
                        <br /><small>Experienced</small>
                    </p>
                    <p>MySQL
                        <br /><small>Experienced</small>
                    </p>
                    <p>Spring
                        <br /><small>Experienced</small>
                    </p>
                    <p>Node JS
                        <br /><small>Beginner</small>
                    </p>
                    <p>Golang
                        <br /><small>Intermediate</small>
                    </p>
                </div>
            </div>
        </div>
        <div className="center-card">
            <div className="skills-card-back">
                <h4>Other Skills</h4>
                <span className="bar" />
                <div className="my-skills-container">
                    <p>MATLAB
                        <br /><small>Experienced</small>
                    </p>
                    <p>SAP ABAP
                        <br /><small>Experienced</small>
                    </p>
                    <p>AWS
                        <br /><small>Experienced</small>
                    </p>
                    <p>Big Data
                        <br /><small>Experienced</small>
                    </p>
                    <p>Hadoop
                        <br /><small>Beginner</small>
                    </p>
                    <p>Data Warehouse
                        <br /><small>Intermediate</small>
                    </p>
                    <p>Data Lake
                        <br /><small>Intermediate</small>
                    </p>
                    <p>Data Pipelines
                        <br /><small>Intermediate</small>
                    </p>
                    <p>ETL
                        <br /><small>Experienced</small>
                    </p>
                    <p>Azure
                        <br /><small>Intermediate</small>
                    </p>
                </div>
            </div>
            </div>
    </div>
  )
}


export default MySkillSet