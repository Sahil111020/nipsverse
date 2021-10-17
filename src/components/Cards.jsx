import React from 'react';

function Cards(props) {
    return ( 
        <div className="bg-primary opacity-60 h-auto w-72 p-3 md:w-60 lg:w-72 rounded-lg" data-aos="fade-right">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="text-sm py-1">{props.para}</p>
            <p className="text-sm py-1">{props.para1}</p>
            <p className="text-sm py-1">{props.para2}</p>
            <p className="text-sm py-1">{props.para3}</p>
            <p className="text-sm py-1">{props.para4}</p>
        </div>
    );
}

export default Cards;