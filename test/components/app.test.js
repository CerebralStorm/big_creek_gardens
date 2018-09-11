import React from 'react'
import App from '../../../app/javascript/admin/components/app'

test('render a App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});