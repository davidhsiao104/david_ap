import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './config/routes'

const App = ({ store, history }) => (
  <Provider store={store}>    
      <Router history={history} routes={routes} />    
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default App

