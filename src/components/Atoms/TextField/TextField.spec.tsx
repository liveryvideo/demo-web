import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextField from './TextField'

describe('TextField', () => {
  test('it should mount', () => {
    render(<TextField />)
    const textField = screen.getByTestId('TextField')
    expect(textField).toBeInTheDocument()
  })
})
