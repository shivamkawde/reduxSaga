import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {mainReducer} from "./Reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import handleNewMessage from './sagas'

const sagaMiddleware = createSagaMiddleware()
let rootReducer = combineReducers({ mainReducer: mainReducer});
let store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(handleNewMessage)
ReactDOM.render(
 
  <React.StrictMode>
   <Provider store={store}> 
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
