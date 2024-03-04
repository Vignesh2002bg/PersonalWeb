import { useState } from 'react'
import './App.css'
import HeaderNavbar from './Project Components/HeaderNavbar'
import AboutPage from './Project Components/AboutPage'
import SkillCompoent from './Project Components/SkillCompoent'
import ProjectCompoent from './Project Components/ProjectCompoent'
import Footer from './Project Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <HeaderNavbar/>
      <AboutPage/>
      <SkillCompoent/>
      <ProjectCompoent/>
      <Footer/>
    </div>
  )
}

export default App
