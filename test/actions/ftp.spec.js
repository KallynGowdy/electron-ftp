import { spy } from 'sinon';
import * as actions from '../../app/actions';

describe('ftp', () => {
  describe('actions', () => {
    it('connectToServer should create CONNECT_TO_SERVER action', () => {
      const result = actions.connectToServer('a', 'b', 'c');
      expect(result).toEqual({
        type: 'CONNECT_TO_SERVER',
        server: 'a',
        username: 'b',
        password: 'c'
      });
    });
  });
});
