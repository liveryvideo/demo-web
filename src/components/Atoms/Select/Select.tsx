import React from 'react'

import { Listbox } from '@headlessui/react'
import { StreamObject } from '@/types'
import Triangle from '@/assets/triangle.svg'

import * as styles from './Select.css'

export interface SelectProps {
  options: StreamObject[]
  selectedOption?: StreamObject
  onChange?: (option: StreamObject) => void
  placeholder?: string
}

const Select = ({ options, selectedOption, onChange, placeholder = 'Select option' }: SelectProps) => {
  const handleChange = (option: any) => {
    onChange && onChange(option)
  }

  return (
    <Listbox value={options} onChange={handleChange} data-testid="Select">
      <div className={styles.select}>
        <Listbox.Button className={styles.button}>
          {selectedOption && <span>{selectedOption.name}</span>}
          {!selectedOption && <span>{placeholder}</span>}
          <div className={styles.chevron}>
            <img src={Triangle} alt="" />
          </div>
        </Listbox.Button>
        <Listbox.Options className={styles.options}>
          {options.map(option => (
            <Listbox.Option key={option.id} value={option} as={React.Fragment} disabled={option.unavailable}>
              {({ active, selected }) => <li className={styles.option}>{option.name}</li>}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default Select
