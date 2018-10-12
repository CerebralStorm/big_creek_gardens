import React from 'react'

class Loading extends React.Component {
  render() {
    return (
      <div className="feature">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-md-auto">
            <img className="img-fluid" src="/loading.gif" />
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    );
  }
}

export default Loading
export { Loading };
