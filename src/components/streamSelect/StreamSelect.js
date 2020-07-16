import React, { Component } from "react";
import "./StreamSelect.css";

function Segment(props) {
  return <div></div>;
}

class StreamSelect extends Component {
  render() {
    return (
      <div className="options-bar">
        <input placeholder="http://"></input>
        <button>Play</button>
      </div>
    );
  }
}

export default StreamSelect;
