import React from 'react';
import './App.css';
import logo from  './images/i-dQS4s7r-L.jpg'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        {/* <nav>
          <span>About</span>
          <span>Contact</span>
        </nav> */}
        <div className='bio'>
          <p>Hi, my name is</p>
        <h1> Rachel Long</h1>
        <p>Im a Full Stack Web Developer 
based in Richmond, Va specializing 
In front end websites and applications</p>
        <button>
          Get in touch
        </button>
        </div>
        <div className="image">
          <img src={logo} />
        </div>
      </header>
     <About />
     <Portfolio />
     <Contact />
    </div>
  );
}

export default App;
