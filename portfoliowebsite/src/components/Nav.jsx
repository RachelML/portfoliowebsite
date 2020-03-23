import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";



export default class Nav extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="nav-container">
          
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
