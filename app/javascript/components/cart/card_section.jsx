import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div className='col-12'>
        <div className="form-group m-2">
          <label htmlFor="checkoutCreditCard" className="col-sm-2 col-form-label">Credit Card</label>
          <CardElement id='checkoutCreditCard' className="form-control" />
        </div>
      </div>
    );
  }
}

export default CardSection;