import React from 'react'
import Index from '../../app/javascript/components/index'

test('render a Index', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toMatchSnapshot();
});