import { useState } from 'react';
import './App.css';
import HeaderNavbar from './Project Components/HeaderNavbar';
import AboutPage from './Project Components/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SkillCompoent from './Project Components/SkillCompoent';
import ProjectComponent from './Project Components/ProjectCompoent';
import Footer from './Project Components/Footer';
import PageDevelop from './Project Components/PageDevelop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <div className='App'>
      <HeaderNavbar/>
      <AboutPage/>
      <SkillCompoent/>
      <ProjectComponent/>
      <PageDevelop/>
      <Footer/>
     </div>
    </BrowserRouter>
  );
}

export default App;
