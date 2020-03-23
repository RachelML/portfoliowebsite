
import React, { Component } from 'react'
import PDF from '../documents/Rachel-Long.pdf'



export default class GetInTouch extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
   
        <div className="contact-links">
             <a className="getin" className="in-touch" style={{textDecoration: 'none'}} href='mailto:rachelricelong@gmail.com'>GET IN TOUCH</a>   
           <a className="resume-link" className="resume" style={{textDecoration: 'none', color: 'white'}} href = {PDF}>RESUME</a>

        </div>
        )
    }
}

