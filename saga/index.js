import {all} from 'redux-saga/effects';
import {allCryptoWatcher} from './allCryptoSaga/allCryptoSaga';

export function* rootWatcher() {
  yield all([allCryptoWatcher()]);
}
