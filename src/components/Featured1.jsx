import React from 'react';
import Nippsgif from '../imgs/nippsgif.gif'

function Featured1() {
    return ( 
        <div className="flex flex-col justify-center items-center text-gray-100 md:text-pink-600 lg:text-purple-600 xl:text-blue-700 font-poppins h-full" id="featured">
            <h1 className="text-3xl px-16 pb-2 md:pb-5 lg:text-4xl font-bold">Featured</h1>
            <div id="featuredbg" data-aos="fade-right" className="flex justify-center items-center bg-featuredlow md:bg-featured bg-no-repeat bg-center sm:bg-150% xl:bg-120% bg-contain h-auto w-full py-32">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:my-24">
                    <div class="w-full lg:w-1/2 lg:py-6 text-center">
                        <img src={Nippsgif} alt="nipgif" className="w-52 mx-auto xl:w-96 xl:mr-0"/>
                    </div>

                    <div className="flex flex-col lg:w-1/2 xl:w-3/5 w-96 justify-center items-start px-12 md:px-0 xl:px-28 xl:pr-40">
                        <h1 className="font-bold text-2xl my-1 text-newPurple1">Pic</h1>
                        <p className="leading-normal mb-3 font-light text-sm">description here... The key is to find the right length.  Don't want it to be too long, but then don't want it to be too short so that it looks weird between the title and button below.</p>
                        <button className="bg-transparent text-gray-900 rounded-full shadow hover:shadow-lg py-2 px-4 border border-pink-600">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Featured1;
