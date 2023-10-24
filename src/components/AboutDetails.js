import "./AboutDetailsStyles.css"

import React from 'react'
import snj from "../assets/IMG_1067.jpg"
import photography from "../assets/SJSU.jpg"
import football from "../assets/Osmania_University_Logo.jpg"

const AboutDetails = () => {
  return (
    <div className="about-container">
        <h1 className="activity-heading">Activities</h1>
        <div className="activity-container">
            <div className="activity-card">
                <img src={snj} alt="img" />
                <h2 className="activity-title">SEC Events Officer</h2>
                <h5 className="subtitle">Associated Students, SJSU</h5>
                <div className="activity-details">
                  <p>As the Events Officer at San Jose State University's Associated Students Organization, I led a team in organizing five successful election-related events, resulting in a 25% increase in voter awareness and participation. These events included the Election's Kickoff, Meet the Candidates, Candidate Debates, Voting Booths, and the Elections Result Party. I managed logistics and created engaging opportunities for candidates and voters, showcasing my event planning and management skills.</p>
                </div>
            </div>

            <div className="activity-card">
                <img src={photography} alt="img" />
                <h2 className="activity-title">Instructional Student Asst.</h2>
                <h5 className="subtitle">Dept. of Computer Engineering, SJSU</h5>
                <div className="activity-details">
                  <p>As an Instructional Student Assistant, I've consistently upheld a commitment to educational excellence. I've tutored students in assembly language programming and MySQL, supported courses like "Assembly Language Programming" and "Enterprise Software Platforms," graded assignments, and supervised exams. My efforts have contributed to students' success and enriched my own knowledge, aligning with the department's goal of nurturing a learning environment.</p>
                </div>
            </div>

            <div className="activity-card">
                <img src={football} alt="img" />
                <h2 className="activity-title">Player</h2>
                <h5 className="subtitle">MVSR Basketball</h5>
                <div className="activity-details">
                  <p>Securing 2nd place in the Women's Basketball Tournament at Osmania State University showcased our team's dedication and skill. While our goal was the championship, finishing as runners-up was a notable achievement. Throughout the tournament, we displayed exceptional teamwork, unwavering determination, and fierce competitiveness. This experience not only honed our basketball skills but also strengthened our team bonds. Representing our university with pride, we left with cherished memories.</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AboutDetails