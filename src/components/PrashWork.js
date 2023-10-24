import "./PrashWorkStyles.css"

import React from 'react'
import sjsu from "../assets/SJSU_Seal.jpg"
import ou from "../assets/Osmania_University_Logo.jpg"

const Education = () => {
  return (
    <div className="education-container">
    <h1 className="education-heading">Work Experience</h1>
    <div className="timeline">
        <div className="container left-container">
            <img src={sjsu} alt="img"/>
            <div className="text-box">
                <h2>Teaching Associate</h2>
                <h5>San Jose State University</h5>
                <small>Aug 2023 - Present</small>
                <p>Designed and implemented a pipelined RISC-V processor. Mentor students in 'Assembly Language Programming" and
"Computer Architecture and Design" courses, guiding them to excel in Verilog programming, emphasizing embedded
networking and OS development.
</p>
                <p>Enhance student’s skills in array manipulation, pointer usage, subroutine implementation, stack management, procedure calls,
and computer architecture principles using Linux and Unix platforms</p>
                <span className="left-container-arrow" />
            </div>
        </div>

        <div className="container right-container">
            <img src={ou} alt="img"/>
            <div className="text-box">
                <h2>Data Engineer</h2>
                <h5>Accenture</h5>
                <small>August 2021 - July 2022</small>
                <p>Attained flawless execution of technical functions for data migration, ensuring precision in data extraction, transformation,
and field mapping using SQL, ETL processes to align with client requirements. Handled big data and ensured the smooth
functioning of data pipelines.</p>
                <p>Successfully loaded over 20 data objects into the target data lake and data warehouse using SQL Server. Utilized SQL, SKP
and SAP ABAP tools to address build issues, produce error reports, and target reports in the SDLC process.</p>
                <p>Achieved a notable 15% team efficiency boost with Agile methodologies, meeting project timelines consistently.
Strengthened stakeholder engagement through compelling presentations on data management and updates using AWS and
Azure platforms.
</p>
                <span className="right-container-arrow" />
            </div>
        </div>

        <div className="container left-container">
            <img src={sjsu} alt="img"/>
            <div className="text-box">
                <h2>FullStack Software Engineer Intern</h2>
                <h5>Cognizant</h5>
                <small>Jan 2021 - July 2021</small>
                <ul>
                    <p>Saved an average of 10 hours per week by creating efficient Python scripts for CSV to JSON and JSON to CSV conversions,
    which benefitted the entire team.</p>
                    <p>Developed ‘Online Hotel Booking System’ with a dynamic React-based frontend, a Node.js and Express.js backend handling
    business logic, and a secure MongoDB database for data storage. Integrated external APIs for secure payments and geolocation
    services. Managed version control using Git and ensured continuous deployment with CI/CD pipelines.
    </p>
                </ul>
                <span className="left-container-arrow" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Education