import React from 'react'
import { AddressSection } from '../../../app/javascript/components/cart/address_section'

test('render a AddressSection', () => {
  const wrapper = shallow(<AddressSection />);
  expect(wrapper).toMatchSnapshot();
});