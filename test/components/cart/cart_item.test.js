import React from 'react'
import { CartItem } from '../../../app/javascript/components/cart/cart_item'

let product = { id: 1, name: 'test product' }
let cartItem = { product: product, quantity: 1 };

test('render a CartItem', () => {
  const wrapper = shallow(<CartItem product={product} cartItem={cartItem} />);
  expect(wrapper).toMatchSnapshot();
});