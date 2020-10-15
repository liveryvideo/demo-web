import React, { Component } from "react";
import "./App.css";

import Settings from "./components/settings/Settings";
import Log from "./components/log/Log";
import StreamSelect from "./components/streamSelect/StreamSelect";
import * as livery from "@exmg/livery";

class App extends Component {
  constructor() {
    super();
    this.playerRef = React.createRef();
    this.graphRef = React.createRef();

    this.state = {
      buffer: 0,
      engineName: "",
      latency: 0,
      playbackState: "",
      quality: "",
      streamId: this.getStreamId(),
      version: livery.version
    };
  }

  componentDidMount() {
    this.player = this.playerRef.current;

    // TODO: Hook these up to this.player.engine somehow..
    // this.player.addEventListener("livery-time-update", (e) => {
    //   this.updateBufferLatency();
    // });
    // this.player.addEventListener("livery-started", (e) => {
    //   this.updateEngineName();
    //   this.updateQuality();
    // });
    // this.player.addEventListener("livery-playback-change", (e) => {
    //   this.updatePlaybackState();
    // });
    // this.player.addEventListener("livery-active-quality-change", (e) => {
    //   this.updateQuality();
    // });

    const graph = this.graphRef.current;
    graph.player = this.player;
    graph.backgroundColor = "transparent";
    graph.textColor = "white";
    graph.bufferColor = "deeppink";
    graph.latencyColor = "yellow";
    graph.height = "100%";

    this.setStream();
  }

  updateBufferLatency() {
    this.setState({
      buffer: Math.round((this.player.buffer + Number.EPSILON) * 100) / 100,
      latency: Math.round((this.player.latency + Number.EPSILON) * 100) / 100,
    });
  }

  updateEngineName() {
    this.setState({
      engineName: this.player.engineName.replace("Engine", ""),
    });
  }

  updatePlaybackState() {
    this.setState({
      playbackState: this.player.playbackState,
    });
  }

  updateQuality() {
    const {
      activeQuality: activeIndex,
      selectedQuality: selectedIndex,
      qualities,
    } = this.player;

    const active = Number.isNaN(activeIndex) ? null : qualities[activeIndex];
    const selected = Number.isNaN(selectedIndex)
      ? null
      : qualities[selectedIndex];

    let selectedStr = "";
    if (qualities.length > 1) {
      if (selected) {
        if (!active || selectedIndex !== activeIndex) {
          selectedStr = `=> ${selected.label}`;
        }
      } else {
        selectedStr = "(auto)";
      }
    }

    this.setState({
      quality: `${active ? active.label : ""} ${selectedStr}`,
    });
  }

  changeLogLevel(level) {
    this.playerRef.current.logLevel = level;
  }

  getStreamId() {
    const params = new URLSearchParams(window.location.search);
    const streamId = params.get("stream");

    return streamId || "5ddb98f5e4b0937e6a4507f2";
  }

  setStream() {
    this.setState({
      streamId: this.getStreamId(),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="demopage-wrap">
          <StreamSelect
            setStream={() => {
              this.setStream();
            }}
          ></StreamSelect>

          <div className="player-segment">
            <livery-player
              streamId={this.state.streamId}
              ref={this.playerRef}
            >
            </livery-player>

            <div className="info">
              <Settings
                latency={this.state.latency}
                buffer={this.state.buffer}
                version={this.state.version}
                quality={this.state.quality}
                engineName={this.state.engineName}
                playbackState={this.state.playbackState}
              ></Settings>

              <Log
                callback={(e) => {
                  this.changeLogLevel(e);
                }}
              ></Log>
            </div>
          </div>

          <div className="graph-segment">
            <livery-buffer-graph ref={this.graphRef}></livery-buffer-graph>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
