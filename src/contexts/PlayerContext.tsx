import React from 'react'
import * as liveryPlayer from '@liveryvideo/player'

import { DEFAULT_STREAM } from '@constants/stream'

import setUrlParam from '@utils/setUrlParam'
import getUrlParam from '@utils/getUrlParam'

export const PlayerContext = React.createContext({
  buffer: null,
  changeLogLevel: (level: string) => {},
  engineName: '',
  latency: null,
  logLevel: null,
  playbackState: null,
  quality: null,
  setGraph: null,
  setPlayer: null,
  setStream: (streamId: string) => {},
  streamId: '',
  version: '',
})

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = React.useState<any>(null)
  const [graph, setGraph] = React.useState<any>(null)

  const [buffer, setBuffer] = React.useState<number | string>(0)
  const [engineName, setEngineName] = React.useState('')
  const [latency, setLatency] = React.useState<string | number>(0)
  const [playbackState, setPlaybackState] = React.useState('')
  const [quality, setQuality] = React.useState('')
  const [streamId, setStreamId] = React.useState('')
  const [logLevel, setLogLevel] = React.useState('')

  React.useEffect(() => {
    const streamId = getUrlParam('stream')
    const logLevel = getUrlParam('log')
    setStream(streamId ? streamId : DEFAULT_STREAM.id)
    changeLogLevel(logLevel ? logLevel : 'warn')
  }, [])

  React.useEffect(() => {
    if (!player) {
      return
    }

    player.addEventListener('livery-engine-change', ({ engine }) => {
      if (!engine) {
        setBuffer(0)
        setEngineName('')
        setLatency(0)
        setPlaybackState('')
        updateQuality(undefined)
        return
      }

      setEngineName(engine.constructor.className.replace('Engine', ''))
      engine.onProperty('buffer', buffer => updateBuffer(buffer))
      engine.onProperty('latency', latency => updateLatency(latency))
      engine.onProperty('playbackState', playbackState => setPlaybackState(playbackState))
      engine.onProperty('activeQuality', () => updateQuality(engine))
      engine.onProperty('qualities', () => updateQuality(engine))
      engine.onProperty('selectedQuality', () => updateQuality(engine))
    })
  }, [player])

  React.useEffect(() => {
    if (graph && player) {
      graph.player = player
    }
  }, [graph, player])

  const updateQuality = engine => {
    if (!engine) {
      setQuality('')
      return
    }

    const { activeQuality: activeIndex, selectedQuality: selectedIndex, qualities } = engine
    const active = Number.isNaN(activeIndex) ? null : qualities[activeIndex]
    const selected = Number.isNaN(selectedIndex) ? null : qualities[selectedIndex]

    let selectedStr = ''
    if (qualities.length > 1) {
      if (selected) {
        if (!active || selectedIndex !== activeIndex) {
          selectedStr = `=> ${selected.label}`
        }
      } else {
        selectedStr = '(auto)'
      }
    }
    setQuality(`${active ? active.label : ''} ${selectedStr}`)
  }

  const updateBuffer = newBufferValue => {
    if (!Number.isNaN(newBufferValue)) {
      const formattedValue = newBufferValue.toFixed(2)
      if (formattedValue === latency) {
        return
      }
      return setBuffer(formattedValue)
    }
  }

  const updateLatency = (newLatencyValue: number) => {
    if (!Number.isNaN(newLatencyValue)) {
      const formattedValue = newLatencyValue.toFixed(2)
      if (formattedValue === buffer) {
        return
      }
      return setLatency(formattedValue)
    }
    setLatency(0)
  }

  const changeLogLevel = (level = 'warn') => {
    setLogLevel(level)
    setUrlParam('log', level)
    if (player) {
      player.logLevel = level
    }
  }

  const setStream = (streamId: string) => {
    setUrlParam('stream', streamId)
    setStreamId(streamId)
  }

  return (
    <PlayerContext.Provider
      value={{
        buffer,
        changeLogLevel,
        engineName,
        latency,
        logLevel,
        playbackState,
        quality,
        setGraph,
        setPlayer,
        setStream,
        streamId,
        version: liveryPlayer.version,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
