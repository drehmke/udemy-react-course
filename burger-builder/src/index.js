import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSageMiddleware from 'redux-saga'

import burgerBuilderReducer from './Store/reducers/burgerBuilder'
import orderReducer from './Store/reducers/order'
import authReducer from './Store/reducers/auth'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { watchAuth, watchBurgerBuider, watchOrder } from './Store/sagas'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const rootReducer = combineReducers({
  burger: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
})
const sagaMiddleware = createSageMiddleware()
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
 )

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBurgerBuider)
sagaMiddleware.run(watchOrder)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
