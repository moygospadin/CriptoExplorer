import {all} from 'redux-saga/effects';
import {NewCryptoCoinsWatcher} from './allCryptoCoins/allCryptoCoins';
import {allCryptoWatcher} from './allCryptoSaga/allCryptoSaga';
import {NewCryptoWatcher} from './allCryptoSaga/newCryptoSaga';

export function* rootWatcher() {
  yield all([allCryptoWatcher(), NewCryptoWatcher(), NewCryptoCoinsWatcher()]);
}
