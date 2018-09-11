import React from 'react'
import Shop from '../../app/javascript/components/shop'

test('render a Shop', () => {
  const wrapper = shallow(<Shop />);
  expect(wrapper).toMatchSnapshot();
});