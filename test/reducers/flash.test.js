import * as reducers from '../../app/javascript/reducers/flash'
import { constants } from '../../app/javascript/constants'

describe('flashMessageReducer', () => {
  it('should return the initial state', () => {
    expect(reducers.flashMessageReducer(undefined, {})).toEqual({});
  });

  it('should handle DISPLAY_FLASH_MESSAGE', () => {
    let message = {
      messageType: 'success',
      message: 'this is a test'
    }
    const action = {
      type: constants.DISPLAY_FLASH_MESSAGE,
      message: 'this is a test',
      messageType: 'success'
    }
    expect(reducers.flashMessageReducer({}, action)).toEqual(message);
  });

  it('should handle CLEAR_FLASH_MESSAGE', () => {
    let message = {
      messageType: '',
      message: ''
    }
    const action = {
      type: constants.CLEAR_FLASH_MESSAGE
    }
    expect(reducers.flashMessageReducer({}, action)).toEqual(message);
  });
});