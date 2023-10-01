import { useEffect, useContext, useRef } from 'react'
import { PlayerConfigurationContext } from '@/contexts/PlayerConfigurationContext'
import { PlayerContext } from '@/contexts/PlayerContext'

const Player = () => {
  const playerRef = useRef(null)
  const { streamId } = useContext(PlayerConfigurationContext)
  const { setPlayer } = useContext(PlayerContext)

  useEffect(() => {
    if (setPlayer && playerRef?.current) {
      setPlayer(playerRef?.current)
    }
  }, [])

  return <livery-player streamId={streamId ?? ''} ref={playerRef} />
}

export default Player
