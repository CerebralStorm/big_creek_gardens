import React from 'react'
import Gallery from '../../app/javascript/components/gallery'

test('render a Gallery', () => {
  const wrapper = shallow(<Gallery />);
  expect(wrapper).toMatchSnapshot();
});