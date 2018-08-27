import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadProducts } from '../actions/product'

class Shop extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts())
  }

  render() {
    return (
      <div className="feature">
        <div className="container">
          <div className="text-center row">
            <div className="col-md-3">
              <h2>Full Responsive</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
            <div className="col-md-3">
              <h2>Retina Ready</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
            <div className="col-md-3">
              <h2>Full Responsive</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
            <div className="col-md-3">
              <h2>Friendly Code</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
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