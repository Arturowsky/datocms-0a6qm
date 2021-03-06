import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextProvider } from "./Context"

import SocialLinks from "./SocialLinks"
import BottomRightMenu from "./BottomRightMenu"
import Header from "./Header2";
import Home from "./Home";
import About from "./About";
import Recipe from "./Recipe";
import Homepage from "./Homepage";
import Footer from "./Footer"
import MyProjects from "./MyProjects"


const App = () => (
  <ContextProvider>
    <Router>
     {/* <SocialLinks /> */}
     <BottomRightMenu />
      <Header />
      <main>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" component={Home} />
        <Route path="/wpisy/:slug" component={Recipe} />
        <Route path="/about" component={About} />
        <Route path="/projekty" component={MyProjects} />
      </main>
      <Footer />
    </Router>
  </ContextProvider>
);

export default App;
