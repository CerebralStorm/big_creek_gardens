import React from 'react'
import Footer from '../../app/javascript/components/footer'

test('render a Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});