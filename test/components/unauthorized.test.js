import React from 'react'
import Unauthorized from '../../app/javascript/components/unauthorized'

test('render a Unauthorized', () => {
  const wrapper = shallow(<Unauthorized />);
  expect(wrapper).toMatchSnapshot();
});