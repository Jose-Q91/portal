import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Job from './components/Job'
import Skill from './components/Skill'
import Work from './components/Work'
import Footer from './components/Footer'
import { ReactLenis } from 'lenis/react'

function App() {


  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Job />
        <Work />
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App
