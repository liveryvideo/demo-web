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
        <div className="level-button">
          <select onChange={this.props.callback}>
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
