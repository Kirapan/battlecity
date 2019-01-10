import React, { Component } from 'react';
// import { connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import Gameboard from './containers/GameBoard/GameBoard';

import './App.css';

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
          <Gameboard />
        </Layout>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
