import React from 'react';

function Featured2() {
    return ( 
        <div className="h-96 w-full flex items-center justify-center text-center">
            <div className="w-3/5 h-full grid grid-cols-7 grid-rows-3 p-4 bg-red-300 rounded-lg">
                <div className="bg-yellow-200 border">1</div>
                <div className="bg-yellow-200 border">2</div>
                <div className="bg-yellow-200 border">3</div>
                <div className="bg-yellow-200 border">4</div>
                <div className="bg-yellow-200 border">5</div>
                <div className="bg-yellow-200 border">6</div>
                <div className="bg-yellow-200 border">7</div>

                <div className="bg-yellow-200 border">1</div>
                <div className="bg-yellow-200 border">2</div>
                <div className="bg-yellow-200 border">3</div>
                <div className="bg-yellow-200 border">4</div>
                <div className="bg-yellow-200 border">5</div>

                <div className="bg-yellow-200 border">1</div>
                <div className="bg-yellow-200 border row-span-2 col-span-2">2</div>
                <div className="bg-yellow-200 border">3</div>
                <div className="bg-yellow-200 border">4</div>
                <div className="bg-yellow-200 border">5</div>
                <div className="bg-yellow-200 border ">6</div>
                
            </div>
            
        </div>
    );
}

export default Featured2;