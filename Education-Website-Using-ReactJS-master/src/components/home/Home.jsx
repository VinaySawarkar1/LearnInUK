import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Univer from "./uni"
import Service from "./service"

import Hero from "./hero/Hero"
import Courses from "./Courses"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <Univer/>
      <Service/>
      <Courses/>
      <Testimonal />
      
    </>
  )
}

export default Home
