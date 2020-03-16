import React, { Component } from 'react'
import { Email, Item, A} from 'react-html-email';


export default class Contact extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="contact-container">
                <div className="center-contact">
                <p>Contact</p>
                <A style={{ paddingLeft: 10 }}  href='mailto:rachelricelong@gmail.com'>Email</A>
                <A style={{ paddingLeft: 10 }}  href='https://www.linkedin.com/in/rachelricelong/'>LinkedIN</A>
                <A style={{ paddingLeft: 10 }}  href='https://github.com/RachelML'>Github</A>
                </div>
            </div>
        )
    }
}
