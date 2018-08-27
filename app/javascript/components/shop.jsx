import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Shop extends React.Component {
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

export default Shop;