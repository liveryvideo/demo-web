import React, { Component } from "react";
import "./StreamSelect.css";

class StreamSelect extends Component {
  constructor(props) {
    super(props);
    this.customStreamID = "";
    this.defaultStreams = [
      { id: "5c8b790e8f08e4ad1d1dc339-staging", name: "Angry Bytes" },
      { id: "5c52edb53e930320967a5d55-dev", name: "Ex Machina" },
      { id: "5ddb98f5e4b0937e6a4507f2", name: "Livery Demo" },
      { id: "5ddb986ee4b0937e6a4507e9-dev", name: "Robolingo" },
    ];
    let path = window.location.pathname;
    let urlStreamID = path.replace("/", "");
    let id;
    if (path === "/") {
      id = "5ddb98f5e4b0937e6a4507f2";
    } else {
      if (this.indexOfStreams(urlStreamID) > 0) {
        id = urlStreamID;
      } else {
        id = "custom";
      }
    }
    this.state = {
      currentStream: id,
      streamIsCustom: false,
    };
  }
  indexOfStreams(id) {
    for (let i = 0; i < this.defaultStreams.length; i++) {
      if (this.defaultStreams[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  updateField(event) {
    this.customStreamID = event.target.value;
  }
  setCustomStream() {
    this.props.setStream(this.customStreamID);
    this.setState({ currentStream: "custom", streamIsCustom: true });
    window.history.pushState("LiveryDemo", "Livery Demo", this.customStreamID);
  }
  selectStream(event) {
    this.props.setStream(event.target.value);
    this.setState({ currentStream: event.target.value, streamIsCustom: false });
    window.history.pushState("LiveryDemo", "Livery Demo", event.target.value);
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
                  <option key={el.id} value={el.id}> {el.name} </option>
                ))}
                <option value="custom" disabled="disabled">
                  Custom
                </option>
              </optgroup>
            </select>
          </div>

          <div className="stream-select-custom">
            <span>ID: </span>
            <input
              onChange={(e) => {
                this.updateField(e);
              }}
              placeholder="Stream ID"
              maxlength="1000"
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
