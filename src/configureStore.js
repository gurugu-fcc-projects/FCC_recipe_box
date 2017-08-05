import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';

export const configureStore = () => {
  const persistedState = loadState();
  const middlewares = [];

  if (process.env.MODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );

  store.subscribe(throttle(() => {
    saveState({
      recipes: store.getState().recipes
    });
  }, 1000));

  return store;
};
