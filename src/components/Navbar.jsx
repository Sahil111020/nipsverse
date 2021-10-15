import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'

function Navbar() {
  return (
      <nav className="flex flex-wrap items-center justify-around py-5 w-full text-lg text-white bg-primary fixed z-10">
        <div className="cursor-pointer">
          <Link className="px-4" activeClass="active" to="about" spy={true} smooth={true} offset={-70}>About</Link>
          <Link className="px-4" activeClass="active" to="featured" spy={true} smooth={true} offset={-70}>Featured</Link>
          <Link className="px-4" activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100}>Roadmap</Link>
          <Link className="px-4" activeClass="active" to="team" spy={true} smooth={true} offset={-70}>Team</Link>
          <a className="px-4">Connect Wallet</a>
        </div>
        <div className="flex flex-row cursor-pointer">
        <a className="mx-1 bg-newPurple text-blue-500 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a className="mx-1 bg-newPurple text-blue-700 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faDiscord} size="lg" /></a>
        <a className="mx-1 bg-newPurple text-indigo-700 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="lg" /></a>
        <a className="mx-1 bg-newPurple text-blue-500 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="lg" /></a>
        </div>
      </nav>
  )
}

export default Navbar;
