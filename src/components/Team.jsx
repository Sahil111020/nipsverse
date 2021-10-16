import React from 'react';
import Members from './Members'
import Team1 from '../imgs/team1.png'
import Team2 from '../imgs/team2.png'
import Team3 from '../imgs/team3.png'
import Team4 from '../imgs/team4.png'
import Team5 from '../imgs/team5.png'
import Team6 from '../imgs/team6.png'

function Team() {
    return ( 
        <div className="flex flex-col text-center items-center pt-10 text-gray-100 font-poppins" id="team">
            <h1 className="text-3xl px-16 pb-2 md:pb-0 lg:text-4xl lg:pb-0">Team</h1>
                 <div className="grid grid-flow-col grid-cols-3 grid-rows-2 xl:grid-flow-row xl:grid-cols-6 xl:grid-rows-none gap-2 justify-center">
                    <Members img={Team6} name="lorem"/>
                    <Members img={Team2} name="lorem"/>
                    <Members img={Team3} name="lorem"/>
                    <Members img={Team4} name="lorem"/>
                    <Members img={Team1} name="lorem"/>
                    <Members img={Team5} name="lorem"/>
                </div>
            <button className="bg-blue-500 text-gray-900 bg-secondary font-semibold py-2 lg:py-3 px-4 rounded-full w-32 lg:w-40 m-10 md:mt-0">Show All</button>    
        </div>
    );
}
export default Team;