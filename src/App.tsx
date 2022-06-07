import React from 'react'

import { PlayerProvider } from '@contexts/PlayerContext'

import StreamSelect from "@components/StreamSelect";
import Log from "@components/Log";
import PlayerInfo from "@components/PlayerInfo";
import Player from "@components/Player";
import Graph from "@components/Graph";

import Logo from "@assets/logo.svg";

import * as styles from "./App.css";

const App = () => {
  return (
    <div className={styles.app}>
      <PlayerProvider>
        <div className={styles.infoSegment}>
          <div className={styles.content}>
            <img src={Logo} className={styles.logo} alt="" />
            <div>
              <p>
                Do you want to get started with the player. Please review our{' '}
                <a href="https://docs.liveryvideo.com/">documentation</a>.
              </p>
              <p>Select one of the test streams to test functions and performance using the Livery player.</p>
            </div>
          </div>
          <StreamSelect />
        </div>
        <Log className={styles.logSegment} />
        <div className={styles.playerSegment}>
          <PlayerInfo title={'Livery demo stream'} />
          <div className={styles.playerContainer}>
            <Player />
          </div>
        </div>
        <Graph className={styles.graphSegment} />
      </PlayerProvider>
    </div>
  )
}

export default App
