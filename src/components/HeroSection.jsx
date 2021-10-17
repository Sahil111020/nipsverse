import React from 'react';
import Logo from '../imgs/Logo.png'

function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-12 font-poppins" id="about">
            <div className="flex flex-col items-center mt-14">
                <h1 className="text-3xl font-press-start md:text-4xl xl:text-6xl text-secondary1 ">WELCOME</h1>
                <h2 className="text-lg font-press-start md:text-xl xl:text-2xl text-secondary1">TO THE </h2>
                <img className="w-60 md:w-72 xl:w-96" src={Logo} alt="logo.jpg" />
            </div>
            <div className="tracking-wide flex flex-col items-center text-center w-auto md:w-5/6 xl:w-9/12 p-5 md:p-10 xl:p-8 2xl:w-8/12 h-auto rounded-lg bg-primary bg-opacity-60 text-gray-100">
                <h1 className="text-xl pb-5 font-semibold md:text-2xl xl:text-3xl xl:px-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                <h3 className="text-base font-normal md:text-lg lg:px-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores voluptates, corporis voluptatibus, modi, itaque ex aspernatur totam deleniti nesciunt esse nisi? Rerum, asperiores laudantium. Fugit, porro ullam. Ipsam consequatur iste, repellendus ullam laboriosam iure?</h3>
            </div>
        </div>
    );
}

export default HeroSection;