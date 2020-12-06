// eslint-disable-next-line import/no-anonymous-default-export
export default (min = 1, max = 3) => {
  let str = ''
  const possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lengthString = Math.random() * (max - min) + min
  for (let i = 0; i < lengthString; i += 1) {
    str += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return str
}
