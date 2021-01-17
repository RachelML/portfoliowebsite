import React, { Component } from 'react'
import Medtrack from '../images/medtrack.png'
import Megabus from '../images/megabus.png'
import Metsearch from '../images/metsearch.png'
import DonationLocation from '../images/donationlocation.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import Launch from '@material-ui/icons/Launch'


export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio"  className="portfolio-component" >
                <p className="portfolio-header">FEATURED PROJECTS</p>
                <div className="portfolio-container">
                    <div > <a href="https://medtrack-app.herokuapp.com/"><img className="portfolio-image" src={Medtrack} /> </a></div>
                    <div>
                    <p className="portfolio-title">MedTrack</p>

                     <p className="portfolio-description">A full stack CRUD web app for visualizing and tracking personal medication information with user authentication.</p>
                     <div className="portfolio-links">
                     <a href="https://github.com/RachelML/Medtrack"><GitHubIcon />
</a>
                    <a className="launch" href="https://medtrack-app.herokuapp.com/"><Launch /></a>    
                    </div>
                     </div>
                     </div>
                   
                <div className="portfolio-container">
                <div> <a href="http://megabus-mobile.herokuapp.com/"><img className="portfolio-mobile-image" src={Megabus} /></a></div>
                       <div>
                         <p className="portfolio-title">Megabus</p>

                    <p className="portfolio-description">A minimal mobile-first full-stack collaboration with UX design students.</p>
                    <div className="portfolio-links">
                     <a href="https://github.com/RachelML/megabus_mobile"><GitHubIcon />
</a>
                    <a className="launch" href="http://megabus-mobile.herokuapp.com/"><Launch /></a>    
                    </div>
                    </div> 

                </div>
               

                <div className="portfolio-container">
                <div> <a href="http://themetartsearch.surge.sh/"><img className="portfolio-image" src={Metsearch} /></a> </div>
                    <div>
    
                     <p className="portfolio-title">The Met Art Search</p>

                    <p className="portfolio-description">A React app for searching art and creating a personalized gallery using the Metropolitan Museum of Art API.</p>
                    <div className="portfolio-links">
                     <a href="https://github.com/RachelML/art_finder"><GitHubIcon />
</a>
                    <a className="launch" href="http://themetartsearch.surge.sh/"><Launch /></a>    
                    </div>
                    </div>    
                </div>
              
                 <div className="portfolio-container">
                 <div><img className="portfolio-image" src={DonationLocation} /></div>
                 <div>
                     <p className="portfolio-title">Donation Location</p>

                     <p className="portfolio-description">A web app for locating clothing donation centers in your neighborhood using NYC open data textile donation API. </p>
                     <div className="portfolio-links">
                     <a href="https://github.com/RachelML/donation-location"><GitHubIcon />
                    </a>
                    <a className="launch" href="https://rachelml.github.io/donation-location/"><Launch /></a>    
                    </div>
                     </div>
                </div>
              
            </div>
        )
    }
}
