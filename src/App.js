import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Game from './pages/Game'
import Main from './pages/Main'

import './css/App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/game" component={() => <Game />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
