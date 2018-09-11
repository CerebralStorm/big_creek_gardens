import React from 'react'
import { Header } from '../../app/javascript/components/header'

test('render a Header', () => {
  const wrapper = shallow(<Header dispatch={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});