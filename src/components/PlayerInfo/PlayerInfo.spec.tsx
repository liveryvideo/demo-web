import React from 'react'
import { render } from '@testing-library/react'
import PlayerInfo from './PlayerInfo'

jest.mock("@components/PlayerSettingsInfo", () => () => {
  return <div />;
});

describe('PlayerInfo', () => {
  it('should render', () => {
    render(<PlayerInfo title="Test title" />)
  });
})
