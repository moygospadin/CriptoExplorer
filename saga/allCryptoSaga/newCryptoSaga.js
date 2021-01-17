import {put, takeEvery, call, select, takeLatest} from 'redux-saga/effects';
import {FETCH_NEW_CRYPTO_DATA} from '../../store/allCryptoReducer/types';
import {
  setAllCryptoData,
  loadStatusCryptoData,
  changeParams,
} from '../../store/allCryptoReducer/actions';
import _ from 'lodash';
import {fetchCryptoFromApi} from '../../utils/fetchCryptoFromApi';

function* fetchNewCryptoWorker() {
  yield put(loadStatusCryptoData(true));
  const store = yield select((state) => state.allCryptoReducer);

  const {allCryptoData, params} = store;
  if (!_.isEmpty(allCryptoData)) {
    const page = params.page + 1;
    params['page'] = page;
    yield put(changeParams(params));
  }

  const resData = yield call(() => fetchCryptoFromApi(params));

  const data = allCryptoData.concat(resData);

  yield put(setAllCryptoData(data));

  yield put(loadStatusCryptoData(false));
}

export function* NewCryptoWatcher() {
  yield takeEvery(FETCH_NEW_CRYPTO_DATA, fetchNewCryptoWorker);
}
