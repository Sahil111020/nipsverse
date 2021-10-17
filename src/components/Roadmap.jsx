import React from 'react';
import Cards from './Cards';
 
function Roadmap() {
    return (
        <div className="flex flex-col items-center mt-20 w-full text-gray-100 font-poppins" id="roadmap"> 
            <h1 className="text-3xl px-16 pb-3 md:pb-5 font-bold lg:text-4xl">Roadmap</h1>
            <div className=" lg:bg-roadmap lg:bg-no-repeat lg:bg-65% xl:bg-55% 2xl:bg-50% lg:bg-center flex flex-wrap flex-col items-center justify-center pb-12 w-full lg:mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
                        <Cards title="0% The journey begins,welcome to the Nipplevers" para="-The minting process begins with 0.08008 Eth(boobs lol) as a minting price." para1="-A private discord channel gets unlocked(only for nipple owners)." para2="Release of 1/1 Halloween Nipple." para3="-One airdropped nipple to the first 69 buyers." para4="-Owners get a special seat in what will appear next in the multivers." para5="-1 ETH giveaway to the first 100buyers."/>
                        <Cards title="25%-Expanding the Nippleverse" para="-Rewards for active Discord members(Invite Contest)." para1="-10% sales charity donation equal to aprox 32000$." para2="-1ETH+1 Nipple community airdrop to random holders." para3="-Because rare traits aren’t the only beautiful thing, there will be a weekly contest where the community can vote the best looking nipple, winners will be displayed in a special gallery named “Beauty lays in the nipple of the beholder."/>
                        <Cards title="50%- 4th Wall break" para="-Meme contest, the winner will receive 1ETH and 1 nipple." para1="-Retweet giveaway: A random person that retweets and follows gets a nipple." para2="-3ETH community airdrop to random holders." para3="-Nipples worth 32500$ will be bought and burned to lift the floor price."/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Cards title="75%-Vincent van Nipple" para="-Nipple Art contest: Use nipples in the most creative ways and post them on twitter with the #nippleverse hashtag, the winner gets 1ETH." para1="-5ETH community airdrop to random holders." para2="-Nipples worth 50000$ will be bought and burned to lift the floor price."/>
                        <Cards title="100%-The ETHernal nippleverse" para="-10% of royalty fees will get airdropped to holders as ETH monthly." para1="-7ETH community airdrop to random holders." para2="-Nipples worth 65000$ will be bought and burned to lift the floor price." para3="-Special antimatter formula that can be used to enhance your nipples in the future." para4="-50% of royalty fees will be used to buyback and burn nfts."/>
                    </div>     
            </div>
        </div>
    );
}
// bg-roadmap bg-no-repeat bg-50% bg-center
export default Roadmap;