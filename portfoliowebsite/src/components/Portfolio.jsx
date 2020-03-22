import React, { Component } from 'react'
import Medtrack from '../images/medtrack.png'
import Megabus from '../images/megabus.png'
import Metsearch from '../images/metsearch.png'
import DonationLocation from '../images/donationlocation.png'

export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio"  className="portfolio-component" >
                <p className="portfolio-header">FEATURED PROJECTS</p>
                <div className="portfolio-container">
                    <div > <a href="https://medtrack-app.herokuapp.com/"><img className="portfolio-image" src={Medtrack} /> </a></div>
                    <div>
                    <p className="portfolio-title">MedTrack</p>

                     <p className="portfolio-description">a full stack CRUD web app for visulizing and tracking personal medication information with user authentication</p>
                     <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="https://medtrack-app.herokuapp.com/">Launch</a>    
                    </div>
                     </div>
                     </div>
                   
                <div className="portfolio-container">
                <div> <a href="http://megabus-mobile.herokuapp.com/"><img className="portfolio-mobile-image" src={Megabus} /></a></div>
                       <div>
                         <p className="portfolio-title">Megabus</p>

                    <p className="portfolio-description">a minimal mobile first full stack collaboration with UX design students</p>
                    <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="http://megabus-mobile.herokuapp.com/">Launch</a>    
                    </div>
                    </div> 

                </div>
               

                <div className="portfolio-container">
                <div> <a href="http://themetartsearch.surge.sh/"><img className="portfolio-image" src={Metsearch} /></a> </div>
                    <div>
    
                     <p className="portfolio-title">The Met Art Search</p>

                    <p className="portfolio-description">a React app for searching art and creating a personalized gallery using the Metropolitan Museum of Art API</p>
                    <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="http://themetartsearch.surge.sh/">Launch</a>    
                    </div>
                    </div>    
                </div>
              
                 <div className="portfolio-container">
                 <div><img className="portfolio-image" src={DonationLocation} /></div>
                 <div>
                     <p className="portfolio-title">Donation Location</p>

                     <p className="portfolio-description">a web app for locating clothing donation centers in your neighborhood using NYC open data textile donation API </p>
                     <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="https://www.w3schools.com">Launch</a>    
                    </div>
                     </div>
                </div>
              
            </div>
        )
    }
}
