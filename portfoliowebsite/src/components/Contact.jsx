import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <p>Contact</p>
                <ul> 
                    <li>Email</li>
                    <li>LinkedIN</li>
                    <li>Github</li>
                </ul>
            </div>
        )
    }
}
