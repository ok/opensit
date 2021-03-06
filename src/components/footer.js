import React from "react"
import { FaHeart, FaRss } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => (
    <footer className="bg-light footer">
      <div className="insideTrack-container">
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col text-center footer-heart text-secondary">
            <IconContext.Provider value={{ className: "heart-icon" }}>
              Made with <FaHeart/> in Berlin
            </IconContext.Provider>
          </div>
          <div className="col-2 text-right">
            <IconContext.Provider value={{ className: "big-icon twitter-icon" }}>
              <a href="https://opensit.net/rss.xml" className="text-secondary" aria-label="Link to RSS Feed"><FaRss/></a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer