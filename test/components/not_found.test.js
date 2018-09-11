import React from 'react'
import NotFound from '../../app/javascript/components/not_found'

test('render a NotFound', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});