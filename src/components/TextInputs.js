import React, { Component } from "react";

class TextInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            placeholder="Your text file here.."
            name="first"
            onChange={this.handleInputChange}
          />
          <textarea
            type="text"
            placeholder="Your text file here.."
            name="second"
          />
          <button>Compare!</button>
        </form>
      </div>
    );
  }
}

export default TextInputs;
