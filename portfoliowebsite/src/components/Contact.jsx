import React, { Component } from 'react'
import { Email, Item, A} from 'react-html-email';
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
                {/* <FontAwesomeIcon className="add-icon" icon={faEnvelope} /> */}
                {/* <FontAwesomeIcon className="add-icon" icon={faGitHub} /> */}

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
