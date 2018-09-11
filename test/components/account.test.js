import React from 'react'
import { Account } from '../../app/javascript/components/account'

let currentUser = {
  id: 1,
  name: 'Steve'
}

let dispatch = jest.fn();

let orders = [];

test('render a Account', () => {
  const wrapper = shallow(<Account  currentUser={currentUser} dispatch={dispatch} orders={orders} />);
  expect(wrapper).toMatchSnapshot();
});