import React from 'react'
import { useTranslation } from 'react-i18next'

import { PlayerConfigurationContext } from '@contexts/PlayerConfigurationContext'

import GradientButton from '@components/Atoms/GradientButton'
import TextField from '@components/Atoms/TextField'
import Select from '@components/Atoms/Select'

import { DEFAULT_STREAM, AKAMAI_STREAM, CUSTOM_STREAM } from '@constants/stream'

import * as styles from './StreamSelect.css'

type StreamType = {
  id: string | number
  name: string
}

const StreamSelect = () => {
  const { setStream, streamId } = React.useContext(PlayerConfigurationContext)
  const { t } = useTranslation()
  const [currentStream, setCurrentStream] = React.useState<StreamType>(DEFAULT_STREAM)
  const [streamIdInput, setStreamIdInput] = React.useState<string>('')

  React.useEffect(() => {
    updateDropdown()
  }, [streamId])

  const setCustomStream = event => {
    event.preventDefault()
    if (!streamIdInput) {
      return
    }
    setStream(streamIdInput)
  }

  const onSelectChange = stream => {
    setCurrentStream(stream)
    setStream(stream.id)
    setStreamIdInput(stream.id)
  }

  const updateDropdown = () => {
    const currentStream = [DEFAULT_STREAM, AKAMAI_STREAM].find(stream => stream.id === streamId)
    setCurrentStream(currentStream ?? CUSTOM_STREAM)
    if (streamId === DEFAULT_STREAM.id || streamId === AKAMAI_STREAM.id) {
      setStreamIdInput('')
    }
  }

  const onInputChange = event => {
    setStreamIdInput(event.target.value)
  }

  return (
    <div className={styles.container}>
      <div>
        <div>
          <div>
            <p>
              Do you want to get started with the player. Please review our{' '}
              <a href="https://docs.liveryvideo.com/">documentation</a>.
            </p>
            <p>Select one of the test streams to test functions and performance using the Livery player.</p>
          </div>
        </div>
        <fieldset className={styles.formContainer}>
          <legend className={styles.formLegend}>{t('stream_select.select_stream')}</legend>
          <Select options={[DEFAULT_STREAM, AKAMAI_STREAM, CUSTOM_STREAM]} selectedOption={currentStream} onChange={onSelectChange} />
        </fieldset>
      </div>
      <fieldset className={styles.formContainer}>
        <legend className={styles.formLegend}>{t('stream_select.custom_stream')}</legend>
        <form className={styles.streamSelectCustom} onSubmit={setCustomStream}>
          <TextField
            type="text"
            onChange={onInputChange}
            value={streamIdInput}
            placeholder={t('stream_select.stream_id')}
            className={styles.streamSelectCustomInput}
          />
          <GradientButton className={styles.streamSelectCustomButton}>{t('stream_select.play')}</GradientButton>
        </form>
      </fieldset>
    </div>
  )
}

export default StreamSelect
