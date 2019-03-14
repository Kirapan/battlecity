import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
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
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null]
    ],
    tankPosition: {
      x: 0,
      y: 0
    },
    style: {
      position: 'absolute',
      left: '',
      top:'',
      transform: ''
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyDownHandler, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyDownHandler, false);
  }

  keyDownHandler = (e) => {
    if(e.keyCode === 37) {
      console.log('i am left arrow');
    } else if (e.keyCode === 38) {
      console.log('i am up arrow')
    } else if (e.keyCode === 39) {
      console.log('i am right arrow')
    } else if (e.keyCode === 40) {
      console.log('i am down arrow')
    }
  }

  render () {
    const image = (<img src={tank} alt='tank' height='40px' width='50px'/>)
    
    return this.state.loggedIn? 
    (
    <div className='GameBoard'>
      <div className='tankInPlay' style={this.state.style} onKeyDown={this.keyDownHandler}>{image}</div>
    </div>) 
    : <Login />
  }
}

export default GameBoard;