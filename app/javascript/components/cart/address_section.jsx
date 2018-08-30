import React from 'react';
import {CardElement} from 'react-stripe-elements';
import SelectUSState from 'react-select-us-states';

class AddressSection extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group m-2">
          <label htmlFor="checkoutCity">Address</label>
          <input name='address' type="text" id='checkoutCity' className="form-control" onChange={this.props.handleChange} />
        </div>
        <div className='row'>
          <div className="form-group col-sm-12 ml-2 col-md-3">
            <label htmlFor="checkoutCity">City</label>
            <input name='city' type="text" id='checkoutCity' className="form-control" onChange={this.props.handleChange} />
          </div>
          <div className="form-group col-sm-12 col-md-3">
            <label htmlFor="checkoutState">State</label>
            <SelectUSState name='state' id="checkoutState" className="form-control" onChange={this.props.handleStateChange} />
          </div>
          <div className="form-group col-sm-12 mr-2 col-md-3">
            <label htmlFor="checkoutZip">Zip</label>
            <input name='zip' type="text" id='checkoutZip' className="form-control" onChange={this.props.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddressSection;