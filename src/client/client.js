// Startup point for the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import combinedReducers from './reducers';
import routes from './router/routes';

// create axios instance
const axiosInstance = axios.create({
  baseURL: '/api',
});

// rehydrate state initialized from server
const initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;
 
const store = createStore(
  combinedReducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// rehydrate rendered React component from server
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('index')
);