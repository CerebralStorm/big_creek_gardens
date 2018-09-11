import React from 'react'
import { CheckoutConfirmation } from '../../../app/javascript/components/cart/checkout_confirmation'

let match = {
  params: {
    orderId: 1
  }
}

test('render a CheckoutConfirmation', () => {
  const wrapper = shallow(<CheckoutConfirmation match={match} />);
  expect(wrapper).toMatchSnapshot();
});