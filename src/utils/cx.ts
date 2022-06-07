type Args = null | undefined | boolean | string

const cx = (...args: Args[]): string => args.filter(arg => arg && typeof arg === 'string').join(' ')

export default cx
