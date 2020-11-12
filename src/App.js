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
      buffer: "",
      engineName: "",
      latency: "",
      playbackState: "",
      quality: "",
      streamId: this.getStreamId(),
      version: livery.version,
    };
  }

  componentDidMount() {
    this.player = this.playerRef.current;

    this.player.addEventListener("livery-engine-change", ({ engine }) => {
      if (!engine) {
        this.updateBuffer(NaN);
        this.updateEngineName("");
        this.updateLatency(NaN);
        this.updatePlaybackState("");
        this.updateQuality();
        return;
      }

      this.updateEngineName(engine.engineName);

      engine.onProperty("buffer", (buffer) => this.updateBuffer(buffer));
      engine.onProperty("latency", (latency) => this.updateLatency(latency));
      engine.onProperty("playbackState", (playbackState) =>
        this.updatePlaybackState(playbackState)
      );

      engine.onProperty("activeQuality", () => this.updateQuality(engine));
      engine.onProperty("qualities", () => this.updateQuality(engine));
      engine.onProperty("selectedQuality", () => this.updateQuality(engine));
    });

    const graph = this.graphRef.current;
    graph.player = this.player;

    this.setStream();
  }

  updateBuffer(buffer) {
    this.setState({
      buffer: Number.isNaN(buffer) ? "" : buffer.toFixed(2),
    });
  }

  updateEngineName(name) {
    this.setState({
      engineName: name.replace("Engine", ""),
    });
  }

  updateLatency(latency) {
    this.setState({
      latency: Number.isNaN(latency) ? "" : latency.toFixed(2),
    });
  }

  updatePlaybackState(playbackState) {
    this.setState({
      playbackState,
    });
  }

  updateQuality(engine) {
    if (!engine) {
      this.setState({ quality: "" });
      return;
    }

    const {
      activeQuality: activeIndex,
      selectedQuality: selectedIndex,
      qualities,
    } = engine;

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
            ></livery-player>

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
            <livery-buffer-graph
              backgroundColor="transparent"
              textColor="white"
              bufferColor="deeppink"
              latencyColor="yellow"
              height="100%"
              ref={this.graphRef}
            ></livery-buffer-graph>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
