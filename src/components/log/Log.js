import React, { Component } from "react";
import "./Log.css";

class Log extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Log">
        <div className="log-level-wrap">
          <span>Log level: </span>
          <select
            onChange={this.props.callback}
            id="log-level"
            defaultValue="info"
          >
            <option value="error">error</option>
            <option value="warn">warn</option>
            <option value="info">info</option>
            <option value="debug">debug</option>
            <option value="spam">spam</option>
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
