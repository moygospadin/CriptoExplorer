import {
  FETCH_ALL_CRYPTO_COINS,
  LOAD_STATUS_ALL_CRYPTO_COINS,
  SET_ALL_CRYPTO_COINS,
} from './types';

export const fetchAllCryptoCoins = () => ({
  type: FETCH_ALL_CRYPTO_COINS,
});
export const setAllCryptoCoins = (data) => ({
  type: SET_ALL_CRYPTO_COINS,
  data,
});

export const loadStatusCryptoCoins = (status) => ({
  type: LOAD_STATUS_ALL_CRYPTO_COINS,
  status,
});
