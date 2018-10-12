import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateCart, loadCart } from '../../actions/cart'
import { showFlashMessage } from '../../actions/flash'
import { Link } from 'react-router-dom'

class ProductTile extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart() {
    let newCart = this.props.cart || {}
    if(newCart[this.props.product.id]) {
      newCart[this.props.product.id]['quantity'] += 1;
    } else {
      newCart[this.props.product.id] = {}
      newCart[this.props.product.id]['quantity'] = 1;
      newCart[this.props.product.id]['product'] = this.props.product;
    }
    updateCart(this.props.currentUser, newCart)
    this.props.dispatch(loadCart(this.props.currentUser))
    this.props.dispatch(showFlashMessage(`${this.props.product.name} was added to your cart`, 'success'))
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 mx-auto">
        <div className="product-tile rounded">
          <Link to={`/products/${this.props.product.id}`}>
            <img src={this.props.product.image_url} className="rounded" height="160" alt="Product Image" />
          </Link>
          <div className="product-details">
            <Link to={`/products/${this.props.product.id}`}>
              <h6 className="product-title">{this.props.product.name}</h6>
            </Link>
            <p className="product-description">{this.props.product.description}</p>
            <p className="product-price"><strong>${this.props.product.price}</strong></p>
            <p className="product-cart-add">
              <span className="btn btn-success link" onClick={this.addToCart}><FontAwesomeIcon icon="plus" className="mr-1" />Add to Cart</span>
            </p>
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

export default connect(mapStateToProps)(ProductTile)
export { ProductTile };

