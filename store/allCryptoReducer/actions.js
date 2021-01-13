import {
  FETCH_ALL_CRYPTO_DATA,
  LOAD_STATUS_ALL_CRYPTO_DATA,
  SET_ALL_CRYPTO_DATA,
} from './types';

export const fetchAllCryptoData = (params) => ({
  type: FETCH_ALL_CRYPTO_DATA,
  params,
});

export const setAllCryptoData = (data) => ({
  type: SET_ALL_CRYPTO_DATA,
  data,
});

export const loadStatusCryptoData = (status) => ({
  type: LOAD_STATUS_ALL_CRYPTO_DATA,
  status,
});
