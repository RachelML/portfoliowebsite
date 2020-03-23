import React, { Component } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'






export default class Contact extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id="contact"  className="contact-container">
               
                <div className="center-contact">
                <p>CONTACT</p>
                <div className="link-div">
                <a style={{ paddingLeft: 0 }}  href='mailto:rachelricelong@gmail.com'> <EmailIcon /></a>
                <a style={{ paddingLeft: 60 }}  href='https://www.linkedin.com/in/rachelricelong/'><LinkedInIcon /></a>
                <a style={{ paddingLeft: 60 }}  href='https://github.com/RachelML'><GitHubIcon /></a>
                </div>
                </div>
            </div>
        )
    }
}
