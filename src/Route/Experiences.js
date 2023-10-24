import React from 'react'
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer"
import HeroImage2 from "../components/HeroImage2"
import ProjectDetails from "../components/ProjectDetails"
import WorkCard from "../components/WorkCard"
import PrashWork from "../components/PrashWork"

const Experiences = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="EXPERIENCE." text="My Most Recent Experience."/>
      <PrashWork />
      {/* <WorkCard /> */}
      <ProjectDetails />
      <Footer />
    </div>
  )
}

export default Experiences