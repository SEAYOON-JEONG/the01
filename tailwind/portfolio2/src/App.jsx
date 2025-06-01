import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Bot from './components/Bot'
import About from './components/About'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Hero from './components/Hero'
import Contact from './components/Contact'  

function App() {
  

  return (
    <>
      <div>

        <Navbar/>
        <About/>
        <Bot/>
        <Hero/>

        <Contact/>
        <Project></Project>
        <Footer/>
      </div>
    </>
  )
}

export default App
