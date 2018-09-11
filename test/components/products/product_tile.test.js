import React from 'react'
import { ProductTile } from '../../../app/javascript/components/products/product_tile'

let product = { id: 1, name: 'test product' }

test('render a ProductTile', () => {
  const wrapper = shallow(<ProductTile product={product} />);
  expect(wrapper).toMatchSnapshot();
});