import React, { Component } from "react";
import "./App.css";

import Settings from "./components/settings/Settings";
import Log from "./components/log/Log";
import StreamSelect from "./components/streamSelect/StreamSelect";

class App extends Component {
  constructor() {
    super();
    this.playerRef = React.createRef();
    this.graphRef = React.createRef();
    this.sdkRef = React.createRef();

    this.state = {
      buffer: 0,
      latency: 0,
      engineName: "",
      playbackState: "",
      quality: "",
      version: window.exmg.livery.version,
      config:
        "https://cdn.playtotv.com/video-encoder/remoteconfigs/5ddb98f5e4b0937e6a4507f2.json",
    };
  }

  componentDidMount() {
    this.player = this.playerRef.current;
    this.player.addEventListener("livery-time-update", (e) => {
      this.updateBufferLatency();
    });
    this.player.addEventListener("livery-started", (e) => {
      this.updateEngineName();
      this.updateQuality();
    });
    this.player.addEventListener("livery-playback-change", (e) => {
      this.updatePlaybackState();
    });
    this.player.addEventListener("livery-active-quality-change", (e) => {
      this.updateQuality();
    });

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
    let state = this.state;
    state.buffer =
      Math.round((this.player.buffer + Number.EPSILON) * 100) / 100;
    state.latency =
      Math.round((this.player.latency + Number.EPSILON) * 100) / 100;
    this.setState(state);
  }

  updateEngineName() {
    let state = this.state;
    state.engineName = this.player.engineName.replace("Engine", "");
    this.setState(state);
  }

  updatePlaybackState() {
    let state = this.state;
    state.playbackState = this.player.playbackState;
    this.setState(state);
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
    let quality = `${active ? active.label : ""} ${selectedStr}`;
    let state = this.state;
    state.quality = quality;
    this.setState(state);
  }

  changeLogLevel(event) {
    this.sdkRef.current.logLevel = event.target.value;
  }

  setStream() {
    let params = new URLSearchParams(window.location.search);
    let streamID = params.get("stream");

    if (!streamID) {
      streamID = "5ddb98f5e4b0937e6a4507f2";
    }
    let config = this.getCustomerConfig(streamID);
    let source = this.getCustomerSource(streamID);
    let state = this.state;
    state.config = config;
    this.setState(state);
  }
  getCustomer(customer) {
    const parts = customer.split("-");
    return {
      customerId: parts[0],
      envSuffix: parts.length === 2 ? `-${parts[1]}` : "",
    };
  }
  getCustomerConfig(customer) {
    const { customerId, envSuffix } = this.getCustomer(customer);
    return `https://cdn.playtotv.com/video-encoder${envSuffix}/remoteconfigs/${customerId}.json`;
  }
  getCustomerSource(customer) {
    const { customerId } = this.getCustomer(customer);
    const manifest = /iPhone/i.test(navigator.userAgent)
      ? "master.m3u8"
      : "out.mpd";
    return `https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/${customerId}-TESTING/${manifest}`;
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
            <livery-sdk
              config={this.state.config}
              ref={this.sdkRef}
            ></livery-sdk>
            <livery-player
              autoplaymuted
              persistmuted
              preroll="assets/preroll.mp4"
              id="player"
              controls="error mute fullscreen"
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
