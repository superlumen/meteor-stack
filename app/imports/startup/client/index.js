import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from '/imports/ui/layouts/App'
import AppPage from '/imports/ui/pages/AppPage'

render((
  <App>
    <Router history={hashHistory}>
      <Route path="/"
             component={AppPage}/>
    </Router>
  </App>
), document.getElementById('root'))
