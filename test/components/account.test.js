import React from 'react'
import Account from '../../app/javascript/components/account'

test('render a Account', () => {
  const wrapper = shallow(<Account />);
  expect(wrapper).toMatchSnapshot();
});