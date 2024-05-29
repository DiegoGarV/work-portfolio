import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/sky/AboutMe'
import Projects from './components/underground/Projects'
import Contact from './components/cave/Contact'
import Technologies from './components/ground/Technologies'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Technologies />
    </div>
  )
}

export default App
