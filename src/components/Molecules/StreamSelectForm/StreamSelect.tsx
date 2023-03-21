import { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StreamObject } from '@/types'
import { PlayerConfigurationContext } from '@/contexts/PlayerConfigurationContext'
import Select from '@/components/Atoms/Select'

import { DEFAULT_STREAM, AKAMAI_STREAM, CUSTOM_STREAM } from '@/constants/stream'

import * as styles from './StreamSelect.css'

const StreamSelect = () => {
  const { setStream, streamId } = useContext(PlayerConfigurationContext)
  const { t } = useTranslation()
  const [currentStream, setCurrentStream] = useState<StreamObject>(DEFAULT_STREAM)

  const onSelectChange = (option: StreamObject) => {
    setCurrentStream(option)
    setStream(option.id)
  }

  const updateDropdown = () => {
    const currentStream = [DEFAULT_STREAM, AKAMAI_STREAM].find(stream => stream.id === streamId)
    setCurrentStream(currentStream ?? CUSTOM_STREAM)
  }

  useEffect(() => {
    updateDropdown()
  }, [streamId])

  return (
    <form className={styles.formContainer}>
      <legend className={styles.formLegend}>{t('StreamSelect.selectStream', 'Select Stream')}</legend>
      <Select
        options={[DEFAULT_STREAM, AKAMAI_STREAM, CUSTOM_STREAM]}
        selectedOption={currentStream}
        onChange={onSelectChange}
      />
    </form>
  )
}

export default StreamSelect
