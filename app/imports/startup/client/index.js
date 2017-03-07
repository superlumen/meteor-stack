import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from '/imports/ui/layouts/App'
import Home from '/imports/ui/pages/Home'

render((
  <App>
    <Router history={hashHistory}>
      <Route path="/"
             component={Home}/>
    </Router>
  </App>
), document.getElementById('root'))
