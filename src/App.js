import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import "@exmg/livery";

// import { endpointId, version } from "@exmg/livery";
// import { LiveryPlayer } from "@exmg/livery";

import Settings from "./components/settings/Settings";
import Log from "./components/log/Log";
import StreamSelect from "./components/streamSelect/StreamSelect";


import { render } from "@testing-library/react";

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
      activeQuality: "",
      version:window.exmg.livery.version
    };
    console.log("VERSION: ", window.exmg.livery.version)
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
    console.log("REF: " + graph);
    graph.player = this.player;
    graph.backgroundColor = "transparent";
    graph.textColor = "white";
    graph.bufferColor = "deeppink";
    graph.latencyColor = "yellow";
    graph.height = "100%"
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
    let state = this.state;
    state.activeQuality = this.player.activeQuality;
    this.setState(state);
  }
  
  changeLogLevel(event, that) {
    //TODO: add check if player isn't loaded.
    console.log(event.target.value);
    console.log(this.player);
    

    that.sdkRef.current.logLevel = event.target.value;
  }


  render() {
    return (
      <div className="App">
        <div className="demopage-wrap">
          <StreamSelect></StreamSelect>
          <div className="player-segment">
            <livery-sdk config="https://cdn.playtotv.com/video-encoder/remoteconfigs/5ddb98f5e4b0937e6a4507f2.json" ref={this.sdkRef}></livery-sdk>
            <livery-player autoplaymuted persistmuted id="player" ref={this.playerRef}>
              <source src="https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/5ddb98f5e4b0937e6a4507f2-TESTING/out.mpd" />
            </livery-player>

            <div className="info">
              <Settings
                latency={this.state.latency}
                buffer={this.state.buffer}
                version={this.state.version}
                engineName={this.state.engineName}
                playbackState={this.state.playbackState}
              ></Settings>

              <Log callback={(e)=>{this.changeLogLevel(e,this)}}></Log>
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
