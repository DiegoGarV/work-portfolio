import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import AboutMe from './components/sky/AboutMe'
import Projects from './components/underground/Projects'
import Contact from './components/cave/Contact'
import Technologies from './components/ground/Technologies'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  )
}

export default App
