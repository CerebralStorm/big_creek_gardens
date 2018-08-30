import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import UserSection from './user_section';
import AddressSection from './address_section';
import CardSection from './card_section';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  totalPrice() {
    let total = 0;
    Object.values(this.props.cart).forEach((item, index) => {
      total += (item.quantity * item.product.price)
    })
    return total.toFixed(2)
  }

  async submit(ev) {
    console.log('here')
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    return (
      <div className='container checkout-container'>
        <form onSubmit={this.handleSubmit} className='m-4'>
          <div className='row'>
            <div className='col-sm-12 col-md-8 card pb-3'>
              <UserSection />
              <AddressSection />
              <CardSection />
              <button onClick={this.handleSubmit} className='btn btn-success pull-right'>Confirm order</button>
            </div>
            <div className='col-sm-12 col-md-4'>
              <ul className='list-group mb-3'>
                <li class="list-group-item checkout-cart-header"><h6 className='text-center checkout-title'>Cart</h6></li>
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