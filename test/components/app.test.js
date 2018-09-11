import React from 'react'
import App from '../../app/javascript/components/app'

test('render a App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});