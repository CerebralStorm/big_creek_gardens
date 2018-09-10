import React from 'react'
import Header from './header'
import Footer from './footer'
import FlashMessage from './flash_message'

import { library } from '@fortawesome/fontawesome-svg-core'
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