import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './config/configureStore.js'

import * as Joi from 'joi-i18n';
import language from './config/joi-zh_TW_language.js';


import App from './App.js';


function setup() {
  const initState = window.__INITIAL_STATE__;

  const store = configureStore(initState);
  const history = syncHistoryWithStore(browserHistory, store);
  
  Joi.addLocaleData('zh_TW', language)

  return (
    <App store={store} history={history} />
  );
}

ReactDOM.render(
  setup(),
  document.getElementById('root')
);

