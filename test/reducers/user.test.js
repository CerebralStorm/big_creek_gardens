import * as reducers from '../../app/javascript/reducers/user'
import { constants } from '../../app/javascript/constants'

describe('currentUserReducer', () => {
  it('should return the initial state', () => {
    ENV.current_user = undefined
    expect(reducers.currentUserReducer()).toEqual(undefined);
  });

  it('should return ENV.current_user', () => {
    ENV.current_user = {id: 1, name: 'test'}
    expect(reducers.currentUserReducer()).toEqual(ENV.current_user);
  });
});