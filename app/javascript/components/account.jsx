import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadOrders } from '../actions/order'
import Moment from 'react-moment';
import 'moment-timezone';

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(loadOrders())
  }

  render() {
    return (
      <div className='container section'>
        <h1>My Orders</h1>
        {this.props.orders.map((order) => (
          <Link key={order.id} to={`/orders/${order.id}`}>
            <Moment>{order.createdAt}</Moment>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    orders: state.orders
  }
}

export default connect(mapStateToProps)(Account)