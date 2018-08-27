import { flashConstants } from '../action_constants/flash'

export function showFlashMessage(message, type){
  return {
    type: flashConstants.DISPLAY_FLASH_MESSAGE,
    message: message,
    messageType: type
  }
}
