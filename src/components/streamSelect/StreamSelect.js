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
    this.state = {
      currentStream: "5ddb98f5e4b0937e6a4507f2",
    };
  }
  componentDidMount() {
    this.updateDropdown();
    window.onpopstate = (e) => {
      this.props.setStream();
      this.updateDropdown();
    };
  }
  updateField(event) {
    this.customStreamID = event.target.value;
  }
  setCustomStream(event) {
    event.preventDefault();
    this.setState({ currentStream: this.customStreamID });
    window.history.pushState(
      {},
      this.customStreamID,
      "?stream=" + this.customStreamID
    );
    var popStateEvent = new PopStateEvent("popstate");
    dispatchEvent(popStateEvent);
  }
  selectStream(event) {
    this.setState({ currentStream: event.target.value });
    window.history.pushState(
      {},
      event.target.value,
      "?stream=" + event.target.value
    );
    var popStateEvent = new PopStateEvent("popstate");
    dispatchEvent(popStateEvent);
  }

  updateDropdown() {
    let params = new URLSearchParams(window.location.search);
    let streamParam = params.get("stream");
    let id;
    if (!streamParam) {
      id = "5ddb98f5e4b0937e6a4507f2";
    } else {
      if (this.defaultStreams.find((stream) => stream.id === streamParam)) {
        id = streamParam;
      } else {
        id = "custom";
      }
    }
    console.log("LOG: ", id);
    this.setState({ currentStream: id });
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
