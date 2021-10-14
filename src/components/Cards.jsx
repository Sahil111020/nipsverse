import React from 'react';

function Cards(props) {
    return ( 
        <div className="border-2 border-pink-500 h-80 w-72 p-3 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="text-sm">{props.para}</p>
            <p className="text-sm">{props.para1}</p>
            <p className="text-sm">{props.para2}</p>
            <p className="text-sm">{props.para3}</p>
            <p className="text-sm">{props.para4}</p>
        </div>
    );
}

export default Cards;