import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCart } from '../actions/cart'

import CartItem from './cart/cart_item'
import CheckoutForm from './cart/checkout_form'
import { Elements, StripeProvider } from 'react-stripe-elements';

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
        <StripeProvider apiKey={ENV.stripe_key} >
          <div className="example">
            <h1>Checkout</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
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