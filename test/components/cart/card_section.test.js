import React from 'react'
import { CardSection } from '../../../app/javascript/components/cart/card_section'

test('render a CardSection', () => {
  const wrapper = shallow(<CardSection />);
  expect(wrapper).toMatchSnapshot();
});