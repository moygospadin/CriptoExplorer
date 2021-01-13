import {FETCH_COIN_DATA} from './types';
const defaultState = {
  coinData: [],
};
export default function coinReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return {...state, coinData: action.data};
  }
  return state;
}
