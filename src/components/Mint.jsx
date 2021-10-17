import React from 'react';
import '../css/index.css'
import Png3 from '../imgs/3.png'

function Mint() {
    return (
        <div className="flex justify-center w-full h-auto font-poppins my-10 text-customBlack">
            <div id="mintbg" data-aos="fade-right" className="bg-secondary h-5/6 md:h-auto md:py-8 w-5/6 xl:w-9/12 2xl:w-7/12 grid grid-flow-row md:grid-flow-col justify-evenly items-center">
                <div className="flex flex-col justify-center items-center md:items-start md:ml-7">
                    <h1 className="text-2xl md:text-3xl font-bold mt-16 pb-5 md:ml-4">Mint</h1>
                    <h3 className="text-lg px-5 md:px-2 md:ml-3 pb-5">Enter the amount of nipples you would like to buy ( 20 max ):</h3>
                    <div className="inline-flex items-center justify-evenly md:justify-start w-full">
                        <input type="number" className="outline-none h-12 w-28 px-6 py-2 md:mx-5 text-xl rounded-full border-gray-300"/>
                        <button type="submit" className="h-12 px-6 py-2 text-xl text-indigo-100 tracking-widest bg-tertiory hover:opacity-80 rounded-full shadow-sm">MINT</button>   
                    </div>
                    <h1 className="text-xl mx-auto md:ml-4 my-2">Total: 12 ETH</h1>
                </div>            
                <div className="mt-5 mx-auto md:w-10/12 md:h-5/6 md:mt-14 md:mr-3 h-auto w-auto">
                    <img src={Png3} alt="png3.png" className="h-64 w-64 mb-10"/>
                </div>
            </div>
        </div>
     );
}

export default Mint;