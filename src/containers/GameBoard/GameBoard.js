import React, {Component} from 'react';
import Login from '../../containers/Login/Login';

import './GameBoard.css';

class GameBoard extends Component {
  state = {
    loggedIn: true
  }
  render () {
    return this.state.loggedIn? (<div className='GameBoard'>hello</div>) : <Login />
  }
}

export default GameBoard;