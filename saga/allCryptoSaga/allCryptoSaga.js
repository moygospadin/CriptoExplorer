import {put, takeEvery, call, select, takeLatest} from 'redux-saga/effects';
import {FETCH_ALL_CRYPTO_DATA} from '../../store/allCryptoReducer/types';
import {
  setAllCryptoData,
  loadStatusCryptoData,
  changeParams,
} from '../../store/allCryptoReducer/actions';
import _ from 'lodash';
import {fetchCryptoFromApi} from '../../utils/fetchCryptoFromApi';
function* fetchAllCryptoWorker() {
  yield put(loadStatusCryptoData(true));
  const params = yield select((state) => state.allCryptoReducer.params);

  params['page'] = 1;
  yield put(changeParams(params));

  const data = yield call(() => fetchCryptoFromApi(params));

  yield put(setAllCryptoData(data));

  yield put(loadStatusCryptoData(false));
}

export function* allCryptoWatcher() {
  yield takeEvery(FETCH_ALL_CRYPTO_DATA, fetchAllCryptoWorker);
}
