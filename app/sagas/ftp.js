import { all, call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
const FTP = require('ftp');
import { connectedToServer, error, CONNECT_TO_SERVER, ConnectToServerAction } from '../actions';
import { loadSaga, bindFunctions } from './common';

/**
 * Defines a service that manages the FTP connection.
 */
export class FtpService {
  _ftp: FTP;
  connectAsync: (action: ConnectToServerAction) => Generator;
  onConnected: () => Generator;
  connectToServer: () => Generator;
  listenForErrors: () => Generator;
  onEvent: (name: string, single: boolean) => any;
  connectFtp: (options: { host: string, username: string, password: string}) => any;

  constructor() {
    this._ftp = new FTP();
    bindFunctions(this);
  }

  _onEvent(name: string, single: boolean = false) {
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

  _connectFtp(options) {
    return this._ftp.connect(options);
  }

  *_onConnected() {
    return this.onEvent('ready');
  }

  *_connectAsync(action: ConnectToServerAction) {
    const onConnectedChannel = yield call(this.onConnected);
    yield call(this.connectFtp, {
      host: action.server,
      username: action.username,
      password: action.password
    });
    yield take(onConnectedChannel);
    yield put(connectedToServer());
  }

  *_connectToServer() {
    yield takeLatest(CONNECT_TO_SERVER, this.connectAsync);
  }

  *_listenForErrors() {
    const errorChannel = yield call(this.onEvent, 'error');
    while(true) {
      const err = yield take(errorChannel);
      yield put(error(error));
    }
  }

  *saga() {
    yield all([
      this.connectToServer(),
      this.listenForErrors()
    ]);
  }
}

export default function *initFtp() {
  yield* loadSaga(new FtpService());
}
