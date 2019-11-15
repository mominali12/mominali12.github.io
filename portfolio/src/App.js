import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import navbar from "./navbar";
import header from "./header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={navbar} exact />
      </Switch>
    </Router>
  );
}

export default App;
