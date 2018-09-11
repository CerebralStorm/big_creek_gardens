import React from 'react'
import { UserSection } from '../../../app/javascript/components/cart/user_section'

test('render a UserSection', () => {
  const wrapper = shallow(<UserSection />);
  expect(wrapper).toMatchSnapshot();
});