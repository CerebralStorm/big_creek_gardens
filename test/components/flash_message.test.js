import React from 'react'
import FlashMessage from '../../app/javascript/components/flash_message'

test('render a FlashMessage', () => {
  const wrapper = shallow(<FlashMessage />);
  expect(wrapper).toMatchSnapshot();
});