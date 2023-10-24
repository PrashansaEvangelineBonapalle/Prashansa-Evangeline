import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../assets/1533471.jpg"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Work Experience</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="img" />
                <h2 className="project-title">Full Stack Engineering Analyst, Accenture</h2>
                
                <p className="date">Aug 2021 - Jul 2022</p>
                <div className="pro-details">
                    <ul>
                        <li>Java Elastic Path Developer, worked on backend API development in B2B E-commerce domain.</li>
                        <li>Trained in Web Application Development using Java, Spring MVC, and JSP. Created, analyzed, and tested
                        MicroServices using Spring Boot.</li>
                        <li>Programmed on Java Elastic Path Commerce to create and maintain E-Commerce Application and built Products and
                        Devices to be displayed on the Product Listing Page and implemented Solvency Features.</li>
                        <li>Restructured Solr API to display List-Price and Taxed-Price, and included Activation and Retention Scenarios.</li>
                        <li>Executed Thunder tests and Jmeter tests to test functionality and performance of APIs and implemented Cache to
                        reduce time taken for Product Listing page to load.</li>
                        <li>Collaborated with a team of developers using Git for version control and Jenkins for CI/CD pipeline.</li>
                    </ul>
                </div>
            </div>
            <div className="project-card">
                <img src={pro1} alt="img" />
                <h2 className="project-title">Full Stack Engineering Analyst, Accenture</h2>
                
                <p className="date">Aug 2021 - Jul 2022</p>
                <div className="pro-details">
                    <ul>
                        <li>Java Elastic Path Developer, worked on backend API development in B2B E-commerce domain.</li>
                        <li>Trained in Web Application Development using Java, Spring MVC, and JSP. Created, analyzed, and tested
                        MicroServices using Spring Boot.</li>
                        <li>Programmed on Java Elastic Path Commerce to create and maintain E-Commerce Application and built Products and
                        Devices to be displayed on the Product Listing Page and implemented Solvency Features.</li>
                        <li>Restructured Solr API to display List-Price and Taxed-Price, and included Activation and Retention Scenarios.</li>
                        <li>Executed Thunder tests and Jmeter tests to test functionality and performance of APIs and implemented Cache to
                        reduce time taken for Product Listing page to load.</li>
                        <li>Collaborated with a team of developers using Git for version control and Jenkins for CI/CD pipeline.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard