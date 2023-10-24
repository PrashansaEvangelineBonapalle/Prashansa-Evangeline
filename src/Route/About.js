import React from 'react'
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer"
import HeroImage2 from "../components/HeroImage2"
import AboutDetails from '../components/AboutDetails'
import Education from '../components/Education'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT." text="I'm a Software Developer."/>
      <Education />
      <AboutDetails />
      <Footer />
    </div>
  )
}

export default About