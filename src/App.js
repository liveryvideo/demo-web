import React , {Component} from "react";
import logo from "./logo.svg";
import "./App.css";


import '@exmg/livery';


import Settings from "./components/settings/Settings";
import Log from "./components/log/Log";

import { render } from "@testing-library/react";

class App extends Component {
  
  Player;
  
  playerVars = {
    buffer:0,
    latency:0,

  };

  componentDidMount(){
     this.player = document.querySelector("livery-player");
     this.player.addEventListener('livery-time-update', (e) => {
       
      console.log(this.player.buffer);
      this.updateBufferLatency();
      
    });


  }

test = 0;
  updateBufferLatency(){
    this.playerVars.buffer = this.player.buffer;
    this.playerVars.latency = this.player.latency;
    this.test++;
  }

  // const myElement = document.querySelector("livery-player");
  // myElement.addEventListener("livery-initialized", (e) => {
  //   console.log(e);
  //   alert();
  // });

  render(){
    return (
      <div className="App">
        <div className="demopage-wrap">
        
          <div className="player-segment">
            <livery-sdk config="https://cdn.playtotv.com/video-encoder/remoteconfigs/5ddb98f5e4b0937e6a4507f2.json"></livery-sdk>
            <livery-player autoplaymuted persistmuted livery-initialized="(e) => {alert();}">
              <source src="https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/5ddb98f5e4b0937e6a4507f2-TESTING/out.mpd" />
            </livery-player>
  
            <div className="info-segment">
              <Settings></Settings>
              <Log></Log>
            </div>
          </div>
          {this.test + 1}
        </div>
  
  
      </div>
    );
  }





}

export default App;
