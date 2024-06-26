import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/Navbar/About/About'
import MyWork from './Components/MyWork/MyWork'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
    </div>
  )
}

export default App