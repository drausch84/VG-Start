import React from 'react';
import Logo from "./logo.png";
import Gamers from "./gamers.jpg";
import "./Hero.css";
import {Parallax} from "react-materialize";

function Hero(){
  return <div>
  <Parallax imageSrc={Logo}/>
  <div className="section black z-depth-3">
    <div className="row-container">
      <h2 className="header">What Is VGStart?</h2>
      <p className="about-p">VGStart is a one-stop shop for one of the largest world-wide communities; the gaming community.</p>  
      <p className="about-p">Whether you wish to keep in touch with the latest in gaming news, interact with other gamers, or auction for games to bolster your collection, make VGStart your one stop. </p>
    </div>
  </div>
  <Parallax imageSrc={Gamers}/>
    <div className = "section black z-depth-3">
    <div className = "row-container">
      <h2 className= "header"> Our Mission Statement</h2>
      <p className = "mission-statement"> Here at VGStart, we believe that the lifeblood of the community is the gamers themselves and they are owed transparency.  This includes giving the gamers
      the power to write their own reviews without editorial bias or restriction.</p>  
      <p className = "mission-statement"> Every review posted to this site will be from VGStart members as opposed to a designated editor, so you can rely on
      honesty and integrity</p>
</div>
</div>
</div>
};
export default Hero;