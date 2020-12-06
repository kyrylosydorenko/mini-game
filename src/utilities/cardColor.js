// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const randomColor = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0')
  return `#${randomColor}`
}
