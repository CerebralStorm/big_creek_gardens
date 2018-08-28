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
    console.log(this.props.cartItem)
    return (
      <div className="product-tile">
        <div className="product-details">
          <h6>{this.props.cartItem.product.name}</h6>
          <p className="product-tile-description">{this.props.cartItem.description}</p>
          <p>{this.props.cartItem.product.price}</p>
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

