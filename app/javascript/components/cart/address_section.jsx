import React from 'react';
import {CardElement} from 'react-stripe-elements';

class AddressSection extends React.Component {
  render() {
    return (
      <div className='col-12'>
        <div className="form-group m-2">
          <label htmlFor="checkoutCity" className="col-sm-2 col-form-label">City</label>
          <input type="text" id='checkoutCity' className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group m-2">
          <label htmlFor="checkoutState" className="col-sm-2 col-form-label">State</label>
          <input type="text" id='checkoutState' className="form-control" placeholder="Enter state" />
        </div>
        <div className="form-group m-2">
          <label htmlFor="checkoutZip" className="col-sm-2 col-form-label">Zip</label>
          <input type="text" id='checkoutZip' className="form-control" placeholder="Enter zip" />
        </div>
      </div>
    );
  }
}

export default AddressSection;