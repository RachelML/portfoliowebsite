import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="nav-container">
                <p className="nav-about">ABOUT</p>
                <p className="nav-portfolio">PORTFOLIO</p>
                <p className="nav-contact">CONTACT</p>
                <p className="resume">RESUME</p>
            </div>
        )
    }
}
