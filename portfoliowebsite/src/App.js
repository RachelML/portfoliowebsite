import React from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import GetInTouch from './components/GetInTouch';





function App() {
  return (
    <div>
      <Nav />

        <header className="App-header">
         <div className='bio'>
          <p>Hi, my name is<br></br> Rachel Long. <br></br>I'm a Full Stack Web Developer 
               based in Richmond, Va specializing 
               In front end websites and applications.
          </p>
        </div>
      </header>
     <GetInTouch />
     <About />
     <Portfolio />
     <Contact />
    </div>
  );
}

export default App;


