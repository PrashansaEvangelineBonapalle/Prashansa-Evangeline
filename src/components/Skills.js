import "./SkillsStyles.css"

import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <div className="exp">
        <h1>My Skills</h1>
        <div className = "exp_container">
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <h4>JavaScript</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <h4>React</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <h4>Bootstrap</h4>
                        <small className="text-light">Beginner</small>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <h4>Angular</h4>
                        <small className="text-light">Beginner</small>
                    </article>
                </div>
            </div>
            <div className="experience_backend">
                <h3>Backend Development</h3>
                <div className="experience_content_bk">
                    <article className="experience_details_bk">
                        <BsPatchCheckFill className="experience_details-icon_bk" />
                        <h4>Python</h4>
                        <small className="text-light_bk">Experienced</small>
                    </article>
                    <article className="experience_details_bk">
                        <BsPatchCheckFill className="experience_details-icon_bk"/>
                        <h4>Java</h4>
                        <small className="text-light_bk">Experienced</small>
                    </article>
                    <article className="experience_details_bk">
                        <BsPatchCheckFill className="experience_details-icon_bk"/>
                        <h4>MySQL</h4>
                        <small className="text-light_bk">Intermediate</small>
                    </article>
                    <article className="experience_details_bk">
                        <BsPatchCheckFill className="experience_details-icon_bk" />
                        <h4>Golang</h4>
                        <small className="text-light_bk">Intermediate</small>
                    </article>
                    <article className="experience_details_bk">
                        <BsPatchCheckFill className="experience_details-icon_bk" />
                        <h4>Node JS</h4>
                        <small className="text-light_bk">Beginner</small>
                    </article>
                    <article className="experience_details_bk">
                        <BsPatchCheckFill className="experience_details-icon_bk"/>
                        <h4>Spring</h4>
                        <small className="text-light_bk">Experienced</small>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills