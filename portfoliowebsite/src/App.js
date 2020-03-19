import React from 'react';
import './App.css';
import logo from  './images/i-dQS4s7r-L.jpg'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import { Email, Item, A} from 'react-html-email';




function App() {
  return (
    <div>
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
    <a className="get-in-touch" style={{textDecoration: 'none'}} href='mailto:rachelricelong@gmail.com'>Get in touch</a>    

        
        {/* <A style={{textDecoration: 'none'}} href='mailto:rachelricelong@gmail.com'>Get in touch</A> */}

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
