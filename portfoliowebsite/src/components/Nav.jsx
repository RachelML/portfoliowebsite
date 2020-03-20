import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";



export default class Nav extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="nav-container">
          

            <p className="nav-about">  <HashLink  style={{textDecoration: 'none'}} to="/#about">
            ABOUT
          </HashLink></p>
                <p className="nav-portfolio">  <HashLink  style={{textDecoration: 'none'}} to="/#portfolio">
            PORTFOLIO
          </HashLink></p>
                <p className="nav-contact">  <HashLink  style={{textDecoration: 'none'}} to="/#contact">
            CONTACT
          </HashLink></p>
                <p className="resume">RESUME</p>
            </div>
        )
    }
}
