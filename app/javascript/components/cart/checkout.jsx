import React from 'react'
import { connect } from 'react-redux'
import CheckoutForm from './checkout_form'
import { Elements, StripeProvider } from 'react-stripe-elements';

class Checkout extends React.Component {
  render() {
    return (
      <StripeProvider apiKey={ENV.stripe_key}>
        <Elements>
          <CheckoutForm cart={this.props.cart} />
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
export { Checkout };

