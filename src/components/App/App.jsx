import Home from "./Home";
import Room from "./Room";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/room/:roomId" component={Room} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
