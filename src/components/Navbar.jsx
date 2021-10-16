import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'

function Navbar() {
  return (
      <nav className="flex flex-wrap items-center justify-between w-screen text-lg text-white bg-primary fixed z-10">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 p-1 m-2 bg-tertiory rounded-lg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-row ">
          <a className="ml-1 cursor-pointer bg-newPurple text-blue-500 rounded-full w-9 h-9 flex items-center justify-center" href=""><FontAwesomeIcon icon={faTwitter} size="md" /></a>
          <a className="ml-1 cursor-pointer bg-newPurple text-blue-700 rounded-full h-9 w-9 flex items-center justify-center" href=""><FontAwesomeIcon icon={faDiscord} size="md" /></a>
          <a className="ml-1 cursor-pointer bg-newPurple text-indigo-700 rounded-full h-9 w-9 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="md" /></a>
          <a className="ml-1 mr-2 cursor-pointer bg-newPurple text-blue-500 rounded-full h-9 w-9 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="md" /></a>
        </div>



        {/* <div className="cursor-pointer">
          <Link className="px-4" activelaClass="active" to="about" spy={true} smooth={true} offset={-70}>About</Link>
          <Link className="px-4" activeClass="active" to="featured" spy={true} smooth={true} offset={-70}>Featured</Link>
          <Link className="px-4" activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100}>Roadmap</Link>
          <Link className="px-4" activeClass="active" to="team" spy={true} smooth={true} offset={-70}>Team</Link>
          <a className="px-4">Connect Wallet</a>
        </div> */}
        
      </nav>
  )
}

export default Navbar;
