import classNames from './classNames'

describe('classNames', () => {
  it('returns an empty string when no arguments are provided', () => {
    const result = classNames()
    expect(result).toEqual('')
  })

  it('filters out null, undefined, and boolean arguments', () => {
    const result = classNames('foo', null, undefined, true, 'bar', false)
    expect(result).toEqual('foo bar')
  })

  it('handles multiple string arguments', () => {
    const result = classNames('foo', 'bar', 'baz')
    expect(result).toEqual('foo bar baz')
  })

  it('handles a mix of string and non-string arguments', () => {
    const result = classNames('foo', null, 'bar', undefined, 'baz', true)
    expect(result).toEqual('foo bar baz')
  })
})
