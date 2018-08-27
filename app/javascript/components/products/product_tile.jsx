import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductTile extends React.Component {
  render() {
    return (
      <div className="product-tile col">
        <img src={this.props.product.image_url}  height="160" width="160" alt="Product Image" className='img-fluid' />
        <div className="product-details">
          <h6>{this.props.product.name}</h6>
          <p className="product-tile-description">{this.props.product.description}</p>
          <p>{this.props.product.price}</p>
          <a href='#'><FontAwesomeIcon icon='plus'/>Add to Cart</a>
        </div>
      </div>
    );
  }
}

export default ProductTile;

