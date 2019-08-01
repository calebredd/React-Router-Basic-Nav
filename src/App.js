import React from "react";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

import "./App.scss";

const App = () => (
  <div className="App">
    <Navigation />
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </div>
  </div>
);

export default App;
