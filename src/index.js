import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const initialState = {
  filter: "ALL",
  todos: [
    { id: 2, text: "Build Todo Api", completed: true },
    { id: 1, text: "Complete redux", completed: false },
    { id: 3, text: "Connect Api with React", completed: false },
  ]
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
