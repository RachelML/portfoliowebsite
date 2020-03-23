
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import PDF from '../documents/Rachel-Long.pdf'



export default class GetInTouch extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
   
        <div className="contact-links">
            <p className="in-touch"> <a className="getin" style={{textDecoration: 'none'}} href='mailto:rachelricelong@gmail.com'>GET IN TOUCH</a></p>    
            <p className="resume"><a className="resume-link"  style={{textDecoration: 'none', color: 'white'}} href = {PDF}>RESUME</a>
</p>
        </div>
        )
    }
}

