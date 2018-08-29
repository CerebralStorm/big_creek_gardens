import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCart } from '../actions/cart'
import { Link } from 'react-router-dom'

import CartItem from './cart/cart_item'
import CheckoutForm from './cart/checkout_form'
import { Elements, StripeProvider } from 'react-stripe-elements';

class Cart extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadCart())
  }

  render() {
    return (
      <div className="container cart-container">
        <div className="card shopping-cart">
          <div className="card-header bg-dark text-light">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Shipping cart
            <Link to={'/shop'} className="btn btn-outline-success btn-sm pull-right">
              Continue Shopping
            </Link>
            <div className="clearfix"></div>
          </div>
          <div class="card-body">
            {Object.values(this.props.cart).map(cartItem => (
              <div>
                <CartItem key={cartItem.product.id} cartItem={cartItem} />
                <hr />
              </div>
            ))}
          </div>
        </div>
        <div class="card-footer">
          <div class="coupon col-md-5 col-sm-5 no-padding-left pull-left">
            <div class="row">
              <div class="col-6">
                <input type="text" class="form-control" placeholder="coupon code" />
              </div>
              <div class="col-6">
                <input type="submit" class="btn btn-default" value="Use coupon" />
              </div>
            </div>
          </div>
          <div class="pull-right" style={{margin: '10px'}}>
            <a href="" class="btn btn-success pull-right">Checkout</a>
            <div class="pull-right total-price" style={{margin: '5px'}}>
              <strong>Total price: <b>$50.00</b></strong>
            </div>
          </div>
          <div className='clearfix'></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)