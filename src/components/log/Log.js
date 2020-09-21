import React, { Component } from "react";
import "./Log.css";

class Log extends Component {
  constructor(props) {
    super(props);

    this.logLevels = [
      { id: "error", name: "error" },
      { id: "warn", name: "warn" },
      { id: "info", name: "info" },
      { id: "debug", name: "debug" },
      { id: "spam", name: "spam" },
    ];
    this.state = { currentLoglevel: "info" };
  }

  componentDidMount() {
    let params = new URLSearchParams(window.location.search);
    let logLevel = params.get("log");

    if (this.logLevels.find((level) => level.id === logLevel)) {
      this.setState({ currentLoglevel: logLevel });
      this.props.callback(logLevel);
    }
  }

  handleLevelChange(event) {
    this.setState({ currentLoglevel: event.target.value });
    this.setUrlParams(event.target.value);
    this.props.callback(event.target.value);
  }

  setUrlParams(level) {
    let params = new URLSearchParams(window.location.search);
    params.set("log", level);
    window.history.pushState(level, level, "?" + params);
  }

  render() {
    return (
      <div className="Log">
        <div className="log-level-wrap">
          <span>Log level: </span>
          <select
            onChange={(e) => {
              this.handleLevelChange(e);
            }}
            value={this.state.currentLoglevel}
            id="log-level"
          >
            {this.logLevels.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        <div className="log-box">
          <livery-log></livery-log>
        </div>
      </div>
    );
  }
}

export default Log;
