import React from 'react'
import { CartItem } from '../../../app/javascript/components/cart/cart_item'

test('render a CartItem', () => {
  const wrapper = shallow(<CartItem />);
  expect(wrapper).toMatchSnapshot();
});