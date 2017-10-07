// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import home from './home';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
