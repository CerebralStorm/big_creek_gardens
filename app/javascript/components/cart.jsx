import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCart } from '../actions/cart'

import CartItem from './cart/cart_item'

class Cart extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadCart())
  }

  render() {
    return (
      <div>
        {Object.values(this.props.cart).map(cartItem => (
          <CartItem key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)