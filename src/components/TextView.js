import React, { Component } from "react";
import "../App.css";

class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // sameOne: [],
      // deleted: [],
      // sameTwo: [],
      // added: []
      sameOne: [...this.props.comparison[0]],
      deleted: [...this.props.comparison[1]],
      sameTwo: [...this.props.comparison[2]],
      added: [...this.props.comparison[3]]
    };
  }

  // componentDidMount(props) {
  //   this.setState({
  //     sameOne: [...this.props.comparison[0]],
  //     deleted: [...this.props.comparison[1]],
  //     sameTwo: [...this.props.comparison[2]],
  //     added: [...this.props.comparison[3]]
  //   });
  // }

  render() {
    let sameTextOne = this.state.sameOne;
    let deletedTextOne = this.state.deleted;
    let sameTextTwo = this.state.sameTwo;
    let addedTextTwo = this.state.added;

    console.log(this.props);

    return (
      <div className="textView">
        <table className="textCompare" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="lineContent">
                <pre>
                  {sameTextOne.length <= deletedTextOne.length
                    ? deletedTextOne.map((word, index) => {
                        if (word === undefined) {
                          return <span key={index}>{sameTextOne[index]} </span>;
                        } else {
                          return (
                            <span key={index} className="deleted">
                              {deletedTextOne[index]}{" "}
                            </span>
                          );
                        }
                      })
                    : sameTextOne.map((word, index) => {
                        if (word === undefined) {
                          return (
                            <span key={index} className="deleted">
                              {deletedTextOne[index]}{" "}
                            </span>
                          );
                        } else {
                          return <span key={index}>{sameTextOne[index]} </span>;
                        }
                      })}
                </pre>
              </td>
              <td className="lineContent">
                <pre>
                  {sameTextTwo.length <= addedTextTwo.length
                    ? addedTextTwo.map((word, index) => {
                        if (word === undefined) {
                          return <span key={index}>{sameTextTwo[index]} </span>;
                        } else {
                          return (
                            <span key={index} className="added">
                              {addedTextTwo[index]}{" "}
                            </span>
                          );
                        }
                      })
                    : sameTextTwo.map((word, index) => {
                        if (word === undefined) {
                          return (
                            <span key={index} className="added">
                              {addedTextTwo[index]}{" "}
                            </span>
                          );
                        } else {
                          return <span key={index}>{sameTextTwo[index]} </span>;
                        }
                      })}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TextView;
