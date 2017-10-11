import { spy, stub } from 'sinon';
import { call, put, take } from 'redux-saga/effects';
import { connectToServer, connectedToServer, CONNECT_TO_SERVER } from '../../app/actions/ftp';
import Ftp from '../../app/services/ftp';

describe('Sagas', () => {
  describe('FTP', () => {
    let subject: Ftp;
    let connectedChannel = stub();

    beforeEach(() => {
      subject = new Ftp();
      subject._ftp = stub(subject._ftp);
    });

    describe('connectAsync', () => {
      it('should attempt to connect to the given server using the host, username, and password', () => {
        const gen = subject.connectAsync(connectedChannel, connectToServer('server', 'username', 'password'));

        // Make sure connect call gets emitted.
        expect(gen.next().value)
          .toEqual(call(subject._ftp.connect, {
            host: 'server',
            username: 'username',
            password: 'password'
          }));;

        // Wait for connected result
        expect(gen.next().value)
          .toEqual(take(connectedChannel));

        // Emit that we've connected to the server
        expect(gen.next().value)
          .toEqual(put(connectedToServer()));
      });
    });

    describe('connectToServer', () => {
      it('should call connectAsync with the given channel when a new CONNECT_TO_SERVER action comes along', () => {
        const gen = subject.connectToServer(connectedChannel);

        // Wait for CONNECT_TO_SERVER action
        expect(gen.next().value)
          .toEqual(take(CONNECT_TO_SERVER));

        let action = connectToServer('server', 'username', 'password');

        // Make sure the given action is passed along with the channel
        expect(gen.next(action).value)
          .toEqual(call(subject.connectAsync, connectedChannel, action));
      });
    });
  });
});
