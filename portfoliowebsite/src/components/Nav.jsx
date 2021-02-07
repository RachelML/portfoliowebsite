import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";



export default class Nav extends Component {
    // componentDidMount() {
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

    render() {
        return (
            <div>
                <div className="nav-container">
                    
                {/* <div className="hero" onMouseMove={this._onMouseMove.bind(this)}>
        <p className="name">ABOUT</p>
        <h1 className="name">
          RACHEL LONG        
        </h1>
        <p className="name">WORK</p>
      </div> */}
                     <p className="nav-about">  <HashLink  style={{textDecoration: 'none'}} to="/#about">
                     ABOUT
                    </HashLink></p>
                     <p className="nav-portfolio">  <HashLink  style={{textDecoration: 'none'}} to="/#portfolio">
                     PORTFOLIO
                    </HashLink></p>
              
                     <p className="title-name" >RACHEL LONG</p>

                     

                     <p className="nav-linkedin"><a style={{textDecoration: 'none'}}   href='https://www.linkedin.com/in/rachelricelong/'>LINKEDIN</a></p>
                     <p className="nav-github"><a style={{textDecoration: 'none'}}   href='https://github.com/RachelML'>GITHUB</a>
                     </p>
                </div>

            </div>
        )
    }
}
