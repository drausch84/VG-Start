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
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Nav />
      
      <Hero />
      {/* <Container>

      </Container> */}
      
      <Footer/>
    </div>
    
   </Router>
);

export default App;
