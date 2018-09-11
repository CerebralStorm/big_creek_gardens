import React from 'react'
import { Contact } from '../../app/javascript/components/contact'

test('render a Contact', () => {
  const wrapper = shallow(<Contact />);
  expect(wrapper).toMatchSnapshot();
});