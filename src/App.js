import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import "@exmg/livery";

import { endpointId, version } from "@exmg/livery";
import { LiveryPlayer } from "@exmg/livery";

import Settings from "./components/settings/Settings";
import Log from "./components/log/Log";

import { render } from "@testing-library/react";

class App extends Component {
  player;

  constructor() {
    super();
    this.state = {
      buffer: 0,
      latency: 0,
      engineName: "",
      playbackState: "",
    };
    console.log(LiveryPlayer.version);
  }

  componentDidMount() {
    this.player = document.querySelector("livery-player");
    this.player.addEventListener("livery-time-update", (e) => {
      console.log(this.player.buffer);
      this.updateBufferLatency();
    });
    this.player.addEventListener("livery-started", (e) => {
      console.log(this.player.engineName);
      this.updateEngineName();
    });
    this.player.addEventListener("livery-playback-change", (e) => {
      console.log(this.player.engineName);
      this.updatePlaybackState();
    });
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

  // const myElement = document.querySelector("livery-player");
  // myElement.addEventListener("livery-initialized", (e) => {
  //   console.log(e);
  //   alert();
  // });

  render() {
    return (
      <div className="App">
        <div className="demopage-wrap">
          <div className="player-segment">
            <livery-sdk config="https://cdn.playtotv.com/video-encoder/remoteconfigs/5ddb98f5e4b0937e6a4507f2.json"></livery-sdk>
            <livery-player
              autoplaymuted
              persistmuted
              livery-initialized="(e) => {alert();}"
            >
              <source src="https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/5ddb98f5e4b0937e6a4507f2-TESTING/out.mpd" />
            </livery-player>

            <div className="info-segment">
              <Settings
                latency={this.state.latency}
                buffer={this.state.buffer}
                version={version}
                engineName={this.state.engineName}
                playbackState={this.state.playbackState}
              ></Settings>

              <Log></Log>
            </div>
          </div>
          {this.state.latency}
        </div>
      </div>
    );
  }
}

export default App;
