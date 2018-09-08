import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Index from './index'
import FlashMessage from './flash_message'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faPlus)

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FlashMessage />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;