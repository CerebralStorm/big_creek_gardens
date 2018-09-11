import React from 'react'
import { ProductTile } from '../../../app/javascript/components/products/product_tile'

test('render a ProductTile', () => {
  const wrapper = shallow(<ProductTile />);
  expect(wrapper).toMatchSnapshot();
});