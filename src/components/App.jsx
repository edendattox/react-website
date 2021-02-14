import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
        <h1>yo</h1>
      </Switch>
    </>
  );
};

export default App;
