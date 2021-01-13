import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search/web/:query" component={Search} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
