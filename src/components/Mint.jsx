import React from 'react';
import '../css/index.css'
import Png3 from '../imgs/3.png'

function Mint() {
    return (
        <div className="flex justify-center mt-16 w-full font-poppins">
            <div className="flex flex-col mr-48 w-3/5 h-80 my-16">
                <div className="borderDiv">
                    <div className="div1">
                        <div className="grid grid-flow-col grid-cols-16">
                            <div className="flex flex-col items-start justify-center mt-5">
                                <h1 className="text-5xl mx-12 my-4">Mint</h1>
                                <h3 className="text-xl mx-12 mb-4">Enter the amount of nipples you would like to buy ( 20 max ):</h3>
                                <div>
                                    <input type="text" className="h-12 w-32 px-7 text-xl mx-12 rounded-full border-gray-300"/>
                                    <button type="submit" className="h-12 px-8 text-xl text-indigo-100 tracking-widest bg-tertiory rounded-full shadow-sm">MINT</button>
                                    <h1 className="text-xl mx-16 my-2">12 ETH</h1>
                                </div>
                            </div>
                            <div className="mt-5">
                                <img src={Png3} alt="png3.png" className="h-72 mx-10"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
     );
}

export default Mint;