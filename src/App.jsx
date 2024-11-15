import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/Navbar/About/About'
import MyWork from './Components/MyWork/MyWork'
import Certifications from './Components/Certifications/Certifications'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <MyWork/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App