import React from 'react';
import {CardElement} from 'react-stripe-elements';
import SelectUSState from 'react-select-us-states';

class AddressSection extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group m-2">
          <label htmlFor="checkoutCity">Address</label>
          <input type="text" id='checkoutCity' className="form-control" />
        </div>
        <div className='row'>
          <div className="form-group m-2 col-sm-12 col-md-5">
            <label htmlFor="checkoutState">State</label>
            <SelectUSState id="checkoutState" className="form-control" />
          </div>
          <div className="form-group m-2 col-sm-12 col-md-5">
            <label htmlFor="checkoutZip">Zip</label>
            <input type="text" id='checkoutZip' className="form-control" />
          </div>
        </div>
      </div>
    );
  }
}

export default AddressSection;