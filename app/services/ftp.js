import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
const FTP = require('ftp');
import { connectedToServer, CONNECT_TO_SERVER, ConnectToServerAction } from '../actions/ftp';

/**
 * Defines a service that manages the FTP connection.
 */
export default class Ftp {
  _ftp: FTP;

  constructor() {
    this._ftp = new FTP();
  }

  onEvent(name: string, single: boolean = false) {
    return eventChannel(emitter => {
      function listener(err, args) {
        if (err) {
          emitter({ error: err });
          emitter(END);
        }
        emitter({ args: args });
        if (single) {
          emitter(END);
        }
      };

      this._ftp.on(name, listener);

      return () => {
        this._ftp.removeListener(name, listener);
      };
    });
  }

  *onConnected() {
    return this.onEvent('ready');
  }

  *connectAsync(onConnected: any, action: ConnectToServerAction) {
    yield call(this._ftp.connect, {
      host: action.server,
      username: action.username,
      password: action.password
    });
    yield take(onConnected);
    yield put(connectedToServer());
  }

  *connectToServer(connectedChannel: any) {
    while (true) {
      const action = yield take(CONNECT_TO_SERVER);
      yield call(this.connectAsync, connectedChannel, action);
    }
  }

  *saga() {
    const connectedChannel = yield this.onConnected();
    yield connectToServer(connectedChannel);
  }
}
