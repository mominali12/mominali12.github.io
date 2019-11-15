import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Portfolio from "./view/portfolio";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Portfolio} exact />
      </Switch>
    </Router>
  );
}

export default App;
