import React from 'react';
import Collection from "./auction.jpg";
import "./AuctionCard.css";
import {Card, CardTitle} from "react-materialize";

function AuctionCard(){
    return <Card header={<CardTitle reveal image={Collection} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
</Card>
}
export default AuctionCard;