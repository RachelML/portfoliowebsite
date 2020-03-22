import React from 'react';
import './App.css';
import logo from  './images/i-dQS4s7r-L.jpg'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import { Email, Item, A} from 'react-html-email';
import { Route, Link, Redirect } from 'react-router-dom';
import GetInTouch from './components/GetInTouch';





function App() {
  return (
    <div>
      <Nav />

      <header className="App-header">
        

        <div className='bio'>
          <p>Hi, my name is<br></br> Rachel Long <br></br>I'm a Full Stack Web Developer 
        based in Richmond, Va specializing 
            In front end websites and applications</p>

        

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


