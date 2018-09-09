import React from 'react'

class Unauthorized extends React.Component {
  render() {
    return (
      <div className="container section text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Unauthorized</h2>
              <div className="error-details">
                  Sorry, are not authorized to perform this action!
              </div>
              <div className="error-actions">
                <a href="/" className="btn btn-primary btn-lg m-2">
                  <span className="glyphicon glyphicon-home"></span>
                  Take Me Home </a>
                <a href="/contact" className="btn btn-primary btn-lg m-2">
                  <span className="glyphicon glyphicon-envelope"></span>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Unauthorized;