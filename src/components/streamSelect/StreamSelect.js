import React, { Component } from "react";
import "./StreamSelect.css";

class StreamSelect extends Component {
  constructor(props) {
    super(props);
    this.customStreamID = "";
    this.state = {
      currentStream: "5ddb98f5e4b0937e6a4507f2",
      streamIsCustom: false,
    };
  }
  updateField(event) {
    this.customStreamID = event.target.value;
  }
  setCustomStream() {
    this.props.setStream(this.customStreamID);
    this.setState({ currentStream: "custom", streamIsCustom: true });
  }
  selectStream(event) {
    this.props.setStream(event.target.value);
    this.setState({ currentStream: event.target.value, streamIsCustom: false });
  }
  render() {
    return (
      <div className="options-bar">
        <div className="stream-select-wrap">
          <div className="stream-select-dropdown">
            <span>Select Stream: </span>
            <select
              onChange={(e) => {
                this.selectStream(e);
              }}
              value={this.state.currentStream}
            >
              <optgroup span="ExMG">
                <option value="5c8b790e8f08e4ad1d1dc339-staging">
                  Angry Bytes
                </option>
                <option value="5c52edb53e930320967a5d55-dev">Ex Machina</option>
                <option value="5ddb98f5e4b0937e6a4507f2">Livery Demo</option>
                <option value="5ddb986ee4b0937e6a4507e9-dev">Robolingo</option>
                <option
                  value="custom"
                  hidden={!this.state.streamIsCustom}
                  disabled="disabled"
                >
                  Custom
                </option>
              </optgroup>
            </select>
          </div>

          <div className="stream-select-custom">
            <span>Or ID: </span>
            <input
              onChange={(e) => {
                this.updateField(e);
              }}
              placeholder="Stream ID"
            ></input>
            <button
              onClick={() => {
                this.setCustomStream();
              }}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StreamSelect;
