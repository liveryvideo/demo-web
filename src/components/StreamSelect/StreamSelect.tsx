import React from 'react'
import { useTranslation } from 'react-i18next'

import { PlayerContext } from '@contexts/PlayerContext'

import GradientButton from '@components/Atoms/GradientButton'
import TextField from '@components/Atoms/TextField'
import Select from '@components/Atoms/Select'

import { DEFAULT_STREAM, CUSTOM_STREAM } from '@constants/stream'

import * as styles from './StreamSelect.css'

type StreamType = {
  id: string | number
  name: string
}

const StreamSelect = () => {
  const { setStream, streamId } = React.useContext(PlayerContext)

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

  const updateDropdown = () => {
    let id = ''
    let customId = ''
    if (!streamId) {
      id = DEFAULT_STREAM.id
    } else {
      if ([DEFAULT_STREAM].find(stream => stream.id === streamId)) {
        id = streamId
      } else {
        id = 'custom'
        customId = streamId
      }
    }
    setStream(id)
    setStreamIdInput(customId)
  }

  const onInputChange = event => {
    setStreamIdInput(event.target.value)
  }

  return (
    <div className={styles.container}>
      <fieldset className={styles.formContainer}>
        <legend className={styles.formLegend}>{t('stream_select.select_stream')}</legend>
        <Select options={[DEFAULT_STREAM, CUSTOM_STREAM]} selectedOption={currentStream} onChange={setCurrentStream} />
      </fieldset>
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
