import React from 'react'
import { connect } from 'react-redux'
import { constants } from '../constants'

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(event) {
    this.props.dispatch({ type: constants.CLEAR_FLASH_MESSAGE })
  }

  render() {
    window.scrollTo(0,0);
    if(!this.props.flash.message) {
      return null;
    }
    return (
      <div onClick={this.handleClose} className="container">
        <div className={`alert alert-${this.props.flash.messageType}`} role="alert">
          {this.props.flash.message}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flash: state.flash
  }
}

export default connect(mapStateToProps)(FlashMessage)

export { FlashMessage };