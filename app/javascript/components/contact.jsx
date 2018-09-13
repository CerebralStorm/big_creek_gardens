import React from 'react'
import MessageApi from '../api/message_api'
import { connect } from 'react-redux'
import { showFlashMessage } from '../actions/flash'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  submitMessage(event) {
    event.preventDefault()
    let message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    MessageApi.createMessage({message: message}).then(() => {
      this.props.dispatch(showFlashMessage('Thank you for your message', 'success'))
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    })
  }

  render() {
    return (
      <div className="container mt-3 mb-3">
        <h2>Contact Us</h2>
        <p>Feel free to shout us by filling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input name="name" type="text" className="form-control" id="contact-name" onChange={this.handleChange} value={this.state.name} />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input name="email" type="email" className="form-control" id="contact-email" onChange={this.handleChange} value={this.state.email} />
              </div>
              <div className="form-group ">
                <label htmlFor="contact-text">Your Message</label>
               <textarea name="message" className="form-control" id="contact-text" onChange={this.handleChange} value={this.state.message}></textarea>
              </div>
              <button type="submit" className="btn btn-default" onClick={this.submitMessage} >Send Message</button>
            </form>

            <hr />
            <h3>Our Social Sites</h3>
            <ul className="list-inline banner-social-buttons">
              <li><a href="#" className="btn btn-default btn-lg"><i className="fa fa-twitter"> <span className="network-name">Twitter</span></i></a></li>
              <li><a href="#" className="btn btn-default btn-lg"><i className="fa fa-facebook"> <span className="network-name">Facebook</span></i></a></li>
              <li><a href="#" className="btn btn-default btn-lg"><i className="fa fa-youtube-play"> <span className="network-name">Youtube</span></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    flash: state.flash
  }
}

export default connect(mapStateToProps)(Contact)
export { Contact };