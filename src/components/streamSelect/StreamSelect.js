import React, { Component } from "react";
import "./StreamSelect.css";

class StreamSelect extends Component {
  constructor(props) {
    super(props);

    this.defaultStreams = [
      { id: "5ddb98f5e4b0937e6a4507f2", name: "Livery Demo" },
    ];

    this.state = {
      currentStream: "5ddb98f5e4b0937e6a4507f2",
      customStreamID: ""
    };
  }

  componentDidMount() {
    this.updateDropdown();
  }

  updateField(event) {
    let state = this.state;
    state.customStreamID = event.target.value;
    this.setState(state);
  }

  setCustomStream(event) {
    event.preventDefault();
    let state = this.state;
    state.currentStream = state.customStreamID;
    this.setState(state);
    this.setUrlParams(this.state.customStreamID);
  }

  selectStream(event) {
    let state = this.state;
    state.currentStream = event.target.value;
    this.setState(state);
    this.setUrlParams(event.target.value);
  }
  
  setUrlParams(streamID) {
    let params = new URLSearchParams(window.location.search);
    params.set("stream", streamID);
    window.history.pushState(streamID, streamID, "?" + params);

    this.props.setStream();
    this.updateDropdown();
  }

  updateDropdown() {
    let params = new URLSearchParams(window.location.search);
    let streamParam = params.get("stream");
    let id = "";
    let customId = "";
    if (!streamParam) {
      id = "5ddb98f5e4b0937e6a4507f2";
    } else {
      if (this.defaultStreams.find((stream) => stream.id === streamParam)) {
        id = streamParam;
      } else {
        id = "custom";
        customId = streamParam;
      }
    }
    console.log("LOG: ", id);
    this.setState({ currentStream: id, customStreamID:customId });
  }

  render() {
    return (
      <div className="options-bar">
        <div className="stream-select-wrap">
          <div className="stream-select-dropdown">
            <span>Stream: </span>
            <select
              onChange={(e) => {
                this.selectStream(e);
              }}
              value={this.state.currentStream}
            >
              <optgroup label="ExMG">
                {this.defaultStreams.map((el) => (
                  <option key={el.id} value={el.id}>
                    {" "}
                    {el.name}{" "}
                  </option>
                ))}
                <option value="custom" disabled="disabled">
                  Custom
                </option>
              </optgroup>
            </select>
          </div>

          <form
            className="stream-select-custom"
            onSubmit={(e) => {
              this.setCustomStream(e);
            }}
          >
            <span>ID: </span>
            <input
              onChange={(e) => {
                this.updateField(e);
              }}
              value={this.state.customStreamID || ""}
              placeholder="Stream ID"
            ></input>
            <button>Play</button>
          </form>
        </div>
      </div>
    );
  }
}

export default StreamSelect;
