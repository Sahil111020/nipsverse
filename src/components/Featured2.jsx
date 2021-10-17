import React from 'react';
import Nipple1 from '../imgs/Nipple1.png'
import Nipple2 from '../imgs/Nipple2.png'
import Nipple3 from '../imgs/Nipple3.png'
import Nipple4 from '../imgs/Nipple4.png'
import Nipple5 from '../imgs/Nipple5.png'
import Nipple6 from '../imgs/Nipple6.png'
import Nipple7 from '../imgs/Nipple7.png'
import Nipple8 from '../imgs/Nipple8.png'
import Nipple9 from '../imgs/Nipple9.png'
import Nipple10 from '../imgs/Nipple10.png'
import Nipple11 from '../imgs/Nipple11.png'
import Nipple12 from '../imgs/Nipple12.png'
import Nipple13 from '../imgs/Nipple13.png'
import Nipple14 from '../imgs/Nipple14.png'
import Nipple15 from '../imgs/Nipple15.png'
import Nipple16 from '../imgs/Nipple16.png'
import Nipple17 from '../imgs/Nipple17.png'
import Nipple2gif from '../imgs/Nipplegif2.gif'

function Featured2() {
    return ( 
        <div className="w-full flex items-center justify-center text-center mt-5">
            <div className="w-auto grid grid-cols-3 gap-2 grid-rows-6 lg:grid-cols-7 lg:grid-rows-3 p-4 bg-primary bg-opacity-60 rounded-lg">
                <img id="divImg" src={Nipple1} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple2} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple3} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple4} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple5} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple6} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple7} className="bg-yellow-200"/>

                <img id="divImg" src={Nipple8} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple9} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple10} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple11} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple12} className="bg-yellow-200"/>

                <img id="divImg" src={Nipple13} className="bg-yellow-200"/>
                <img id="divGif" src={Nipple2gif} className="bg-yellow-200 border row-start-1 row-end-3 col-start-3 col-end-1" />
                <img id="divImg" src={Nipple14} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple15} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple16} className="bg-yellow-200"/>
                <img id="divImg" src={Nipple17} className="bg-yellow-200"/> 
            </div>
        </div>
    );
}

export default Featured2;