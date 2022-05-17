import React from 'react'
import {useTranslation} from 'react-i18next'

import { DEFAULT_STREAM } from '@constants/stream'

import * as styles from './StreamSelect.css'

const StreamSelect = ({ setStream }) => {
  const { t } = useTranslation()
  const [currentStream, setCurrentStream] = React.useState(DEFAULT_STREAM.id)
  const [streamIdInput, setStreamIdInput] = React.useState('')

  React.useEffect(() => {
    updateDropdown()
  }, [])

  const setCustomStream = event => {
    event.preventDefault()
    setCurrentStream(streamIdInput)
    setUrlParams(streamIdInput)
  }

  const selectStream = event => {
    setCurrentStream(event.target.value)
    setUrlParams(event.target.value)
  }

  const setUrlParams = streamID => {
    let params = new URLSearchParams(window.location.search)
    params.set('stream', streamID)
    window.history.pushState(streamID, streamID, '?' + params)

    setStream()
    updateDropdown()
  }

  const updateDropdown = () => {
    let params = new URLSearchParams(window.location.search)
    let streamParam = params.get('stream')
    let id = ''
    let customId = ''
    if (!streamParam) {
      id = DEFAULT_STREAM.id
    } else {
      if ([DEFAULT_STREAM].find(stream => stream.id === streamParam)) {
        id = streamParam
      } else {
        id = 'custom'
        customId = streamParam
      }
    }
    console.log('LOG: ', id)
    setStreamIdInput(id)
    setStreamIdInput(customId)
  }

  return (
    <div className={styles.optionsBar}>
      <div className={styles.streamSelectWrap}>
        <fieldset>
          <legend>{t('stream_select.select_stream')}</legend>
          <div className={styles.streamSelectDropdown}>
            <select className={styles.streamSelectSelect} onChange={e => selectStream(e)} value={currentStream}>
              <optgroup label="Stream">
                {[DEFAULT_STREAM].map(el => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
                <option value="custom" disabled>
                  Custom
                </option>
              </optgroup>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>{t('stream_select.custom_stream')}</legend>
          <form className={styles.streamSelectCustom} onSubmit={e => setCustomStream(e)}>
            <input
              onChange={e => {
                setStreamIdInput(e.target.value)
              }}
              value={streamIdInput || ''}
              placeholder={t('stream_select.stream_id')}
              className={styles.streamSelectInput}
            />
            <button>{t('stream_select.play')}</button>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default StreamSelect
