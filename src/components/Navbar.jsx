import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'
import openSea from '../imgs/opensea.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
      <nav className="flex flex-wrap items-center justify-between w-screen text-lg text-white bg-customBlack fixed z-10">
        <div>
        <button type="button" className="block lg:hidden m-2" onClick={handleClick}>
          <svg className="h-10 w-10 fill-current bg-tertiory rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {isOpen && (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            )}
            {!isOpen && (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
        
        <div className={`text-primary2 w-full h-48 lg:h-auto py-2 px-5 rounded-lg items-center space-x-1 lg:flex ${ isOpen ? "block" : "hidden" }`}>
          <div className="flex flex-col lg:flex-row">
            <Link className="px-4 py-1 cursor-pointer" onClick={handleClick} activelaClass="active" to="about" spy={true} smooth={true} offset={-70}>About</Link>
            <Link className="px-4 py-1 cursor-pointer" onClick={handleClick} activeClass="active" to="featured" spy={true} smooth={true} offset={-70}>Featured</Link>
            <Link className="px-4 py-1 cursor-pointer" onClick={handleClick} activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100}>Roadmap</Link>
            <Link className="px-4 py-1 cursor-pointer" onClick={handleClick} activeClass="active" to="team" spy={true} smooth={true} offset={-70}>Team</Link>
            <a className="px-4 py-1 cursor-pointer">Connect Wallet</a>
          </div>
        </div>
        </div>
        <div className="flex flex-row self-start my-2 lg:mr-10 sm:mr-5 ">
          <a className="ml-1 lg:ml-2 cursor-pointer bg-newPurple text-twitter rounded-full w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center" href=""><FontAwesomeIcon icon={faTwitter} size="md" /></a>
          <a className="ml-1 lg:ml-2 cursor-pointer bg-newPurple text-discord rounded-full h-9 w-9 lg:w-11 lg:h-11 flex items-center justify-center" href=""><FontAwesomeIcon icon={faDiscord} size="md" /></a>
          <a className="ml-1 lg:ml-2 cursor-pointer bg-newPurple text-customBlack rounded-full h-9 w-9 lg:w-11 lg:h-11 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="md" /></a>
          <a className="ml-1 lg:ml-2 mr-2 cursor-pointer bg-newPurple rounded-full h-9 w-9 lg:w-11 lg:h-11 flex items-center justify-center" href=""><img className="h-8 w-8" src={openSea}/></a>
        </div>
      </nav>
  )
}

export default Navbar;
