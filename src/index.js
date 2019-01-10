import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// const logger = createLogger();
// const rootReducer = combineReducers({})
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBf7bB3sdrfqbDp26bmxoP3Qm8A5_KgyDs",
  authDomain: "battlecity-fcea8.firebaseapp.com",
  databaseURL: "https://battlecity-fcea8.firebaseio.com",
  projectId: "battlecity-fcea8",
  storageBucket: "",
  messagingSenderId: "539299225290"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
