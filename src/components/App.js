import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextProvider } from "./Context"

import SocialLinks from "./SocialLinks"
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Recipe from "./Recipe";
import Homepage from "./Homepage";
import Footer from "./Footer"


const App = () => (
  <ContextProvider>
    <Router>
     <SocialLinks />
      <Header />
      <main>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" component={Home} />
        <Route path="/wpisy/:slug" component={Recipe} />
        <Route path="/about" component={About} />
      </main>
      <Footer />
    </Router>
  </ContextProvider>
);

export default App;
