import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateCart, loadCart } from '../../actions/cart'

class ProductTile extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart() {
    let newCart = this.props.cart
    if(newCart[this.props.product.id]) {
      newCart[this.props.product.id]['quantity'] += 1;
    } else {
      newCart[this.props.product.id] = {}
      newCart[this.props.product.id]['quantity'] = 1;
      newCart[this.props.product.id]['product'] = this.props.product;
    }
    updateCart(this.props.currentUser, newCart)
    this.props.dispatch(loadCart(this.props.currentUser))
  }

  render() {
    return (
      <div className="product-tile col-xs-12 col-sm-12 col-md-4 col-lg-3">
        <img src={this.props.product.image_url}  height="160" width="160" alt="Product Image" />
        <div className="product-details">
          <h6 className='product-title'>{this.props.product.name}</h6>
          <p className="product-description">{this.props.product.description}</p>
          <p className='product-price'><strong>${this.props.product.price}</strong></p>
          <p className='product-cart-add'>
            <a href='#' className='btn btn-success' onClick={this.addToCart}><FontAwesomeIcon icon='plus'/>Add to Cart</a>
          </p>
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

export default connect(mapStateToProps)(ProductTile)

