import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/javascript/actions/flash'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('showFlashMessage', () => {
  it(`should show the flash message`, () => {
    const store = mockStore({ });
    expect(store.dispatch(actions.showFlashMessage('this is a test', 'success'))).toEqual({
      type: 'DISPLAY_FLASH_MESSAGE',
      messageType: 'success',
      message: 'this is a test'
    })

  });
});
