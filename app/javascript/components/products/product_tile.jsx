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
    console.log('New Cart', newCart);
    this.props.dispatch(updateCart(this.props.currentUser, newCart))
  }

  render() {
    return (
      <div className="product-tile col">
        <img src={this.props.product.image_url}  height="160" width="160" alt="Product Image" className='img-fluid' />
        <div className="product-details">
          <h6>{this.props.product.name}</h6>
          <p className="product-tile-description">{this.props.product.description}</p>
          <p>{this.props.product.price}</p>
          <a href='#' onClick={this.addToCart}><FontAwesomeIcon icon='plus'/>Add to Cart</a>
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

