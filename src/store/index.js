import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createLogger} from 'redux-logger'
import createSaga from 'redux-saga'
import rootSaga from './sagas'
import { requestsPromiseMiddleware } from 'redux-saga-requests'
import thunk from 'redux-thunk';
import reducer from './reducers/index'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = createLogger({diff: true, collapsed: true})
const saga = createSaga()

// const rootReducer = combineReducers({
//     contact: contactReducer,
//     modal: modalReducer,
//     search: serchReducer
// });

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk, requestsPromiseMiddleware(), saga, logger)
));

saga.run(rootSaga)

export default store