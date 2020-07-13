import React, { Component } from 'react';
import "./Log.css";


function LevelSelect(props){

    return(
        <div className="level-button">
            <span>Level</span>
        </div>
    );

}

class Log extends Component {

    
    
    render() {
        return (
            <div className="Log">
                <LevelSelect></LevelSelect>
                <div className="log-box">
             
                    <livery-log></livery-log>
     
                </div>
  
            </div>
        );
    }

}

export default Log;