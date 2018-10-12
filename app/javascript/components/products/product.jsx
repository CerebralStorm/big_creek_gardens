import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateCart, loadCart } from '../../actions/cart'
import { showFlashMessage } from '../../actions/flash'
import { loadProduct } from '../../actions/product'
import Loading from '../loading'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(loadProduct(this.props.match.params.productId))
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
    if(!this.props.product.id || (this.props.product.id.toString() !== this.props.match.params.productId)) {
      return <Loading />;
    } else {
      return (
        <div className="container feature">
          <div className="row">
            <div className="col-6">
              <img src={this.props.product.image_url} className="rounded img-fluid" alt="Product Image" />
            </div>
            <div className="col-4">
              <div className="product-details">
                <h6 className="product-title">{this.props.product.name}</h6>
                <p className="product-description">{this.props.product.description}</p>
                <p className="product-price"><strong>${this.props.product.price}</strong></p>
              </div>
            </div>
            <div className="col-2">
              <p className="product-cart-add">
                <span className="btn btn-success link" onClick={this.addToCart}><FontAwesomeIcon icon="plus" className="mr-1" />Add to Cart</span>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart,
    product: state.product
  }
}

export default connect(mapStateToProps)(Product)
export { Product };

