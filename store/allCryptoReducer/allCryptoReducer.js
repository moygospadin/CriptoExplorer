import {FETCH_ALL_CRYPTO_DATA, LOAD_STATUS_ALL_CRYPTO_DATA} from './types';
const defaultState = {
  allCryptoData: [],
  isLoading: false,
};
export default function allCryptoReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_STATUS_ALL_CRYPTO_DATA:
      return {...state, isLoading: action.status};
  }
  return state;
}
