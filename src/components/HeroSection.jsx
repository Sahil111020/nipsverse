import React from 'react';
import Logo from '../imgs/Logo.png'

function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-5xl font-press-start">WELCOME</h1>
                <h2 className="text-xl font-press-start">TO THE </h2>
                <img className="h-96" src={Logo} alt="logo.jpg" />
            </div>
            <div className="flex flex-col items-center text-center w-3/5 h-52 bg-green-600 rounded-lg">
                <h1 className="text-3xl px-16 pt-10 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                <h3 className="text-base px-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores voluptates, corporis voluptatibus, modi, itaque ex aspernatur totam deleniti nesciunt esse nisi? Rerum, asperiores laudantium. Fugit, porro ullam. Ipsam consequatur iste, repellendus ullam laboriosam iure?</h3>
            </div>
        </div>

       
    );
}

export default HeroSection;