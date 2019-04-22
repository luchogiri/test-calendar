
import { combineReducers, createStore, applyMiddleware } from 'redux';

import Logger from '../helpers/logger';
import * as reducers from '../reducers';


export const Store = () => {

  return createStore(
    combineReducers(reducers),
    applyMiddleware(Logger())
  );
};

export default Store;