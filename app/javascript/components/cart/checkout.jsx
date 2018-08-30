import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateCart, loadCart } from '../../actions/cart'

import CheckoutForm from './checkout_form'
import { Elements, StripeProvider } from 'react-stripe-elements';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StripeProvider apiKey={ENV.stripe_key} >
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout)

