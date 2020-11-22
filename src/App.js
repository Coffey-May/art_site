import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Home from "./Home";
//Main 
function App() {
  return (
    <Router>
      <div className="App">

        <Nav />
        <Switch>
          <Home path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
