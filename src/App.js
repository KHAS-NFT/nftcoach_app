import React from "react";
import "./App.css";
import "./assets/css/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Home from "./components/views/Home";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
