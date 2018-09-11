import React from 'react'
import { connect } from 'react-redux'
import { updateCart, loadCart } from '../../actions/cart'

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.clearItem = this.clearItem.bind(this);
    this.updateAndLoadCart = this.updateAndLoadCart.bind(this);
    this.textInputRef = React.createRef();
    this.state = {
      quantity: props.cartItem.quantity
    }
  }

  componentWillReceiveProps(newProps) {
    this.textInputRef.current.value = newProps.cartItem.quantity
  }

  changeQuantity(value) {
    let newCart = this.props.cart
    newCart[this.props.product.id]['quantity'] += value;
    if(newCart[this.props.product.id]['quantity'] < 0) {
      newCart[this.props.product.id]['quantity'] = 0
    }
    this.updateAndLoadCart(newCart)
  }

  setQuantity(event) {
    let value = Math.abs(parseInt(event.target.value, 0))
    if(!event.target.value) {
      value = this.props.cartItem.quantity
      event.target.value = this.props.cartItem.quantity
    }
    let newCart = this.props.cart
    newCart[this.props.product.id]['quantity'] = value;
    this.updateAndLoadCart(newCart)
  }

  clearItem() {
    let newCart = this.props.cart
    delete newCart[this.props.product.id]
    this.updateAndLoadCart(newCart)
  }

  updateAndLoadCart(cart) {
    updateCart(this.props.currentUser, cart)
    this.props.dispatch(loadCart(this.props.currentUser))
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <img className="img-responsive" src={this.props.product.image_url} alt="prewiew" height="80" />
        </div>
        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
          <h6 className="product-name"><strong>{this.props.product.name}</strong></h6>
          <h6><small>{this.props.product.description}</small></h6>
        </div>
        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
          <div className="col-3 col-sm-3 col-md-6 text-md-right line-item-price">
            <h6><strong>{this.props.product.price} <span className="text-muted">x</span></strong></h6>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <div className="quantity">
              <input type="button" value="+" className="plus" onClick={this.changeQuantity.bind(this, 1)} />
              <input type="number" step="1" max="99" min="1" ref={this.textInputRef} onBlur={this.setQuantity} defaultValue={this.state.quantity} title="Qty" className="qty" size="4" />
              <input type="button" value="-" className="minus" onClick={this.changeQuantity.bind(this, -1)} />
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" onClick={this.clearItem} className="btn btn-outline-danger btn-xs">
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
export { CartItem };

