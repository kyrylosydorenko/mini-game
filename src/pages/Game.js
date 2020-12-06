import React from 'react'

import LinkButton from '../components/AppTools/LinkButton'
import Card from '../components/Game/Card'

import '../css/pages-css/Game.css'


const Game = () => {
  return (
    <div className="game-container">
      <Card />
      <div className="btn-wrapper">
        <LinkButton title="Back" href="/" />
      </div>
    </div>
  )
}

export default Game
