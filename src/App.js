import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Home from './components/pages/Home';
import Rsvp from './components/pages/Rsvp';
import Venue from './components/pages/Venue';
import DressCode from './components/pages/DressCode';
import Agenda from './components/pages/Agenda';
import LanguageSwitcher from './components/LanguageSwitcher';
import FlowerTop from "./icons/7103500 3.svg"
import FlowerBotton from "./icons/7103500 2.svg"

function App() {
  return (
    <>
      <Router>
        <div className='flowertopdiv'>
          <img src={FlowerTop} className='flowertop'/>
        </div>
        <div className='flowerbottomdiv'>
          <img src={FlowerBotton} className='flowerbottom'/>
        </div>
        <NavBar/>
        <Carousel/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/rsvp' exact Component={Rsvp}/>
          <Route path='venue' exact Component={Venue}/>
          <Route path='dresscode' exact Component={DressCode}/>
          <Route path='agenda' exact Component={Agenda}/>
        </Routes>
        <LanguageSwitcher />
      </Router>
    </>
  );
}

export default App;
