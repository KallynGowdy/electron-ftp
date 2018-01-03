import { all } from 'redux-saga/effects';
import FtpSaga from './ftp';

export default function* rootSaga() {
  yield all([
    FtpSaga()
  ]);
}
