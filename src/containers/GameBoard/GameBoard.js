import React, {Component} from 'react';
import Login from '../../containers/Login/Login';

import './GameBoard.css';

class GameBoard extends Component {
  state = {
    loggedIn: false
  }
  render () {
    return this.state.loggedIn? (<div className='GameBoard'></div>) : <Login />
  }
}

export default GameBoard;