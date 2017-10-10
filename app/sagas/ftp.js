import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
const FTP = require('node-ftp');
import { CONNECT_TO_SERVER } from '../actions/ftp';

export default class Ftp {
  private _ftp = new FTP();

  *connectAsync() {

  }

  *saga() {
    yield takeEvery(CONNECT_TO_SERVER, connectAsync);
  }
}
