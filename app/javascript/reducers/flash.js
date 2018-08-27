var flashMessageReducer = function (state = {}, action) {
  switch (action.type) {
    case 'DISPLAY_FLASH_MESSAGE':
      return {messageType: action.messageType, message: action.message};
    case 'CLEAR_FLASH_MESSAGE':
      return {messageType: '', message: ''};
    default:
      return state;
  }
}

export default flashMessageReducer;