import React, { useState, useEffect, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import randomString from '../../utilities/randomString'
import cardSize from '../../utilities/cardSize'
import cardColor from '../../utilities/cardColor'
import '../../css/components-css/Card.css'

const Card = () => {
  const [color, setColor] = useState(cardColor() || '#86c5cd')
  const [string, setString] = useState(randomString() || '')
  const nodeRef = useRef(null)

  useEffect(() => {
    const setCardSize = () => cardSize(80)
    setCardSize()
    window.addEventListener('resize', setCardSize)
  }, [])

  function getNewCard() {
    setColor(() => cardColor())
    setString(() => randomString())
  }

  return (
    <SwitchTransition>
      <CSSTransition timeout={500} key={string} classNames="card-transition" nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className="card"
          style={{ backgroundColor: color }}
          role="button"
          tabIndex={0}
          onClick={() => getNewCard()}
          onKeyPress={() => getNewCard()}
        >
          {string}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default React.memo(Card)
