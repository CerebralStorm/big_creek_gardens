import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import App from '../components/app'
import Index from '../components/index'
import Shop from '../components/shop'
import Gallery from '../components/gallery'
import Contact from '../components/contact'
import NotFound from '../components/not_found'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('application')
  )
})
