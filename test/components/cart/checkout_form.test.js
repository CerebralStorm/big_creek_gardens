import React from 'react'
import { CheckoutForm } from '../../../app/javascript/components/cart/checkout_form'

let match = {
  params: {
    orderId: 1
  }
}

let currentUser = {
  id: 1,
  name: 'Steve'
}

let cart = {};

test('render a CheckoutForm', () => {
  const wrapper = shallow(<CheckoutForm match={match} currentUser={currentUser} cart={cart} />);
  expect(wrapper).toMatchSnapshot();
});