import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Landingpage from "./landingpage";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
);

export default Main;
