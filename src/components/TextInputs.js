import React, { Component } from "react";
import "../App.css";
import TextView from "./TextView";
import Welcome from "./Welcome";
import Stats from "./Stats";
import { lcs, printDifference } from "../algorithm/lcs";

class TextInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      checking: false,
      comparison: [],
      sameOne: [],
      deleted: [],
      sameTwo: [],
      added: []
    };
  }

  clearAll = event => {
    event.preventDefault();
    this.setState({
      checking: false,
      comparison: [],
      first: "",
      second: "",
      sameOne: [],
      deleted: [],
      sameTwo: [],
      added: [],
      addedLength: 0,
      deletedLength: 0
    });
  };

  countDiff = array => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        count++;
      }
      continue;
    }
    return count;
  };

  checkDifferences = event => {
    event.preventDefault();
    this.setState({
      checking: true,
      comparison: []
    });
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

    let delLength = this.countDiff(finalData[1]);
    let addLength = this.countDiff(finalData[3]);
    console.log("final data: ", finalData);

    this.setState({
      checking: true,
      comparison: [...finalData],
      sameOne: [...finalData[0]],
      deleted: [...finalData[1]],
      sameTwo: [...finalData[2]],
      added: [...finalData[3]],
      deletedLength: delLength,
      addedLength: addLength
    });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            {!this.state.checking && <Welcome /> ? (
              <div className="betweenHeader">
                <h4 className="welcome"> Welcome to Diff Check!</h4>
              </div>
            ) : (
              <div>
                <div className="containerText">
                  <TextView
                    textData={[this.state.sameOne, this.state.deleted]}
                    status={"deleted"}
                  />
                  <TextView
                    textData={[this.state.sameTwo, this.state.added]}
                    status={"added"}
                  />
                </div>
                <div className="stats">
                  <Stats count={this.state.deletedLength} status={"deleted"} />{" "}
                  <Stats count={this.state.addedLength} status={"added"} />
                </div>
              </div>
            )}

            <form onSubmit={this.handleSubmit}>
              <div className="textContainer">
                <textarea
                  type="text"
                  placeholder="Your text here.."
                  name="first"
                  value={this.state.first}
                  className="inputText1"
                  onChange={this.handleInputChange}
                />

                <textarea
                  type="text"
                  placeholder="Your text here.."
                  name="second"
                  value={this.state.second}
                  className="inputText2"
                  onChange={this.handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className="buttonsContainer">
            <button className="button" onClick={this.checkDifferences}>
              Compare!
            </button>
          </div>
          <div className="buttonsContainer">
            <button className="button" onClick={this.clearAll}>
              Clear All!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TextInputs;
