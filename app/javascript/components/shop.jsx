import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadProducts } from '../actions/product'
import ProductTile from './products/product_tile'

class Shop extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts())
  }

  render() {
    return (
      <div className="container mt-3 mb-3">
        <div className='row'>
          {this.props.products.map(product => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    products: state.products
  }
}

export default connect(mapStateToProps)(Shop)