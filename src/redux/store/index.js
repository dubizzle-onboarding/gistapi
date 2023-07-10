import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers";
import rootSaga from "../sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the rootReducer and applyMiddleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the rootSaga
sagaMiddleware.run(rootSaga);

export default store;
