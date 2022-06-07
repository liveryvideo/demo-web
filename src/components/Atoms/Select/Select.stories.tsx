import React from 'react'
import Select from './Select'
import { DEFAULT_STREAM, CUSTOM_STREAM } from '@constants/stream'

export default {
  title: 'Components/Atoms/Select',
  component: Select,
}

export const Default = () => {
  const [currentStream, setCurrentStream] = React.useState(DEFAULT_STREAM)

  return <Select options={[DEFAULT_STREAM, CUSTOM_STREAM]} selectedOption={currentStream} />
}
