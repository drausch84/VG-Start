import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import News from "./pages/News";
// import Home from "./pages/Home";
// import MessageBoard from "./pages/MessageBoard";
// import Sandbox from "./pages/Sandbox";
// import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Wrapper>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/message_board" component={MessageBoard} />
        <Route exact path="/sandbox" component={Sandbox} />
        <Route exact path="/sign_in" component={SignIn}/> */}
      </Wrapper>
      <Footer />
    </div>
   </Router>
);

export default App;
