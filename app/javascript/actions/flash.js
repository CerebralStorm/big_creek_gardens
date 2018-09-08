import { constants } from '../constants'

export function showFlashMessage(message, type){
  return {
    type: constants.DISPLAY_FLASH_MESSAGE,
    message: message,
    messageType: type
  }
}
