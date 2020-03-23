import React from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import GetInTouch from './components/GetInTouch';





function App() {
  return (
    <div className="app">
      <Nav />

        <header className="App-header">
         <div className='bio'>
          <p>Hi, my name is<br></br> Rachel Long. <br></br>I'm a Full Stack Web Developer 
               based in Richmond, Va specializing 
               in high-quality websites and applications.
          </p>
        </div>
      </header>
     <GetInTouch />
     <About />
     <Portfolio />
     <Contact />
     <div className="footer"> © Rachel Long 2020</div>
    </div>
  );
}

export default App;


