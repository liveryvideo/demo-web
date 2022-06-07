import React from 'react'
import { PlayerContext } from '@contexts/PlayerContext'

const Player = () => {
  const playerRef = React.useRef(null)
  const { setPlayer, streamId } = React.useContext(PlayerContext)

  React.useEffect(() => {
    if (playerRef?.current) {
      setPlayer(playerRef?.current)
    }
  }, [])

  return <livery-player streamId={streamId} ref={playerRef} />
}

export default Player
