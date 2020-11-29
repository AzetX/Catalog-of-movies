import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk, { ThunkMiddleware }  from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/saga';



const saga = createSagaMiddleware()

// thunk as ThunkMiddleware<any>,
const store = createStore(rootReducer, compose(
  applyMiddleware(saga), //wtf!!!???????????
  (window&& (window as any).__REDUX_DEVTOOLS_EXTENSION__) && (window&& (window as any).__REDUX_DEVTOOLS_EXTENSION__())
))

saga.run(sagaWatcher as any)


const app = (
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
)


ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
