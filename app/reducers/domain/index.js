// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import ftp from './ftp';

const rootReducer = combineReducers({
  ftp,
});

export default rootReducer;
