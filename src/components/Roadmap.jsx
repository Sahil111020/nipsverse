import React from 'react';
import Cards from './Cards';
 
function Roadmap() {
    return (
        <div className="flex flex-col items-center mt-20 w-full text-gray-100 font-poppins" id="roadmap"> 
            <h1 className="text-3xl px-16 pb-3 md:pb-5 lg:text-4xl">Roadmap</h1>
            <div className=" lg:bg-roadmap lg:bg-no-repeat lg:bg-65% xl:bg-55% 2xl:bg-50% lg:bg-center flex flex-wrap flex-col items-center justify-center pb-12 w-full lg:mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
                        <Cards title="0% The journey begins,welcome to the Nipplevers" para="-The minting process begins with 0.08008 Eth(boobs lol) as a minting price." para1="-A private discord channel gets unlocked(only for nipple owners)." para2="Release of 1/1 Halloween Nipple" para3="-One airdropped nipple to the first 69 buyers." para4="-Owners get a special seat in what will appear next in the multivers." para5="-1 ETH giveaway to the first 100buyers."/>
                        <Cards title="0% The journey begins,welcome to the Nipplevers" para="-The minting process begins with 0.08008 Eth(boobs lol) as a minting price." para1="-A private discord channel gets unlocked(only for nipple owners)." para2="Release of 1/1 Halloween Nipple" para3="-One airdropped nipple to the first 69 buyers." para4="-Owners get a special seat in what will appear next in the multivers." para5="-1 ETH giveaway to the first 100buyers."/>
                        <Cards title="0% The journey begins,welcome to the Nipplevers" para="-The minting process begins with 0.08008 Eth(boobs lol) as a minting price." para1="-A private discord channel gets unlocked(only for nipple owners)." para2="Release of 1/1 Halloween Nipple" para3="-One airdropped nipple to the first 69 buyers." para4="-Owners get a special seat in what will appear next in the multivers." para5="-1 ETH giveaway to the first 100buyers."/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Cards title="0% The journey begins,welcome to the Nipplevers" para="-The minting process begins with 0.08008 Eth(boobs lol) as a minting price." para1="-A private discord channel gets unlocked(only for nipple owners)." para2="Release of 1/1 Halloween Nipple" para3="-One airdropped nipple to the first 69 buyers." para4="-Owners get a special seat in what will appear next in the multivers." para5="-1 ETH giveaway to the first 100buyers."/>
                        <Cards title="0% The journey begins,welcome to the Nipplevers" para="-The minting process begins with 0.08008 Eth(boobs lol) as a minting price." para1="-A private discord channel gets unlocked(only for nipple owners)." para2="Release of 1/1 Halloween Nipple" para3="-One airdropped nipple to the first 69 buyers." para4="-Owners get a special seat in what will appear next in the multivers." para5="-1 ETH giveaway to the first 100buyers."/>
                    </div>     
            </div>
        </div>
    );
}
// bg-roadmap bg-no-repeat bg-50% bg-center
export default Roadmap;