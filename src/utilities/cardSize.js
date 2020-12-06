// eslint-disable-next-line import/no-anonymous-default-export
export default (proportion = 100) => {
  const pageHeight = window.innerHeight * 0.01
  const pageWidth = window.innerWidth * 0.01

  const adaptiveWidth = (pageWidth / 100) * proportion
  const adaptiveHeight = (pageHeight / 100) * proportion

  if (adaptiveHeight >= adaptiveWidth) {
    document.documentElement.style.setProperty('--card-size', `${adaptiveWidth}px`)
  } else {
    document.documentElement.style.setProperty('--card-size', `${adaptiveHeight}px`)
  }
}