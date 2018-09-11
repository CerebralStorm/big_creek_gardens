import React from 'react'
import { CheckoutConfirmation } from '../../../app/javascript/components/cart/checkout_confirmation'

test('render a CheckoutConfirmation', () => {
  const wrapper = shallow(<CheckoutConfirmation />);
  expect(wrapper).toMatchSnapshot();
});