import React from 'react';
import states from '../../states.json';
import Select from 'react-select';

const options = states.map((item) => (
  { value: item.abbreviation, label: item.name }
))

class AddressSection extends React.Component {
  render() {
    let value = options.find((option) => {
      return option.value == this.props.state;
    })
    return (
      <div>
        <div className="form-group m-2">
          <label htmlFor="checkoutCity">Address</label>
          <input name="address" type="text" id="checkoutCity" className="form-control" onChange={this.props.handleChange} value={this.props.address} />
        </div>
        <div className="row">
          <div className="form-group col-sm-12 ml-2 col-md-3">
            <label htmlFor="checkoutCity">City</label>
            <input name="city" type="text" id="checkoutCity" className="form-control" onChange={this.props.handleChange} value={this.props.city} />
          </div>
          <div className="form-group col-sm-12 col-md-3 checkout-state">
            <label htmlFor="checkoutState">State</label>
            <Select
              value={value}
              onChange={this.props.handleStateChange}
              options={options}
            />
          </div>
          <div className="form-group col-sm-12 mr-2 col-md-3">
            <label htmlFor="checkoutZip">Zip</label>
            <input name="zip" type="text" id="checkoutZip" className="form-control" onChange={this.props.handleChange} value={this.props.zip} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddressSection;
export { AddressSection };