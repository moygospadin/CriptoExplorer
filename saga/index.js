import {all} from 'redux-saga/effects';
import {allCryptoWatcher} from './allCryptoSaga/allCryptoSaga';
import {NewCryptoWatcher} from './allCryptoSaga/newCryptoSaga';

export function* rootWatcher() {
  yield all([allCryptoWatcher(), NewCryptoWatcher()]);
}
