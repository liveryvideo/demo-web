import { render } from '@testing-library/react'
import Chip, { ChipProps } from './Chip'

describe('Chip', () => {
  const defaultProps: ChipProps = {
    label: 'My Label',
    value: 'My Value',
    className: 'my-chip',
  }

  it('renders the chip with the provided label and value', () => {
    const { getByTestId } = render(<Chip {...defaultProps} />)
    const chip = getByTestId('Chip')
    const label = getByTestId('ChipLabel')
    const value = getByTestId('ChipValue')
    expect(chip).toBeInTheDocument()
    expect(label).toHaveTextContent(defaultProps.label)
    // @ts-ignore
    expect(value).toHaveTextContent(defaultProps.value)
  })

  it('renders the chip with the provided class name', () => {
    const { getByTestId } = render(<Chip {...defaultProps} />)
    const chip = getByTestId('Chip')
    // @ts-ignore
    expect(chip).toHaveClass(defaultProps.className)
  })
})
