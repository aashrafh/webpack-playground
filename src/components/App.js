import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Dynamic from "./Dynamic";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={Dynamic} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
