import React, { Component } from 'react'
import logo from  '../images/i-dQS4s7r-L.jpg'


export default class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                
                <div className="about-container">
                <p>Hello! I'm Rachel, a Full-stack developer based in Richmond with a background in healthcare administrative and patient service focused roles.</p>

                <p>My affinity for problem solving, communication and detail-oriented
                work led me pursue software development and my passion for technology, design and people drives me to create meaningful and logical applications.</p>
                <p>Technologies</p>
                <div className="tech-container">
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Heroku</li>

                 </ul>
                 <ul>
                    <li>Express</li>
                    <li>SQL / PostgreSQL</li>
                    <li>Sequelize</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Git / GitHub</li>

                </ul>
                </div>
                </div>
                <img className="image" src={logo} />
            </div>
        )
    }
}
