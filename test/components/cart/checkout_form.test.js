import React from 'react'
import { CheckoutForm } from '../../../app/javascript/components/cart/checkout_form'

test('render a CheckoutForm', () => {
  const wrapper = shallow(<CheckoutForm />);
  expect(wrapper).toMatchSnapshot();
});