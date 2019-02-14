import React, {Component} from 'react';
import Login from '../../containers/Login/Login';
import tank from '../../assets/images/tank.png'

import './GameBoard.css';

class GameBoard extends Component {
  state = {
    loggedIn: true,
    gameState: 'PAUSE',
    score: 0,
    enermies: [1, 1, 1, 1, 1],
    killed: 0,
    grid: [
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null]
    ],
    tankPosition: {
      x: 0,
      y: 0
    },
  }
  render () {
    const image = (<img src={tank} alt='tank' height='50' width='50'/>)
    
    return this.state.loggedIn? (<div className='GameBoard'>{image}</div>) : <Login />
  }
}

export default GameBoard;