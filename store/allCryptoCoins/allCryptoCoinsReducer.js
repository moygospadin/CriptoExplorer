import {SET_ALL_CRYPTO_COINS, LOAD_STATUS_ALL_CRYPTO_COINS} from './types';
const defaultState = {
  isLoading: false,

  allCryptoCoins: [],
};
export default function allCryptoCoinsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ALL_CRYPTO_COINS:
      return {...state, allCryptoCoins: action.data};
    case LOAD_STATUS_ALL_CRYPTO_COINS:
      return {...state, isLoading: action.status};
  }
  return state;
}
