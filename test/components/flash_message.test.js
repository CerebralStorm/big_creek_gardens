import React from 'react'
import { FlashMessage } from '../../app/javascript/components/flash_message'

let flash = {
  message: 'this is a test',
  messageType: 'success'
}

test('render a FlashMessage', () => {
  const wrapper = shallow(<FlashMessage flash={flash} />);
  expect(wrapper).toMatchSnapshot();
});