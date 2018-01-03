import { spy, stub } from 'sinon';
import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import { connectToServer, error, connectedToServer, CONNECT_TO_SERVER, ERROR } from '../../app/actions';
import { FtpService } from '../../app/sagas/ftp';

describe('Sagas', () => {
  describe('FtpService', () => {
    let subject: FtpService;

    beforeEach(() => {
      subject = new FtpService();
      subject._ftp = stub(subject._ftp);
    });

    describe('connectAsync', () => {
      it('should attempt to connect to the given server using the host, username, and password', () => {
        const gen = subject.connectAsync(connectToServer('server', 'username', 'password'));
        const chan = stub();

        expect(gen.next().value)
          .toEqual(call(subject.onConnected));

        // Make sure connect call gets emitted.
        expect(gen.next(chan).value)
          .toEqual(call(subject.connectFtp, {
            host: 'server',
            username: 'username',
            password: 'password'
          }));;

        // Wait for connected result
        expect(gen.next().value)
          .toEqual(take(chan));

        // Emit that we've connected to the server
        expect(gen.next().value)
          .toEqual(put(connectedToServer()));
      });
    });

    describe('connectToServer', () => {
      it('should call connectAsync with the given channel when a new CONNECT_TO_SERVER action comes along', () => {
        const gen = subject.connectToServer();

        // Wait for CONNECT_TO_SERVER action
        expect(gen.next().value)
          .toEqual(takeLatest(CONNECT_TO_SERVER, subject.connectAsync));
      });
    });

    describe('listenForErrors', () => {
      it('should listen for the "error" event', () => {
        const gen = subject.listenForErrors();

        expect(gen.next().value)
          .toEqual(call(subject.onEvent, 'error'));
      });

      it('should unwrap errors', () => {
        const gen = subject.listenForErrors();
        const chan = stub();

        gen.next();

        expect(gen.next(chan).value)
          .toEqual(take(chan));

        expect(gen.next({
          error: {
            code: 'abcdefg'
          }
        })).toEqual(error({
          code: 'abcdefg'
        }));
      });
    });
  });
});
