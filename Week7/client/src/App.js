import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Ovi from "./components/ovi/Ovi";
import Sid from "./components/sid/Sid";
import Form from "./components/info/Form"
import Info from "./components/info/Info"
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Ovi" component={Ovi} />
          <Route path="/Sid" component={Sid} />
          <Route path="/Form" component={Form} />
          <Route path="/Info" component={Info} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;