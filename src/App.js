import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import News from "./pages/News";
// import Home from "./pages/Home";
// import MessageBoard from "./pages/MessageBoard";
// import Sandbox from "./pages/Sandbox";
// import SignIn from "./pages/SignIn";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import AuctionCard from "./components/AuctionCard";
import MessageBoard from "./components/MessageBoardCard";
import {Col, Row} from "react-materialize";

const App = () => (
  <Router>
    <div>
      <Nav />
      
      <Hero />
      <Container style = {{marginTop:60}}>
      <Row> 
        <Col l = {12}>
        <h1>VGStart Special Features</h1>
        </Col>
        </Row>
        <Row>
        <Col m = {5}>
          <AuctionCard/>
        </Col>
        <Col m = {2}>
        </Col>
        <Col m = {5}>
          <MessageBoard/>
        </Col>
        </Row>
      </Container>
      
      <Footer/>
    </div>
    
   </Router>
);

export default App;
