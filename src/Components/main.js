import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Landingpage from "./landingpage";
import About from "./about";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/resume" component={Resume} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
);

export default Main;
