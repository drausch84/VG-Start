import React from 'react';
import MessageBoard from "./MessageBoard.jpg";
import "./MessageBoardCard.css";
import {Card, CardTitle} from "react-materialize";

function MessageBoardCard(){
    return <Card className = "card medium" header={<CardTitle reveal image={MessageBoard} waves='light'/>}
    title="Message Board"
    reveal={<p>VGStart's Message Board is a work in progress but is a great place for members of the community to give honest reviews on games.  At VGStart, when it comes 
        to games, we believe in the court of public opinion.  There are no editors here to post a review to influence other gamers, instead we leave that up to the 
        VGStart community.  So sign up and make your voice heard!
    </p>}>
    <p><a href="/message-board">Link to the VGStart Message Board</a></p>
</Card>
}
export default MessageBoardCard;