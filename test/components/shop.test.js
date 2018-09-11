import React from 'react'
import { Shop } from '../../app/javascript/components/shop'

let products = [];

let dispatch = jest.fn()

test('render a Shop', () => {
  const wrapper = shallow(<Shop products={products} dispatch={dispatch} />);
  expect(wrapper).toMatchSnapshot();
});