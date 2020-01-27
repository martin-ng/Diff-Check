import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TextInput from "./components/TextInputs";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TextInput} />
      </Switch>
    );
  }
}

export default Routes;
