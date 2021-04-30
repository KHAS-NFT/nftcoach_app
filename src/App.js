import React from "react";
import "./App.css";
import "./assets/css/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import TeamPage from "./components/views/TeamPage";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route path="/" exact component={TeamPage} />
      </Switch>
    </Router>
  );
}

export default App;
