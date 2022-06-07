import React from 'react'

import { PlayerProvider } from '@contexts/PlayerContext'

import useWindowSize from '@hooks/useWindowSize'

import StreamSelect from "@components/StreamSelect";
import Log from "@components/Log";
import PlayerInfo from "@components/PlayerInfo";
import Player from "@components/Player";
import Graph from "@components/Graph";

import Logo from "@assets/logo.svg";

import * as styles from "./App.css";

const App = () => {
  const appRef = React.useRef()
  const windowSize = useWindowSize()

  React.useEffect(() => {
    if (appRef?.current) {
      if (windowSize.width >= 992 && windowSize.height >= 992  ) {
        const firstRow = windowSize.height * 75 / 100
        const secondRow = (windowSize.height * 25 / 100) - 120
        // @ts-ignore
        appRef.current.style.gridTemplateRows = `${firstRow}px ${secondRow}px`
      } else {
        // @ts-ignore
        appRef.current.style.gridTemplateRows = null
      }
    }

  }, [windowSize])

  return (
    <div className={styles.app} ref={appRef}>
      <PlayerProvider>
        <div className={styles.infoSegment}>
          <div className={styles.content}>
            <img src={Logo} className={styles.logo} alt="" />
          </div>
          <StreamSelect />
        </div>
        <div className={styles.logSegment}>
          <Log />
        </div>
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
