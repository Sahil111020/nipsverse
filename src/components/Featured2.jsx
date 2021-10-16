import React from 'react';

function Featured2() {
    return ( 
        <div className="w-full flex items-center justify-center text-center mt-5">
            <div className="w-auto grid grid-cols-3 grid-rows-6 lg:grid-cols-7 lg:grid-rows-3 p-4 bg-primary opacity-60 rounded-lg">
                <div id="divImg" className="bg-yellow-200 border">1</div>
                <div id="divImg" className="bg-yellow-200 border">2</div>
                <div id="divImg" className="bg-yellow-200 border">3</div>
                <div id="divImg" className="bg-yellow-200 border">4</div>
                <div id="divImg" className="bg-yellow-200 border">5</div>
                <div id="divImg" className="bg-yellow-200 border">6</div>
                <div id="divImg" className="bg-yellow-200 border">7</div>

                <div id="divImg" className="bg-yellow-200 border">1</div>
                <div id="divImg" className="bg-yellow-200 border">2</div>
                <div id="divImg" className="bg-yellow-200 border">3</div>
                <div id="divImg" className="bg-yellow-200 border">4</div>
                <div id="divImg" className="bg-yellow-200 border">5</div>

                <div id="divImg" className="bg-yellow-200 border">1</div>
                <div className="bg-yellow-200 border row-start-1 row-end-3 col-start-3 col-end-1">2</div>
                <div id="divImg" className="bg-yellow-200 border">3</div>
                <div id="divImg" className="bg-yellow-200 border">4</div>
                <div id="divImg" className="bg-yellow-200 border">5</div>
                <div id="divImg" className="bg-yellow-200 border ">6</div>
            </div>
        </div>
    );
}

export default Featured2;