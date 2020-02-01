import React, { Component } from "react";
import "../App.css";
import TextView from "./TextView";
import Welcome from "./Welcome";
import { lcs, printDifference } from "../algorithm/lcs";

class TextInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      checking: false
      // loading: true
    };
  }

  checkDifferences = () => {
    // event.preventDefault();
    console.log("testing");
    alert("TESTING THIS");
  };

  handleInputChange = event => {
    event.preventDefault();
    alert("HI");
    // console.log(event);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          {this.state.checking && <Welcome /> ? (
            <div className="betweenHeader">
              <Welcome className="welcome" />
            </div>
          ) : (
            <div className="betweenHeader">
              <TextView />
            </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="container2">
              <textarea
                type="text"
                placeholder="Your text here.."
                name="first"
                className="inputText1"
                onChange={this.handleInputChange}
              />
              <textarea
                type="text"
                placeholder="Your text here.."
                name="second"
                className="inputText2"
                onChange={this.handleInputChange}
              />
            </div>
            <button className="button" onClick={alert("HI")}>
              TESTINGsssssssssssssss
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TextInputs;
