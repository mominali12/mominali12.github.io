import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route path="/" component={Header} exact />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
