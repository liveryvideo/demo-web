import React, { Component } from "react";
import "./Log.css";

function LevelSelect(props) {
  return (
    <div className="level-button">
      <select>
        <option value="error">error</option>
        <option value="warn">warn</option>
        <option value="info">info</option>
        <option value="debug">debug</option>
        <option value="spam">spam</option>
      </select>
    </div>
  );
}

class Log extends Component {

    constructor(props){
        super(props);
        let a;
    }

  render() {
    return (
      <div className="Log">
        <div className="log-level-wrap">
          <span>Log level: </span>
          <select onChange={this.props.callback} id="log-level">
            <option value="error">error</option>
            <option value="warn">warn</option>
            <option value="info" selected="selected">info</option>
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
