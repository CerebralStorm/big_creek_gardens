import React from 'react'
import Header from '../../app/javascript/components/header'

test('render a Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});