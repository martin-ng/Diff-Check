import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Navbar, TextInput } from "./components";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
