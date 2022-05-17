import React from 'react'

import Settings from '@components/Settings'
import Log from '@components/Log'
import StreamSelect from '@components/StreamSelect'

import * as player from '@liveryvideo/player'

import { DEFAULT_STREAM } from '@constants/stream'

import * as styles from './App.css'

const App = () => {
  const playerRef = React.useRef(null)
  const graphRef = React.useRef(null)

  const [buffer, setBuffer] = React.useState<number | string>('')
  const [engineName, setEngineName] = React.useState('')
  const [latency, setLatency] = React.useState<string | number>(NaN)
  const [playbackState, setPlaybackState] = React.useState('')
  const [quality, setQuality] = React.useState('')
  const [streamId, setStreamId] = React.useState('')
  const version = player.version

  React.useEffect(() => {
    const player = playerRef.current

    player.addEventListener('livery-engine-change', ({ engine }) => {
      if (!engine) {
        setBuffer(NaN)
        setEngineName('')
        setLatency(NaN)
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

    const graph = graphRef.current
    graph.player = player

    setStreamId(getStreamId())
  }, [])

  const updateBuffer = buffer => {
    setBuffer(Number.isNaN(buffer) ? '' : buffer.toFixed(2))
  }

  const updateLatency = (latency: number) => {
    if (!Number.isNaN(latency)) {
      return setLatency(latency.toFixed(2))
    }
    setLatency(NaN)
  }

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

  const changeLogLevel = React.useCallback(
    (level: string) => {
      playerRef.current.logLevel = level
    },
    [playerRef]
  )

  const getStreamId = () => {
    const params = new URLSearchParams(window.location.search)
    const streamId = params.get('stream')
    return streamId || DEFAULT_STREAM.id
  }

  return (
    <div className={styles.app}>
      <div className={styles.demopageWrap}>
        <StreamSelect
          setStream={() => {
            setStreamId(getStreamId())
          }}
        ></StreamSelect>

        <div className={styles.playerSegment}>
          {/*
           // @ts-ignore */}
          <livery-player streamId={streamId} ref={playerRef} />

          <div className={styles.info}>
            <Settings
              latency={latency}
              buffer={buffer}
              version={version}
              quality={quality}
              engineName={engineName}
              playbackState={playbackState}
            />

            <Log callback={changeLogLevel} />
          </div>
        </div>

        <div className={styles.graphSegment}>
          {/*
           // @ts-ignore */}
          <livery-buffer-graph
            backgroundColor="transparent"
            textColor="white"
            bufferColor="deeppink"
            latencyColor="yellow"
            height="100%"
            ref={graphRef}
          />
        </div>
      </div>
    </div>
  )
}

export default App
