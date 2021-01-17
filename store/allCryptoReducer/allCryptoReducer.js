import {
  CHANGE_PARAMS,
  LOAD_STATUS_ALL_CRYPTO_DATA,
  SET_ALL_CRYPTO_DATA,
} from './types';
const defaultState = {
  allCryptoData: [],
  isLoading: false,
  params: {
    page: 1,
    orderFields: [
      {
        true: 'id_asc',
        false: 'id_desc',
        name: 'sort by id',
        value: false,
        active: false,
      },
      {
        true: 'market_cap_desc',
        false: 'market_cap_asc',
        name: 'sort by market_cap',
        value: true,
        active: true,
      },
    ],
  },
};
export default function allCryptoReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_STATUS_ALL_CRYPTO_DATA:
      console.log('LOAD_STATUS_ALL_CRYPTO_DATA', action.status);
      return {...state, isLoading: action.status};
    case SET_ALL_CRYPTO_DATA:
      return {...state, allCryptoData: action.data};
    case CHANGE_PARAMS:
      console.log('CHANGE_PARAMS', action.params);
      return {...state, params: action.params};
  }
  return state;
}
