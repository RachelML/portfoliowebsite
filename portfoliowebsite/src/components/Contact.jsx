import React, { Component } from 'react'
import { Email, Item, A} from 'react-html-email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGitHub} from '@fortawesome/free-solid-svg-icons'





export default class Contact extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="contact-container">
                <div className="center-contact">
                <p>Contact</p>
                {/* <FontAwesomeIcon className="add-icon" icon={faEnvelope} /> */}
                {/* <FontAwesomeIcon className="add-icon" icon={faGitHub} /> */}

                <div className="link-div">
                <A style={{ paddingLeft: 10 }}  href='mailto:rachelricelong@gmail.com'>Email</A>
                <A style={{ paddingLeft: 10 }}  href='https://www.linkedin.com/in/rachelricelong/'>LinkedIN</A>
                <A style={{ paddingLeft: 10 }}  href='https://github.com/RachelML'>Github</A>
                </div>
                </div>
            </div>
        )
    }
}
