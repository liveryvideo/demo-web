import React from 'react';
import {render, screen} from '@testing-library/react';
import GradientButton from "./GradientButton";

const defaultProps = {
  onClick: jest.fn()
};

describe('GradientButton', () => {
  it('should render the correct default button', () => {
    render(<GradientButton {...defaultProps}>Test button</GradientButton>);
    const element = screen.getByTestId('GradientButton');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.innerHTML).toEqual('Test button');
  });
})

export default {}
