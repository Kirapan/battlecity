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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();

ReactDOM.render(
  <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
