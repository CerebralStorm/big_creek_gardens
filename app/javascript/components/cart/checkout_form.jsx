import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { updateCart, loadCart } from '../../actions/cart'
import ChargeApi from '../../api/charge_api'
import { Redirect } from 'react-router';
import UserSection from './user_section';
import AddressSection from './address_section';
import CardSection from './card_section';
import { connect } from 'react-redux'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.displayTotalPrice = this.displayTotalPrice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    let currentUser = this.props.currentUser || {}
    this.state = {
      name: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone,
      address: currentUser.address,
      city: currentUser.city,
      state: currentUser.state,
      zip: currentUser.zip,
      redirectToConfirmation: false,
      orderId: ''
    }
  }

  displayTotalPrice() {
    return this.totalPrice().toFixed(2)
  }

  totalPrice() {
    let total = 0;
    Object.values(this.props.cart).forEach((item) => {
      total += (item.quantity * item.product.price)
    })
    return total
  }

  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleStateChange(state) {
    this.setState({state: state.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    let user = {
      name: this.state.name,
      email: this.state.email,
      address_line1: this.state.address,
      address_city: this.state.city,
      address_state: this.state.state,
      address_zip: this.state.zip,
      address_country: 'US',
    }

    let orderlineItems = Object.values(this.props.cart).map(cartItem => {
      return ({
        product_id: cartItem.product.id,
        quantity: cartItem.quantity
      });
    })

    let {token} = await this.props.stripe.createToken(user);
    ChargeApi.createCharge({
      stripe_token: token.id,
      user: this.state,
      order_line_items_attributes: orderlineItems
    }).then((response) => {
      updateCart(this.props.currentUser, {})
      this.props.dispatch(loadCart(this.props.currentUser))
      this.setState({orderId: response.data.charge.order_id, redirectToConfirmation: true})
    })
  }

  render() {
    if (this.state.redirectToConfirmation) {
      return <Redirect to={`/confirmation/${this.state.orderId}`} />;
    }

    return (
      <div className="container checkout-container">
        <h1 className="text-center">Checkout</h1>
        <form onSubmit={this.handleSubmit} className="m-4">
          <div className="row">
            <div className="col-sm-12 col-md-8 card pb-3">
              <UserSection handleChange={this.handleChange} name={this.state.name} email={this.state.email} phone={this.state.phone} />
              <AddressSection handleStateChange={this.handleStateChange} handleChange={this.handleChange} address={this.state.address} city={this.state.city} state={this.state.state} zip={this.state.zip} />
              <CardSection />
              <button onClick={this.handleSubmit} disabled={this.totalPrice() === 0} className="btn btn-success pull-right">Confirm order</button>
            </div>
            <div className="col-sm-12 col-md-4">
              <ul className="list-group mb-3">
                <li className="list-group-item checkout-cart-header"><h6 className="text-center checkout-title">Cart</h6></li>
              {Object.values(this.props.cart).map(cartItem => (
                <li key={cartItem.product.id} className="list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-9 checkout-item-small">
                    <h6 className="checkout-name">{cartItem.product.name}</h6>
                    <small className="text-muted checkout-description">{cartItem.product.description}</small>
                  </div>
                  <span className="text-muted">${(cartItem.product.price * cartItem.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between lh-condensed checkout-total">
                <span>
                  <h6>Total</h6>
                </span>
                <h6 className="text-center"><strong>${this.displayTotalPrice()}</strong></h6>
              </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart || {}
  }
}

export default connect(mapStateToProps)(injectStripe(CheckoutForm))
const StripeCheckoutForm = injectStripe(CheckoutForm)
export { StripeCheckoutForm, CheckoutForm };