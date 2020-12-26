import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import reducers from '../reducers';
import ecips from '../epics';

const ecipMiddleware = createEpicMiddleware(ecips);

export default preloadedState => {

  let middleware = applyMiddleware(ecipMiddleware);

  return createStore(reducers, preloadedState, middleware);
}