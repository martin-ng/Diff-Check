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

  checkDifferences = event => {
    event.preventDefault();
    const dataOne = this.state.first.split(" ");
    const dataTwo = this.state.second.split(" ");
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
    // let one = lcs(dataOne, dataTwo);
    // console.log("changing checking");
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state);
    // console.log("differences ", this.state.first);
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.checking && <Welcome /> ? (
            <div className="betweenHeader">
              <Welcome className="welcome" />
            </div>
          ) : (
            <div className="betweenHeader">
              <TextView comparison={this.state.comparison} />
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
                // defaultValue="This part of the document has stayed. This paragraph contains
                // text that is outdated."
              />

              <textarea
                type="text"
                placeholder="Your text here.."
                name="second"
                className="inputText2"
                onChange={this.handleInputChange}
                // defaultValue="This is an important notice! It should. This part of the
                // document has stayed."
              />
            </div>
            <button className="button" onClick={this.checkDifferences}>
              Compare!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TextInputs;
