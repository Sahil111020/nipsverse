import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMediumM } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-around py-5  w-full text-lg text-white bg-gray-900 fixed z-10">
        <div>
          <a className="px-4" href="">About</a>
          <a className="px-4" href="">Featured</a>
          <a className="px-4" href="">Roadmap</a>
          <a className="px-4" href="">Team</a>
          <a className="px-4" href="">Connect Wallet</a>
        </div>
        <div className="flex flex-row">
        <a className="mx-1 bg-red-500 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a className="mx-1 bg-red-500 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faDiscord} size="lg" /></a>
        <a className="mx-1 bg-red-500 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="lg" /></a>
        <a className="mx-1 bg-red-500 rounded-full h-12 w-12 flex items-center justify-center" href=""><FontAwesomeIcon icon={faMediumM} size="lg" /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
