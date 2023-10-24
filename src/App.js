import React from "react";
import "./index.css"
import Home from "./Route/Home"
import Experiences from "./Route/Experiences" 
import Contact from "./Route/Contact"
import About from "./Route/About"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" exact component = {<Home />} />
      <Route path="/experiences" element = {<Experiences />} />
      <Route path="/about" element = {<About />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>
  );
}

export default App;
