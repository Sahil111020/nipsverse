import React from 'react';
import Nippsgif from '../imgs/nippsgif.gif'

function Featured1() {
    return ( 
        <div className="flex flex-col items-center mt-10 mb-5 text-gray-100 font-poppins h-full" id="featured">
            <h1 className="text-3xl px-16 pb-2 md:pb-5 lg:text-4xl">Featured</h1>
            <div className="bg-featuredlow md:bg-featured md:bg-100% lg:bg-90% 2xl:bg-80% bg-no-repeat bg-contain bg-center h-auto w-full lg:py-16">
                    <div className="grid grid-flow-row md:grid-cols-2 md:grid-flow-col md:justify-center md:items-center md:w-8/12 lg:w-10/12 md:my-12 md:mx-auto">
                        <img src={Nippsgif} alt="" className="w-64 mx-auto md:mx-0 lg:ml-44"/>
                        <h3 className="text-sm p-12 md:pt-8 font-normal lg:mr-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel repellendus nulla ex fuga inventore cumque dolores! Tempore dignissimos debitis nihil iste accusantium adipisci omnis excepturi sint repellat, quaerat fugit.</h3>
                    </div>
            </div>
        </div>
    );
}
export default Featured1;
