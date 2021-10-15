import React from 'react';
import Logo from '../imgs/Logo.png'

function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-14 font-poppins" id="about">
            <div className="flex flex-col items-center mt-14">
                <h1 className="text-5xl font-press-start">WELCOME</h1>
                <h2 className="text-xl font-press-start">TO THE </h2>
                <img className="h-96" src={Logo} alt="logo.jpg" />
            </div>
            <div className="flex flex-col items-center text-center w-10/12 xl:w-3/5 md:py-8 sm:py-5 h-auto bg-green-600 rounded-lg bg-primary bg-opacity-60 text-gray-100">
                <h1 className="tracking-normal text-xl py-5 px-3 font-semibold md:text-purple-700 md:text-2xl xl:text-pink-500 xl:text-3xl xl:px-16">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                <h3 className=" tracking-wide text-base pb-6 px-5 font-light md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores voluptates, corporis voluptatibus, modi, itaque ex aspernatur totam deleniti nesciunt esse nisi? Rerum, asperiores laudantium. Fugit, porro ullam. Ipsam consequatur iste, repellendus ullam laboriosam iure?</h3>
            </div>
        </div>
// 2xl:text-3xl 2xl:px-16 2xl:pt-10 2xl:pb-4 font-semibold md:text-xl  sm:text-md
       
    );
}

export default HeroSection;