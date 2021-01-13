import {applyMiddleware, combineReducers, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga';

import {rootWatcher} from '../saga';
import allCryptoReducer from './allCryptoReducer/allCryptoReducer';
import coinReducer from './coinReducer/cryptoReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  allCryptoReducer,
  coinReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
