import React from 'react';
import Nippsgif from '../imgs/nippsgif.gif'

function Featured1() {
    return ( 
        <div className="flex flex-col justify-center items-center text-gray-100 md:text-pink-600 lg:text-purple-600 xl:text-blue-700 font-poppins h-full" id="featured">
            <h1 className="text-3xl px-16 pb-2 md:pb-5 lg:text-4xl font-bold">Featured</h1>
            <div id="featuredbg" data-aos="fade-right" className="flex justify-center items-center bg-featuredlow sm:bg-featured bg-no-repeat bg-center sm:bg-120% bg-contain h-auto w-full">
                    {/* <div id="innerfeature" className="grid grid-flow-row md:grid-flow-cols items-center justify-center h-auto w-10/12 border ">
                        
                        <h3 className="text-sm p-10 font-normal md:p-0 border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel repellendus nulla ex fuga inventore cumque dolores! Tempore dignissimos debitis nihil iste accusantium adipisci omnis excepturi sint repellat, quaerat fugit.</h3>
                    </div> */}
                <div class="container mx-auto flex flex-col md:flex-row items-center md:my-24 ">
                    <div class="w-full lg:w-1/2 lg:py-6 text-center">
                        <img src={Nippsgif} alt="" className="w-52 mx-auto xl:w-96 "/>
                    </div>

                    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start px-20 ">
                        <h1 class="font-bold text-3xl my-1">My Super App</h1>
                        <p class="uppercase tracking-loose">Witty Tagline</p>
                        <p class="leading-normal mb-4">Enter your super app's description here... The key is to find the right length.  Don't want it to be too long, but then don't want it to be too short so that it looks weird between the title and button below.</p>
                        <button class="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded-full shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Super Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Featured1;
