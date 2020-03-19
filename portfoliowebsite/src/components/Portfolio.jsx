import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <p className="portfolio-header">Portfolio</p>
                <p className="portfolio-title">MedTrack</p>
                <div className="portfolio-container">
                    <div className="portfolio-image">WEB APP IMAGE</div>
                     <p className="portfolio-description">a full stack CRUD web app for visulizing and tracking personal medication information with user authentication</p>
           
                     </div>
                     <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="https://www.w3schools.com">Launch</a>    
                    </div>
                <p className="portfolio-title">Megabus</p>
                <div className="portfolio-container">
                    <div className="portfolio-image">WEB APP IMAGE</div>
                    <p className="portfolio-description">a minimal mobile first full stack collaboration with UX design students</p>
                 

                </div>
                <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="https://www.w3schools.com">Launch</a>    
                    </div>
                <p className="portfolio-title">The Met Art Search</p>

                <div className="portfolio-container">
                    <div className="portfolio-image">WEB APP IMAGE</div>
                    <p className="portfolio-description">a React app for searching art and creating a personalized gallery using the Metropolitan Museum of Art API</p>
                  
                </div>
                <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="https://www.w3schools.com">Launch</a>    
                    </div>
                 <p className="portfolio-title">Donation Location</p>
                 <div className="portfolio-container">
                     <div className="portfolio-image">WEB APP IMAGE</div>
                     <p className="portfolio-description">a web app for locating clothing donation centers in your neighborhood using NYC open data textile donation API </p>
                    
                </div>
                <div className="portfolio-links">
                     <a href="https://www.w3schools.com">GitHub</a>
                    <a href="https://www.w3schools.com">Launch</a>    
                    </div>
            </div>
        )
    }
}
