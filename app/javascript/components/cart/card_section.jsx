import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group m-2">
          <label htmlFor="checkoutCreditCard">Credit Card</label>
          <CardElement id="checkoutCreditCard" className="form-control" />
        </div>
      </div>
    );
  }
}

export default CardSection;
export { CardSection };