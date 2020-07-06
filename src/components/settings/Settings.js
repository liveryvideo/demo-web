import React, { Component } from 'react';
import "./Settings.css";

function Segment(props) {
    return (
        <div className="segment">
        <span className="segment-title">
            {props.title}
        </span>
        <span className="segment-data">
            {props.data}
        </span>
    </div>
    );
  }
  

class Settings extends Component {

    
    render() {
        return (
            <div className="Settings">
             
             <Segment title="Version" data="5.12.6"></Segment>
                <Segment title="Qualtiy" data="Bitrate 0.8mbps, 1080p, 24fps"></Segment>
                <Segment title="Internet Speed" data="Excellent"></Segment>
                <Segment title="Latency Target" data="3 sec"></Segment>
                          
                
                
            </div>
        );
    }

}

export default Settings;