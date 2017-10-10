import { connectAsync } from '../../app/sagas/ftp';

describe('Sagas', () => {
  describe('FTP', () => {
    let subject;

    beforeEach(() => {
      subject = new Ftp();
    });

    it('should be uninitialized by default', () => {
      expect(subject.initialized).toBe(false);
    });

    it('should initialize with the given server, username, and password', () => {

      subject.initialize('server', 'username', 'password');

      expect(subject.initialized).toBe(true);
    });
  });
});
