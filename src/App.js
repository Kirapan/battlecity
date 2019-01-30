

import React, { Component } from 'react';
// import { connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import Gameboard from './containers/GameBoard/GameBoard';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Stats from './components/Stats/Stats';

import './App.css';
import { HelpBlock } from 'react-bootstrap';

// const mapStateToProps = (state) => {
//   return {
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //onSearchChange: (event) => dispatch(),
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <LeaderBoard />
          <Gameboard />
          <Stats />
        </Layout>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
