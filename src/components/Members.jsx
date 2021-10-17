import React from 'react';

function Members(props) {
    return ( 
        <div data-aos="fade-right" className="flex flex-col justify-center items-center bg-memberframe bg-no-repeat bg-contain bg-center h-auto w-28 md:w-44 md:h-80 lg:w-48 lg:h-96">
            <img className="w-12 md:w-14" src={props.img} alt="team.png" />
            <p className="text-xl md:text-2xl">{props.name}</p>
        </div>      
    );
}
export default Members;