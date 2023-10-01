import { render, fireEvent } from '@testing-library/react'
import GradientButton, { GradientButtonProps } from './GradientButton'

describe('GradientButton', () => {
  const defaultProps: GradientButtonProps = {
    onClick: jest.fn(),
    children: 'Click me',
    className: 'my-button',
  }

  it('renders the button with the provided class name', () => {
    const { getByTestId } = render(<GradientButton {...defaultProps} />)
    const button = getByTestId('GradientButton')
    // @ts-ignore
    expect(button).toHaveClass(defaultProps.className)
  })

  it('calls the onClick callback when clicked', () => {
    const { getByTestId } = render(<GradientButton {...defaultProps} />)
    const button = getByTestId('GradientButton')
    fireEvent.click(button)
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

  it('renders the provided children', () => {
    const { getByTestId } = render(<GradientButton {...defaultProps} />)
    const button = getByTestId('GradientButton')
    // @ts-ignore
    expect(button).toHaveTextContent(defaultProps.children)
  })
})
