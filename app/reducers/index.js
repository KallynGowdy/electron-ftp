// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import domain from './domain';

const rootReducer = combineReducers({
  domain,
  router,
  form
});

export default rootReducer;
