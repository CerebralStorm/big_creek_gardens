import React from 'react'
import Order from '../../app/javascript/components/order'

let match = {
  params: {
    orderId: 1
  }
}

test('render a Order', () => {
  const wrapper = shallow(<Order match={match} />);
  expect(wrapper).toMatchSnapshot();
});