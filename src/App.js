import React from "react";
import "./App.css";
import "./assets/css/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import TeamPage from "./components/views/TeamPage";
import Marketplace from "./components/views/Marketplace";
import Challenge from "./components/views/Challenge";


function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route path="/" exact component={TeamPage} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/challenge" component={Challenge} />


        <Route path="/nftcoach_app" exact component={TeamPage} />
        <Route path="/nftcoach_app/marketplace" exact component={Marketplace} />
        <Route path="/nftcoach_app/challenge" component={Challenge} />
      </Switch>
    </Router>
  );
}

export default App;
