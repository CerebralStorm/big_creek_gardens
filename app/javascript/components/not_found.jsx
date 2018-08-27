import React from 'react'

class NotFound extends React.Component {
  render() {
    return (
      <div className="margin-trbl-m">
        <div className="not-found full-height relative">
          <div className="error__content">
            <div className="error__content__caution">
              <i aria-hidden="true" className="gs-caution"></i>
              <span>404 ERROR</span>
            </div>
            <div className="error__content__message">
              <h2>Sorry, there's nothing here</h2>
              <p>The requested file or page was not found. Please use the navigation to find a page that exists.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;