import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadOrders } from '../actions/order'
import { UserApi } from '../api/user_api'
import { showFlashMessage } from '../actions/flash'
import Moment from 'react-moment';
import 'moment-timezone';
import UserSection from './cart/user_section'
import AddressSection from './cart/address_section'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      address: this.props.currentUser.address,
      city: this.props.currentUser.city,
      state: this.props.currentUser.state,
      zip: this.props.currentUser.zip
    }
  }

  componentWillMount() {
    this.props.dispatch(loadOrders())
  }

  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleStateChange(state) {
    this.setState({state: state.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    UserApi.updateUser(this.props.currentUser.id, { user: this.state }).then(() => {
      this.props.dispatch(showFlashMessage(`Your settings have been saved.`, 'success'))
    })
  }

  render() {
    return (
      <div className="container section">
        <div className="card">
          <div className="col-sm-12 col-md-12 card pb-3">
            <UserSection handleChange={this.handleChange} name={this.state.name} email={this.state.email} phone={this.state.phone} />
            <AddressSection handleStateChange={this.handleStateChange} handleChange={this.handleChange} address={this.state.address} city={this.state.city} state={this.state.state} zip={this.state.zip} />
            <button onClick={this.handleSubmit} className="btn btn-success pull-right">Update Settings</button>
          </div>
        </div>
        <hr />
        <h1>My Past Orders</h1>
        <hr />
        <ul className="list-group">
          {this.props.orders.map((order) => (
            <li key={order.id} className="list-group-item">
              <Link to={`/orders/${order.id}`}>
                Order # {order.id} Created - <Moment>{order.createdAt}</Moment>
              </Link>
            </li>
          ))}
        </ul>
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
export { Account };