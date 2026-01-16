import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Work from '../Components/Work'
import Contact from '../Components/Contact'
import StartProject from '../Components/StartProject'
import BuildSome from '../Components/BuildSome'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Work/>
        <StartProject/>
        
        <Contact/>
       
    </div>
  )
}

export default Home
