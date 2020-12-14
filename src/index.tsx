import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/saga';
import { fetchFilms, sortByYear } from './redux/action';



const saga = createSagaMiddleware()

const store =  createStore(rootReducer, compose(
  applyMiddleware(saga), 
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
