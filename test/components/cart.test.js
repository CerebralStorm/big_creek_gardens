import React from 'react'
import { Cart } from '../../app/javascript/components/cart'

let cart = {};

let dispatch = jest.fn()

test('render a Cart', () => {
  const wrapper = shallow(<Cart cart={cart} dispatch={dispatch} />);
  expect(wrapper).toMatchSnapshot();
});