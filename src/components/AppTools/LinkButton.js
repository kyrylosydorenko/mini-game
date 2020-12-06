import React from 'react'
import { useHistory } from 'react-router-dom'

import '../../css/components-css/LinkButton.css'
import PropTypes from 'prop-types'

const LinkButton = ({ href, title }) => {
  const history = useHistory()
  return (
    <button className="btn" type="button" onClick={() => history.push(`${href}`)}>
      {title}
    </button>
  )
}

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default LinkButton
