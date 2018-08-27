import { constants } from './constants'

const logAndDispatchError = function(dispatch, error, message) {
  if(process.env.NODE_ENV == 'development'){
    console.error(error);
  }
  dispatch({
    type: constants.DISPLAY_FLASH_MESSAGE,
    messageType: 'error',
    message: message
  })
}

export{ logAndDispatchError };