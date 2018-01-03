// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { counterStateType } from '../reducers/counter';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const saga = createSagaMiddleware();
const enhancer = applyMiddleware(thunk, router, saga);

function configureStore(initialState?: counterStateType) {
  const store = createStore(rootReducer, initialState, enhancer);
  saga.run(rootSaga);
}

export default { configureStore, history };
