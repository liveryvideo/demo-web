import React from 'react'
import { PlayerConfigurationContext } from '@contexts/PlayerConfigurationContext'
import { PlayerContext } from '@contexts/PlayerContext'


const Player = () => {

  const playerRef = React.useRef(null)
  const { streamId } = React.useContext(PlayerConfigurationContext)
  const { setPlayer } = React.useContext(PlayerContext)

  React.useEffect(() => {
    if (playerRef?.current) {
      setPlayer(playerRef?.current)
    }
  }, [])

  return <livery-player streamId={streamId} ref={playerRef} />
}

export default Player
