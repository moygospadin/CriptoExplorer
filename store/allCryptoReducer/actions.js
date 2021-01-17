import {
  CHANGE_PARAMS,
  FETCH_ALL_CRYPTO_DATA,
  LOAD_STATUS_ALL_CRYPTO_DATA,
  SET_ALL_CRYPTO_DATA,
  FETCH_NEW_CRYPTO_DATA,
} from './types';

export const fetchAllCryptoData = () => ({
  type: FETCH_ALL_CRYPTO_DATA,
});
export const fetchNewCryptoData = () => ({
  type: FETCH_NEW_CRYPTO_DATA,
});
export const setAllCryptoData = (data) => ({
  type: SET_ALL_CRYPTO_DATA,
  data,
});

export const loadStatusCryptoData = (status) => ({
  type: LOAD_STATUS_ALL_CRYPTO_DATA,
  status,
});
export const changeParams = (params) => ({
  type: CHANGE_PARAMS,
  params,
});
