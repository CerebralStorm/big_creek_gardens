import constants from '../constants'

var flashMessageReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.DISPLAY_FLASH_MESSAGE:
      return {messageType: action.messageType, message: action.message};
    case constants.CLEAR_FLASH_MESSAGE:
      return {messageType: '', message: ''};
    default:
      return state;
  }
}

export default flashMessageReducer;
export { flashMessageReducer };