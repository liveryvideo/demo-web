type Arg = null | undefined | boolean | string

const classNames = (...args: Arg[]): string => {
  let result = ''
  for (const arg of args) {
    if (arg && typeof arg === 'string') {
      result += `${arg} `
    }
  }
  return result.trim()
}

export default classNames
