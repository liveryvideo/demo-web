import { createContext, useEffect, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DEFAULT_STREAM } from '@/constants/stream'

export const PlayerConfigurationContext = createContext({
  setLogLevel: (level: string) => {},
  logLevel: null,
  setStream: (streamId: string) => {},
  streamId: null,
})

interface PlayerConfigurationProviderProps {
  children: ReactNode
}

export const PlayerConfigurationProvider = ({ children }: PlayerConfigurationProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const logLevel = searchParams.get('log')
  const streamId = searchParams.get('stream')

  useEffect(() => {
    if (!logLevel && !streamId) {
      setSearchParams({ stream: DEFAULT_STREAM.id, log: 'warn' })
    }
  }, [])

  const setLogLevel = (level = 'warn') => {
    setSearchParams({ stream: streamId, log: level })
  }

  const setStream = (streamId: string) => {
    setSearchParams({ stream: streamId, log: logLevel })
  }

  return (
    <PlayerConfigurationContext.Provider
      value={{
        setLogLevel,
        logLevel,
        setStream,
        streamId,
      }}
    >
      {children}
    </PlayerConfigurationContext.Provider>
  )
}
