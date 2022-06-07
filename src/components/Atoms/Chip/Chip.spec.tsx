import React from 'react';
import {render, screen} from '@testing-library/react';
import Chip from "./Chip";

const defaultProps = {
  label: 'Test label',
  value: '100'
};

describe('Chip', () => {
  it('should render', () => {
    render(<Chip {...defaultProps} />);
    const chipElement = screen.getByTestId('Chip');
    expect(chipElement).toBeInTheDocument();

    const chipLabelElement = screen.getByTestId('ChipLabel');
    expect(chipLabelElement.innerHTML).toEqual('Test label');

    const chipValueElement = screen.getByTestId('ChipValue');
    expect(chipValueElement.innerHTML).toEqual('100');
  });
})

export default {}
