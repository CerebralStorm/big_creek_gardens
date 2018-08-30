import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import UserSection from './user_section';
import AddressSection from './address_section';
import CardSection from './card_section';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  totalPrice() {
    let total = 0;
    Object.values(this.props.cart).forEach((item, index) => {
      total += (item.quantity * item.product.price)
    })
    return total.toFixed(2)
  }

  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleStateChange(state) {
    this.setState({state: state})
  }

  async handleSubmit(event) {
    event.preventDefault()
    let user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address_line1: this.state.address,
      address_city: this.state.city,
      address_state: this.state.state,
      address_zip: this.state.zip,
      address_country: 'US',
      charge: {

      }
    }
    let {token} = await this.props.stripe.createToken(user);
    let response = await fetch("/api/v1/charges", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': ENV.csrf_token
      },
      body: JSON.stringify({
        stripe_token: token.id,
        user: user
      })
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    return (
      <div className='container checkout-container'>
        <h1 className='text-center'>Checkout</h1>
        <form onSubmit={this.handleSubmit} className='m-4'>
          <div className='row'>
            <div className='col-sm-12 col-md-8 card pb-3'>
              <UserSection handleChange={this.handleChange} name={this.state.name} email={this.state.email} phone={this.state.phone} />
              <AddressSection handleStateChange={this.handleStateChange} handleChange={this.handleChange} address={this.state.address} state={this.state.state} zip={this.state.zip} />
              <CardSection />
              <button onClick={this.handleSubmit} className='btn btn-success pull-right'>Confirm order</button>
            </div>
            <div className='col-sm-12 col-md-4'>
              <ul className='list-group mb-3'>
                <li className="list-group-item checkout-cart-header"><h6 className='text-center checkout-title'>Cart</h6></li>
              {Object.values(this.props.cart).map(cartItem => (
                <li key={cartItem.product.id} className="list-group-item d-flex justify-content-between lh-condensed">
                  <div className='col-9 checkout-item-small'>
                    <h6 className="checkout-name">{cartItem.product.name}</h6>
                    <small className="text-muted checkout-description">{cartItem.product.description}</small>
                  </div>
                  <span className="text-muted">${(cartItem.product.price * cartItem.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className='list-group-item d-flex justify-content-between lh-condensed checkout-total'>
                <span>
                  <h6>Total</h6>
                </span>
                <h6 className='text-center'><strong>${this.totalPrice()}</strong></h6>
              </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);