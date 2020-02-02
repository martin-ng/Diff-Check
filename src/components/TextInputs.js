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
      checking: false,
      comparison: []
    };
  }

  clearAll = event => {
    event.preventDefault();
    this.setState({
      checking: false,
      comparison: [],
      first: "",
      second: ""
    });
  };

  checkDifferences = event => {
    event.preventDefault();
    // this.clearAll();
    this.setState({
      checking: true,
      comparison: []
    });
    const dataOne = this.state.first.split(" ");
    const dataTwo = this.state.second.split(" ");
    console.log("first: ", this.state.first);
    console.log("second: ", this.state.second);
    let one = lcs(dataOne, dataTwo);
    let finalData = printDifference(
      one,
      dataOne,
      dataTwo,
      dataOne.length,
      dataTwo.length
    );

    this.setState({
      checking: true,
      comparison: finalData
    });
    console.log(finalData);
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log("first: ", this.state.first);
    // console.log("second: ", this.state.second);
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.checking && <Welcome /> ? (
            <div className="betweenHeader">
              <h4 className="welcome"> Welcome to Diff Check!</h4>
            </div>
          ) : (
            <div className="betweenHeader">
              <TextView
                key={this.state.timestamp}
                comparison={[...this.state.comparison]}
              />
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
            <div className="buttons">
              <div>
                <button className="button" onClick={this.checkDifferences}>
                  Compare!
                </button>
              </div>
              <div>
                <button className="button" onClick={this.resetAll}>
                  Clear All!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TextInputs;
