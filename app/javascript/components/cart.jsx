import React from 'react'
import { connect } from 'react-redux'
import { loadCart } from '../actions/cart'
import { Link } from 'react-router-dom'

import CartItem from './cart/cart_item'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.totalPrice = this.totalPrice.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(loadCart(this.props.currentUser))
  }

  totalPrice() {
    let total = 0;
    Object.values(this.props.cart).forEach((item) => {
      total += (item.quantity * item.product.price)
    })
    return total.toFixed(2)
  }

  render() {
    return (
      <div className="container cart-container">
        <div className="card shopping-cart">
          <div className="card-header bg-dark text-light">
            <i className="fa fa-shopping-cart mr-md-3" aria-hidden="true"></i>
            <strong>Shopping Cart</strong>
            <Link to={'/shop'} className="btn btn-outline-success btn-sm pull-right">
              Continue Shopping
            </Link>
            <div className="clearfix"></div>
          </div>
          <div className="card-body">
            {Object.values(this.props.cart).map(cartItem => (
              <div key={cartItem.product.id}>
                <CartItem cartItem={cartItem} product={cartItem.product} />
                <hr />
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="coupon code" />
              </div>
              <div className="col-6">
                <input type="submit" className="btn btn-default" value="Use coupon" />
              </div>
            </div>
          </div>
          <div className="pull-right" style={{margin: '10px'}}>
            <Link to="/checkout" className="btn btn-success pull-right">Checkout</Link>
            <div className="pull-right total-price" style={{margin: '5px'}}>
              <strong>Total price: <b>${this.totalPrice()}</b></strong>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart || {}
  }
}

export default connect(mapStateToProps)(Cart)
export { Cart };