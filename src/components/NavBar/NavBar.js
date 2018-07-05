import React from "react";
import "./NavBar.css";
import { Navbar, NavItem, Icon } from 'react-materialize';
    function Nav (){

    return <Navbar className = "nav-wrapper black z-depth-5" brand = "VGStart" right>
  <NavItem className = "nav-i z-depth-2" href = "/" ><Icon style ={{color: "red"}}>gamepad</Icon></NavItem>
  <NavItem className = "nav-i z-depth-2" href = "news">News</NavItem>
  <NavItem className = "nav-i z-depth-2" href="/message-board">Message Board</NavItem>
  <NavItem className = "nav-i z-depth-2" href = "/auction">Auction Sandbox</NavItem>
  <NavItem className = "nav-i z-depth-2" href = "/sign-in">Sign In/Sign Up</NavItem>
</Navbar>
    };
export default Nav;
