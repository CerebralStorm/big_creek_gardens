import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import App from '../components/app'
import Index from '../components/index'
import NotFound from '../components/not_found'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>,
    document.getElementById('application')
  )
})
