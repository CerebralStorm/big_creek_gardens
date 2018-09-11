import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../app/javascript/admin/actions/library_course'
import MockAdapter from 'axios-mock-adapter';
import axios from '../../../app/javascript/shared/axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('createLibraryCourse', () => {
  it(`should createLibraryCourse`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost().reply(200, {id: 1, library_id: 1, course_id: 1} )
    const store = mockStore({ });
    return store.dispatch(actions.createLibraryCourse({library_course: {library_id: 1, course_id: 1}})).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('Your course has been successfully added.')
    })
  });
  it(`should fail createLibraryCourse`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost().reply(500)
    const store = mockStore({ });
    return store.dispatch(actions.createLibraryCourse({library_course: {library_id: 1, course_id: 1}})).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('An error occurred while attempting to load courses.')
    })
  });
});

describe('destroyLibraryCourse', () => {
  it(`should destroyLibraryCourse`, () => {
    var mock = new MockAdapter(axios);
    mock.onDelete().reply(200)
    const store = mockStore({ });
    return store.dispatch(actions.destroyLibraryCourse({library_id: 1, course_id: 1})).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('Course successfully removed.')
    })
  });
  it(`should fail createLibraryCourse`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost().reply(500)
    const store = mockStore({ });
    return store.dispatch(actions.destroyLibraryCourse({library_id: 1, course_id: 1})).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('An error occurred while attempting to load courses.')
    })
  });
});
