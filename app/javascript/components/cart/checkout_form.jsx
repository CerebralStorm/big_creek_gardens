import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import UserSection from './user_section';
import AddressSection from './address_section';
import CardSection from './card_section';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
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
      <div className='container card checkout-container'>
        <form onSubmit={this.handleSubmit} className='m-4'>
          <div className='row'>
            <div className='col-sm-12 col-md-8'>
              <UserSection />
              <AddressSection />
              <CardSection />
              <button onClick={this.handleSubmit} className='btn btn-success pull-right'>Confirm order</button>
            </div>
            <div className='col-sm-12 col-md-4'>
              Cart
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);