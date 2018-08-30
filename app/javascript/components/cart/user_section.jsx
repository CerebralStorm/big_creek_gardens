import React from 'react';

class UserSection extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className="form-group m-2 col-sm-12 col-md-5">
            <label htmlFor="checkoutName">Name</label>
            <input name='name' type="text" id='checkoutName' className="form-control" onChange={this.props.handleChange} />
          </div>
          <div className="form-group m-2 col-sm-12 col-md-5">
            <label htmlFor="checkoutEmail">Email</label>
            <input name='email' type="email" id='checkoutEmail' className="form-control" onChange={this.props.handleChange} />
          </div>
        </div>
        <div className="form-group m-2">
          <label htmlFor="checkoutPhone">Phone</label>
          <input name='phone' type="phone" id='checkoutPhone' className="form-control" onChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

export default UserSection;