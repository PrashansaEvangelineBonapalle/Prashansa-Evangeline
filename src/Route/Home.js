import React from 'react'
import Navbar from "../components/Navbar" 
import HeroImage from "../components/HeroImage"
import Footer from "../components/Footer"
import Skills from '../components/Skills'
import MySkillSet from '../components/MySkillSet'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage />
      <MySkillSet />
      {/* <Skills /> */}
      <Footer />
    </div>
  )
}

export default Home