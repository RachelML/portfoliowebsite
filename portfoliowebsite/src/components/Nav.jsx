import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ul> 
                    <li>ABOUT</li>
                    {/* <li>TECHNOLOGIES</li> */}
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                    <li>RESUME</li>
                </ul>
            </div>
        )
    }
}
