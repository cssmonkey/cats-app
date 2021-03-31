import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

const configureStore = () => {
  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
