import React from 'react'
import Cart from '../../app/javascript/components/cart'

test('render a Cart', () => {
  const wrapper = shallow(<Cart />);
  expect(wrapper).toMatchSnapshot();
});