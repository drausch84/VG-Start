import React from 'react';
import Collection from "./auction.jpg";
import "./AuctionCard.css";
import {Card, CardTitle} from "react-materialize";

function AuctionCard(){
    return <Card className = "card medium" header={<CardTitle reveal image={Collection} waves='light'/>}
    title="Auction Sandbox"
    reveal={<p>VGStart's Auction Sandbox is a place for gamers to sell or buy games from other members of the VGStart community.  Whether you are looking for a better
        deal than you can find anywhere else, or you're looking to add another rare game to your collection, be sure to visit the Sandbox!
    </p>}>
    <p><a href="/auction">Link to the Auction Sandbox</a></p>
</Card>
}
export default AuctionCard;