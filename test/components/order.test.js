import React from 'react'
import Order from '../../app/javascript/components/order'

test('render a Order', () => {
  const wrapper = shallow(<Order />);
  expect(wrapper).toMatchSnapshot();
});