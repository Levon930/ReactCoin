import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import NotFound from "./Components/Not-found/Not-found";
import Details from "./Components/Detalis/Detalis";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/currency/:id" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
