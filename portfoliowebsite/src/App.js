import React from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import GetInTouch from './components/GetInTouch';





function App() {
//   componentDidMount() {
//     const hero = document.querySelector(".hero");
//     this.width = hero.offsetWidth;
//     this.height = hero.offsetHeight;

//     this.text = hero.querySelector("h1");
//     this.walk = 20;
//   }

//   _onMouseMove(e) {
//     const xWalk = Math.round(
//       (e.screenX / this.width) * this.walk - this.walk / 2
//     );
//     const yWalk = Math.round(
//       (e.screenY / this.height) * this.walk - this.walk / 2
//     );

//     this.text.style.textShadow = `
//       ${xWalk}px ${yWalk}px 0px rgba(255,0,255,0.7),
//       ${xWalk * -1}px ${yWalk}px 0px rgba(0,255,255,0.7),
//       ${yWalk}px ${xWalk * -1}px 0px rgba(0,255,0,0.7),
//       ${yWalk * -1}px ${xWalk}px 0px rgba(0,0,255,0.7)
//     `;
//     this.render();

// }
  return (
    <div className="app">
      <Nav />

        <header className="App-header">
         <div className='bio'>
          <p>Hi, my name is</p>
          <p> Rachel Long. </p>
          {/* <div className="hero" onMouseMove={this._onMouseMove.bind(this)}>
                <h1 className="name">
                RACHEL LONG        
                 </h1>
                </div>  */}
          <p>I'm a Full Stack Web Developer 
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


