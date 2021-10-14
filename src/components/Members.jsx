import React from 'react';

function Members(props) {
    return ( 
        <div className="flex flex-col justify-center items-center bg-faqframe bg-no-repeat bg-contain bg-center h-72 w-52 mx-2">
            <img className="h-40" src={props.img} alt="team.png" />
            <p className="pt-5 text-xl">{props.name}</p>
        </div>      
    );
}
export default Members;