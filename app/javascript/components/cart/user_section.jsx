import React from 'react';

class UserSection extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className="form-group m-2 col-sm-12 col-md-5">
            <label htmlFor="checkoutName">Name</label>
            <input type="text" id='checkoutName' className="form-control" />
          </div>
          <div className="form-group m-2 col-sm-12 col-md-5">
            <label htmlFor="checkoutEmail">Email</label>
            <input type="email" id='checkoutEmail' className="form-control" />
          </div>
        </div>
        <div className="form-group m-2">
          <label htmlFor="checkoutPhone">Phone</label>
          <input type="text" id='checkoutPhone' className="form-control" />
        </div>
      </div>
    );
  }
}

export default UserSection;