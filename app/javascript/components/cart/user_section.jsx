import React from 'react';

class UserSection extends React.Component {
  render() {
    return (
      <div className='col-12'>
        <div className="form-group m-2">
          <label htmlFor="checkoutEmail" className="col-sm-2 col-form-label">Email</label>
          <input type="email" id='checkoutEmail' className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group m-2">
          <label htmlFor="checkoutName" className="col-sm-2 col-form-label">Name</label>
          <input type="text" id='checkoutName' className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group m-2">
          <label htmlFor="checkoutPhone" className="col-sm-2 col-form-label">Phone</label>
          <input type="text" id='checkoutPhone' className="form-control" placeholder="Enter phone" />
        </div>
      </div>
    );
  }
}

export default UserSection;