import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducers";
import rootSaga from "./blog/saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;