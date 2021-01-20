import {put, takeEvery, call} from 'redux-saga/effects';

import {
  setAllCryptoCoins,
  loadStatusCryptoCoins,
} from '../../store/allCryptoCoins/actions';
import _ from 'lodash';
import {fetchAllCryptoCoinsFromApi} from '../../utils/fetchAllCryptoCoinsFromApi';
import {FETCH_ALL_CRYPTO_COINS} from '../../store/allCryptoCoins/types';

function* fetchAllCryptoCoins() {
  yield put(loadStatusCryptoCoins(true));

  const data = yield call(() => fetchAllCryptoCoinsFromApi());

  yield put(setAllCryptoCoins(data));

  yield put(loadStatusCryptoCoins(false));
}

export function* NewCryptoCoinsWatcher() {
  yield takeEvery(FETCH_ALL_CRYPTO_COINS, fetchAllCryptoCoins);
}
