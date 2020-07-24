import React, { Component } from "react";
import "./Settings.css";

function Segment(props) {
  return (
    <div className="segment">
        <span className="segment-title">{props.title}</span>
      <span className="segment-data">{props.data}</span>
    </div>
  );
}

class Settings extends Component {

  render() {
    return (
      <div className="Settings">
        <Segment title="Version:" data={this.props.version || ""}></Segment>
        <Segment title="Engine:" data={this.props.engineName || ""}></Segment>

        <Segment
          title="Playback State:"
          data={this.props.playbackState || ""}
        ></Segment>

        <Segment title="Quality:" data={this.props.quality || ""}></Segment>

        <Segment title="Latency:" data={this.props.latency || ""}></Segment>
        <Segment title="Buffer:" data={this.props.buffer || ""}></Segment>
      </div>
    );
  }
}

export default Settings;
