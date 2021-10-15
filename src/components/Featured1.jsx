import React from 'react';
import Nippsgif from '../imgs/nippsgif.gif'

function Featured1() {
    return ( 
        <div className="flex flex-col justify-center items-center h-screen mt-0 text-gray-100 font-poppins" id="featured">
            <h1 className="text-4xl px-16 pb-4">Featured</h1>
            <div className="bg-featured bg-no-repeat bg-60% bg-center h-4/6 w-full">
                <div className="grid grid-flow-col h-5/6 w-6/12 mx-auto my-16 grid-cols-61 ">
                    <img src={Nippsgif} alt="" className="w-96 my-auto"/>
                    <h3 className="my-auto text-base py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel repellendus nulla ex fuga inventore cumque dolores! Tempore dignissimos debitis nihil iste accusantium adipisci omnis excepturi sint repellat, quaerat fugit.</h3>
                </div>
            </div>
        </div>
    );
}

export default Featured1;