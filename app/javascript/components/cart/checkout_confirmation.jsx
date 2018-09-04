import React from 'react';
import OrderApi from '../../api/order_api'

class CheckoutConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
      user: {},
      orderLineItems: []
    }
  }

  componentWillMount() {
    OrderApi.loadOrder(this.props.match.params.orderId).then((response) => {
      console.log(response.data)
      this.setState({
        order: response.data.order,
        user: response.data.order.user,
        orderLineItems: response.data.order.orderLineItems
      })
    })
  }

  render() {
    return (
      <div>
        <div className="container mt-3 mb-3 confirmation-container">
          <div className="row marketing">
            <div className="col-12">
              <center>
                <h4>Success - your order is confirmed!</h4>
                <h5>Order number: #{this.state.order.id}</h5>
                <hr />
              </center>
            </div>

            <div className="col-12">
              <center>
                <div className="card">
                  <div className="card-body">
                    <address>
                      <strong>Shipping Address:</strong><br />
                      {this.state.user.name}<br />
                      {this.state.user.email}<br />
                      {this.state.user.phone}<br />
                      Address<br />
                      ZIP, City, Country
                    </address>
                  </div>
                </div>
              </center>
            </div>
            <div className='col-12'>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orderLineItems.map((lineItem) => (
                    <tr>
                      <td scope="row">{lineItem.name}</td>
                      <td>{lineItem.quantity}</td>
                      <td>{lineItem.price}</td>
                      <td>{lineItem.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutConfirmation;