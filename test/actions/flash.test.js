import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../app/javascript/admin/actions/library'
import MockAdapter from 'axios-mock-adapter';
import axios from '../../../app/javascript/shared/axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('loadLibraries', () => {
  it(`should load libraries action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(200, [{id: 1, name: 'library', price: 100, description: 'test'}])
    const store = mockStore({ libraries: [] });
    return store.dispatch(actions.loadLibraries(1)).then(() => {
      expect(store.getActions()[0].key).toEqual('LOAD_LIBRARY_PAGE_LIST')
    })
  });
  it(`should fail to load libraries action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ libraries: [] });
    return store.dispatch(actions.loadLibraries(1)).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
    })
  });
});

describe('loadLibrary', () => {
  it(`should load library action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(200, {id: 1, name: 'library', price: 100, description: 'test'})
    const store = mockStore({ library: {} });
    return store.dispatch(actions.loadLibrary(1)).then(() => {
      expect(store.getActions()[0].key).toEqual('LOAD_LIBRARY')
    })
  });
  it(`should fail to load library action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ libraries: [] });
    return store.dispatch(actions.loadLibrary(1)).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
    })
  });
});

describe('createLibrary', () => {
  it(`should create library action`, () => {
    let params = {
      library: {name: 'library', price: 100, description: 'test'}
    }
    var mock = new MockAdapter(axios);
    mock.onPost().reply(200, {id: 1, name: 'library', price: 100, description: 'test'})
    const store = mockStore({ library: {} });
    return store.dispatch(actions.createLibrary(params)).then(() => {
      expect(store.getActions()[0].type).toEqual('CREATE_LIBRARY')
    })
  });
  it(`should fail to create library action`, () => {
    let params = {
      library: {name: 'library', price: 100, description: 'test'}
    }
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ libraries: [] });
    return store.dispatch(actions.createLibrary(params)).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
    })
  });
});

describe('updateLibrary', () => {
  it(`should update library action`, () => {
    let params = {
      id: 1,
      library: {id: 1, name: 'library', price: 100, description: 'test'}
    }
    var mock = new MockAdapter(axios);
    mock.onPut().reply(200, {id: 1, name: 'library', price: 100, description: 'test'})
    const store = mockStore({ library: {} });
    return store.dispatch(actions.updateLibrary(1, params)).then(() => {
      expect(store.getActions()[0].type).toEqual('UPDATE_LIBRARY')
      expect(store.getActions()[1].type).toEqual('DISPLAY_FLASH_MESSAGE')
    })
  });
  it(`should fail to update library action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ libraries: [] });
    return store.dispatch(actions.updateLibrary(1)).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
    })
  });
});

describe('destroyLibrary', () => {
  it(`should destroy library action`, () => {
    var mock = new MockAdapter(axios);
    mock.onDelete().reply(200)
    const store = mockStore({ library: {} });
    return store.dispatch(actions.destroyLibrary(1)).then(() => {
      expect(store.getActions()[0].type).toEqual('DESTROY_LIBRARY')
    })
  });
  it(`should fail to delete library action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ libraries: [] });
    return store.dispatch(actions.destroyLibrary(1)).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
    })
  });
});
