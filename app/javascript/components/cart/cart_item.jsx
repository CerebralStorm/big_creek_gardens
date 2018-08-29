import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateCart } from '../../actions/cart'

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <img className="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120" height="80" />
        </div>
        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
          <h4 className="product-name"><strong>{this.props.cartItem.product.name}</strong></h4>
          <h4><small>{this.props.cartItem.product.description}</small></h4>
        </div>
        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
          <div className="col-3 col-sm-3 col-md-6 text-md-right line-item-price">
            <h6><strong>{this.props.cartItem.product.price} <span className="text-muted">x</span></strong></h6>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <div className="quantity">
              <input type="button" value="+" className="plus" />
              <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty" size="4" />
              <input type="button" value="-" className="minus" />
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs">
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
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

export default connect(mapStateToProps)(CartItem)

