import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FieldValues } from 'react-hook-form'
import { PlayerConfigurationContext } from '@/contexts/PlayerConfigurationContext'

import GradientButton from '@/components/Atoms/GradientButton'
import TextField from '@/components/Atoms/TextField'

import * as styles from './CustomStreamForm.css'

const CustomStreamForm = () => {
  const { t } = useTranslation()
  const { setStream } = useContext(PlayerConfigurationContext)

  const { register, handleSubmit } = useForm()

  const onSubmit = ({ streamId }: FieldValues) => {
    setStream(streamId)
  }

  return (
    <div>
      <legend className={styles.formLegend}>{t('CustomStreamForm.title', 'Play custom stream')}</legend>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.streamSelectCustom}>
        <TextField
          type="text"
          placeholder={t('CustomStreamForm.placeholder', 'Stream ID')}
          className={styles.streamSelectCustomInput}
          {...register('streamId', { required: true })}
        />
        <GradientButton className={styles.streamSelectCustomButton}>{t('StreamSelect.play', 'Play')}</GradientButton>
      </form>
    </div>
  )
}

export default CustomStreamForm
