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
        <div className="flex flex-col text-center pt-14">
            <h1 className="text-4xl px-16 pb-1 my-5">Roadmap</h1>
                 <div className="flex flex-row justify-center">
                    <Members img={Team1} name="lorem"/>
                    <Members img={Team2} name="lorem"/>
                    <Members img={Team3} name="lorem"/>
                    <Members img={Team4} name="lorem"/>
                    <Members img={Team5} name="lorem"/>
                    <Members img={Team6} name="lorem"/>
                </div>
        </div>
    );
}
export default Team;