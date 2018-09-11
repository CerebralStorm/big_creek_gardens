import React from 'react'
import { Checkout } from '../../../app/javascript/components/cart/checkout'

test('render a Checkout', () => {
  const wrapper = shallow(<Checkout />);
  expect(wrapper).toMatchSnapshot();
});