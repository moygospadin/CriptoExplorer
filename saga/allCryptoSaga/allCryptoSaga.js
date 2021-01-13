import {put, takeEvery, call} from 'redux-saga/effects';
import {FETCH_ALL_CRYPTO_DATA} from '../../store/allCryptoReducer/types';
import {
  setAllCryptoData,
  loadStatusCryptoData,
} from '../../store/allCryptoReducer/actions';
const fetchAllCryptoFromApi = async ({params}) => {
  console.log('params', params);
  try {
    const responce = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=0&sparkline=false',
    );
    if (!responce.ok) {
      throw await responce.json();
    }

    const resData = await responce.json();
    console.log('resData', resData);
  } catch (error) {
    console.log('err', err);
  }
};
function* fetchAllCryptoWorker(props) {
  yield put(loadStatusCryptoData(true));
  const data = yield call(() => fetchAllCryptoFromApi(props));

  yield put(setAllCryptoData(data));
  yield put(loadStatusCryptoData(false));
}

export function* allCryptoWatcher() {
  yield takeEvery(FETCH_ALL_CRYPTO_DATA, fetchAllCryptoWorker);
}
